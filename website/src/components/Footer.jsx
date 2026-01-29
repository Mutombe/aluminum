import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock,
  Facebook, Linkedin, Instagram,
  ArrowUpRight, ChevronRight
} from 'lucide-react';
import { companyInfo } from '../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Careers', path: '/careers' },
      { name: 'News', path: '/news' }
    ],
    services: [
      { name: 'Fenestration', path: '/services#fenestration' },
      { name: 'Shopfitting', path: '/services#shopfitting' },
      { name: 'Building Interiors', path: '/services#building-interiors' },
      { name: 'Residential', path: '/services#residential' },
      { name: 'Commercial Exteriors', path: '/services#commercial-exteriors' }
    ],
    resources: [
      { name: 'Projects', path: '/projects' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Get a Quote', path: '/contact' },
      { name: 'FAQs', path: '/contact#faq' }
    ]
  };

  return (
    <footer className="relative bg-arch-charcoal overflow-hidden">
      {/* Decorative top border - gold accent */}
      <div className="h-1 bg-gradient-to-r from-arch-gold via-arch-amber to-arch-yellow" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-arch-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

      {/* Main Footer Content */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-16 md:py-24">
        {/* Top Section - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 p-8 md:p-12 rounded-2xl bg-arch-graphite border border-white/10">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Start Your Project?
              </h3>
              <p className="text-arch-silver-dark max-w-md">
                Get in touch with our team for a free consultation and quote.
              </p>
            </div>
            <Link
              to="/contact"
              className="group flex items-center gap-3 bg-arch-gold text-arch-black px-8 py-4 rounded-full font-semibold hover:bg-arch-amber transition-colors duration-300"
            >
              Get a Quote
              <ArrowUpRight
                size={20}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <svg viewBox="0 0 48 48" className="w-10 h-10">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#F5B800" />
                  </linearGradient>
                </defs>
                <path d="M12 40 L24 8 L28 8 L16 40 Z" fill="url(#footerLogoGradient)" />
                <path d="M20 40 L32 8 L36 8 L24 40 Z" fill="url(#footerLogoGradient)" />
                <rect x="14" y="28" width="14" height="3" fill="url(#footerLogoGradient)" />
              </svg>
              <div>
                <span className="font-display font-bold text-white">ARCHITECTURAL</span>
                <span className="block font-display text-xs text-arch-gold tracking-[0.2em]">ALUMINIUM</span>
              </div>
            </Link>

            <p className="text-arch-silver-dark mb-8 max-w-sm">
              Zimbabwe's leading fabricator of aluminium, shop fitting and joinery products since 1994.
              Setting the standard for excellence in the industry.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-arch-graphite text-arch-silver-dark hover:border-arch-gold hover:text-arch-gold hover:bg-arch-gold/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-arch-graphite text-arch-silver-dark hover:border-arch-gold hover:text-arch-gold hover:bg-arch-gold/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-arch-graphite text-arch-silver-dark hover:border-arch-gold hover:text-arch-gold hover:bg-arch-gold/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-arch-silver-dark hover:text-arch-gold transition-colors duration-200"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-arch-silver-dark hover:text-arch-gold transition-colors duration-200"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-arch-silver-dark hover:text-arch-gold transition-colors duration-200"
                  >
                    <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-arch-silver-dark hover:text-arch-gold transition-colors duration-200"
                >
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-arch-gold" />
                  <span className="text-sm">{companyInfo.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone[0].replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-arch-silver-dark hover:text-arch-gold transition-colors duration-200"
                >
                  <Phone size={18} className="flex-shrink-0 text-arch-gold" />
                  <span className="text-sm">{companyInfo.phone[0]}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-arch-silver-dark hover:text-arch-gold transition-colors duration-200"
                >
                  <Mail size={18} className="flex-shrink-0 text-arch-gold" />
                  <span className="text-sm">{companyInfo.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-arch-silver-dark">
                <Clock size={18} className="flex-shrink-0 text-arch-gold" />
                <span className="text-sm">{companyInfo.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-arch-silver-dark">
              <span>© {currentYear} Architectural Aluminium. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-arch-silver-dark">
              <span className="flex items-center gap-2">
                Member of <span className="text-arch-gold font-semibold">CIFOZ</span>
              </span>
              <span className="hidden md:block">•</span>
              <span className="hidden md:block">#1 in Zimbabwe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
