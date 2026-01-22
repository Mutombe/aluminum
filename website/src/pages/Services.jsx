import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  DoorOpen, 
  Store, 
  Building2, 
  Home, 
  Building, 
  Layers,
  ArrowRight,
  Check,
  Phone,
  ChevronRight,
  Sparkles,
  Shield,
  Clock,
  Award
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem, ParallaxWrapper } from '../components/AnimatedComponents';
import {
  CornerBrackets,
  BlueprintLines,
  WindowFramePattern,
  BeamConnectionPattern,
  AluminiumProfilePattern,
  CurtainWallPattern,
  GeometricRing,
  CircuitPattern,
  ConstellationPattern,
  FloatingParticles,
  AngularLayers,
  BlueprintGrid,
  HexagonalGrid,
  CrossSectionPattern,
  MeasurementLines
} from '../components/ArchitecturalPatterns';
import SEO from '../components/SEO';
import { services } from '../data/content';

const serviceDetails = [
  {
    id: 'fenestration',
    title: 'Fenestration',
    subtitle: 'Doors, Windows & Glass Solutions',
    icon: DoorOpen,
    color: 'from-arch-gold to-amber-600',
    description: 'Complete fenestration solutions including aluminium doors, windows, shower cubicles, shop fronts, curtain walling, access mantraps, and frameless glass doors.',
    features: [
      'Sliding & Folding Doors',
      'Hinged & Pivot Doors',
      'Top & Side Hung Windows',
      'Shower Cubicles',
      'Frameless Glass Doors',
      'Curtain Walling Systems',
      'Shop Fronts',
      'Access Control Mantraps'
    ],
    applications: ['Residential', 'Commercial', 'Industrial'],
    // Vision: Close-up of sleek aluminium window frame with glass reflection
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  },
  {
    id: 'shopfitting',
    title: 'Shopfitting & Joinery',
    subtitle: 'Interior Commercial Solutions',
    icon: Store,
    color: 'from-blue-500 to-cyan-500',
    description: 'Professional shopfitting and joinery services including product displays, interior modelling, bank teller stations, office workstations, and wall panelling.',
    features: [
      'Shop Product Displays',
      'Interior Modelling',
      'Bank Teller Stations',
      'Office Workstations',
      'Wall Panelling',
      'Custom Joinery',
      'Retail Fixtures',
      'Display Units'
    ],
    applications: ['Retail', 'Banking', 'Corporate'],
    // Vision: Modern retail interior with elegant display fixtures
    image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=800&q=80'
  },
  {
    id: 'interiors',
    title: 'Building Interiors',
    subtitle: 'Partitions & Ceilings',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    description: 'Transform interior spaces with our drywall partitioning, aluminium and frameless partitions, suspended ceilings, and professional interior solutions.',
    features: [
      'Drywall Partitions',
      'Aluminium Partitions',
      'Frameless Partitions',
      'Suspended Ceilings',
      'Acoustic Solutions',
      'Fire-Rated Partitions',
      'Glass Partitions',
      'Moveable Walls'
    ],
    applications: ['Office', 'Healthcare', 'Education'],
    // Vision: Modern office with glass partitions and suspended ceiling
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },
  {
    id: 'residential',
    title: 'Residential Properties',
    subtitle: 'Home Aluminium Solutions',
    icon: Home,
    color: 'from-green-500 to-emerald-500',
    description: 'Premium residential aluminium products including patio doors, sliding and folding systems, louvres, and aluminium cladded doors for modern homes.',
    features: [
      'Patio Doors',
      'Sliding & Folding Doors',
      'Hinged & Pivot Doors',
      'Top Hung Windows',
      'Side Hung Windows',
      'Louvre Systems',
      'Aluminium Cladding',
      'Security Doors'
    ],
    applications: ['Houses', 'Apartments', 'Estates'],
    // Vision: Luxury home exterior with large aluminium sliding doors
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    id: 'exteriors',
    title: 'Commercial Exteriors',
    subtitle: 'Building Facades & Entrances',
    icon: Building,
    color: 'from-orange-500 to-red-500',
    description: 'Professional commercial exterior solutions including curtain walling, flush glazing, shopfronts, entrance canopies, and stainless steel balustrades.',
    features: [
      'Curtain Walling',
      'Flush Glazing',
      'Shopfronts',
      'Entrance Canopies',
      'Stainless Steel Balustrades',
      'Facade Systems',
      'Structural Glazing',
      'Cladding Systems'
    ],
    applications: ['Offices', 'Shopping Centres', 'Hotels'],
    // Vision: Modern commercial building facade with glass curtain wall
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80'
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with understanding your requirements, vision, and budget through detailed consultation.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed designs and specifications tailored to your project needs.'
  },
  {
    number: '03',
    title: 'Manufacturing',
    description: 'Precision manufacturing in our 50,000 sqm factory using modern machinery and quality materials.'
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Professional installation by our experienced artisans with attention to every detail.'
  }
];

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-arch-charcoal/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-arch-gold/50 hover:shadow-2xl hover:shadow-arch-gold/10">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arch-charcoal via-arch-charcoal/50 to-transparent" />
          
          {/* Floating Icon */}
          <motion.div 
            className={`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>
          
          {/* Service Number */}
          <div className="absolute bottom-4 left-4">
            <span className="text-6xl font-bold text-white/10 font-display">0{index + 1}</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6">
          <span className="text-arch-gold text-sm font-medium tracking-wider uppercase">{service.subtitle}</span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-3 font-display">{service.title}</h3>
          <p className="text-arch-silver/80 text-sm leading-relaxed mb-4">{service.description}</p>
          
          {/* Applications Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.applications.map((app, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-arch-silver"
              >
                {app}
              </span>
            ))}
          </div>
          
          {/* Features Preview */}
          <motion.div 
            className="space-y-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-2 py-4 border-t border-white/10">
              {service.features.slice(0, 4).map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-arch-silver/80">
                  <Check className="w-4 h-4 text-arch-gold" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* CTA */}
          <Link 
            to={`/services/${service.id}`}
            className="inline-flex items-center gap-2 text-arch-gold font-medium group/link mt-4"
          >
            <span>Learn More</span>
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ProcessStep({ step, index, total }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex items-start gap-6">
        {/* Number Circle */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-arch-gold to-amber-600 flex items-center justify-center shadow-lg shadow-arch-gold/20">
            <span className="text-xl font-bold text-arch-black font-display">{step.number}</span>
          </div>
          {/* Connecting Line */}
          {index < total - 1 && (
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-arch-gold/50 to-transparent" />
          )}
        </div>
        
        {/* Content */}
        <div className="pt-2">
          <h3 className="text-xl font-bold text-white mb-2 font-display">{step.title}</h3>
          <p className="text-arch-silver/80 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  return (
    <>
      <SEO 
        title="Services - Architectural Aluminium"
        description="Explore our comprehensive aluminium fabrication services including fenestration, shopfitting, building interiors, residential solutions, and commercial exteriors."
        keywords="aluminium services, fenestration, shopfitting, joinery, building interiors, curtain walling, Zimbabwe"
      />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <motion.div className="absolute inset-0 z-0" style={{ scale: heroScale }}>
          {/* Vision: Wide shot of factory floor with aluminium profiles being worked on */}
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80"
            alt="Aluminium fabrication"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-arch-black/80 via-arch-black/70 to-arch-black" />
        </motion.div>
        
        {/* Floating Particles */}
        <FloatingParticles className="opacity-30" count={35} />
        
        {/* Large Geometric Ring - Background */}
        <div className="absolute -right-32 top-1/4 opacity-10">
          <GeometricRing size={600} />
        </div>
        
        {/* Blueprint Lines */}
        <BlueprintLines className="text-arch-gold opacity-25" />
        
        {/* Cross Section Pattern - Left */}
        <motion.div
          className="absolute left-5 md:left-10 top-1/3 w-24 h-16 md:w-40 md:h-28 opacity-15"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <CrossSectionPattern className="w-full h-full" />
        </motion.div>
        
        {/* Aluminium Profile Pattern - Right */}
        <motion.div
          className="absolute right-5 md:right-20 bottom-1/4 w-20 h-20 md:w-32 md:h-32 opacity-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <AluminiumProfilePattern className="w-full h-full text-arch-gold" opacity={1} />
        </motion.div>
        
        {/* Constellation Pattern - Top Left */}
        <motion.div
          className="absolute left-1/4 top-32 w-32 h-32 opacity-15 hidden md:block"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <ConstellationPattern className="w-full h-full" />
        </motion.div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/4 right-1/4 w-96 h-96 border border-arch-gold/10 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-arch-silver/10 rounded-full"
          />
        </div>
        
        {/* Measurement Lines Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 opacity-30 hidden md:block">
          <MeasurementLines className="w-full h-full" />
        </div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-arch-gold/10 border border-arch-gold/30 rounded-full text-arch-gold text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Comprehensive Solutions
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display">
              Our{' '}
              <span className="gradient-text">Services</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-arch-silver/80 max-w-3xl mx-auto mb-8">
              From fenestration to shopfitting, we deliver excellence across every aspect of aluminium fabrication and installation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-arch-gold to-amber-600 text-arch-black font-bold rounded-full hover:shadow-lg hover:shadow-arch-gold/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                Get a Quote
              </Link>
              <Link 
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/30 transition-all"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-arch-gold rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
      
      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-arch-black relative overflow-hidden">
        {/* Blueprint Grid Background */}
        <BlueprintGrid className="opacity-20" />
        
        {/* Hexagonal Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <HexagonalGrid className="w-full h-full text-arch-gold" opacity={1} />
        </div>
        
        {/* Angular Layers - Left */}
        <motion.div
          className="absolute left-0 top-1/4 w-32 h-32 md:w-48 md:h-48 opacity-10"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <AngularLayers className="w-full h-full" />
        </motion.div>
        
        {/* Circuit Pattern - Right */}
        <motion.div
          className="absolute right-0 bottom-1/3 w-40 h-40 md:w-64 md:h-64 opacity-[0.08]"
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <CircuitPattern className="w-full h-full" color="#D4AF37" />
        </motion.div>
        
        {/* Window Frame - Bottom Left */}
        <motion.div
          className="absolute left-10 bottom-20 w-24 h-32 md:w-32 md:h-44 opacity-[0.06] hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <WindowFramePattern className="w-full h-full text-arch-gold" />
        </motion.div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-arch-gold text-sm font-medium tracking-wider uppercase mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Comprehensive Aluminium Solutions
            </h2>
            <p className="text-arch-silver/80 max-w-2xl mx-auto text-lg">
              We provide end-to-end aluminium fabrication and installation services for residential, commercial, and industrial projects.
            </p>
          </AnimatedSection>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-24 md:py-32 bg-arch-charcoal relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-arch-gold/5 to-transparent" />
        </div>
        
        {/* Curtain Wall Pattern - Right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/4 opacity-[0.03] hidden lg:block">
          <CurtainWallPattern className="w-full h-full text-arch-gold" rows={12} cols={6} />
        </div>
        
        {/* Beam Connection Pattern - Bottom Left */}
        <motion.div
          className="absolute left-5 bottom-20 w-24 h-24 md:w-40 md:h-40 opacity-[0.08]"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <BeamConnectionPattern className="w-full h-full text-arch-gold" opacity={1} />
        </motion.div>
        
        {/* Constellation - Top Left */}
        <motion.div
          className="absolute left-10 top-20 w-32 h-32 opacity-15 hidden md:block"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <ConstellationPattern className="w-full h-full" />
        </motion.div>
        
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <AnimatedSection>
                <span className="text-arch-gold text-sm font-medium tracking-wider uppercase mb-4 block">How We Work</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
                  Our Process
                </h2>
                <p className="text-arch-silver/80 text-lg mb-12">
                  From initial consultation to final installation, we follow a systematic approach to ensure exceptional results on every project.
                </p>
              </AnimatedSection>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <ProcessStep 
                    key={step.number} 
                    step={step} 
                    index={index} 
                    total={processSteps.length}
                  />
                ))}
              </div>
            </div>
            
            {/* Right: Image */}
            <AnimatedSection direction="right" className="relative">
              <div className="relative">
                {/* Vision: Worker precision-cutting aluminium profile on machinery */}
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                  alt="Manufacturing process"
                  className="rounded-2xl shadow-2xl"
                />
                
                {/* Floating Stats Card */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 bg-arch-black/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-arch-gold to-amber-600 rounded-xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-arch-black" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white font-display">1402+</div>
                      <div className="text-arch-silver text-sm">Projects Completed</div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Quality Badge */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-arch-gold to-amber-600 rounded-full p-4 shadow-lg shadow-arch-gold/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
                >
                  <Shield className="w-8 h-8 text-arch-black" />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-arch-black relative overflow-hidden">
        {/* Floating Particles */}
        <FloatingParticles className="opacity-20" count={25} />
        
        {/* Geometric Ring - Left */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 opacity-[0.04]">
          <GeometricRing size={400} />
        </div>
        
        {/* Angular Layers - Right */}
        <motion.div
          className="absolute right-0 top-1/4 w-40 h-40 opacity-10"
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <AngularLayers className="w-full h-full" />
        </motion.div>
        
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <span className="text-arch-gold text-sm font-medium tracking-wider uppercase mb-4 block">Our Advantages</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">
              Why Choose Us
            </h2>
          </AnimatedSection>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: '30+ Years', desc: 'Of Excellence', color: 'from-arch-gold to-amber-600' },
              { icon: Building2, title: '50,000 sqm', desc: 'Factory Space', color: 'from-blue-500 to-cyan-500' },
              { icon: Shield, title: 'Quality', desc: 'Guaranteed', color: 'from-purple-500 to-pink-500' },
              { icon: Clock, title: 'Fast', desc: 'Turnaround', color: 'from-green-500 to-emerald-500' }
            ].map((item, index) => (
              <StaggerItem key={index}>
                <motion.div 
                  className="text-center p-8 bg-arch-charcoal/50 border border-white/10 rounded-2xl hover:border-arch-gold/30 transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">{item.title}</h3>
                  <p className="text-arch-silver">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Vision: Dramatic shot of completed aluminium facade on modern building */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
            alt="Modern building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-arch-black/80 backdrop-blur-sm" />
        </div>
        
        {/* Floating Particles */}
        <FloatingParticles className="opacity-25" count={30} />
        
        {/* Corner Patterns */}
        <motion.div
          className="absolute left-5 top-10 w-20 h-20 md:w-32 md:h-32 opacity-15"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <BeamConnectionPattern className="w-full h-full text-arch-gold" opacity={1} />
        </motion.div>
        
        <motion.div
          className="absolute right-5 bottom-10 w-24 h-24 md:w-40 md:h-40 opacity-10"
          animate={{ rotate: [-360, 0] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <AluminiumProfilePattern className="w-full h-full text-arch-silver" opacity={1} />
        </motion.div>
        
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-center">
          <AnimatedSection>
            {/* Corner Brackets */}
            <div className="relative inline-block">
              <div className="absolute -inset-6 md:-inset-10 hidden sm:block">
                <CornerBrackets size={40} color="#D4AF37" />
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display">
                Ready to Start Your{' '}
                <span className="gradient-text">Project?</span>
              </h2>
            </div>
            <p className="text-xl text-arch-silver/80 max-w-2xl mx-auto mb-10">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-arch-gold to-amber-600 text-arch-black font-bold rounded-full hover:shadow-lg hover:shadow-arch-gold/30 transition-all"
              >
                <Phone className="w-5 h-5" />
                Get a Free Quote
              </Link>
              <a 
                href="tel:+263778498911"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all"
              >
                Call: +263 778 498 911
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}