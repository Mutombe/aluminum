from django.db import models


class QuoteRequest(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    company = models.CharField(max_length=200, blank=True, default='')
    service = models.CharField(max_length=100)
    project_details = models.TextField(blank=True, default='')
    selected_finish = models.CharField(max_length=200, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Quote – {self.name} ({self.service}) – {self.created_at:%Y-%m-%d %H:%M}"


class QuoteFile(models.Model):
    quote = models.ForeignKey(QuoteRequest, on_delete=models.CASCADE, related_name='files')
    file = models.FileField(upload_to='quotes/%Y/%m/')
    original_name = models.CharField(max_length=255)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.original_name


class ConsultationBooking(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    company = models.CharField(max_length=200, blank=True, default='')
    consultation_type = models.CharField(max_length=100)
    preferred_date = models.DateField()
    preferred_time = models.CharField(max_length=10)
    notes = models.TextField(blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Consultation – {self.name} ({self.consultation_type}) – {self.preferred_date}"
