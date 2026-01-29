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
  BookOpen
} from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import SEO from '../components/SEO';

const News = () => {
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
                    className="relative w-64 md:w-72 group"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
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
                      {/* Subtle shine overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                    <motion.a
                      href="/finishes"
                      className="inline-flex items-center px-6 py-3 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Colour Range
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-white text-arch-charcoal font-semibold rounded-full hover:bg-arch-silver-light border border-arch-silver-light transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact Us
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
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