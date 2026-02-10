import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  ChevronLeft,
  ChevronRight,
  Search,
  Rss,
  Share2,
  BookOpen,
  Play,
  X,
  ZoomIn
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import SEO from '../components/SEO';

const News = () => {
  const [modalPageIndex, setModalPageIndex] = useState(null);

  const articles = [
    {
      id: 1,
      title: 'Architectural Aluminium Featured in Structure and Design Magazine',
      excerpt: 'We are proud to announce our feature in Issue 54 of Structure and Design, Zimbabwe\'s leading infrastructure development magazine. The feature showcases our exclusive new colour range, highlighting our commitment to innovation and quality in aluminium fabrication.',
      category: 'company',
      date: '2023-12-15',
      readTime: '3 min read',
      image: '/sd.webp',
      featured: true,
      author: 'Communications Team'
    }
  ];

  const featuredArticle = articles[0];

  const magazinePages = [
    { src: '/download(22).jpg', alt: 'Magazine feature - Exclusive new colour palette introduction' },
    { src: '/download(23).jpg', alt: 'Magazine feature - Dynamic colour range and trends' },
    { src: '/download(24).jpg', alt: 'Magazine feature - Corporate projects showcase' },
    { src: '/download(25).jpg', alt: 'Magazine feature - Commercial buildings portfolio' },
    { src: '/download(26).jpg', alt: 'Magazine feature - Going beyond borders' },
    { src: '/download(38).jpg', alt: 'Magazine feature - Residential and commercial projects' },
  ];

  const videos = [
    {
      id: '0mVOGZgjXiw',
      embedUrl: 'https://www.youtube-nocookie.com/embed/0mVOGZgjXiw',
      title: 'Aluminium Fabrication Process',
      description: 'A quick look at how aluminium profiles are cut, assembled, and finished for modern construction.',
    },
    {
      id: 'IPCNysGwi3U',
      embedUrl: 'https://www.youtube-nocookie.com/embed/IPCNysGwi3U',
      title: 'Aluminium Window Installation',
      description: 'Watch how precision-engineered aluminium windows are fitted into residential and commercial buildings.',
    },
    {
      id: 'X8Eh-vI29Pg',
      embedUrl: 'https://www.youtube-nocookie.com/embed/X8Eh-vI29Pg',
      title: 'Modern Aluminium Facades',
      description: 'Exploring the role of aluminium curtain walling and facades in contemporary architecture.',
    },
    {
      id: 'oIC2SlEk7TU',
      embedUrl: 'https://www.youtube-nocookie.com/embed/oIC2SlEk7TU',
      title: 'Aluminium in Construction',
      description: 'How aluminium materials are transforming the construction industry with durability and style.',
    },
    {
      id: 'Me_3kyI7SEw',
      embedUrl: 'https://www.youtube-nocookie.com/embed/Me_3kyI7SEw',
      title: 'Building with Aluminium',
      description: 'From shopfitting to curtain walling — the versatility of aluminium in modern building projects.',
    },
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <SEO 
        title="News & Insights | Architectural Aluminium"
        description="Stay updated with the latest news, project updates, and industry insights from Zimbabwe's leading aluminium fabrication company."
        keywords="aluminium news Zimbabwe, construction industry updates, shopfitting news, architectural aluminium projects"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-arch-snow">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-arch-snow to-arch-platinum" />
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              rgba(212, 175, 55, 0.1) 50px,
              rgba(212, 175, 55, 0.1) 51px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              rgba(212, 175, 55, 0.1) 50px,
              rgba(212, 175, 55, 0.1) 51px
            )`
          }} />
          {/* Decorative glows */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-arch-gold/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-arch-silver/20 rounded-full blur-3xl" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arch-gold/50 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedSection>
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                News & Updates
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-arch-charcoal mt-4 mb-6 leading-[1.1]">
                Latest from
                <span className="block gradient-text">Architectural Aluminium</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-arch-slate mb-8 max-w-2xl mx-auto">
                Stay informed with our latest news, project updates, and industry insights.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="py-16 md:py-24 bg-arch-platinum">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Magazine Card - Portrait orientation */}
                <div className="flex justify-center md:justify-end">
                  <motion.div
                    className="relative w-64 md:w-72 group cursor-pointer"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setModalPageIndex(0)}
                  >
                    {/* Shadow effect */}
                    <div className="absolute -inset-4 bg-arch-gold/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Magazine image */}
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-arch-silver-light shadow-medium">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Hover overlay with View Details */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                        <span className="px-4 py-2 bg-arch-gold text-arch-black text-sm font-semibold rounded-full flex items-center gap-2 shadow-lg">
                          <BookOpen className="w-4 h-4" />
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Featured badge */}
                    <div className="absolute -top-3 -right-3 px-3 py-1 bg-arch-gold text-arch-black text-xs font-mono font-semibold rounded-full shadow-lg">
                      Featured
                    </div>
                  </motion.div>
                </div>

                {/* Article content */}
                <div className="text-left">
                  <span className="inline-block px-3 py-1 bg-arch-gold/10 text-arch-gold text-xs font-mono rounded-full mb-4">
                    Company News
                  </span>

                  <h2 className="text-2xl md:text-3xl font-display font-bold text-arch-charcoal mb-4">
                    {featuredArticle.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-arch-slate text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredArticle.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <p className="text-arch-slate mb-6">
                    We are proud to announce our feature in Issue 54 of <strong className="text-arch-charcoal">Structure and Design</strong>,
                    Zimbabwe's premier infrastructure development magazine. This feature represents a significant milestone
                    in our journey as Zimbabwe's leading aluminium fabrication company.
                  </p>

                  <p className="text-arch-slate mb-6">
                    The feature highlights our <strong className="text-arch-gold">Exclusive New Colour Range</strong>, showcasing the latest
                    additions to our powder coating options including Grey Gloss, Dove Grey Satin, Grey Matt, Oak Gloss, Sand Gloss, and Grey Satin.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <motion.button
                      onClick={() => setModalPageIndex(0)}
                      className="inline-flex items-center px-6 py-3 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      View Full Feature
                    </motion.button>
                    <motion.a
                      href="/finishes"
                      className="inline-flex items-center px-6 py-3 bg-white text-arch-charcoal font-semibold rounded-full hover:bg-arch-silver-light border border-arch-silver-light transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Colour Range
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Magazine Modal */}
      <AnimatePresence>
        {modalPageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setModalPageIndex(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setModalPageIndex(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Page counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 md:top-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-mono z-50">
              {modalPageIndex + 1} / {magazinePages.length}
            </div>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalPageIndex((modalPageIndex - 1 + magazinePages.length) % magazinePages.length);
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalPageIndex((modalPageIndex + 1) % magazinePages.length);
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Main image */}
            <div className="flex items-center justify-center w-full h-full px-16 py-20" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={modalPageIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.2 }}
                  src={magazinePages[modalPageIndex].src}
                  alt={magazinePages[modalPageIndex].alt}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
              </AnimatePresence>
            </div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-xl z-50">
              {magazinePages.map((page, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalPageIndex(i);
                  }}
                  className={`w-12 h-16 rounded-md overflow-hidden border-2 transition-all ${
                    i === modalPageIndex
                      ? 'border-arch-gold opacity-100 scale-105'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img src={page.src} alt={page.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industry Videos Section */}
      <section className="py-16 md:py-24 bg-arch-platinum">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center mb-12">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">Watch & Learn</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-arch-charcoal mt-4 mb-4">
              Industry Insights
            </h2>
            <p className="text-arch-slate max-w-2xl mx-auto">
              Explore videos about aluminium in architecture, construction materials, and modern building techniques.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6" staggerDelay={0.1}>
            {videos.map((video) => (
              <StaggerItem key={video.id}>
                <div className="bg-white rounded-2xl overflow-hidden border border-arch-silver-light shadow-soft h-full flex flex-col">
                  <div className="relative aspect-[9/16]">
                    <iframe
                      src={video.embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-sm font-display font-bold text-arch-charcoal mb-1">
                      {video.title}
                    </h3>
                    <p className="text-arch-slate text-xs flex-1">
                      {video.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-arch-platinum to-arch-snow relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arch-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-arch-silver/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-arch-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Rss className="w-8 h-8 text-arch-gold" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-arch-charcoal mb-6">
                Stay Updated
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-arch-slate mb-10">
                Subscribe to our newsletter for the latest news, project updates,
                and industry insights delivered to your inbox.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white border border-arch-silver-light rounded-full text-arch-charcoal placeholder-arch-slate focus:outline-none focus:border-arch-gold/50 transition-colors"
                />
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors whitespace-nowrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </form>
              <p className="text-arch-slate text-sm mt-4">
                No spam, unsubscribe at any time.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;