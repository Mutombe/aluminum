from django.urls import path
from . import views

urlpatterns = [
    path('quote/', views.QuoteRequestCreateView.as_view(), name='quote-create'),
    path('consultation/', views.ConsultationBookingCreateView.as_view(), name='consultation-create'),
    path('health/smtp/', views.smtp_health_check, name='smtp-health'),
    path('setup-admin/', views.setup_admin, name='setup-admin'),
]
