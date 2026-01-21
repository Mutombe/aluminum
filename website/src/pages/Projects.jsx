import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Building2, 
  X, 
  ArrowRight, 
  ArrowUpRight,
  Filter,
  Grid3X3,
  LayoutGrid,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import SEO from '../components/SEO';

const projects = [
  {
    id: 1,
    title: 'CBZ Bank Head Office',
    category: 'Commercial',
    location: 'Harare CBD',
    year: '2023',
    description: 'Complete aluminium curtain walling and interior partitioning for the CBZ Bank headquarters, featuring flush glazing and custom entrance systems.',
    services: ['Curtain Walling', 'Partitioning', 'Shopfronts'],
    featured: true,
    // Vision: Modern glass office building exterior with reflective facade
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80'
    ]
  },
  {
    id: 2,
    title: "Sam Levy's Village",
    category: 'Retail',
    location: 'Borrowdale, Harare',
    year: '2022',
    description: 'Premium shopfitting and aluminium storefronts for multiple retail units at Zimbabwe\'s premier shopping destination.',
    services: ['Shopfitting', 'Storefronts', 'Display Units'],
    featured: true,
    // Vision: Modern shopping mall interior with elegant storefronts
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80'
    ]
  },
  {
    id: 3,
    title: 'Meikles Hotel',
    category: 'Hospitality',
    location: 'Harare CBD',
    year: '2021',
    description: 'Heritage renovation with modern aluminium windows and doors, maintaining the classic aesthetic while improving energy efficiency.',
    services: ['Windows', 'Doors', 'Balustrades'],
    featured: true,
    // Vision: Elegant hotel lobby with large windows
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80'
    ]
  },
  {
    id: 4,
    title: 'Old Mutual Tower',
    category: 'Commercial',
    location: 'Harare CBD',
    year: '2023',
    description: 'Comprehensive facade upgrade with modern curtain walling systems and energy-efficient glazing solutions.',
    services: ['Curtain Walling', 'Glazing', 'Entrance Systems'],
    // Vision: Tall commercial tower with glass facade
    image: 'https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80'
    ]
  },
  {
    id: 5,
    title: 'Steward Bank Branches',
    category: 'Banking',
    location: 'Nationwide',
    year: '2022',
    description: 'Multi-branch banking interior fit-out including teller stations, partitioning, and secure entrance systems.',
    services: ['Bank Teller Stations', 'Partitioning', 'Security Doors'],
    // Vision: Modern bank interior with teller stations
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80'
    ]
  },
  {
    id: 6,
    title: 'Borrowdale Private Residence',
    category: 'Residential',
    location: 'Borrowdale, Harare',
    year: '2023',
    description: 'Luxury residential project featuring floor-to-ceiling sliding doors, custom windows, and aluminium cladding.',
    services: ['Sliding Doors', 'Windows', 'Cladding'],
    // Vision: Modern luxury home with large glass doors
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    ]
  },
  {
    id: 7,
    title: 'NMB Bank Head Office',
    category: 'Banking',
    location: 'Harare',
    year: '2021',
    description: 'Complete interior renovation with frameless glass partitions, suspended ceilings, and custom workstations.',
    services: ['Partitioning', 'Ceilings', 'Workstations'],
    // Vision: Modern corporate office interior
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80'
    ]
  },
  {
    id: 8,
    title: 'Victoria Falls Hotel',
    category: 'Hospitality',
    location: 'Victoria Falls',
    year: '2022',
    description: 'Heritage-sensitive aluminium window and door replacement for this iconic hotel, maintaining colonial charm.',
    services: ['Windows', 'Doors', 'Restoration'],
    // Vision: Colonial-style hotel with elegant windows
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80'
    ]
  },
  {
    id: 9,
    title: 'Westgate Shopping Centre',
    category: 'Retail',
    location: 'Harare',
    year: '2023',
    description: 'Major retail renovation including new shopfronts, mall entrances, and interior display solutions.',
    services: ['Shopfronts', 'Entrances', 'Display Units'],
    // Vision: Shopping mall entrance with glass doors
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80'
    ]
  },
  {
    id: 10,
    title: 'FBC Holdings Tower',
    category: 'Commercial',
    location: 'Harare CBD',
    year: '2021',
    description: 'Premium office building with full aluminium facade system and high-performance glazing.',
    services: ['Curtain Walling', 'Glazing', 'Canopies'],
    // Vision: Corporate tower with modern facade
    image: 'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80'
    ]
  },
  {
    id: 11,
    title: 'Highlands Medical Centre',
    category: 'Healthcare',
    location: 'Highlands, Harare',
    year: '2022',
    description: 'Specialised healthcare fit-out with hygienic wall systems, acoustic partitions, and clean room solutions.',
    services: ['Partitioning', 'Ceilings', 'Clean Rooms'],
    // Vision: Modern medical facility interior
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'
    ]
  },
  {
    id: 12,
    title: 'Gunhill Luxury Apartments',
    category: 'Residential',
    location: 'Gunhill, Harare',
    year: '2023',
    description: 'High-end residential complex with premium aluminium windows, doors, and balcony balustrades.',
    services: ['Windows', 'Doors', 'Balustrades'],
    // Vision: Modern apartment building exterior
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
    ]
  }
];

const categories = ['All', 'Commercial', 'Retail', 'Hospitality', 'Banking', 'Residential', 'Healthcare'];

function ProjectCard({ project, onClick, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative group cursor-pointer ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative h-full min-h-[300px] md:min-h-[400px] overflow-hidden rounded-2xl">
        {/* Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/50 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-arch-gold/90 text-arch-black text-xs font-bold rounded-full">
            {project.category}
          </span>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          </div>
        )}
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.div
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-display">{project.title}</h3>
            <div className="flex items-center gap-4 text-arch-silver/80 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {project.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {project.year}
              </span>
            </div>
          </motion.div>
          
          {/* Hover Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="mt-4"
          >
            <p className="text-arch-silver/80 text-sm mb-4 line-clamp-2">{project.description}</p>
            <div className="flex items-center gap-2 text-arch-gold font-medium">
              <span>View Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
        
        {/* Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-arch-gold/0"
          animate={{ borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0)' }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  
  if (!project) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-arch-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-arch-charcoal border border-white/10 rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Gallery */}
        <div className="relative aspect-video">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={project.gallery[currentImage]}
              alt={project.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>
          
          {/* Gallery Navigation */}
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={() => setCurrentImage((prev) => (prev === 0 ? project.gallery.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-arch-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-arch-gold hover:text-arch-black transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setCurrentImage((prev) => (prev === project.gallery.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-arch-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-arch-gold hover:text-arch-black transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Gallery Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? 'bg-arch-gold w-6' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </>
          )}
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-12 bg-arch-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-arch-gold hover:text-arch-black transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-arch-gold text-arch-black font-bold rounded-full">
              {project.category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">{project.title}</h2>
          
          <div className="flex flex-wrap items-center gap-6 mb-6 text-arch-silver">
            <span className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-arch-gold" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-arch-gold" />
              {project.year}
            </span>
          </div>
          
          <p className="text-arch-silver/80 text-lg mb-8 leading-relaxed">{project.description}</p>
          
          {/* Services */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Services Provided</h3>
            <div className="flex flex-wrap gap-3">
              {project.services.map((service, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-arch-silver"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <Link
              to={`/contact?project=${project.id}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-arch-gold to-amber-600 text-arch-black font-bold rounded-full hover:shadow-lg hover:shadow-arch-gold/30 transition-all"
            >
              Start a Similar Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);
  
  return (
    <>
      <SEO 
        title="Projects - Architectural Aluminium"
        description="Explore our portfolio of completed aluminium fabrication projects across Zimbabwe including commercial buildings, retail spaces, hotels, and residential properties."
        keywords="aluminium projects Zimbabwe, commercial buildings, shopfitting portfolio, curtain walling projects"
      />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Vision: Dramatic collage or split screen of multiple completed projects */}
          <img
            src="https://images.unsplash.com/photo-1481253127861-534498168948?w=1600&q=80"
            alt="Project showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-arch-black/80 via-arch-black/70 to-arch-black" />
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
              <Building2 className="w-4 h-4" />
              1402+ Projects Completed
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display">
              Our{' '}
              <span className="gradient-text">Projects</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-arch-silver/80 max-w-3xl mx-auto">
              Discover our portfolio of exceptional aluminium fabrication and installation projects across Zimbabwe and beyond.
            </p>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Filter & Projects Section */}
      <section className="py-16 md:py-24 bg-arch-black relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          {/* Filter Bar */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-arch-gold text-arch-black'
                        : 'bg-white/5 text-arch-silver hover:bg-white/10 border border-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-arch-gold text-arch-black' : 'text-arch-silver'}`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'masonry' ? 'bg-arch-gold text-arch-black' : 'text-arch-silver'}`}
                >
                  <LayoutGrid className="w-5 h-5" />
                </button>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Projects Grid */}
          <motion.div 
            layout
            className={`grid gap-6 ${
              viewMode === 'masonry' 
                ? 'md:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(300px,auto)]'
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-arch-silver text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-arch-charcoal border-y border-white/10">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1402+', label: 'Projects Completed' },
              { number: '675+', label: 'Happy Clients' },
              { number: '30+', label: 'Years Experience' },
              { number: '50k', label: 'Sqm Factory' }
            ].map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text font-display">{stat.number}</div>
                <div className="text-arch-silver mt-2">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-arch-black">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
              Have a Project in Mind?
            </h2>
            <p className="text-arch-silver/80 text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our premium aluminium solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-arch-gold to-amber-600 text-arch-black font-bold rounded-full hover:shadow-lg hover:shadow-arch-gold/30 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
