import logging
from django.conf import settings
from django.core.mail import EmailMultiAlternatives

from .models import QuoteRequest, ConsultationBooking

logger = logging.getLogger(__name__)

FALLBACK_EMAIL = 'estimations@hotali.co.zw'

SERVICE_LABELS = {
    'fenestration': 'Fenestration (Windows & Doors)',
    'shopfitting': 'Shopfitting & Joinery',
    'curtain-walling': 'Curtain Walling',
    'partitioning': 'Partitioning & Ceilings',
    'residential': 'Residential Projects',
    'commercial': 'Commercial Projects',
    'other': 'Other / General Enquiry',
}

CONSULT_LABELS = {
    'site-visit': 'Site Visit & Assessment',
    'showroom': 'Showroom Consultation',
    'virtual': 'Virtual Meeting',
    'project-planning': 'Project Planning Session',
}

BRAND_HEADER = """
<div style="background:#1a1a1a;padding:24px 32px;text-align:center;">
  <h1 style="margin:0;color:#D4AF37;font-family:Georgia,serif;font-size:24px;">
    Architectural Aluminium
  </h1>
  <p style="margin:4px 0 0;color:#999;font-size:13px;">Since 1994 &bull; Harare, Zimbabwe</p>
</div>
"""

BRAND_FOOTER = """
<div style="background:#f5f5f5;padding:20px 32px;text-align:center;font-size:12px;color:#888;">
  <p style="margin:0;">Architectural Aluminium &bull; 25 Connaught Rd, Avondale, Harare</p>
  <p style="margin:4px 0 0;">+263 778 498 911 &bull; sales@hotali.co.zw</p>
</div>
"""


def _row(label, value):
    if not value:
        return ''
    return f"""
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#555;white-space:nowrap;vertical-align:top;">{label}</td>
      <td style="padding:8px 12px;color:#222;">{value}</td>
    </tr>"""


def _send_email(subject, body_text, html, from_email, to_list, reply_to=None, attachments=None):
    """Helper to send an email, catching and logging errors."""
    msg = EmailMultiAlternatives(
        subject=subject,
        body=body_text,
        from_email=from_email,
        to=to_list,
        reply_to=reply_to or [],
    )
    msg.attach_alternative(html, 'text/html')
    if attachments:
        for name, content, mime in attachments:
            msg.attach(name, content, mime)
    try:
        msg.send()
        logger.info("Email sent: %s -> %s", subject, to_list)
    except Exception:
        logger.exception("Failed to send email: %s", subject)


def send_quote_emails(instance):
    """Send notification email to company + thank-you to customer. Called after files are saved."""
    from_email = settings.DEFAULT_FROM_EMAIL or FALLBACK_EMAIL
    to_email = settings.NOTIFICATION_EMAIL or FALLBACK_EMAIL
    service_display = SERVICE_LABELS.get(instance.service, instance.service)

    finish_html = ''
    if instance.selected_finish:
        finish_html = _row('Selected Finish', instance.selected_finish)

    files = instance.files.all()
    files_html = ''
    if files.exists():
        file_list = ''.join(f'<li style="margin:2px 0;">{f.original_name}</li>' for f in files)
        files_html = _row('Attached Files', f'<ul style="margin:0;padding-left:18px;">{file_list}</ul>')

    # --- Notification email to company ---
    notification_html = f"""
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
      {BRAND_HEADER}
      <div style="padding:28px 32px;">
        <h2 style="margin:0 0 4px;color:#1a1a1a;font-size:20px;">New Quote Request</h2>
        <p style="margin:0 0 20px;color:#888;font-size:13px;">Received via website contact form</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          {_row('Name', instance.name)}
          {_row('Email', f'<a href="mailto:{instance.email}">{instance.email}</a>')}
          {_row('Phone', instance.phone)}
          {_row('Company', instance.company)}
          {_row('Service', service_display)}
          {finish_html}
          {_row('Project Details', instance.project_details.replace(chr(10), '<br>'))}
          {files_html}
        </table>
      </div>
      {BRAND_FOOTER}
    </div>
    """

    attachments = []
    for f in files:
        try:
            f.file.open('rb')
            attachments.append((f.original_name, f.file.read(), None))
            f.file.close()
        except Exception:
            logger.exception("Failed to read attachment: %s", f.original_name)

    _send_email(
        subject=f"Quote Request – {instance.name} – {service_display}",
        body_text=f"New quote request from {instance.name} ({instance.email}). Service: {service_display}.",
        html=notification_html,
        from_email=from_email,
        to_list=[to_email],
        reply_to=[instance.email],
        attachments=attachments,
    )

    # --- Thank-you email to customer ---
    file_note = ''
    if files.exists():
        file_note = f'<p style="color:#555;font-size:14px;">We received your {files.count()} attached file(s) and our team will review them carefully.</p>'

    thankyou_html = f"""
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
      {BRAND_HEADER}
      <div style="padding:28px 32px;">
        <h2 style="margin:0 0 8px;color:#1a1a1a;font-size:20px;">Thank You, {instance.name}!</h2>
        <p style="color:#555;font-size:14px;line-height:1.6;">
          We have received your quote request for <strong>{service_display}</strong> and our estimations team
          is already on it. You can expect a detailed response within <strong>24–48 hours</strong>.
        </p>
        {file_note}
        <div style="margin:24px 0;padding:16px;background:#f9f9f9;border-radius:8px;border-left:4px solid #D4AF37;">
          <p style="margin:0;color:#555;font-size:13px;">
            <strong>What happens next?</strong><br>
            Our team will review your project details and prepare a comprehensive quote.
            If we need any clarification, we'll reach out to you directly.
          </p>
        </div>
        <p style="color:#555;font-size:14px;">
          In the meantime, feel free to call us at <strong>+263 778 498 911</strong> if you have any questions.
        </p>
      </div>
      {BRAND_FOOTER}
    </div>
    """

    _send_email(
        subject=f"We've received your quote request – Architectural Aluminium",
        body_text=f"Thank you {instance.name}, we have received your quote request for {service_display}. We will respond within 24-48 hours.",
        html=thankyou_html,
        from_email=from_email,
        to_list=[instance.email],
    )


def send_consultation_emails(instance):
    """Send notification email to company + thank-you to customer."""
    from_email = settings.DEFAULT_FROM_EMAIL or FALLBACK_EMAIL
    to_email = settings.NOTIFICATION_EMAIL or FALLBACK_EMAIL
    consult_display = CONSULT_LABELS.get(instance.consultation_type, instance.consultation_type)

    # --- Notification email to company ---
    notification_html = f"""
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
      {BRAND_HEADER}
      <div style="padding:28px 32px;">
        <h2 style="margin:0 0 4px;color:#1a1a1a;font-size:20px;">New Consultation Booking</h2>
        <p style="margin:0 0 20px;color:#888;font-size:13px;">Received via website contact form</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          {_row('Name', instance.name)}
          {_row('Email', f'<a href="mailto:{instance.email}">{instance.email}</a>')}
          {_row('Phone', instance.phone)}
          {_row('Company', instance.company)}
          {_row('Consultation Type', consult_display)}
          {_row('Preferred Date', str(instance.preferred_date))}
          {_row('Preferred Time', instance.preferred_time)}
          {_row('Notes', instance.notes.replace(chr(10), '<br>') if instance.notes else '')}
        </table>
      </div>
      {BRAND_FOOTER}
    </div>
    """

    _send_email(
        subject=f"Consultation Booking – {instance.name} – {consult_display}",
        body_text=f"New consultation booking from {instance.name} ({instance.email}). Type: {consult_display}. Date: {instance.preferred_date} {instance.preferred_time}.",
        html=notification_html,
        from_email=from_email,
        to_list=[to_email],
        reply_to=[instance.email],
    )

    # --- Thank-you email to customer ---
    thankyou_html = f"""
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e0e0e0;border-radius:8px;overflow:hidden;">
      {BRAND_HEADER}
      <div style="padding:28px 32px;">
        <h2 style="margin:0 0 8px;color:#1a1a1a;font-size:20px;">Thank You, {instance.name}!</h2>
        <p style="color:#555;font-size:14px;line-height:1.6;">
          Your <strong>{consult_display}</strong> consultation has been booked for
          <strong>{instance.preferred_date} at {instance.preferred_time}</strong>.
          Our team will confirm your appointment shortly.
        </p>
        <div style="margin:24px 0;padding:16px;background:#f9f9f9;border-radius:8px;border-left:4px solid #D4AF37;">
          <p style="margin:0;color:#555;font-size:13px;">
            <strong>What happens next?</strong><br>
            We will confirm your booking within 24 hours via email or phone.
            If the requested time is unavailable, we'll suggest the nearest alternative.
          </p>
        </div>
        <p style="color:#555;font-size:14px;">
          Need to reschedule? Call us at <strong>+263 778 498 911</strong> or reply to this email.
        </p>
      </div>
      {BRAND_FOOTER}
    </div>
    """

    _send_email(
        subject=f"Consultation booked – Architectural Aluminium",
        body_text=f"Thank you {instance.name}, your {consult_display} consultation for {instance.preferred_date} at {instance.preferred_time} has been booked. We will confirm within 24 hours.",
        html=thankyou_html,
        from_email=from_email,
        to_list=[instance.email],
    )
