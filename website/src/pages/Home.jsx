import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, Play, Star, 
  ChevronDown, Award, Users, Building2, Clock,
  CheckCircle2, Quote
} from 'lucide-react';
import SEO from '../components/SEO';
import { RiEmotionHappyLine } from "react-icons/ri";
import { PiFactoryBold } from "react-icons/pi";
import { MdStarBorderPurple500 } from "react-icons/md";
import { SiFsecure } from "react-icons/si";
import { LiaAwardSolid } from "react-icons/lia";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCounter, RevealText } from '../components/AnimatedComponents';
import { 
  TechnicalDrawingBg, 
  CornerBrackets, 
  ArchitecturalDivider,
  CurtainWallPattern,
  BlueprintLines,
  AnimatedJoint,
  WindowFramePattern,
  BeamConnectionPattern,
  AluminiumProfilePattern
} from '../components/ArchitecturalPatterns';
import AluminiumFinishes from '../components/Finishes';
import { companyInfo, services, projects, testimonials } from '../data/content';

const heroImages = [
  {
    src: "10.webp",
    alt: "Modern aluminium curtain wall facade"
  },
  {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200",
    alt: "Sleek aluminium window frames"
  },
  {
    src: "21.jpg",
    alt: "Commercial aluminium storefront"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    alt: "Modern office building with aluminium cladding"
  }
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO 
        title="Home"
        description="Architectural Aluminium - Zimbabwe's leading fabricator of aluminium, shop fitting and joinery products since 1994. Premium fenestration, shopfitting, and commercial building solutions."
        keywords={['aluminium manufacturer Zimbabwe', 'shop fitting Harare', 'aluminium windows', 'aluminium doors', 'curtain walling']}
        url="/"
      />


{/* 
  HERO SECTION WITH SEAMLESS LEFT-TO-RIGHT FADE
  
  Architecture:
  - Layer 1 (Bottom): Full-width image carousel
  - Layer 2: Gradient overlay that's solid on left, fades to transparent on right
  - Layer 3: Content (text, stats, etc.)
  
  This creates the effect where the dark background "dissipates" into the images
*/}

<section className="relative min-h-screen overflow-hidden bg-arch-black">
  
  {/* ============================================
      LAYER 1: FULL-WIDTH IMAGE CAROUSEL (BACKGROUND)
      Images span the entire section, sitting at the bottom layer
      ============================================ */}
  <motion.div 
    style={{ y: heroY, opacity: heroOpacity }}
    className="absolute inset-0 w-full h-full"
  >
    {/* Image Loop - Now full width */}
    {heroImages.map((image, index) => (
      <motion.div
        key={index}
        initial={false}
        animate={{ 
          opacity: index === currentImageIndex ? 1 : 0,
          scale: index === currentImageIndex ? 1 : 1.05,
          zIndex: index === currentImageIndex ? 10 : 0
        }}
        transition={{ 
          opacity: { duration: 1.5, ease: "easeInOut" },
          scale: { duration: 6, ease: "linear" }
        }}
        className="absolute inset-0"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
    ))}

    {/* Subtle darkening overlay on images */}
    <div className="absolute inset-0 bg-arch-black/30 z-20" />
  </motion.div>

  {/* ============================================
      LAYER 2: GRADIENT OVERLAY - THE MAGIC FADE
      Solid on left (covering content area), fading to transparent on right
      This creates the "dissipating" effect
      ============================================ */}
  <div 
    className="absolute inset-0 z-20 pointer-events-none"
    style={{
      background: `linear-gradient(
        to right,
        rgb(10, 10, 10) 0%,
        rgb(10, 10, 10) 35%,
        rgba(10, 10, 10, 0.95) 45%,
        rgba(10, 10, 10, 0.8) 50%,
        rgba(10, 10, 10, 0.5) 55%,
        rgba(10, 10, 10, 0.2) 60%,
        rgba(10, 10, 10, 0.05) 65%,
        transparent 70%
      )`
    }}
  />

  {/* Alternative: If you prefer Tailwind classes over inline styles */}
  {/* 
  <div 
    className="absolute inset-0 z-20 pointer-events-none 
    bg-gradient-to-r from-arch-black via-arch-black/80 to-transparent"
    style={{
      maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 70%)'
    }}
  />
  */}

  {/* ============================================
      LAYER 2B: SOFT VIGNETTE/GLOW EFFECT (OPTIONAL)
      Adds depth where the fade happens
      ============================================ */}
  <div 
    className="absolute inset-0 z-21 pointer-events-none hidden lg:block"
    style={{
      background: `radial-gradient(
        ellipse 50% 100% at 55% 50%,
        rgba(10, 10, 10, 0.3) 0%,
        transparent 70%
      )`
    }}
  />

  {/* ============================================
      LAYER 3: FLOATING STATS CARD (RIGHT SIDE)
      Positioned over the visible image area
      ============================================ */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1, duration: 0.8 }}
    className="absolute bottom-48 right-12 z-30 hidden lg:block"
  >
    <div className="glass p-6 rounded-2xl max-w-xs backdrop-blur-md bg-arch-black/40 border border-white/10">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm text-arch-silver-light">Est. 1994</span>
      </div>
      <p className="text-arch-gold font-display font-bold text-4xl mb-1">30+</p>
      <p className="text-arch-silver-dark text-sm">Years of Excellence</p>
    </div>
  </motion.div>

  {/* ============================================
      LAYER 4: HERO CONTENT (LEFT SIDE)
      Text content sits on top of everything
      ============================================ */}
  <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pt-32 pb-24 lg:pb-32">
    <div className="max-w-3xl lg:max-w-2xl">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
      >
        <Star className="text-arch-gold" size={16} />
        <span className="text-sm text-arch-silver-light">
          #1 Aluminium Supplier in Zimbabwe
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-arch-white leading-[1.1] mb-6"
      >
        Crafting
        <span className="block gradient-text">Excellence</span>
        in Aluminium
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-arch-silver-dark max-w-xl mb-10"
      >
        Zimbabwe's leading fabricator of aluminium, shop fitting and joinery products. 
        Setting the standard for architectural excellence since 1994.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap items-center gap-4 mb-16"
      >
        <Link
          to="/contact"
          className="group flex items-center gap-3 bg-arch-gold text-arch-black px-8 py-4 rounded-full font-semibold hover:bg-arch-amber transition-all duration-300"
        >
          Get a Quote
          <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
        </Link>
        
        <Link
          to="/projects"
          className="group flex items-center gap-3 border border-arch-graphite text-arch-white px-8 py-4 rounded-full font-medium hover:border-arch-gold hover:text-arch-gold transition-all duration-300"
        >
          View Projects
          <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" size={18} />
        </Link>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[
          { value: companyInfo.stats.customers, label: 'Customers', suffix: '+' },
          { value: companyInfo.stats.projects, label: 'Projects', suffix: '+' },
          { value: companyInfo.stats.years, label: 'Years', suffix: '+' },
          { value: 50000, label: 'Sqm Factory', suffix: '' }
        ].map((stat, index) => (
          <div key={stat.label}>
            <p className="font-display text-3xl md:text-4xl font-bold text-arch-gold">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-arch-silver-dark text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="flex flex-col items-center gap-2 text-arch-silver-dark"
    >
      <span className="text-xs uppercase tracking-wider">Scroll</span>
      <ChevronDown size={20} />
    </motion.div>
  </motion.div>
</section>


      {/* Services Section - Unique asymmetric layout */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-arch-charcoal" />
        <div className="absolute inset-0 diagonal-stripes" />
        
        {/* Blueprint lines decoration - MORE VISIBLE */}
        <BlueprintLines className="text-arch-gold opacity-60" />
        
        {/* Floating architectural joint decoration - VISIBLE ON MOBILE */}
        <div className="absolute top-4 right-2 md:top-10 md:right-5 w-20 h-20 md:w-40 md:h-40 opacity-15 md:opacity-20">
          <AnimatedJoint />
        </div>
        
        {/* Additional pattern bottom left - VISIBLE ON MOBILE */}
        <div className="absolute bottom-4 left-2 md:bottom-10 md:left-5 w-16 h-16 md:w-32 md:h-32 opacity-[0.08] md:opacity-10">
          <AluminiumProfilePattern className="w-full h-full text-arch-gold" opacity={1} />
        </div>
        
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left column - Sticky heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <AnimatedSection>
                <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                  What We Do
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4 mb-6">
                  Comprehensive
                  <span className="block text-arch-silver">Solutions</span>
                </h2>
                <p className="text-arch-silver-dark mb-8 max-w-md">
                  From residential windows to large-scale commercial facades, 
                  we deliver precision-engineered aluminium solutions for every need.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-arch-gold hover:text-arch-amber transition-colors duration-300"
                >
                  Explore All Services
                  <ArrowRight size={18} />
                </Link>
                
                {/* Window frame pattern decoration - VISIBLE ON MOBILE */}
                <div className="mt-6 md:mt-8 w-24 h-32 md:w-48 md:h-64 text-arch-gold/20 md:text-arch-gold/30">
                  <WindowFramePattern className="w-full h-full" />
                </div>
              </AnimatedSection>
            </div>

            {/* Right column - Services grid */}
            <div className="lg:col-span-7">
              <StaggerContainer className="space-y-6">
                {services.slice(0, 4).map((service, index) => (
                  <StaggerItem key={service.id}>
                    <Link 
                      to={`/services#${service.id}`}
                      className="group relative block p-6 md:p-8 rounded-2xl glass hover:glass-light transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Corner brackets decoration */}
                      <div className="absolute inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <CornerBrackets size={20} color="#D4AF37" />
                      </div>
                      
                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <span className="text-arch-gold font-mono text-sm">
                            0{index + 1}
                          </span>
                          <h3 className="font-display text-xl md:text-2xl font-semibold text-arch-white mt-2 mb-3 group-hover:text-arch-gold transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-arch-silver-dark">
                            {service.shortDesc}
                          </p>
                        </div>
                        <ArrowUpRight 
                          className="text-arch-graphite group-hover:text-arch-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                          size={24} 
                        />
                      </div>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Horizontal scroll on mobile, grid on desktop */}
      <section className="relative py-24 md:py-32 bg-arch-black">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                Portfolio
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-arch-silver-light hover:text-arch-gold transition-colors duration-300"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          {/* Projects Grid - Bento style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <AnimatedSection 
                key={project.id} 
                delay={index * 0.1}
                className={index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              >
                <Link
                  to={`/projects#project-${project.id}`}
                  className="group relative block aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <span className="text-arch-gold text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-arch-white mb-2 group-hover:text-arch-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-arch-silver-dark text-sm line-clamp-2">
                      {project.location} · {project.year}
                    </p>
                    
                    {/* Arrow indicator */}
                    <motion.div 
                      className="absolute top-6 right-6 p-3 rounded-full bg-arch-white/10 group-hover:bg-arch-gold transition-colors duration-300"
                    >
                      <ArrowUpRight 
                        className="text-arch-white group-hover:text-arch-black transition-colors duration-300" 
                        size={20} 
                      />
                    </motion.div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Aluminium Finishes Section */}
      <AluminiumFinishes />

      {/* Architectural Divider */}
      <ArchitecturalDivider className="bg-arch-black" />

      {/* Why Choose Us - Unique card layout */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-arch-charcoal to-arch-black" />
        
        {/* Curtain wall pattern background - VISIBLE ON MOBILE */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/2 opacity-[0.04] md:opacity-[0.05]">
          <CurtainWallPattern className="w-full h-full text-arch-gold" rows={10} cols={8} />
        </div>
        
        {/* Left side pattern - VISIBLE ON MOBILE */}
        <div className="absolute left-0 top-1/4 w-16 h-32 md:w-32 md:h-64 opacity-[0.06] md:opacity-[0.08]">
          <WindowFramePattern className="w-full h-full text-arch-silver" />
        </div>
        
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4 mb-6">
              The Architectural Aluminium Difference
            </h2>
            <p className="text-arch-silver-dark text-lg">
              We combine decades of expertise with modern technology to deliver 
              exceptional quality that stands the test of time.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: LiaAwardSolid,
                title: '30+ Years Experience',
                description: 'Three decades of industry leadership and innovation in aluminium fabrication.'
              },
              {
                icon: Building2,
                title: '50,000 sqm Factory',
                description: 'State-of-the-art manufacturing facility with modern machinery and capacity.'
              },
              {
                icon: Users,
                title: '675+ Happy Clients',
                description: 'Trusted by leading businesses, institutions, and homeowners across Zimbabwe.'
              },
              {
                icon: Clock,
                title: 'Fast Turnaround',
                description: 'Our plant capacity enables quick delivery without compromising quality.'
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="group p-8 rounded-2xl border border-arch-graphite hover:border-arch-gold/50 bg-arch-charcoal/50 hover:bg-arch-gold/5 transition-all duration-500 h-full">
                  <div className="w-14 h-14 rounded-xl bg-arch-gold/10 flex items-center justify-center mb-6 group-hover:bg-arch-gold/20 transition-colors duration-300">
                    <item.icon className="text-arch-gold" size={28} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-arch-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-arch-silver-dark">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 md:py-32 bg-arch-black">
        <div className="absolute inset-0 bg-grid opacity-20" />
        
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="relative p-8 rounded-2xl glass h-full">
                  <Quote className="text-arch-gold/20 absolute top-6 right-6" size={48} />
                  <p className="text-arch-silver-light mb-8 relative z-10">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-arch-gold/20 flex items-center justify-center">
                      <span className="font-display font-bold text-arch-gold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-arch-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-arch-silver-dark">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          {/* Vision: Dramatic close-up of aluminium profiles or architectural detail */}
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600"
            alt="Aluminium profiles"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-arch-black via-arch-black/95 to-arch-black" />
        </div>
        
        {/* Floating patterns - VISIBLE ON MOBILE */}
        <div className="absolute left-2 top-4 md:left-10 md:top-10 w-16 h-16 md:w-24 md:h-24 opacity-[0.08] md:opacity-10">
          <BeamConnectionPattern className="w-full h-full text-arch-gold" opacity={1} />
        </div>
        <div className="absolute right-2 bottom-4 md:right-10 md:bottom-10 w-20 h-20 md:w-32 md:h-32 opacity-[0.08] md:opacity-10">
          <AluminiumProfilePattern className="w-full h-full text-arch-silver" opacity={1} />
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Decorative corner brackets - VISIBLE ON MOBILE */}
            <div className="absolute -inset-4 md:-inset-12 block md:hidden">
              <CornerBrackets size={30} color="#D4AF37" />
            </div>
            <div className="absolute -inset-12 hidden md:block">
              <CornerBrackets size={60} color="#D4AF37" />
            </div>
            
            <AnimatedSection>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-arch-white mb-6">
                Ready to Transform Your
                <span className="block gradient-text">Space?</span>
              </h2>
              <p className="text-xl text-arch-silver-dark mb-10 max-w-2xl mx-auto">
                Whether you're planning a residential project or a large-scale commercial development, 
                our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 bg-arch-gold text-arch-black px-10 py-5 rounded-full font-semibold text-lg hover:bg-arch-amber transition-colors duration-300"
                >
                  Start Your Project
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={22} />
                </Link>
                <a
                  href={`tel:${companyInfo.phone[0].replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-arch-silver-light hover:text-arch-gold transition-colors duration-300"
                >
                  <span className="text-lg">Or call {companyInfo.phone[0]}</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;