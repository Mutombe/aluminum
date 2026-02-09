from rest_framework.generics import CreateAPIView
from .models import QuoteRequest, ConsultationBooking
from .serializers import QuoteRequestSerializer, ConsultationBookingSerializer


class QuoteRequestCreateView(CreateAPIView):
    queryset = QuoteRequest.objects.all()
    serializer_class = QuoteRequestSerializer


class ConsultationBookingCreateView(CreateAPIView):
    queryset = ConsultationBooking.objects.all()
    serializer_class = ConsultationBookingSerializer
