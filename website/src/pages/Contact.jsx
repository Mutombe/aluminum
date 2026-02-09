import React from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  MessageSquare,
  FileText,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Facebook,
  Linkedin,
  Instagram,
  Upload,
  X,
  Calendar,
  FileImage,
  File,
  Palette
} from 'lucide-react';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import SEO from '../components/SEO';

const Contact = () => {
  const [searchParams] = useSearchParams();

  // Get finish info from URL params (passed from Finishes component)
  const selectedFinish = searchParams.get('finish');
  const selectedFinishType = searchParams.get('finishType');
  const selectedHex = searchParams.get('hex');

  // Quote form state
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    projectDetails: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false);
  const [isQuoteSubmitted, setIsQuoteSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  // Pre-fill project details if a finish was selected
  useEffect(() => {
    if (selectedFinish && selectedFinishType) {
      setQuoteFormData(prev => ({
        ...prev,
        projectDetails: `Interested in: ${selectedFinish} (${selectedFinishType})\n\nPlease provide details about your project:`
      }));
    }
  }, [selectedFinish, selectedFinishType]);

  // Consult form state
  const [consultFormData, setConsultFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    notes: ''
  });
  const [isConsultSubmitting, setIsConsultSubmitting] = useState(false);
  const [isConsultSubmitted, setIsConsultSubmitted] = useState(false);

  const services = [
    { value: '', label: 'Select a service' },
    { value: 'fenestration', label: 'Fenestration (Windows & Doors)' },
    { value: 'shopfitting', label: 'Shopfitting & Joinery' },
    { value: 'curtain-walling', label: 'Curtain Walling' },
    { value: 'partitioning', label: 'Partitioning & Ceilings' },
    { value: 'residential', label: 'Residential Projects' },
    { value: 'commercial', label: 'Commercial Projects' },
    { value: 'other', label: 'Other / General Enquiry' }
  ];

  const consultationTypes = [
    { value: '', label: 'Select consultation type' },
    { value: 'site-visit', label: 'Site Visit & Assessment' },
    { value: 'showroom', label: 'Showroom Consultation' },
    { value: 'virtual', label: 'Virtual Meeting' },
    { value: 'project-planning', label: 'Project Planning Session' }
  ];

  const timeSlots = [
    { value: '', label: 'Select preferred time' },
    { value: '08:00', label: '8:00 AM' },
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon - Fri, 8am to 5pm',
      primary: '+263 778 498 911',
      secondary: '0242 334571',
      action: 'tel:+263778498911'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'We reply within 24 hours',
      primary: 'sales@hotali.co.zw',
      secondary: 'info@hotali.co.zw',
      action: 'mailto:sales@hotali.co.zw'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our showroom & factory',
      primary: '25 Connaught Road',
      secondary: 'Avondale, Harare',
      action: 'https://maps.google.com/?q=25+Connaught+Road,+Avondale,+Harare'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday to Friday',
      primary: '8:00 AM - 5:00 PM',
      secondary: 'Saturday: 8:00 AM - 12:00 PM',
      action: null
    }
  ];

  const quickLinks = [
    {
      icon: FileText,
      title: 'Request a Quote',
      description: 'Get a detailed estimate for your project',
      link: '#quote-form'
    },
    {
      icon: Building2,
      title: 'View Our Projects',
      description: 'See examples of our work',
      link: '/projects'
    },
    {
      icon: Wrench,
      title: 'Our Services',
      description: 'Learn about what we offer',
      link: '/services'
    },
    {
      icon: MessageSquare,
      title: 'FAQs',
      description: 'Find answers to common questions',
      link: '/about#faq'
    }
  ];

  // File upload handlers
  const allowedFileTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  const maxFileSize = 10 * 1024 * 1024; // 10MB

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

  const handleFiles = useCallback((files) => {
    const validFiles = Array.from(files).filter(validateFile);
    if (validFiles.length + uploadedFiles.length > 5) {
      toast.error('Maximum 5 files allowed');
      return;
    }
    setUploadedFiles(prev => [...prev, ...validFiles]);
  }, [uploadedFiles.length]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const handleFileInputChange = (e) => {
    handleFiles(e.target.files);
    e.target.value = '';
  };

  const removeFile = (index) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
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

  // Quote form submit via EmailJS
  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setIsQuoteSubmitting(true);

    try {
      const templateParams = {
        from_name: quoteFormData.name,
        from_email: quoteFormData.email,
        phone: quoteFormData.phone,
        company: quoteFormData.company,
        service: quoteFormData.service,
        project_details: quoteFormData.projectDetails,
        file_count: uploadedFiles.length > 0 ? `${uploadedFiles.length} file(s) attached (names: ${uploadedFiles.map(f => f.name).join(', ')})` : 'No files attached',
        selected_finish: selectedFinish ? `${selectedFinish} (${selectedFinishType})` : 'None',
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsQuoteSubmitting(false);
      setIsQuoteSubmitted(true);
      toast.success('Quote request sent successfully! We\'ll review your drawings and get back to you within 24-48 hours.');

      setTimeout(() => {
        setQuoteFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          projectDetails: ''
        });
        setUploadedFiles([]);
        setIsQuoteSubmitted(false);
      }, 3000);
    } catch (error) {
      setIsQuoteSubmitting(false);
      toast.error('Failed to send quote request. Please try again or contact us directly.');
    }
  };

  // Consult form submit via EmailJS
  const handleConsultSubmit = async (e) => {
    e.preventDefault();
    setIsConsultSubmitting(true);

    try {
      const templateParams = {
        from_name: consultFormData.name,
        from_email: consultFormData.email,
        phone: consultFormData.phone,
        company: consultFormData.company,
        preferred_date: consultFormData.preferredDate,
        preferred_time: consultFormData.preferredTime,
        consultation_type: consultFormData.consultationType,
        notes: consultFormData.notes,
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONSULT_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsConsultSubmitting(false);
      setIsConsultSubmitted(true);
      toast.success('Consultation booked! We\'ll confirm your appointment via email shortly.');

      setTimeout(() => {
        setConsultFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          preferredDate: '',
          preferredTime: '',
          consultationType: '',
          notes: ''
        });
        setIsConsultSubmitted(false);
      }, 3000);
    } catch (error) {
      setIsConsultSubmitting(false);
      toast.error('Failed to book consultation. Please try again or contact us directly.');
    }
  };

  const handleQuoteChange = (e) => {
    setQuoteFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleConsultChange = (e) => {
    setConsultFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEO 
        title="Contact Us | Architectural Aluminium"
        description="Get in touch with Zimbabwe's leading aluminium fabrication company. Request a quote, visit our showroom, or speak with our expert team."
        keywords="contact architectural aluminium, aluminium quotes Zimbabwe, Harare aluminium supplier"
      />

      {/* Hero Section - Map Background */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Map-style background */}
        <div className="absolute inset-0 bg-arch-platinum">
          {/* Vision: Aerial view of Harare or abstract map pattern */}
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80"
              alt="Map background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-arch-snow via-arch-platinum/80 to-arch-snow" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-32 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-arch-black/10 border border-arch-black/20 rounded-full text-arch-charcoal text-sm font-mono mb-8">
              Get In Touch
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-arch-black mb-6">
              Let's Build
              <span className="gradient-text"> Together</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-arch-steel max-w-2xl mx-auto">
              Whether you need a quote, have a question, or want to discuss
              your project, our team is ready to help.
            </p>
          </AnimatedSection>
        </div>

        {/* Animated pin marker */}
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="relative">
            <div className="w-12 h-12 bg-arch-black rounded-full flex items-center justify-center shadow-lg shadow-arch-black/20">
              <MapPin className="w-6 h-6 text-arch-gold" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-arch-black transform rotate-45 -z-10" />
          </div>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white border-b border-arch-silver/20">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {contactMethods.map((method, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 bg-arch-platinum rounded-2xl border border-arch-silver/30 hover:border-arch-gold/50 hover:shadow-medium transition-all h-full"
                  whileHover={{ y: -4 }}
                >
                  {method.action ? (
                    <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                      <div className="w-12 h-12 bg-arch-gold/10 rounded-xl flex items-center justify-center mb-4">
                        <method.icon className="w-6 h-6 text-arch-gold" />
                      </div>
                      <h3 className="text-arch-charcoal font-semibold text-lg mb-1">{method.title}</h3>
                      <p className="text-arch-steel text-sm mb-3">{method.description}</p>
                      <p className="text-arch-charcoal font-medium">{method.primary}</p>
                      <p className="text-arch-steel text-sm">{method.secondary}</p>
                    </a>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-arch-gold/10 rounded-xl flex items-center justify-center mb-4">
                        <method.icon className="w-6 h-6 text-arch-gold" />
                      </div>
                      <h3 className="text-arch-charcoal font-semibold text-lg mb-1">{method.title}</h3>
                      <p className="text-arch-steel text-sm mb-3">{method.description}</p>
                      <p className="text-arch-charcoal font-medium">{method.primary}</p>
                      <p className="text-arch-steel text-sm">{method.secondary}</p>
                    </>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Contact Section - Two Forms Side by Side */}
      <section id="quote-form" className="py-24 md:py-32 bg-arch-snow">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          {/* Section Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider">GET STARTED</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-arch-black mt-4 mb-6">
              How Can We
              <span className="gradient-text"> Help You?</span>
            </h2>
            <p className="text-arch-steel text-lg max-w-2xl mx-auto">
              Upload your drawings for a quick quote, or book a consultation with our experts
              to discuss your project in detail.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quick Quote Form with File Upload */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-arch-silver/30 shadow-soft h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-arch-gold/10 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-arch-gold" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-arch-charcoal">
                    Get a Quick Quote
                  </h3>
                </div>
                <p className="text-arch-steel mb-6">
                  Upload your drawings or plans and receive a detailed quote within 24-48 hours.
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

                {isQuoteSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IoCheckmarkDoneCircleOutline className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-arch-charcoal mb-2">
                      Quote Request Sent!
                    </h3>
                    <p className="text-arch-steel">
                      We'll review your drawings and get back to you within 24-48 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleQuoteSubmit} className="space-y-5">
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
                          onChange={handleQuoteChange}
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
                          onChange={handleQuoteChange}
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
                          onChange={handleQuoteChange}
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
                          onChange={handleQuoteChange}
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
                        onChange={handleQuoteChange}
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

                    {/* File Upload Area */}
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
                        <Upload className={`w-10 h-10 mx-auto mb-3 ${isDragging ? 'text-arch-gold' : 'text-arch-steel'}`} />
                        <p className="text-arch-charcoal font-medium mb-1">
                          {isDragging ? 'Drop files here' : 'Drag & drop files here'}
                        </p>
                        <p className="text-arch-steel text-sm">
                          or click to browse
                        </p>
                        <p className="text-arch-steel text-xs mt-2">
                          PDF, JPG, PNG up to 10MB each (max 5 files)
                        </p>
                      </div>

                      {/* Uploaded Files List */}
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
                                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                  <X className="w-4 h-4 text-arch-silver-dark hover:text-red-400" />
                                </button>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label htmlFor="quote-details" className="block text-arch-graphite text-sm mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="quote-details"
                        name="projectDetails"
                        value={quoteFormData.projectDetails}
                        onChange={handleQuoteChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors resize-none"
                        placeholder="Tell us about your project, dimensions, materials, etc..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isQuoteSubmitting}
                      className="w-full px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-xl hover:bg-arch-yellow transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                      whileHover={{ scale: isQuoteSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isQuoteSubmitting ? 1 : 0.99 }}
                    >
                      {isQuoteSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Request Quote
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Book a Consultation Form */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-arch-silver/30 shadow-soft h-full">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-arch-gold/10 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-arch-gold" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-arch-charcoal">
                    Book a Consultation
                  </h3>
                </div>
                <p className="text-arch-steel mb-8">
                  Schedule a meeting with our experts to discuss your project requirements.
                </p>

                {isConsultSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IoCheckmarkDoneCircleOutline className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-arch-charcoal mb-2">
                      Consultation Booked!
                    </h3>
                    <p className="text-arch-steel">
                      We'll confirm your appointment via email shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="consult-name" className="block text-arch-graphite text-sm mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="consult-name"
                          name="name"
                          value={consultFormData.name}
                          onChange={handleConsultChange}
                          required
                          className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="consult-email" className="block text-arch-graphite text-sm mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="consult-email"
                          name="email"
                          value={consultFormData.email}
                          onChange={handleConsultChange}
                          required
                          className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="consult-phone" className="block text-arch-graphite text-sm mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="consult-phone"
                          name="phone"
                          value={consultFormData.phone}
                          onChange={handleConsultChange}
                          required
                          className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors"
                          placeholder="+263 7XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="consult-company" className="block text-arch-graphite text-sm mb-2">
                          Company / Organisation
                        </label>
                        <input
                          type="text"
                          id="consult-company"
                          name="company"
                          value={consultFormData.company}
                          onChange={handleConsultChange}
                          className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="consult-type" className="block text-arch-graphite text-sm mb-2">
                        Consultation Type *
                      </label>
                      <select
                        id="consult-type"
                        name="consultationType"
                        value={consultFormData.consultationType}
                        onChange={handleConsultChange}
                        required
                        className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal focus:outline-none focus:border-arch-gold/50 transition-colors appearance-none cursor-pointer"
                      >
                        {consultationTypes.map((type) => (
                          <option key={type.value} value={type.value} className="bg-arch-platinum">
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="consult-date" className="block text-arch-graphite text-sm mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="consult-date"
                          name="preferredDate"
                          value={consultFormData.preferredDate}
                          onChange={handleConsultChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal focus:outline-none focus:border-arch-gold/50 transition-colors cursor-pointer"
                        />
                      </div>
                      <div>
                        <label htmlFor="consult-time" className="block text-arch-graphite text-sm mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="consult-time"
                          name="preferredTime"
                          value={consultFormData.preferredTime}
                          onChange={handleConsultChange}
                          required
                          className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal focus:outline-none focus:border-arch-gold/50 transition-colors appearance-none cursor-pointer"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot.value} value={slot.value} className="bg-arch-platinum">
                              {slot.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="consult-notes" className="block text-arch-graphite text-sm mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="consult-notes"
                        name="notes"
                        value={consultFormData.notes}
                        onChange={handleConsultChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-arch-platinum border border-arch-silver/30 rounded-xl text-arch-charcoal placeholder-arch-steel focus:outline-none focus:border-arch-gold/50 transition-colors resize-none"
                        placeholder="Any specific topics you'd like to discuss..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isConsultSubmitting}
                      className="w-full px-8 py-4 bg-arch-charcoal text-white font-semibold rounded-xl hover:bg-arch-black transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                      whileHover={{ scale: isConsultSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isConsultSubmitting ? 1 : 0.99 }}
                    >
                      {isConsultSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 mr-2" />
                          Book Consultation
                        </>
                      )}
                    </motion.button>

                    <p className="text-arch-silver-dark text-sm text-center">
                      We'll confirm your booking within 24 hours
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Links & Social Below Forms */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.2}>
              <h3 className="text-arch-charcoal font-semibold text-lg mb-4">Quick Links</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.link}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-arch-silver/30 hover:border-arch-gold/50 hover:shadow-soft transition-all group"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-10 h-10 bg-arch-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-arch-gold/20 transition-colors">
                      <link.icon className="w-5 h-5 text-arch-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-arch-charcoal font-medium text-sm">{link.title}</h4>
                      <p className="text-arch-steel text-xs">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h3 className="text-arch-charcoal font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://facebook.com/archaluminium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl border border-arch-silver/30 flex items-center justify-center text-arch-graphite hover:text-arch-gold hover:border-arch-gold/50 transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/company/archaluminium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl border border-arch-silver/30 flex items-center justify-center text-arch-graphite hover:text-arch-gold hover:border-arch-gold/50 transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/archaluminium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white rounded-xl border border-arch-silver/30 flex items-center justify-center text-arch-graphite hover:text-arch-gold hover:border-arch-gold/50 transition-colors"
                  whileHover={{ y: -2 }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative bg-arch-platinum">
        {/* Embedded Google Map */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0326232!3d-17.798418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ3JzU0LjMiUyAzMcKwMDEnNTcuNCJF!5e0!3m2!1sen!2szw!4v1704067200000!5m2!1sen!2szw"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Architectural Aluminium Location"
            className="w-full h-full"
          />
        </div>

        {/* Address overlay card */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 md:left-16 bg-white/95 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-arch-silver/30 shadow-medium max-w-sm z-10">
          <h3 className="text-arch-charcoal font-semibold text-lg mb-2">Our Location</h3>
          <p className="text-arch-steel mb-4">
            25 Connaught Road<br />
            Avondale, Harare<br />
            Zimbabwe
          </p>
          <motion.a
            href="https://www.google.com/maps/dir/?api=1&destination=-17.798418,31.0326232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-arch-gold hover:text-arch-amber transition-colors text-sm font-medium"
            whileHover={{ x: 4 }}
          >
            <MapPin className="w-4 h-4" />
            Get Directions
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Floating action button */}
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=-17.798418,31.0326232"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 z-10 inline-flex items-center px-6 py-3 bg-arch-black text-white font-semibold rounded-full hover:bg-arch-charcoal transition-colors shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MapPin className="w-5 h-5 mr-2" />
          Open in Maps
        </motion.a>
      </section>
    </>
  );
};

export default Contact;
