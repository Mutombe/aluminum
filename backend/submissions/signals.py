import logging
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import EmailMultiAlternatives

from .models import QuoteRequest, ConsultationBooking

logger = logging.getLogger(__name__)

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


@receiver(post_save, sender=QuoteRequest)
def send_quote_email(sender, instance, created, **kwargs):
    if not created:
        return

    service_display = SERVICE_LABELS.get(instance.service, instance.service)
    finish_html = ''
    if instance.selected_finish:
        finish_html = _row('Selected Finish', instance.selected_finish)

    files = instance.files.all()
    files_html = ''
    if files.exists():
        file_list = ''.join(f'<li style="margin:2px 0;">{f.original_name}</li>' for f in files)
        files_html = _row('Attached Files', f'<ul style="margin:0;padding-left:18px;">{file_list}</ul>')

    html = f"""
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

    subject = f"Quote Request – {instance.name} – {service_display}"
    msg = EmailMultiAlternatives(
        subject=subject,
        body=f"New quote request from {instance.name} ({instance.email}). Service: {service_display}.",
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.NOTIFICATION_EMAIL],
        reply_to=[instance.email],
    )
    msg.attach_alternative(html, 'text/html')

    for f in files:
        f.file.open('rb')
        msg.attach(f.original_name, f.file.read(), None)
        f.file.close()

    try:
        msg.send()
        logger.info("Quote email sent for %s (id=%s)", instance.name, instance.pk)
    except Exception:
        logger.exception("Failed to send quote email for id=%s", instance.pk)


@receiver(post_save, sender=ConsultationBooking)
def send_consultation_email(sender, instance, created, **kwargs):
    if not created:
        return

    consult_display = CONSULT_LABELS.get(instance.consultation_type, instance.consultation_type)

    html = f"""
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

    subject = f"Consultation Booking – {instance.name} – {consult_display}"
    msg = EmailMultiAlternatives(
        subject=subject,
        body=f"New consultation booking from {instance.name} ({instance.email}). Type: {consult_display}. Date: {instance.preferred_date} {instance.preferred_time}.",
        from_email=settings.DEFAULT_FROM_EMAIL,
        to=[settings.NOTIFICATION_EMAIL],
        reply_to=[instance.email],
    )
    msg.attach_alternative(html, 'text/html')

    try:
        msg.send()
        logger.info("Consultation email sent for %s (id=%s)", instance.name, instance.pk)
    except Exception:
        logger.exception("Failed to send consultation email for id=%s", instance.pk)
