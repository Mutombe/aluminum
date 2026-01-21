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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const articlesPerPage = 6;

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'company', label: 'Company News' },
    { id: 'projects', label: 'Project Updates' },
    { id: 'industry', label: 'Industry Insights' },
    { id: 'awards', label: 'Awards & Recognition' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Architectural Aluminium Celebrates 30 Years of Excellence',
      excerpt: 'Marking three decades of industry leadership in Zimbabwe\'s aluminium fabrication sector. From a backyard operation to the nation\'s premier fabricator.',
      category: 'company',
      date: '2024-06-15',
      readTime: '5 min read',
      // Vision: Celebration photo with team, company milestone imagery
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      featured: true,
      author: 'Communications Team'
    },
    {
      id: 2,
      title: 'New CBZ Bank Headquarters Project Complete',
      excerpt: 'We\'re proud to announce the successful completion of the curtain walling installation at CBZ Bank\'s new headquarters in Harare CBD.',
      category: 'projects',
      date: '2024-05-28',
      readTime: '3 min read',
      // Vision: Modern bank building exterior with glass facade
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      featured: false,
      author: 'Project Management'
    },
    {
      id: 3,
      title: 'Aluminium Industry Trends for 2024',
      excerpt: 'Exploring the latest trends in aluminium fabrication, including sustainable practices, new alloys, and advanced coating technologies.',
      category: 'industry',
      date: '2024-05-15',
      readTime: '7 min read',
      // Vision: Modern aluminium profiles, industry imagery
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      featured: false,
      author: 'Technical Team'
    },
    {
      id: 4,
      title: 'Excellence Award from CIFOZ',
      excerpt: 'Architectural Aluminium receives the prestigious Excellence in Fabrication Award from the Construction Industry Federation of Zimbabwe.',
      category: 'awards',
      date: '2024-04-20',
      readTime: '4 min read',
      // Vision: Award ceremony, trophy presentation
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&q=80',
      featured: false,
      author: 'Communications Team'
    },
    {
      id: 5,
      title: 'Sam Levy\'s Village Expansion Project',
      excerpt: 'Our team completes shopfitting work for 12 new retail units at the popular Sam Levy\'s Village shopping centre in Borrowdale.',
      category: 'projects',
      date: '2024-04-05',
      readTime: '4 min read',
      // Vision: Shopping mall interior, retail spaces
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80',
      featured: false,
      author: 'Project Management'
    },
    {
      id: 6,
      title: 'Investing in New CNC Technology',
      excerpt: 'Architectural Aluminium invests in state-of-the-art CNC machinery to enhance precision and production capacity.',
      category: 'company',
      date: '2024-03-18',
      readTime: '5 min read',
      // Vision: Modern CNC machinery, manufacturing facility
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
      featured: false,
      author: 'Operations Team'
    },
    {
      id: 7,
      title: 'Sustainable Building Materials: The Future',
      excerpt: 'How aluminium\'s recyclability and durability make it a key material for sustainable construction in Africa.',
      category: 'industry',
      date: '2024-03-01',
      readTime: '6 min read',
      // Vision: Green building, sustainable architecture
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
      featured: false,
      author: 'Technical Team'
    },
    {
      id: 8,
      title: 'Rainbow Towers Renovation Success',
      excerpt: 'The iconic Rainbow Towers hotel receives a complete window and facade upgrade by our expert installation team.',
      category: 'projects',
      date: '2024-02-15',
      readTime: '4 min read',
      // Vision: Hotel building, modern architecture
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      featured: false,
      author: 'Project Management'
    },
    {
      id: 9,
      title: 'Partnership with Leading Glass Supplier',
      excerpt: 'Announcing our new strategic partnership with a leading South African glass manufacturer for premium glazing solutions.',
      category: 'company',
      date: '2024-02-01',
      readTime: '3 min read',
      // Vision: Business partnership, handshake, glass products
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      featured: false,
      author: 'Communications Team'
    },
    {
      id: 10,
      title: 'Best Aluminium Fabricator Award 2023',
      excerpt: 'For the fifth consecutive year, Architectural Aluminium wins the Best Aluminium Fabricator award at the Zimbabwe Construction Awards.',
      category: 'awards',
      date: '2024-01-20',
      readTime: '4 min read',
      // Vision: Award trophy, celebration
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
      featured: false,
      author: 'Communications Team'
    }
  ];

  // Filter and search
  const filteredArticles = articles
    .filter(article => 
      selectedCategory === 'all' || article.category === selectedCategory
    )
    .filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  // Featured article (most recent featured)
  const featuredArticle = articles.find(a => a.featured);

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

      {/* Hero Section with featured article */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background image from featured article */}
        <div className="absolute inset-0">
          <motion.img 
            src={featuredArticle?.image}
            alt={featuredArticle?.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/70 to-arch-black/30" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arch-gold/50 to-transparent" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20 w-full">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-arch-gold text-arch-black text-sm font-mono rounded-full">
                  Featured
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full">
                  {categories.find(c => c.id === featuredArticle?.category)?.label}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1]">
                {featuredArticle?.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-arch-silver mb-8 max-w-2xl">
                {featuredArticle?.excerpt}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <span className="flex items-center gap-2 text-arch-silver-dark">
                  <Calendar className="w-4 h-4" />
                  {formatDate(featuredArticle?.date || '')}
                </span>
                <span className="flex items-center gap-2 text-arch-silver-dark">
                  <Clock className="w-4 h-4" />
                  {featuredArticle?.readTime}
                </span>
                <span className="flex items-center gap-2 text-arch-silver-dark">
                  <BookOpen className="w-4 h-4" />
                  {featuredArticle?.author}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read Full Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-arch-black/90 backdrop-blur-xl border-y border-white/5">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-arch-gold text-arch-black font-medium'
                      : 'bg-white/5 text-arch-silver hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-arch-silver-dark" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-white placeholder-arch-silver-dark focus:outline-none focus:border-arch-gold/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24 bg-arch-charcoal">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery + currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-arch-graphite rounded-2xl overflow-hidden border border-white/5 hover:border-arch-gold/30 transition-all"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arch-graphite to-transparent opacity-50" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-arch-black/70 backdrop-blur-sm text-arch-gold text-xs font-mono rounded-full">
                        {categories.find(c => c.id === article.category)?.label}
                      </span>
                    </div>

                    {/* Share button */}
                    <button className="absolute top-4 right-4 w-8 h-8 bg-arch-black/70 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-label="Share article">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4 text-arch-silver-dark text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(article.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-arch-gold transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-arch-silver-dark mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read more link */}
                    <motion.a
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-arch-gold font-semibold group/link"
                      whileHover={{ x: 4 }}
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-arch-silver-dark mx-auto mb-4" />
              <p className="text-arch-silver text-lg mb-2">No articles found</p>
              <p className="text-arch-silver-dark">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-3 bg-white/5 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 rounded-full text-sm font-medium transition-all ${
                      currentPage === i + 1
                        ? 'bg-arch-gold text-arch-black'
                        : 'bg-white/5 text-arch-silver hover:bg-white/10'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="p-3 bg-white/5 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 md:py-32 bg-arch-black relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arch-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-arch-silver/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedSection>
              <div className="w-16 h-16 bg-arch-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Rss className="w-8 h-8 text-arch-gold" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Stay Updated
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-xl text-arch-silver mb-10">
                Subscribe to our newsletter for the latest news, project updates, 
                and industry insights delivered to your inbox.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-arch-silver-dark focus:outline-none focus:border-arch-gold/50 transition-colors"
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
              <p className="text-arch-silver-dark text-sm mt-4">
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
