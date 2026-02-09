import smtplib

from django.conf import settings
from rest_framework.generics import CreateAPIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import QuoteRequest, ConsultationBooking
from .serializers import QuoteRequestSerializer, ConsultationBookingSerializer


class QuoteRequestCreateView(CreateAPIView):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer


class ConsultationBookingCreateView(CreateAPIView):
    queryset = ConsultationBooking.objects.all()
    serializer_class = ConsultationBookingSerializer


@api_view(['GET'])
def smtp_health_check(request):
    """Test SMTP connectivity to Office 365 without sending an email."""
    host = settings.EMAIL_HOST
    port = settings.EMAIL_PORT
    user = settings.EMAIL_HOST_USER
    password = settings.EMAIL_HOST_PASSWORD

    result = {
        'host': host,
        'port': port,
        'user': user,
        'tls': settings.EMAIL_USE_TLS,
    }

    try:
        conn = smtplib.SMTP(host, port, timeout=10)
        conn.ehlo()
        if settings.EMAIL_USE_TLS:
            conn.starttls()
            conn.ehlo()
        conn.login(user, password)
        conn.quit()
        result['status'] = 'ok'
        result['message'] = 'SMTP login successful'
    except smtplib.SMTPAuthenticationError as e:
        result['status'] = 'auth_error'
        result['message'] = f'Authentication failed: {e.smtp_code} {e.smtp_error.decode()}'
    except smtplib.SMTPException as e:
        result['status'] = 'smtp_error'
        result['message'] = f'SMTP error: {e}'
    except OSError as e:
        result['status'] = 'connection_error'
        result['message'] = f'Cannot reach {host}:{port} — {e}'

    status_code = 200 if result['status'] == 'ok' else 502
    return Response(result, status=status_code)
