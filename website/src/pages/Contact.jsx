import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Instagram
} from 'lucide-react';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { toast } from 'sonner';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon - Fri, 8am to 5pm',
      primary: '+263 778 498 911',
      secondary: '+263 (4) 334566/9',
      action: 'tel:+263778498911'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'We reply within 24 hours',
      primary: 'sales@archaluminium.co.zw',
      secondary: 'info@archaluminium.co.zw',
      action: 'mailto:sales@archaluminium.co.zw'
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
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
        <div className="absolute inset-0 bg-arch-charcoal">
          {/* Vision: Aerial view of Harare or abstract map pattern */}
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80"
              alt="Map background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-arch-black via-arch-black/80 to-arch-black" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-32 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-arch-gold/10 border border-arch-gold/30 rounded-full text-arch-gold text-sm font-mono mb-8">
              Get In Touch
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Let's Build
              <span className="gradient-text"> Together</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-arch-silver max-w-2xl mx-auto">
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
            <div className="w-12 h-12 bg-arch-gold rounded-full flex items-center justify-center shadow-lg shadow-arch-gold/30">
              <MapPin className="w-6 h-6 text-arch-black" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-arch-gold transform rotate-45 -z-10" />
          </div>
        </motion.div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-arch-black border-b border-white/5">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {contactMethods.map((method, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="p-6 bg-arch-charcoal rounded-2xl border border-white/5 hover:border-arch-gold/30 transition-all h-full"
                  whileHover={{ y: -4 }}
                >
                  {method.action ? (
                    <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                      <div className="w-12 h-12 bg-arch-gold/10 rounded-xl flex items-center justify-center mb-4">
                        <method.icon className="w-6 h-6 text-arch-gold" />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-1">{method.title}</h3>
                      <p className="text-arch-silver-dark text-sm mb-3">{method.description}</p>
                      <p className="text-white font-medium">{method.primary}</p>
                      <p className="text-arch-silver-dark text-sm">{method.secondary}</p>
                    </a>
                  ) : (
                    <>
                      <div className="w-12 h-12 bg-arch-gold/10 rounded-xl flex items-center justify-center mb-4">
                        <method.icon className="w-6 h-6 text-arch-gold" />
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-1">{method.title}</h3>
                      <p className="text-arch-silver-dark text-sm mb-3">{method.description}</p>
                      <p className="text-white font-medium">{method.primary}</p>
                      <p className="text-arch-silver-dark text-sm">{method.secondary}</p>
                    </>
                  )}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Main Contact Section */}
      <section id="quote-form" className="py-24 md:py-32 bg-arch-charcoal">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection className="order-2 lg:order-1">
              <div className="bg-arch-graphite rounded-3xl p-8 md:p-10 border border-white/5">
                <h2 className="text-3xl font-display font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-arch-silver-dark mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IoCheckmarkDoneCircleOutline className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-arch-silver">
                      Thank you for reaching out. We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-arch-silver text-sm mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-arch-charcoal border border-white/10 rounded-xl text-white placeholder-arch-silver-dark focus:outline-none focus:border-arch-gold/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-arch-silver text-sm mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-arch-charcoal border border-white/10 rounded-xl text-white placeholder-arch-silver-dark focus:outline-none focus:border-arch-gold/50 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-arch-silver text-sm mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-arch-charcoal border border-white/10 rounded-xl text-white placeholder-arch-silver-dark focus:outline-none focus:border-arch-gold/50 transition-colors"
                          placeholder="+263 7XX XXX XXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-arch-silver text-sm mb-2">
                          Company / Organisation
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-arch-charcoal border border-white/10 rounded-xl text-white placeholder-arch-silver-dark focus:outline-none focus:border-arch-gold/50 transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-arch-silver text-sm mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-arch-charcoal border border-white/10 rounded-xl text-white focus:outline-none focus:border-arch-gold/50 transition-colors appearance-none cursor-pointer"
                      >
                        {services.map((service) => (
                          <option key={service.value} value={service.value} className="bg-arch-charcoal">
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-arch-silver text-sm mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-arch-charcoal border border-white/10 rounded-xl text-white placeholder-arch-silver-dark focus:outline-none focus:border-arch-gold/50 transition-colors resize-none"
                        placeholder="Tell us about your project or enquiry..."
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
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-arch-silver-dark text-sm text-center">
                      By submitting this form, you agree to our{' '}
                      <button type="button" className="text-arch-gold hover:underline">
                        Privacy Policy
                      </button>
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Info sidebar */}
            <div className="order-1 lg:order-2">
              <AnimatedSection>
                <span className="text-arch-gold font-mono text-sm tracking-wider">CONTACT US</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-4 mb-6">
                  We'd Love to
                  <span className="gradient-text"> Hear From You</span>
                </h2>
                <p className="text-arch-silver text-lg mb-8">
                  Have a project in mind? Need a quote? Or just want to learn more 
                  about our services? We're here to help with all your aluminium 
                  fabrication needs.
                </p>
              </AnimatedSection>

              {/* Quick links */}
              <AnimatedSection delay={0.1}>
                <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                <div className="space-y-3 mb-10">
                  {quickLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.link}
                      className="flex items-center gap-4 p-4 bg-arch-graphite rounded-xl border border-white/5 hover:border-arch-gold/30 transition-all group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 bg-arch-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-arch-gold/20 transition-colors">
                        <link.icon className="w-5 h-5 text-arch-gold" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{link.title}</h4>
                        <p className="text-arch-silver-dark text-sm">{link.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-arch-silver-dark group-hover:text-arch-gold transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </AnimatedSection>

              {/* Social links */}
              <AnimatedSection delay={0.2}>
                <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <motion.a
                    href="https://facebook.com/archaluminium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-arch-graphite rounded-xl flex items-center justify-center text-arch-silver hover:text-arch-gold hover:bg-arch-gold/10 transition-colors"
                    whileHover={{ y: -2 }}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/company/archaluminium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-arch-graphite rounded-xl flex items-center justify-center text-arch-silver hover:text-arch-gold hover:bg-arch-gold/10 transition-colors"
                    whileHover={{ y: -2 }}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/archaluminium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-arch-graphite rounded-xl flex items-center justify-center text-arch-silver hover:text-arch-gold hover:bg-arch-gold/10 transition-colors"
                    whileHover={{ y: -2 }}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative bg-arch-graphite">
        {/* Placeholder map - Vision: Embedded Google Map showing location */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80"
            alt="Map location"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-arch-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.a
              href="https://maps.google.com/?q=25+Connaught+Road,+Avondale,+Harare,+Zimbabwe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              View on Google Maps
            </motion.a>
          </div>
        </div>

        {/* Address overlay card */}
        <div className="absolute bottom-6 left-6 md:left-16 bg-arch-black/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 max-w-sm">
          <h3 className="text-white font-semibold text-lg mb-2">Our Location</h3>
          <p className="text-arch-silver">
            25 Connaught Road<br />
            Avondale, Harare<br />
            Zimbabwe
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
