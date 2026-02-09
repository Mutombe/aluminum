from django.contrib import admin
from django.utils.html import format_html
from .models import QuoteRequest, QuoteFile, ConsultationBooking


class QuoteFileInline(admin.TabularInline):
    model = QuoteFile
    extra = 0
    readonly_fields = ('original_name', 'file_link', 'uploaded_at')
    fields = ('original_name', 'file_link', 'uploaded_at')

    def file_link(self, obj):
        if obj.file:
            return format_html('<a href="{}" target="_blank">Download</a>', obj.file.url)
        return '-'
    file_link.short_description = 'File'


@admin.register(QuoteRequest)
class QuoteRequestAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'service', 'company', 'file_count', 'created_at')
    list_filter = ('service', 'created_at')
    search_fields = ('name', 'email', 'company')
    readonly_fields = ('created_at',)
    inlines = [QuoteFileInline]

    def file_count(self, obj):
        count = obj.files.count()
        return f"{count} file{'s' if count != 1 else ''}"
    file_count.short_description = 'Files'


@admin.register(ConsultationBooking)
class ConsultationBookingAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'consultation_type', 'preferred_date', 'preferred_time', 'created_at')
    list_filter = ('consultation_type', 'preferred_date', 'created_at')
    search_fields = ('name', 'email', 'company')
    readonly_fields = ('created_at',)
