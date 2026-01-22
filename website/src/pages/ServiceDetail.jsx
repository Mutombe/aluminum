import React, { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowLeft, Check, Phone, ChevronRight, ChevronDown,
  Sparkles, Shield, Clock, Award, Star, Ruler, Palette, Settings,
  Layers, Eye, Zap, Target, Plus, Minus, ArrowUpRight, Play
} from 'lucide-react';
import SEO from '../components/SEO';
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCounter } from '../components/AnimatedComponents';
import {
  CornerBrackets,
  BlueprintLines,
  WindowFramePattern,
  BeamConnectionPattern,
  AluminiumProfilePattern,
  CurtainWallPattern,
  ArchitecturalDivider,
  AnimatedJoint,
  GeometricRing,
  CircuitPattern,
  ConstellationPattern,
  MeasurementLines,
  CrossSectionPattern,
  FloatingParticles,
  AngularLayers,
  BlueprintGrid,
  HexagonalGrid,
  IsometricCubeGrid
} from '../components/ArchitecturalPatterns';

// Comprehensive service data
const servicesData = {
  fenestration: {
    id: 'fenestration',
    title: 'Fenestration',
    subtitle: 'Doors, Windows & Glass Solutions',
    tagline: 'Where Light Meets Architecture',
    description: 'Complete fenestration solutions that transform spaces through the perfect marriage of aluminium craftsmanship and glass artistry. From residential windows to commercial curtain walling, we create openings that inspire.',
    longDescription: `Our fenestration division represents three decades of expertise in creating the perfect interface between interior comfort and exterior beauty. Every window, door, and glass system we produce is engineered for optimal thermal performance, security, and aesthetic appeal.

We work with architects, contractors, and homeowners to deliver solutions that not only meet but exceed expectations. Our in-house design team uses advanced CAD systems to ensure precise specifications, while our manufacturing facility employs state-of-the-art machinery for consistent quality.`,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    ],
    color: 'from-arch-gold to-amber-600',
    accentColor: '#D4AF37',
    pattern: 'window',
    features: [
      { 
        title: 'Sliding & Folding Doors', 
        desc: 'Seamless transitions between indoor and outdoor spaces with our precision-engineered sliding and bi-fold door systems.',
        icon: Layers
      },
      { 
        title: 'Hinged & Pivot Doors', 
        desc: 'Statement entrances with our custom hinged and pivot door solutions, available in various configurations.',
        icon: Target
      },
      { 
        title: 'Top & Side Hung Windows', 
        desc: 'Versatile window systems designed for optimal ventilation and natural light penetration.',
        icon: Eye
      },
      { 
        title: 'Shower Cubicles', 
        desc: 'Elegant frameless and semi-framed shower enclosures that elevate bathroom aesthetics.',
        icon: Sparkles
      },
      { 
        title: 'Frameless Glass Doors', 
        desc: 'Minimalist glass door systems that create stunning visual continuity.',
        icon: Zap
      },
      { 
        title: 'Curtain Walling', 
        desc: 'Large-scale facade systems for commercial buildings with superior thermal performance.',
        icon: Ruler
      },
    ],
    specifications: [
      { label: 'Glass Thickness', value: '6mm - 24mm' },
      { label: 'Profile Depth', value: '45mm - 150mm' },
      { label: 'Max Panel Size', value: '3m x 4m' },
      { label: 'Thermal Rating', value: 'U-value 1.4 W/m²K' },
      { label: 'Sound Insulation', value: 'Up to 45dB' },
      { label: 'Wind Load', value: 'Up to 2.4 kPa' },
    ],
    finishes: ['Silver Anodised', 'Bronze Anodised', 'Black Anodised', 'Powder Coated (18 colors)', 'Wood Grain Effect'],
    applications: ['Residential Homes', 'Commercial Buildings', 'Hotels & Hospitality', 'Educational Facilities', 'Healthcare'],
    stats: [
      { value: 500, suffix: '+', label: 'Window Projects' },
      { value: 98, suffix: '%', label: 'Client Satisfaction' },
      { value: 25, suffix: 'yr', label: 'Warranty Available' },
      { value: 48, suffix: 'hr', label: 'Quote Turnaround' },
    ],
    process: [
      { step: '01', title: 'Site Survey', desc: 'Precise measurements and site condition assessment' },
      { step: '02', title: 'Design & Quote', desc: 'CAD drawings and detailed quotation within 48 hours' },
      { step: '03', title: 'Manufacturing', desc: 'Precision fabrication in our 50,000 sqm facility' },
      { step: '04', title: 'Installation', desc: 'Professional fitting by certified technicians' },
    ],
    faqs: [
      { q: 'What types of glass do you offer?', a: 'We offer clear, tinted, reflective, low-E, laminated, and toughened glass options. Double and triple glazing configurations are available for enhanced thermal and acoustic performance.' },
      { q: 'How long does installation typically take?', a: 'Residential projects typically take 1-3 days. Commercial projects vary based on scope, but we provide detailed timelines during the quotation phase.' },
      { q: 'Do you provide warranties?', a: 'Yes, we offer comprehensive warranties ranging from 5 to 25 years depending on the product and finish selected.' },
      { q: 'Can you match existing aluminium profiles?', a: 'Absolutely. Our design team can replicate existing profiles or create custom solutions to match your specific requirements.' },
    ],
    relatedServices: ['residential', 'exteriors'],
  },
  shopfitting: {
    id: 'shopfitting',
    title: 'Shopfitting & Joinery',
    subtitle: 'Interior Commercial Solutions',
    tagline: 'Crafting Spaces That Sell',
    description: 'Transform retail environments and commercial interiors with our bespoke shopfitting solutions. From concept to completion, we create spaces that captivate customers and enhance brand experiences.',
    longDescription: `Our shopfitting division combines traditional joinery craftsmanship with modern manufacturing technology to deliver exceptional commercial interiors. We understand that retail environments must not only look stunning but also function efficiently to drive sales and enhance customer experiences.

Working closely with brands, architects, and project managers, we translate design visions into reality. Our capabilities span from individual display units to complete store fit-outs, always maintaining the highest standards of quality and finish.`,
    heroImage: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    ],
    color: 'from-blue-500 to-cyan-500',
    accentColor: '#3B82F6',
    pattern: 'circuit',
    features: [
      { 
        title: 'Shop Product Displays', 
        desc: 'Custom display solutions that showcase products effectively and enhance visual merchandising.',
        icon: Layers
      },
      { 
        title: 'Interior Modelling', 
        desc: 'Complete interior fit-outs from concept design to final installation.',
        icon: Target
      },
      { 
        title: 'Bank Teller Stations', 
        desc: 'Secure, functional, and aesthetically pleasing banking furniture solutions.',
        icon: Shield
      },
      { 
        title: 'Office Workstations', 
        desc: 'Ergonomic and stylish workstation systems for modern offices.',
        icon: Settings
      },
      { 
        title: 'Wall Panelling', 
        desc: 'Decorative and functional wall systems in various materials and finishes.',
        icon: Palette
      },
      { 
        title: 'Custom Joinery', 
        desc: 'Bespoke joinery pieces crafted to exact specifications.',
        icon: Sparkles
      },
    ],
    specifications: [
      { label: 'Material Options', value: 'MDF, Plywood, Solid Wood' },
      { label: 'Finish Types', value: 'Veneer, Laminate, Paint' },
      { label: 'Max Unit Size', value: 'Custom to requirement' },
      { label: 'Lead Time', value: '2-6 weeks' },
      { label: 'Installation', value: 'Nationwide' },
      { label: 'Design Service', value: '3D Visualization' },
    ],
    finishes: ['Natural Wood Veneer', 'High-Gloss Lacquer', 'Matt Laminate', 'Textured Finishes', 'Custom RAL Colors'],
    applications: ['Retail Stores', 'Banks & Financial', 'Corporate Offices', 'Restaurants & Cafes', 'Showrooms'],
    stats: [
      { value: 300, suffix: '+', label: 'Store Fit-outs' },
      { value: 50, suffix: '+', label: 'Bank Branches' },
      { value: 15, suffix: 'yr', label: 'Average Client Relationship' },
      { value: 100, suffix: '%', label: 'Project Completion Rate' },
    ],
    process: [
      { step: '01', title: 'Brief & Concept', desc: 'Understanding your brand and spatial requirements' },
      { step: '02', title: '3D Design', desc: 'Photorealistic renders and technical drawings' },
      { step: '03', title: 'Prototyping', desc: 'Sample production for approval on complex items' },
      { step: '04', title: 'Installation', desc: 'Coordinated fit-out with minimal disruption' },
    ],
    faqs: [
      { q: 'Do you work with international brands?', a: 'Yes, we have experience working with global retail brands, ensuring compliance with international brand standards and specifications.' },
      { q: 'Can you manage complete store fit-outs?', a: 'Absolutely. We offer turnkey solutions including project management, coordination with other trades, and final handover.' },
      { q: 'What is your typical lead time?', a: 'Standard projects range from 2-6 weeks depending on complexity. We also offer fast-track services for urgent requirements.' },
    ],
    relatedServices: ['interiors', 'fenestration'],
  },
  interiors: {
    id: 'interiors',
    title: 'Building Interiors',
    subtitle: 'Partitions & Ceilings',
    tagline: 'Defining Spaces, Inspiring Work',
    description: 'Create functional, beautiful interior environments with our comprehensive range of partitioning and ceiling systems. From open-plan offices to acoustic-critical spaces, we deliver solutions that work.',
    longDescription: `Interior spaces demand intelligent design that balances aesthetics, acoustics, and functionality. Our building interiors division specializes in creating these balanced environments through innovative partition and ceiling systems.

We offer everything from traditional drywall solutions to cutting-edge demountable systems, glass partitions, and high-performance acoustic ceilings. Our team works with architects and interior designers to ensure seamless integration with overall design concepts.`,
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&q=80',
      'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=800&q=80',
    ],
    color: 'from-purple-500 to-pink-500',
    accentColor: '#A855F7',
    pattern: 'hex',
    features: [
      { 
        title: 'Drywall Partitions', 
        desc: 'Cost-effective solid partitions with excellent fire and acoustic ratings.',
        icon: Layers
      },
      { 
        title: 'Aluminium Partitions', 
        desc: 'Sleek framed systems with various infill options for modern offices.',
        icon: Target
      },
      { 
        title: 'Frameless Glass', 
        desc: 'Minimal frameless systems for maximum visual connectivity.',
        icon: Eye
      },
      { 
        title: 'Suspended Ceilings', 
        desc: 'Integrated ceiling systems with lighting and HVAC coordination.',
        icon: Sparkles
      },
      { 
        title: 'Acoustic Solutions', 
        desc: 'High-performance acoustic panels and systems for noise control.',
        icon: Zap
      },
      { 
        title: 'Moveable Walls', 
        desc: 'Flexible operable walls for multi-functional spaces.',
        icon: Settings
      },
    ],
    specifications: [
      { label: 'Partition Height', value: 'Up to 6m' },
      { label: 'Acoustic Rating', value: 'Up to 55dB Rw' },
      { label: 'Fire Rating', value: 'Up to 2 hours' },
      { label: 'Glass Options', value: 'Single & Double Glazed' },
      { label: 'Ceiling Types', value: 'Tile, Linear, Open Cell' },
      { label: 'Integration', value: 'Blinds, AV, Access Control' },
    ],
    finishes: ['Powder Coated Aluminium', 'Anodised Frames', 'Fabric Wrapped Panels', 'Timber Veneer', 'Metal Ceilings'],
    applications: ['Corporate Offices', 'Healthcare Facilities', 'Educational Buildings', 'Government Buildings', 'Call Centers'],
    stats: [
      { value: 200, suffix: 'k', label: 'Sqm Installed' },
      { value: 45, suffix: 'dB', label: 'Max Sound Reduction' },
      { value: 2, suffix: 'hr', label: 'Fire Rating Available' },
      { value: 30, suffix: '+', label: 'System Options' },
    ],
    process: [
      { step: '01', title: 'Space Planning', desc: 'Analyzing flow, acoustics, and functional requirements' },
      { step: '02', title: 'System Selection', desc: 'Recommending optimal solutions for your needs' },
      { step: '03', title: 'Coordination', desc: 'Working with M&E contractors for integrated delivery' },
      { step: '04', title: 'Installation', desc: 'Clean, efficient installation with minimal disruption' },
    ],
    faqs: [
      { q: 'Can partitions be reconfigured later?', a: 'Yes, our demountable systems are designed for easy reconfiguration as your space needs evolve.' },
      { q: 'What acoustic ratings can you achieve?', a: 'We can achieve up to 55dB Rw with our high-performance acoustic partition systems.' },
      { q: 'Do you coordinate with other trades?', a: 'Absolutely. We work closely with electrical, HVAC, and security contractors to ensure seamless integration.' },
    ],
    relatedServices: ['shopfitting', 'fenestration'],
  },
  residential: {
    id: 'residential',
    title: 'Residential Properties',
    subtitle: 'Home Aluminium Solutions',
    tagline: 'Elevating Home Living',
    description: 'Premium aluminium solutions that transform houses into homes. From stunning patio doors to secure entrance systems, we bring quality and style to every residential project.',
    longDescription: `Your home deserves the finest aluminium solutions. Our residential division focuses exclusively on creating products that enhance living spaces while providing security, energy efficiency, and lasting beauty.

We understand that homeowners want products that look beautiful, perform excellently, and require minimal maintenance. That's why we use only the highest quality aluminium alloys and finishes, backed by comprehensive warranties.`,
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    ],
    color: 'from-green-500 to-emerald-500',
    accentColor: '#22C55E',
    pattern: 'angular',
    features: [
      { 
        title: 'Patio Doors', 
        desc: 'Wide-span sliding and folding systems that connect indoor and outdoor living.',
        icon: Layers
      },
      { 
        title: 'Sliding & Folding', 
        desc: 'Smooth-operating systems with multiple configuration options.',
        icon: Target
      },
      { 
        title: 'Hinged & Pivot', 
        desc: 'Grand entrance doors that make a statement.',
        icon: Eye
      },
      { 
        title: 'Window Systems', 
        desc: 'Energy-efficient windows in various styles and opening types.',
        icon: Sparkles
      },
      { 
        title: 'Louvre Systems', 
        desc: 'Adjustable louvres for ventilation and privacy control.',
        icon: Settings
      },
      { 
        title: 'Security Doors', 
        desc: 'High-security entrance solutions without compromising aesthetics.',
        icon: Shield
      },
    ],
    specifications: [
      { label: 'Energy Rating', value: 'A++ Available' },
      { label: 'Security', value: 'Multi-point Locking' },
      { label: 'Glass Options', value: 'Double & Triple Glazed' },
      { label: 'Threshold', value: 'Low & Flush Options' },
      { label: 'Hardware', value: 'Premium European' },
      { label: 'Colors', value: '200+ Options' },
    ],
    finishes: ['Mill Finish', 'Silver Anodised', 'Bronze Tones', 'Matt Black', 'White', 'Custom Colors'],
    applications: ['Luxury Homes', 'Apartments', 'Townhouses', 'Estates', 'Renovations'],
    stats: [
      { value: 1000, suffix: '+', label: 'Homes Completed' },
      { value: 25, suffix: 'yr', label: 'Warranty' },
      { value: 40, suffix: '%', label: 'Energy Savings' },
      { value: 5, suffix: '★', label: 'Customer Rating' },
    ],
    process: [
      { step: '01', title: 'Home Visit', desc: 'Free consultation and precise measurements at your home' },
      { step: '02', title: 'Design Selection', desc: 'Choose from our range or create custom solutions' },
      { step: '03', title: 'Manufacturing', desc: 'Made-to-measure production in 2-3 weeks' },
      { step: '04', title: 'Installation', desc: 'Professional fitting with full clean-up' },
    ],
    faqs: [
      { q: 'Do you offer free home consultations?', a: 'Yes, we provide free home visits to assess your requirements, take measurements, and discuss options with no obligation.' },
      { q: 'What warranty do you provide?', a: 'We offer up to 25 years warranty on aluminium frames and 10 years on hardware and glass units.' },
      { q: 'Can you match my existing windows?', a: 'Yes, we can manufacture to match existing profiles, colors, and configurations for consistent aesthetics.' },
    ],
    relatedServices: ['fenestration', 'exteriors'],
  },
  exteriors: {
    id: 'exteriors',
    title: 'Commercial Exteriors',
    subtitle: 'Building Facades & Entrances',
    tagline: 'Defining Skylines',
    description: 'Create iconic building facades with our commercial exterior solutions. From gleaming curtain walls to grand entrance systems, we deliver architectural statements that stand the test of time.',
    longDescription: `Commercial buildings demand exterior solutions that combine visual impact with engineering excellence. Our commercial exteriors division delivers just that – facade systems that define skylines while performing flawlessly for decades.

We partner with leading architects and developers on projects ranging from boutique commercial buildings to landmark developments. Our engineering team ensures every system meets structural, thermal, and weatherproofing requirements while achieving the desired aesthetic vision.`,
    heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800&q=80',
      'https://images.unsplash.com/photo-1464938050520-ef2571d5b717?w=800&q=80',
    ],
    color: 'from-orange-500 to-red-500',
    accentColor: '#F97316',
    pattern: 'beam',
    features: [
      { 
        title: 'Curtain Walling', 
        desc: 'Stick and unitized systems for buildings of any scale.',
        icon: Layers
      },
      { 
        title: 'Structural Glazing', 
        desc: 'Silicone-bonded systems for seamless glass facades.',
        icon: Target
      },
      { 
        title: 'Entrance Systems', 
        desc: 'Automatic and manual entrance solutions with all-glass options.',
        icon: Eye
      },
      { 
        title: 'Canopies', 
        desc: 'Dramatic entrance canopies and covered walkways.',
        icon: Sparkles
      },
      { 
        title: 'Cladding Systems', 
        desc: 'Aluminium composite and solid panel cladding.',
        icon: Palette
      },
      { 
        title: 'Balustrades', 
        desc: 'Glass and stainless steel balustrade systems.',
        icon: Shield
      },
    ],
    specifications: [
      { label: 'Wind Load', value: 'Up to 3.0 kPa' },
      { label: 'Water Tightness', value: '600 Pa' },
      { label: 'Thermal Performance', value: 'U-value 1.1 W/m²K' },
      { label: 'Max Span', value: '6m (curtain wall)' },
      { label: 'Movement', value: '±25mm tolerance' },
      { label: 'Testing', value: 'CWCT Compliant' },
    ],
    finishes: ['PVDF Coated', 'Anodised', 'Powder Coated', 'Natural Aluminium', 'Metallic Effects'],
    applications: ['Office Towers', 'Shopping Centres', 'Hotels', 'Airports', 'Mixed-Use Developments'],
    stats: [
      { value: 100, suffix: 'k', label: 'Sqm Facades' },
      { value: 50, suffix: '+', label: 'Commercial Projects' },
      { value: 30, suffix: 'm', label: 'Tallest Installation' },
      { value: 100, suffix: '%', label: 'Weather Test Pass' },
    ],
    process: [
      { step: '01', title: 'Technical Review', desc: 'Analyzing drawings and performance requirements' },
      { step: '02', title: 'Engineering', desc: 'Structural calculations and shop drawings' },
      { step: '03', title: 'Mock-Up', desc: 'Full-scale prototype for testing and approval' },
      { step: '04', title: 'Execution', desc: 'Coordinated manufacturing and installation' },
    ],
    faqs: [
      { q: 'Do you provide structural calculations?', a: 'Yes, our in-house engineering team provides full structural calculations certified by professional engineers.' },
      { q: 'Can you handle high-rise buildings?', a: 'Absolutely. We have experience with buildings over 30 meters and systems designed for high wind loads.' },
      { q: 'What testing do you perform?', a: 'We conduct water penetration, air infiltration, and structural testing in accordance with international standards.' },
    ],
    relatedServices: ['fenestration', 'interiors'],
  },
};

// Pattern selector based on service type
const ServicePattern = ({ type, className }) => {
  switch(type) {
    case 'window':
      return <WindowFramePattern className={className} />;
    case 'circuit':
      return <CircuitPattern className={className} />;
    case 'hex':
      return <HexagonalGrid className={className} opacity={1} />;
    case 'angular':
      return <AngularLayers className={className} />;
    case 'beam':
      return <BeamConnectionPattern className={className} opacity={1} />;
    default:
      return <AluminiumProfilePattern className={className} opacity={1} />;
  }
};

// FAQ Accordion Component
const FAQItem = ({ question, answer, isOpen, onClick, accentColor }) => (
  <motion.div 
    className="border-b border-arch-graphite"
    initial={false}
  >
    <button
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left group"
    >
      <span className="text-lg font-medium text-arch-white group-hover:text-arch-gold transition-colors pr-8">
        {question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        className="flex-shrink-0"
      >
        <Plus className="w-5 h-5 text-arch-gold" />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-arch-silver-dark leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

// Gallery Lightbox
const GalleryImage = ({ src, alt, onClick, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-arch-black/0 group-hover:bg-arch-black/40 transition-colors duration-300 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        className="w-12 h-12 rounded-full bg-arch-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Plus className="w-6 h-6 text-arch-black" />
      </motion.div>
    </div>
    <div className="absolute inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <CornerBrackets size={20} color="#D4AF37" />
    </div>
  </motion.div>
);

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId];
  const heroRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Redirect if service not found
  useEffect(() => {
    if (!service) {
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) return null;

  const serviceKeys = Object.keys(servicesData);
  const currentIndex = serviceKeys.indexOf(serviceId);
  const prevService = currentIndex > 0 ? servicesData[serviceKeys[currentIndex - 1]] : null;
  const nextService = currentIndex < serviceKeys.length - 1 ? servicesData[serviceKeys[currentIndex + 1]] : null;

  return (
    <>
      <SEO 
        title={`${service.title} - Services`}
        description={service.description}
        keywords={`${service.title}, ${service.applications.join(', ')}, aluminium Zimbabwe`}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/60 to-arch-black/30" />
        </motion.div>
        
        {/* Floating Particles */}
        <FloatingParticles className="opacity-30" count={40} />
        
        {/* Large Geometric Ring */}
        <div className="absolute -right-32 top-1/4 opacity-10">
          <GeometricRing size={500} />
        </div>
        
        {/* Service-specific pattern */}
        <motion.div 
          className="absolute left-10 top-1/3 w-32 h-32 md:w-48 md:h-48 opacity-15"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <ServicePattern type={service.pattern} className="w-full h-full text-arch-gold" />
        </motion.div>
        
        {/* Blueprint lines */}
        <BlueprintLines className="text-arch-gold opacity-20" />
        
        {/* Measurement lines */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30 hidden md:block">
          <MeasurementLines className="w-full h-full" />
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-24 pt-32"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm text-arch-silver-dark mb-8"
          >
            <Link to="/" className="hover:text-arch-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-arch-gold transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-arch-gold">{service.title}</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${service.color} rounded-full text-arch-black text-sm font-medium mb-6`}
              >
                <Sparkles className="w-4 h-4" />
                {service.subtitle}
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="font-display text-5xl md:text-7xl font-bold text-arch-white mb-4"
              >
                {service.title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl text-arch-gold font-light mb-6"
              >
                {service.tagline}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-arch-silver-dark max-w-xl"
              >
                {service.description}
              </motion.p>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {service.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="relative glass p-6 rounded-2xl group hover:border-arch-gold/30 border border-transparent transition-colors"
                >
                  <div className="absolute inset-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CornerBrackets size={12} color={service.accentColor} />
                  </div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-arch-gold">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-arch-silver-dark text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link 
              to={`/contact?service=${service.id}`}
              className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} text-arch-black font-bold rounded-full hover:shadow-lg transition-all`}
            >
              <Phone className="w-5 h-5" />
              Get a Quote
            </Link>
            <a 
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 glass text-arch-white font-medium rounded-full hover:bg-white/10 transition-all"
            >
              Explore Features
              <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-24 md:py-32 bg-arch-charcoal overflow-hidden">
        <BlueprintGrid className="opacity-20" />
        
        {/* Constellation pattern */}
        <motion.div 
          className="absolute right-10 top-20 w-40 h-40 opacity-15"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <ConstellationPattern className="w-full h-full" />
        </motion.div>
        
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                About This Service
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4 mb-6">
                Excellence in Every Detail
              </h2>
              <div className="space-y-4 text-arch-silver-dark text-lg leading-relaxed">
                {service.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              
              {/* Applications */}
              <div className="mt-8">
                <h4 className="text-arch-white font-semibold mb-4">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {service.applications.map((app) => (
                    <span 
                      key={app}
                      className="px-4 py-2 bg-arch-graphite/50 border border-arch-graphite rounded-full text-sm text-arch-silver-light"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div className="relative">
                {/* Main image */}
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img 
                    src={service.galleryImages[0]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Corner brackets */}
                <div className="absolute inset-4">
                  <CornerBrackets size={40} color={service.accentColor} />
                </div>
                
                {/* Floating secondary image */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-arch-charcoal"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={service.galleryImages[1]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Service pattern */}
                <motion.div 
                  className="absolute -top-6 -right-6 w-24 h-24 opacity-30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <ServicePattern type={service.pattern} className="w-full h-full text-arch-gold" />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 md:py-32 bg-arch-black overflow-hidden">
        {/* Isometric Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <IsometricCubeGrid className="w-full h-full text-arch-gold" opacity={1} />
        </div>
        
        {/* Angular Layers */}
        <motion.div 
          className="absolute left-0 top-1/4 w-48 h-48 opacity-10"
          animate={{ rotate: [0, -5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <AngularLayers className="w-full h-full" />
        </motion.div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              What We Offer
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4 mb-6">
              Features & Capabilities
            </h2>
            <p className="text-arch-silver-dark text-lg">
              Comprehensive solutions tailored to your specific requirements
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <motion.div 
                  className="relative p-8 rounded-2xl bg-arch-charcoal/50 border border-arch-graphite hover:border-arch-gold/30 transition-all duration-500 h-full group overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Pattern background on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500">
                    <ServicePattern type={service.pattern} className="w-full h-full text-arch-gold" />
                  </div>
                  
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-arch-white mb-3 group-hover:text-arch-gold transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-arch-silver-dark">
                      {feature.desc}
                    </p>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.color} opacity-10`} 
                         style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications & Finishes */}
      <section className="relative py-24 md:py-32 bg-arch-charcoal overflow-hidden">
        <BlueprintLines className="text-arch-silver opacity-15" />
        
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Specifications */}
            <AnimatedSection>
              <div className="relative p-8 md:p-10 rounded-3xl glass">
                <div className="absolute inset-4">
                  <CornerBrackets size={24} color={service.accentColor} />
                </div>
                
                <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                  Technical
                </span>
                <h3 className="font-display text-3xl font-bold text-arch-white mt-2 mb-8">
                  Specifications
                </h3>
                
                <div className="space-y-4">
                  {service.specifications.map((spec, i) => (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center justify-between py-3 border-b border-arch-graphite last:border-0"
                    >
                      <span className="text-arch-silver-dark">{spec.label}</span>
                      <span className="text-arch-white font-medium">{spec.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            
            {/* Finishes */}
            <AnimatedSection delay={0.2}>
              <div className="relative p-8 md:p-10 rounded-3xl bg-arch-black border border-arch-graphite">
                <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                  Available
                </span>
                <h3 className="font-display text-3xl font-bold text-arch-white mt-2 mb-8">
                  Finishes
                </h3>
                
                <div className="space-y-3">
                  {service.finishes.map((finish, i) => (
                    <motion.div
                      key={finish}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-arch-charcoal/50 hover:bg-arch-charcoal transition-colors group"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Palette className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-arch-silver-light group-hover:text-arch-white transition-colors">
                        {finish}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-2 text-arch-gold hover:text-arch-amber transition-colors mt-6"
                >
                  View All Finishes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 md:py-32 bg-arch-black overflow-hidden">
        {/* Hexagonal Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <HexagonalGrid className="w-full h-full text-arch-gold" opacity={1} />
        </div>
        
        {/* Circuit Pattern */}
        <motion.div 
          className="absolute right-10 bottom-20 w-48 h-48 opacity-10"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <CircuitPattern className="w-full h-full" color={service.accentColor} />
        </motion.div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              How We Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4 mb-6">
              Our Process
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.15}>
                <div className="relative">
                  {/* Connector line */}
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-arch-gold/50 to-transparent z-0" />
                  )}
                  
                  <motion.div 
                    className="relative text-center"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-6`}>
                      <span className="text-2xl font-bold text-arch-black font-display">{step.step}</span>
                    </div>
                    <h4 className="font-display text-xl font-semibold text-arch-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-arch-silver-dark text-sm">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24 md:py-32 bg-arch-charcoal overflow-hidden">
        <FloatingParticles className="opacity-20" count={20} />
        
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                Portfolio
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4">
                Project Gallery
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-arch-gold hover:text-arch-amber transition-colors"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.galleryImages.map((img, i) => (
              <GalleryImage 
                key={i}
                src={img}
                alt={`${service.title} project ${i + 1}`}
                index={i}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="relative py-24 md:py-32 bg-arch-black overflow-hidden">
        <BlueprintGrid className="opacity-15" />
        
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                Got Questions?
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4 mb-6">
                FAQs
              </h2>
              <p className="text-arch-silver-dark text-lg mb-8">
                Find answers to common questions about our {service.title.toLowerCase()} services.
              </p>
              
              <div className="relative p-6 rounded-2xl glass">
                <h4 className="text-arch-white font-semibold mb-4">Still have questions?</h4>
                <p className="text-arch-silver-dark text-sm mb-4">
                  Our team is here to help with any specific inquiries about your project.
                </p>
                <Link 
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.color} text-arch-black font-semibold rounded-full hover:shadow-lg transition-all`}
                >
                  <Phone className="w-4 h-4" />
                  Contact Us
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="space-y-0">
                {service.faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    question={faq.q}
                    answer={faq.a}
                    isOpen={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    accentColor={service.accentColor}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="relative py-24 md:py-32 bg-arch-charcoal overflow-hidden">
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Explore More
            </span>
            <h2 className="font-display text-4xl font-bold text-arch-white mt-4">
              Related Services
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {service.relatedServices.map((relatedId) => {
              const related = servicesData[relatedId];
              if (!related) return null;
              return (
                <AnimatedSection key={relatedId}>
                  <Link 
                    to={`/services/${relatedId}`}
                    className="group relative block p-8 rounded-2xl bg-arch-black border border-arch-graphite hover:border-arch-gold/30 transition-all overflow-hidden"
                  >
                    {/* Background image */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                      <img src={related.heroImage} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-arch-black via-arch-black/80 to-transparent" />
                    </div>
                    
                    <div className="relative flex items-center justify-between">
                      <div>
                        <span className="text-arch-gold text-sm">{related.subtitle}</span>
                        <h3 className="font-display text-2xl font-bold text-arch-white group-hover:text-arch-gold transition-colors mt-1">
                          {related.title}
                        </h3>
                        <p className="text-arch-silver-dark mt-2 max-w-md">{related.tagline}</p>
                      </div>
                      <ArrowUpRight className="w-8 h-8 text-arch-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative py-12 bg-arch-black border-t border-arch-graphite">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between">
            {prevService ? (
              <Link 
                to={`/services/${prevService.id}`}
                className="group flex items-center gap-3 text-arch-silver-light hover:text-arch-gold transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="text-xs text-arch-silver-dark block">Previous</span>
                  <span className="font-medium">{prevService.title}</span>
                </div>
              </Link>
            ) : <div />}
            
            <Link 
              to="/services"
              className="text-arch-silver-dark hover:text-arch-gold transition-colors text-sm"
            >
              All Services
            </Link>
            
            {nextService ? (
              <Link 
                to={`/services/${nextService.id}`}
                className="group flex items-center gap-3 text-arch-silver-light hover:text-arch-gold transition-colors"
              >
                <div className="text-right">
                  <span className="text-xs text-arch-silver-dark block">Next</span>
                  <span className="font-medium">{nextService.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.galleryImages[2] || service.heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-arch-black/85" />
        </div>
        
        <FloatingParticles className="opacity-30" count={30} />
        
        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="relative text-center max-w-3xl mx-auto">
            <div className="absolute -inset-8 hidden md:block">
              <CornerBrackets size={50} color={service.accentColor} />
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold text-arch-white mb-6">
              Ready to Start Your
              <span className={`block bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                {service.title} Project?
              </span>
            </h2>
            <p className="text-xl text-arch-silver-dark mb-10">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to={`/contact?service=${service.id}`}
                className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.color} text-arch-black font-bold rounded-full hover:shadow-lg transition-all`}
              >
                <Phone className="w-5 h-5" />
                Get a Free Quote
              </Link>
              <a 
                href="tel:+263778498911"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-arch-white font-medium rounded-full hover:bg-white/10 transition-all"
              >
                Call: +263 778 498 911
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-arch-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-full rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-arch-white hover:text-arch-gold transition-colors"
            >
              <Plus className="w-6 h-6 rotate-45" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}