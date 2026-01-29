import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import React, { useRef } from 'react';

// Animated Section Wrapper
export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' // up, down, left, right, fade
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered Children Animation
export const StaggerContainer = ({ 
  children, 
  className = '', 
  staggerDelay = 0.1 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item
export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax wrapper
export const ParallaxWrapper = ({ children, offset = 50, className = '' }) => {
  return (
    <motion.div
      initial={{ y: offset }}
      whileInView={{ y: -offset }}
      viewport={{ once: false }}
      transition={{ duration: 0 }}
      style={{ willChange: 'transform' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Page Transition Wrapper
export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

// Loading Spinner
export const LoadingSpinner = ({ size = 40, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{ width: size, height: size }}
        className="border-2 border-arch-gold/30 border-t-arch-gold rounded-full"
      />
    </div>
  );
};

// Page Loader
export const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[200] bg-white flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg viewBox="0 0 48 48" className="w-16 h-16 mx-auto mb-4">
            <defs>
              <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0A0A0A" />
                <stop offset="100%" stopColor="#2D2D2D" />
              </linearGradient>
            </defs>
            <path d="M12 40 L24 8 L28 8 L16 40 Z" fill="url(#loaderGradient)" />
            <path d="M20 40 L32 8 L36 8 L24 40 Z" fill="url(#loaderGradient)" />
            <rect x="14" y="28" width="14" height="3" fill="#D4AF37" />
          </svg>
        </motion.div>
        <LoadingSpinner size={32} />
        <p className="mt-4 text-arch-slate text-sm font-mono">Loading excellence...</p>
      </div>
    </motion.div>
  );
};

// Animated Counter
export const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {isInView && (
          <Counter from={0} to={value} duration={duration} />
        )}
      </motion.span>
      {suffix}
    </span>
  );
};

// Counter helper component
const Counter = ({ from, to, duration }) => {
  const nodeRef = useRef(null);
  
  return (
    <motion.span
      ref={nodeRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.span
        initial={{ count: from }}
        animate={{ count: to }}
        transition={{ duration, ease: 'easeOut' }}
        onUpdate={(latest) => {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(latest.count).toLocaleString();
          }
        }}
      />
    </motion.span>
  );
};

// Reveal Text Animation
export const RevealText = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : { y: '100%' }}
        transition={{ 
          duration: 0.6, 
          delay, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

// Magnetic Button Effect
export const MagneticButton = ({ children, className = '', ...props }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <motion.button
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedSection;
