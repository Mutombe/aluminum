from rest_framework import serializers
from .models import QuoteRequest, QuoteFile, ConsultationBooking

ALLOWED_TYPES = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
]
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB
MAX_FILES = 5


class QuoteRequestSerializer(serializers.ModelSerializer):
    uploaded_files = serializers.ListField(
        child=serializers.FileField(),
        write_only=True,
        required=False,
        max_length=MAX_FILES,
    )

    class Meta:
        model = QuoteRequest
        fields = [
            'id', 'name', 'email', 'phone', 'company',
            'service', 'project_details', 'selected_finish',
            'uploaded_files',
        ]

    def validate_uploaded_files(self, files):
        for f in files:
            if f.content_type not in ALLOWED_TYPES:
                raise serializers.ValidationError(
                    f"File type not allowed: {f.name} ({f.content_type}). "
                    "Accepted: PDF, JPG, PNG, GIF, WebP."
                )
            if f.size > MAX_FILE_SIZE:
                raise serializers.ValidationError(
                    f"File too large: {f.name} ({f.size / 1024 / 1024:.1f} MB). Max 10 MB."
                )
        return files

    def create(self, validated_data):
        files = validated_data.pop('uploaded_files', [])
        quote = QuoteRequest.objects.create(**validated_data)
        for f in files:
            QuoteFile.objects.create(
                quote=quote,
                file=f,
                original_name=f.name,
            )
        return quote


class ConsultationBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultationBooking
        fields = [
            'id', 'name', 'email', 'phone', 'company',
            'consultation_type', 'preferred_date', 'preferred_time',
            'notes',
        ]
