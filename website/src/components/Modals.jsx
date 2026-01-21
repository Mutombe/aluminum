import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Shield, ChevronRight } from 'lucide-react';

// Cookie Consent Component
export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="glass rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-arch-gold/20">
                <Cookie className="text-arch-gold" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-arch-white mb-2">
                  We Value Your Privacy
                </h3>
                <p className="text-sm text-arch-silver-dark mb-4">
                  We use cookies to enhance your browsing experience and analyse our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={acceptAll}
                    className="px-4 py-2 bg-arch-gold text-arch-black text-sm font-semibold rounded-full hover:bg-arch-amber transition-colors duration-200"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={acceptEssential}
                    className="px-4 py-2 border border-arch-graphite text-arch-silver-light text-sm font-medium rounded-full hover:border-arch-gold hover:text-arch-gold transition-colors duration-200"
                  >
                    Essential Only
                  </button>
                </div>
                
                <button
                  onClick={() => setShowPolicy(true)}
                  className="text-sm text-arch-silver-dark hover:text-arch-gold transition-colors duration-200 flex items-center gap-1"
                >
                  Learn more
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      <PrivacyPolicyModal isOpen={showPolicy} onClose={() => setShowPolicy(false)} />
    </AnimatePresence>
  );
};

// Privacy Policy Modal
export const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-arch-black/90 backdrop-blur-lg"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl max-h-[85vh] glass rounded-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-arch-graphite/50 bg-arch-charcoal/90 backdrop-blur-sm z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-arch-gold/20">
                  <Shield className="text-arch-gold" size={20} />
                </div>
                <h2 className="font-display font-bold text-xl text-arch-white">Privacy Policy</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-arch-silver-dark hover:text-arch-gold transition-colors duration-200"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
              <div className="prose prose-invert prose-sm max-w-none">
                <p className="text-arch-silver-dark mb-6">
                  Last updated: January 2025
                </p>

                <section className="mb-8">
                  <h3 className="font-display font-semibold text-lg text-arch-white mb-3">
                    1. Introduction
                  </h3>
                  <p className="text-arch-silver-dark">
                    Architectural Aluminium ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website archaluminium.co.zw.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="font-display font-semibold text-lg text-arch-white mb-3">
                    2. Information We Collect
                  </h3>
                  <p className="text-arch-silver-dark mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-arch-silver-dark space-y-2">
                    <li>Fill out a contact form or request a quote</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Apply for a position through our careers page</li>
                    <li>Communicate with us via email or phone</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="font-display font-semibold text-lg text-arch-white mb-3">
                    3. How We Use Your Information
                  </h3>
                  <p className="text-arch-silver-dark mb-3">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-arch-silver-dark space-y-2">
                    <li>Respond to your enquiries and provide quotes</li>
                    <li>Process job applications</li>
                    <li>Send promotional communications (with your consent)</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="font-display font-semibold text-lg text-arch-white mb-3">
                    4. Cookies and Tracking
                  </h3>
                  <p className="text-arch-silver-dark">
                    We use cookies and similar tracking technologies to enhance your browsing experience, 
                    analyse website traffic, and understand where our visitors come from. You can control 
                    cookies through your browser settings.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="font-display font-semibold text-lg text-arch-white mb-3">
                    5. Data Security
                  </h3>
                  <p className="text-arch-silver-dark">
                    We implement appropriate technical and organisational measures to protect your personal 
                    information against unauthorised access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="font-display font-semibold text-lg text-arch-white mb-3">
                    6. Your Rights
                  </h3>
                  <p className="text-arch-silver-dark mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-arch-silver-dark space-y-2">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Withdraw consent for marketing communications</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h3 className="font-display font-semibold text-lg text-arch-white mb-3">
                    7. Contact Us
                  </h3>
                  <p className="text-arch-silver-dark">
                    If you have questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="mt-3 p-4 rounded-lg bg-arch-graphite/50 text-arch-silver-light">
                    <p>Architectural Aluminium</p>
                    <p>25 Connaught Road, Avondale, Harare</p>
                    <p>Email: sales@hotali.co.zw</p>
                    <p>Phone: +263 778 498 911</p>
                  </div>
                </section>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
