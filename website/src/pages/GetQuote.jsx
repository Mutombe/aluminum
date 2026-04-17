import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  PaperPlaneTilt,
  CheckCircle,
  SpinnerGap,
  UploadSimple,
  X,
  FileImage,
  File,
  Palette,
  Phone,
  Clock,
  ShieldCheck,
} from '@phosphor-icons/react';
import { toast } from 'sonner';
import { AnimatedSection } from '../components/AnimatedComponents';
import SEO from '../components/SEO';

const API_URL = import.meta.env.VITE_API_URL || 'https://aluminum-backend.onrender.com/api';

const services = [
  { value: '', label: 'Select a service' },
  { value: 'fenestration', label: 'Fenestration (Windows & Doors)' },
  { value: 'shopfitting', label: 'Shopfitting & Joinery' },
  { value: 'curtain-walling', label: 'Curtain Walling' },
  { value: 'partitioning', label: 'Partitioning & Ceilings' },
  { value: 'residential', label: 'Residential Projects' },
  { value: 'commercial', label: 'Commercial Projects' },
  { value: 'other', label: 'Other / General Enquiry' },
];

const allowedFileTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const maxFileSize = 10 * 1024 * 1024; // 10MB

const GetQuote = () => {
  const [searchParams] = useSearchParams();
  const selectedFinish = searchParams.get('finish');
  const selectedFinishType = searchParams.get('finishType');
  const selectedHex = searchParams.get('hex');

  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectDetails: '',
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (selectedFinish && selectedFinishType) {
      setQuoteFormData((prev) => ({
        ...prev,
        projectDetails: `Interested in: ${selectedFinish} (${selectedFinishType})\n\nPlease provide details about your project:`,
      }));
    }
  }, [selectedFinish, selectedFinishType]);

  const validateFile = (file) => {
    if (!allowedFileTypes.includes(file.type)) {
      toast.error(`Invalid file type: ${file.name}. Please upload PDF or image files.`);
      return false;
    }
    if (file.size > maxFileSize) {
      toast.error(`File too large: ${file.name}. Maximum size is 10MB.`);
      return false;
    }
    return true;
  };

  const handleFiles = useCallback(
    (files) => {
      const validFiles = Array.from(files).filter(validateFile);
      if (validFiles.length + uploadedFiles.length > 5) {
        toast.error('Maximum 5 files allowed');
        return;
      }
      setUploadedFiles((prev) => [...prev, ...validFiles]);
    },
    [uploadedFiles.length]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles]
  );

  const handleFileInputChange = (e) => {
    handleFiles(e.target.files);
    e.target.value = '';
  };

  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (file) => {
    if (file.type === 'application/pdf') {
      return <File className="w-5 h-5 text-red-400" />;
    }
    return <FileImage className="w-5 h-5 text-blue-400" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleChange = (e) => {
    setQuoteFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', quoteFormData.name);
      formData.append('email', quoteFormData.email);
      formData.append('phone', quoteFormData.phone);
      formData.append('company', quoteFormData.company);
      formData.append('service', quoteFormData.service);
      formData.append('project_details', quoteFormData.projectDetails);
      formData.append('selected_finish', selectedFinish ? `${selectedFinish} (${selectedFinishType})` : '');
      uploadedFiles.forEach((file) => {
        formData.append('uploaded_files', file);
      });

      const res = await fetch(`${API_URL}/quote/`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err ? JSON.stringify(err) : 'Server error');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Quote request sent! We'll review your drawings and get back to you within 24-48 hours.");

      setTimeout(() => {
        setQuoteFormData({ name: '', email: '', phone: '', company: '', service: '', projectDetails: '' });
        setUploadedFiles([]);
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Failed to send quote request. Please try again or contact us directly.');
    }
  };

  return (
    <>
      <SEO
        title="Get a Quote | Architectural Aluminium"
        description="Upload your drawings and receive a detailed quote within 24–48 hours from Zimbabwe's leading aluminium fabricator."
        keywords="aluminium quote Zimbabwe, request a quote, drawings upload"
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/more/IMG_8993.jpeg"
            alt="Aluminium curtain wall in reception"
            loading="eager"
            className="w-full h-full object-cover"
          />
          {/* Cinematic dark gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to top,
                rgba(0,0,0,0.75) 0%,
                rgba(0,0,0,0.45) 30%,
                rgba(0,0,0,0.20) 60%,
                rgba(0,0,0,0.10) 80%,
                rgba(0,0,0,0.30) 100%
              ),
              linear-gradient(
                to right,
                rgba(0,0,0,0.45) 0%,
                rgba(0,0,0,0.20) 45%,
                transparent 80%
              )`,
            }}
          />
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Get Started
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mt-4 mb-6 leading-[1.1] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
              Request a
              <span className="block gradient-text">Detailed Quote</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              Upload your drawings or plans and our team will come back to you with a detailed quote within 24 to 48 hours.
            </p>

            {/* Trust strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/85">
              <span className="inline-flex items-center gap-2 text-sm">
                <Clock className="w-5 h-5 text-arch-gold" />
                24–48 hour response
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <ShieldCheck className="w-5 h-5 text-arch-gold" />
                CIFOZ-certified
              </span>
              <span className="inline-flex items-center gap-2 text-sm">
                <FileText className="w-5 h-5 text-arch-gold" />
                PDF, JPG, PNG supported
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28 bg-arch-snow">
        <div className="w-full max-w-3xl mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-arch-silver/30 shadow-soft">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-arch-gold/10 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-arch-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-arch-charcoal">
                  Quick Quote Request
                </h2>
              </div>
              <p className="text-arch-steel mb-6">
                Upload your drawings or plans and receive a detailed quote within 24–48 hours.
              </p>

              {/* Selected Finish Indicator */}
              {selectedFinish && selectedFinishType && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-arch-gold/10 border border-arch-gold/30 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg shadow-md flex-shrink-0"
                      style={{ backgroundColor: selectedHex || '#D4AF37' }}
                    />
                    <div className="flex-1">
                      <p className="text-arch-gold text-xs font-mono uppercase tracking-wider">Selected Finish</p>
                      <p className="text-arch-charcoal font-medium">{selectedFinish}</p>
                      <p className="text-arch-steel text-sm">{selectedFinishType}</p>
                    </div>
                    <Palette className="w-5 h-5 text-arch-gold" />
                  </div>
                </motion.div>
              )}

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-arch-charcoal mb-2">
                    Quote Request Sent!
                  </h3>
                  <p className="text-arch-steel">
                    We'll review your drawings and get back to you within 24–48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* File Upload Area — first step */}
                  <div>
                    <label className="block text-arch-graphite text-sm mb-2">
                      Upload Drawings / Plans
                    </label>
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                        isDragging
                          ? 'border-arch-gold bg-arch-gold/10'
                          : 'border-arch-silver/50 hover:border-arch-gold/50 hover:bg-arch-gold/5'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
                        onChange={handleFileInputChange}
                        className="hidden"
                      />
                      <UploadSimple className={`w-10 h-10 mx-auto mb-3 ${isDragging ? 'text-arch-gold' : 'text-arch-steel'}`} />
                      <p className="text-arch-charcoal font-medium mb-1">
                        {isDragging ? 'Drop files here' : 'Drag & drop files here'}
                      </p>
                      <p className="text-arch-steel text-sm">or click to browse</p>
                      <p className="text-arch-steel text-xs mt-2">
                        PDF, JPG, PNG up to 10MB each (max 5 files)
                      </p>
                    </div>

                    <AnimatePresence>
                      {uploadedFiles.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-2"
                        >
                          {uploadedFiles.map((file, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              className="flex items-center gap-3 p-3 bg-arch-platinum rounded-lg border border-arch-silver/30"
                            >
                              {getFileIcon(file)}
                              <div className="flex-1 min-w-0">
                                <p className="text-arch-charcoal text-sm truncate">{file.name}</p>
                                <p className="text-arch-steel text-xs">{formatFileSize(file.size)}</p>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile(index);
                                }}
                                className="p-1 hover:bg-arch-platinum rounded-lg transition-colors"
                              >
                                <X className="w-4 h-4 text-arch-silver-dark hover:text-red-400" />
                              </button>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-name" className="block text-arch-graphite text-sm mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="quote-name"
                        name="name"
                        value={quoteFormData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-arch-graphite text-sm mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="quote-email"
                        name="email"
                        value={quoteFormData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-phone" className="block text-arch-graphite text-sm mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        name="phone"
                        value={quoteFormData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors"
                        placeholder="+263 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-company" className="block text-arch-graphite text-sm mb-2">
                        Company / Organisation
                      </label>
                      <input
                        type="text"
                        id="quote-company"
                        name="company"
                        value={quoteFormData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-service" className="block text-arch-graphite text-sm mb-2">
                      Service Required *
                    </label>
                    <select
                      id="quote-service"
                      name="service"
                      value={quoteFormData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal focus:outline-none focus:border-arch-gold/50 transition-colors appearance-none cursor-pointer"
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value} className="bg-arch-platinum">
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-details" className="block text-arch-graphite text-sm mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="quote-details"
                      name="projectDetails"
                      value={quoteFormData.projectDetails}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors resize-none"
                      placeholder="Tell us about your project, dimensions, materials, etc..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-xl hover:bg-arch-yellow transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                  >
                    {isSubmitting ? (
                      <>
                        <SpinnerGap className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <PaperPlaneTilt className="w-5 h-5 mr-2" />
                        Request Quote
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </AnimatedSection>

          {/* Prefer to talk callout */}
          <AnimatedSection delay={0.1}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl bg-white border border-arch-silver/30">
              <p className="text-arch-slate text-center sm:text-left">
                Prefer to talk first? Book a consultation or call our team.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-arch-silver text-arch-charcoal text-sm font-medium hover:border-arch-gold hover:text-arch-gold transition-colors"
                >
                  Book Consultation
                </Link>
                <a
                  href="tel:+263778498911"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-arch-charcoal text-white text-sm font-medium hover:bg-arch-black transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default GetQuote;
