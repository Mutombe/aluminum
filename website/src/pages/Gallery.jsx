import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn,
  Filter,
  Grid3X3,
  LayoutGrid,
  Download,
  Share2,
  Maximize2
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import SEO from '../components/SEO';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState('masonry'); // masonry, grid
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'shopfitting', label: 'Shopfitting' },
    { id: 'curtain-walling', label: 'Curtain Walling' },
    { id: 'interior', label: 'Interiors' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'commercial',
      title: 'CBZ Bank Headquarters',
      location: 'Harare CBD',
      year: '2023',
      // Vision: Modern glass office building with sleek aluminium curtain walling, reflecting the sky
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      size: 'large'
    },
    {
      id: 2,
      category: 'shopfitting',
      title: 'Edgars Flagship Store',
      location: 'Sam Levy\'s Village',
      year: '2023',
      // Vision: High-end retail interior with sleek aluminium display fixtures and modern lighting
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      size: 'medium'
    },
    {
      id: 3,
      category: 'residential',
      title: 'Borrowdale Luxury Villa',
      location: 'Borrowdale',
      year: '2022',
      // Vision: Modern luxury home with floor-to-ceiling aluminium windows overlooking a garden
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      size: 'medium'
    },
    {
      id: 4,
      category: 'curtain-walling',
      title: 'Old Mutual Tower',
      location: 'Harare',
      year: '2021',
      // Vision: Dramatic shot of reflective curtain walling on a modern skyscraper
      image: '1.avif',
      size: 'large'
    },
    {
      id: 5,
      category: 'interior',
      title: 'First Capital Bank',
      location: 'Eastgate Mall',
      year: '2023',
      // Vision: Modern bank interior with aluminium partitions, teller stations, and suspended ceilings
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      size: 'small'
    },
    {
      id: 6,
      category: 'shopfitting',
      title: 'OK Zimbabwe Supermarket',
      location: 'Avondale',
      year: '2022',
      // Vision: Modern supermarket interior with custom shelving and branded aluminium fixtures
      image: '17.webp',
      size: 'small'
    },
    {
      id: 7,
      category: 'commercial',
      title: 'Meikles Hotel Renovation',
      location: 'Harare',
      year: '2023',
      // Vision: Elegant hotel facade with restored aluminium framework and modern glass
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      size: 'medium'
    },
    {
      id: 8,
      category: 'residential',
      title: 'Glen Lorne Estate',
      location: 'Glen Lorne',
      year: '2022',
      // Vision: Upscale residential development with matching aluminium windows and doors
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      size: 'small'
    },
    {
      id: 9,
      category: 'curtain-walling',
      title: 'Rainbow Towers',
      location: 'Harare',
      year: '2021',
      // Vision: Iconic building with extensive curtain walling catching the sunset
      image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&q=80',
      size: 'large'
    },
    {
      id: 10,
      category: 'interior',
      title: 'CABS Banking Hall',
      location: 'Julius Nyerere Way',
      year: '2023',
      // Vision: Spacious banking hall with aluminium ceiling systems and modern workstations
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80',
      size: 'medium'
    },
    {
      id: 11,
      category: 'shopfitting',
      title: 'Truworths Fashion Outlet',
      location: 'Joina City',
      year: '2022',
      // Vision: Fashionable retail space with custom aluminium display systems
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      size: 'small'
    },
    {
      id: 12,
      category: 'commercial',
      title: 'Econet Head Office',
      location: 'Msasa',
      year: '2023',
      // Vision: Modern tech company headquarters with striking aluminium and glass facade
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
      size: 'medium'
    },
    {
      id: 13,
      category: 'residential',
      title: 'Highlands Apartments',
      location: 'Highlands',
      year: '2021',
      // Vision: Modern apartment complex with uniform aluminium balcony systems
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      size: 'small'
    },
    {
      id: 14,
      category: 'curtain-walling',
      title: 'NicOz Diamond House',
      location: 'Union Avenue',
      year: '2022',
      // Vision: Commercial building with distinctive diamond-pattern curtain walling
      image: '1.jpg',
      size: 'large'
    },
    {
      id: 15,
      category: 'interior',
      title: 'Standard Chartered Bank',
      location: 'Nelson Mandela Ave',
      year: '2023',
      // Vision: Premium banking environment with glass partitions and aluminium accents
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
      size: 'medium'
    },
    {
      id: 16,
      category: 'shopfitting',
      title: 'Clicks Pharmacy',
      location: 'Borrowdale Village',
      year: '2022',
      // Vision: Modern pharmacy/retail space with custom aluminium shelving units
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      size: 'small'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const currentIndex = selectedImage 
    ? filteredItems.findIndex(item => item.id === selectedImage.id)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      <SEO 
        title="Gallery | Architectural Aluminium"
        description="Explore our portfolio of premium aluminium projects across Zimbabwe. From commercial buildings to residential homes, see our craftsmanship in action."
        keywords="aluminium gallery, project portfolio, Zimbabwe construction, shopfitting examples"
      />

      {/* Hero Section - Immersive full-width design */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background with parallax images */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-20">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 1 }}
                className="relative overflow-hidden"
              >
                <img
                  src={galleryItems[i]?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-arch-gold/30 to-transparent"
              style={{ top: `${(i + 1) * 15}%`, width: '100%' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1.5 }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-32">
          <AnimatedSection>
            <span className="inline-block px-4 py-2 bg-arch-gold/10 border border-arch-gold/30 rounded-full text-arch-gold text-sm font-mono mb-8">
              Portfolio Gallery
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-arch-charcoal mb-6 leading-[1.1]">
              Our Work
              <span className="block gradient-text">Speaks for Itself</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-arch-slate max-w-2xl">
              Explore three decades of excellence in aluminium fabrication,
              shopfitting, and architectural solutions across Zimbabwe and beyond.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <AnimatedSection delay={0.3} className="mt-12">
            <div className="flex flex-wrap gap-8 md:gap-16">
              <div>
                <span className="block text-4xl font-display font-bold text-arch-gold">1,402+</span>
                <span className="text-arch-slate text-sm">Completed Projects</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-arch-charcoal">16</span>
                <span className="text-arch-slate text-sm">Project Categories</span>
              </div>
              <div>
                <span className="block text-4xl font-display font-bold text-arch-charcoal">30+</span>
                <span className="text-arch-slate text-sm">Years of Excellence</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-arch-charcoal/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-arch-gold rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Filter & View Controls */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-y border-arch-silver-light">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Category filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              <Filter className="w-4 h-4 text-arch-slate flex-shrink-0 hidden sm:block" />
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all min-h-[44px] flex items-center ${
                    selectedCategory === cat.id
                      ? 'bg-arch-gold text-arch-black font-medium'
                      : 'bg-arch-platinum text-arch-slate hover:bg-arch-silver-light border border-arch-silver-light'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

            {/* View mode toggles */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-arch-slate text-sm mr-2 hidden sm:inline">View:</span>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-arch-gold text-arch-black'
                    : 'bg-arch-platinum text-arch-slate hover:bg-arch-silver-light'
                }`}
                aria-label="Masonry view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid'
                    ? 'bg-arch-gold text-arch-black'
                    : 'bg-arch-platinum text-arch-slate hover:bg-arch-silver-light'
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-arch-platinum">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={
                viewMode === 'masonry'
                  ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4'
                  : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
              }
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className={`
                    group relative overflow-hidden rounded-xl cursor-pointer
                    ${viewMode === 'masonry' ? 'break-inside-avoid' : ''}
                    ${viewMode === 'grid' ? 'aspect-[4/3]' : ''}
                  `}
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className={`
                      w-full object-cover transition-transform duration-700 group-hover:scale-110
                      ${viewMode === 'masonry' 
                        ? item.size === 'large' ? 'h-96' : item.size === 'medium' ? 'h-72' : 'h-56'
                        : 'h-full'
                      }
                    `}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-arch-gold text-xs font-mono uppercase tracking-wider mb-1">
                      {categories.find(c => c.id === item.category)?.label}
                    </span>
                    <h3 className="text-white font-display font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-arch-silver-dark text-sm">
                      {item.location} • {item.year}
                    </p>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-arch-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-arch-slate text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-arch-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation buttons */}
            {currentIndex > 0 && (
              <button
                className="absolute left-4 md:left-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {currentIndex < filteredItems.length - 1 && (
              <button
                className="absolute right-4 md:right-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            {/* Image container */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-arch-black/90 to-transparent rounded-b-lg">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-arch-gold text-sm font-mono uppercase tracking-wider">
                      {categories.find(c => c.id === selectedImage.category)?.label}
                    </span>
                    <h3 className="text-white font-display font-bold text-2xl mt-1">
                      {selectedImage.title}
                    </h3>
                    <p className="text-arch-silver mt-1">
                      {selectedImage.location} • {selectedImage.year}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Share">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Download">
                      <Download className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" aria-label="Fullscreen">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Image counter */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-arch-black/70 rounded-full text-white text-sm font-mono">
                {currentIndex + 1} / {filteredItems.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-arch-platinum to-arch-snow relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-arch-charcoal mb-6">
              Ready to Start Your
              <span className="gradient-text"> Project?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-xl text-arch-slate max-w-2xl mx-auto mb-10">
              Let us bring your vision to life with our expert aluminium fabrication
              and installation services.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                href="tel:+263778498911"
                className="inline-flex items-center justify-center px-8 py-4 border border-arch-silver text-arch-charcoal rounded-full hover:bg-arch-silver-light transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Call +263 778 498 911
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Gallery;
