import React from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  CalendarBlank,
  BuildingOffice,
  ArrowRight,
  ArrowUpRight,
  GridFour,
  SquaresFour,
  Sparkle,
  DownloadSimple,
  FileText
} from '@phosphor-icons/react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import SEO from '../components/SEO';

const projects = [
  {
    id: 1,
    title: 'Ecobank Headquarters',
    category: 'Commercial',
    location: 'Harare',
    year: '2023',
    description: 'Complete aluminium curtain walling, cladding, and interior fit-out for Ecobank\'s striking Pan-African headquarters. Featuring a bold blue and white facade with circular porthole windows, colorful glass panels, and full interior shopfitting including wall panelling, glass partitions, and modern open-plan office systems.',
    services: ['Curtain Walling', 'Cladding', 'Shopfitting', 'Partitioning', 'Office Workstations'],
    featured: true,
    image: '/ecobank/DSC08707.jpg',
    gallery: [
      '/ecobank/DSC08596.jpg',
      '/ecobank/DSC08648.jpg',
      '/ecobank/DSC08707.jpg',
      '/ecobank/DSC08751.jpg',
      '/ecobank/DSC08839.jpg',
      '/ecobank/DSC08847.jpg',
      '/ecobank/DSC08869.jpg',
      '/ecobank/DSC08611.jpg',
      '/ecobank/DSC08652.jpg'
    ]
  },
  {
    id: 2,
    title: 'First Mutual Park',
    category: 'Commercial',
    location: 'Harare',
    year: '2023',
    description: 'Full exterior glazing, aluminium entrance systems, and cladding for First Mutual\'s modern corporate campus. The project features structural curtain walling, aluminium-framed doors, stainless steel balustrades, and aluminium window systems set within a striking brick and stone facade.',
    services: ['Curtain Walling', 'Entrance Systems', 'Cladding', 'Windows', 'Balustrades'],
    featured: true,
    image: '/firstmutual/untitled-561.JPG',
    gallery: [
      '/firstmutual/untitled-561.JPG',
      '/firstmutual/untitled-17.JPG',
      '/firstmutual/untitled-202.JPG',
      '/firstmutual/untitled-218.JPG',
      '/firstmutual/untitled-251.JPG',
      '/firstmutual/untitled-327.JPG',
      '/firstmutual/untitled-451.JPG',
      '/firstmutual/untitled-499.JPG',
      '/firstmutual/untitled-50.JPG',
      '/firstmutual/untitled-8.JPG'
    ]
  },
  {
    id: 3,
    title: 'Seagrave Road Residence',
    category: 'Residential',
    location: 'Harare',
    year: '2024',
    description: 'A luxury residential property featuring floor-to-ceiling aluminium-framed glass walls, frameless glass corner openings, floating steel and timber staircases, stainless steel balustrades, and modern aluminium window systems — all set within beautifully landscaped gardens.',
    services: ['Frameless Glazing', 'Windows', 'Balustrades', 'Steel Structures', 'Aluminium Cladding'],
    featured: true,
    image: '/seagrave-road/1.jpg',
    gallery: [
      '/seagrave-road/1.jpg',
      '/seagrave-road/6.jpg',
      '/seagrave-road/9.jpg',
      '/seagrave-road/10.jpg',
      '/seagrave-road/12.jpg',
      '/seagrave-road/14.jpg',
      '/seagrave-road/17.jpg',
      '/seagrave-road/18.jpg',
      '/seagrave-road/22B.jpg'
    ]
  }
];

const categories = ['All', 'Commercial', 'Residential'];

function ProjectCard({ project, index, isHero, viewMode }) {
  const [isHovered, setIsHovered] = useState(false);
  const heroLayout = isHero && viewMode === 'masonry';

  const spanClasses = heroLayout ? 'lg:col-span-2 lg:row-span-2' : '';
  const heightClasses = heroLayout
    ? 'min-h-[220px] sm:min-h-[260px] lg:min-h-full'
    : 'min-h-[200px] sm:min-h-[240px] md:min-h-[260px] lg:min-h-[260px]';

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`relative group cursor-pointer block ${spanClasses}`}
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative h-full overflow-hidden rounded-xl md:rounded-2xl ${heightClasses}`}>
          {/* Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6 }} loading="eager"
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/50 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0.75 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category Badge */}
          <div className="absolute top-2.5 left-2.5 md:top-4 md:left-4">
            <span className={`bg-arch-gold/95 text-arch-black font-bold rounded-full ${
              heroLayout
                ? 'px-2.5 py-0.5 text-[10px] md:px-3 md:py-1 md:text-xs lg:px-4 lg:py-1.5 lg:text-sm'
                : 'px-2 py-0.5 text-[10px] md:px-2.5 md:py-1 md:text-xs'
            }`}>
              {project.category}
            </span>
          </div>

          {/* Featured Badge — hero only on mobile, all featured on desktop */}
          {project.featured && (
            <div className={`absolute top-2.5 right-2.5 md:top-4 md:right-4 ${heroLayout ? '' : 'hidden md:block'}`}>
              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium rounded-full flex items-center gap-1">
                <Sparkle className="w-3 h-3" />
                Featured
              </span>
            </div>
          )}

          {/* Content */}
          <div className={`absolute bottom-0 left-0 right-0 ${heroLayout ? 'p-4 md:p-6 lg:p-8' : 'p-3 md:p-4 lg:p-5'}`}>
            <motion.div
              animate={{ y: isHovered ? -6 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={`font-bold text-white mb-1 md:mb-2 font-display leading-tight ${
                heroLayout
                  ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
                  : 'text-sm md:text-base lg:text-lg'
              }`}>
                {project.title}
              </h3>
              <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-arch-silver/80 ${
                heroLayout ? 'text-xs md:text-sm' : 'text-[11px] md:text-xs'
              }`}>
                <span className="flex items-center gap-1">
                  <MapPin className={heroLayout ? 'w-3.5 h-3.5 md:w-4 md:h-4' : 'w-3 h-3 md:w-3.5 md:h-3.5'} />
                  {project.location}
                </span>
                <span className={`items-center gap-1 ${heroLayout ? 'flex' : 'hidden sm:flex'}`}>
                  <CalendarBlank className={heroLayout ? 'w-3.5 h-3.5 md:w-4 md:h-4' : 'w-3 h-3 md:w-3.5 md:h-3.5'} />
                  {project.year}
                </span>
              </div>
            </motion.div>

            {/* Hero card: persistent description teaser on desktop */}
            {heroLayout && (
              <p className="hidden md:block text-arch-silver/80 text-sm mt-3 line-clamp-2 lg:line-clamp-3 max-w-xl">
                {project.description}
              </p>
            )}

            {/* Hover reveal — full description + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 12 }}
              transition={{ duration: 0.3 }}
              className={heroLayout ? 'mt-4 hidden md:block' : 'mt-3 hidden md:block'}
            >
              <div className="flex items-center gap-2 text-arch-gold font-medium text-sm">
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.div>
          </div>

          {/* Border glow */}
          <motion.div
            className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-arch-gold/0 pointer-events-none"
            animate={{ borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0)' }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </Link>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('masonry'); // 'masonry' = editorial bento, 'grid' = uniform compact
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
          <img
            src="https://images.unsplash.com/photo-1481253127861-534498168948?w=1600&q=80"
            alt="Project showcase"
            className="w-full h-full object-cover" loading="eager"
          />
          {/* Cinematic dark gradient — full-bleed image */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                to top,
                rgba(0,0,0,0.65) 0%,
                rgba(0,0,0,0.35) 30%,
                rgba(0,0,0,0.20) 60%,
                rgba(0,0,0,0.30) 100%
              )`,
            }}
          />
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
              <BuildingOffice className="w-4 h-4" />
              1402+ Projects Completed
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
              Our{' '}
              <span className="gradient-text">Projects</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">
              Discover our portfolio of exceptional <Link to="/services/fenestration" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">aluminium fabrication</Link> and installation projects across Zimbabwe and beyond.
            </p>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Filter & Projects Section */}
      <section className="py-16 md:py-24 bg-arch-platinum relative">
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
                        : 'bg-white text-arch-slate hover:bg-arch-silver-light border border-arch-silver-light'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-white border border-arch-silver-light rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-arch-gold text-arch-black' : 'text-arch-slate'}`}
                >
                  <GridFour className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-full transition-all ${viewMode === 'masonry' ? 'bg-arch-gold text-arch-black' : 'text-arch-slate'}`}
                >
                  <SquaresFour className="w-5 h-5" />
                </button>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Projects Grid */}
          <motion.div
            layout
            className={
              viewMode === 'masonry'
                ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5 lg:auto-rows-[260px]'
                : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6'
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isHero={index % 3 === 0}
                  viewMode={viewMode}
                />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-arch-slate text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-arch-silver-light">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15000+', label: 'Projects Completed' },
              { number: '15000+', label: 'Happy Clients' },
              { number: '30+', label: 'Years Experience' },
              { number: '50k', label: 'Sqm Factory' }
            ].map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text font-display">{stat.number}</div>
                <div className="text-arch-slate mt-2">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      {/* Brochure Download Section */}
      <section className="py-16 md:py-24 bg-arch-platinum">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-3xl bg-white border border-arch-silver-light shadow-soft overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />

              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 bg-arch-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-7 h-7 text-arch-gold" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-arch-charcoal mb-2">
                    Company Brochure
                  </h3>
                  <p className="text-arch-slate max-w-lg">
                    Download our comprehensive brochure featuring our full range of <Link to="/services" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">services</Link>,
                    project portfolio, and <Link to="/about" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">company</Link> capabilities.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <motion.a
                  href="/brochure.pdf"
                  download="Architectural-Aluminium-Brochure.pdf"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-amber transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <DownloadSimple className="w-5 h-5" />
                  Download Brochure
                </motion.a>
                <motion.a
                  href="/business-profile.pdf"
                  download="Architectural-Aluminium-Business-Profile.pdf"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-arch-silver text-arch-charcoal font-medium rounded-full hover:border-arch-gold hover:text-arch-gold transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <DownloadSimple className="w-5 h-5" />
                  Business Profile
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-arch-platinum to-arch-snow">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-arch-charcoal mb-6 font-display">
              Have a Project in Mind?
            </h2>
            <p className="text-arch-slate text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our premium <Link to="/services" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">aluminium solutions</Link>.
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
      
    </>
  );
}
