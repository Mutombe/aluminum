import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found | Architectural Aluminium"
        description="The page you're looking for doesn't exist."
      />

      <section className="min-h-screen flex items-center justify-center bg-arch-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {/* Floating shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-arch-gold/20 rounded-full"
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
              scale: { duration: 5, repeat: Infinity }
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-arch-silver/10 rounded-full"
            animate={{ 
              rotate: -360,
              scale: [1.1, 1, 1.1]
            }}
            transition={{ 
              rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
              scale: { duration: 7, repeat: Infinity }
            }}
          />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="relative z-10 text-center px-4">
          {/* Large 404 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[12rem] sm:text-[16rem] md:text-[20rem] font-display font-bold leading-none">
              <span className="gradient-text">4</span>
              <span className="text-arch-charcoal">0</span>
              <span className="gradient-text">4</span>
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="-mt-16 md:-mt-24"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Page Not Found
            </h2>
            <p className="text-arch-silver text-lg max-w-md mx-auto mb-10">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/"
                className="inline-flex items-center justify-center px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center px-8 py-4 border border-arch-silver/30 text-white rounded-full hover:bg-white/5 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </motion.div>
          </motion.div>

          {/* Search suggestion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12"
          >
            <p className="text-arch-silver-dark text-sm mb-4">
              Or try searching for what you need
            </p>
            <button 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-arch-silver hover:border-arch-gold/50 transition-colors"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
              <span>Press ⌘K to search</span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
