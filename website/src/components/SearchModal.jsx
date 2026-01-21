import React from 'react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, Briefcase, Newspaper, FolderOpen } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

const typeIcons = {
  page: FileText,
  service: Briefcase,
  project: FolderOpen,
  news: Newspaper,
  career: Briefcase,
  info: FileText
};

const typeLabels = {
  page: 'Page',
  service: 'Service',
  project: 'Project',
  news: 'News',
  career: 'Career',
  info: 'Info'
};

const SearchModal = () => {
  const { isSearchOpen, closeSearch, searchQuery, searchResults, performSearch } = useSearch();
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeSearch();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [closeSearch]);

  const handleResultClick = (path) => {
    closeSearch();
    navigate(path);
  };

  const handleKeyDown = (e, path) => {
    if (e.key === 'Enter') {
      handleResultClick(path);
    }
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-arch-black/80 backdrop-blur-xl"
            onClick={closeSearch}
          />

          {/* Search Container */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-arch-gold/20 via-arch-silver/10 to-arch-gold/20 rounded-2xl blur-xl" />

            <div className="relative glass rounded-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-4 p-6 border-b border-arch-graphite/50">
                <Search className="text-arch-gold" size={24} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search for services, projects, pages..."
                  value={searchQuery}
                  onChange={(e) => performSearch(e.target.value)}
                  className="flex-1 bg-transparent text-arch-white text-lg placeholder:text-arch-silver-dark focus:outline-none font-body"
                />
                <div className="flex items-center gap-2">
                  <kbd className="hidden sm:inline-block px-2 py-1 text-xs text-arch-silver-dark bg-arch-graphite rounded">
                    ESC
                  </kbd>
                  <button
                    onClick={closeSearch}
                    className="p-2 text-arch-silver-dark hover:text-arch-gold transition-colors duration-200"
                    aria-label="Close search"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Results */}
              <div className="max-h-[50vh] overflow-y-auto">
                {searchQuery && searchResults.length === 0 && (
                  <div className="p-8 text-center">
                    <p className="text-arch-silver-dark">
                      No results found for "<span className="text-arch-gold">{searchQuery}</span>"
                    </p>
                    <p className="text-sm text-arch-silver-dark/60 mt-2">
                      Try searching for services, projects, or contact information
                    </p>
                  </div>
                )}

                {searchResults.length > 0 && (
                  <ul className="py-2">
                    {searchResults.map((result, index) => {
                      const Icon = typeIcons[result.type] || FileText;
                      
                      return (
                        <motion.li
                          key={`${result.path}-${index}`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <button
                            onClick={() => handleResultClick(result.path)}
                            onKeyDown={(e) => handleKeyDown(e, result.path)}
                            className="w-full flex items-center gap-4 px-6 py-4 hover:bg-arch-gold/10 transition-colors duration-200 group text-left"
                          >
                            <div className="p-2 rounded-lg bg-arch-graphite group-hover:bg-arch-gold/20 transition-colors duration-200">
                              <Icon size={18} className="text-arch-gold" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-arch-white font-medium truncate group-hover:text-arch-gold transition-colors duration-200">
                                {result.title}
                              </p>
                              <p className="text-sm text-arch-silver-dark truncate">
                                {typeLabels[result.type]} · {result.path}
                              </p>
                            </div>
                            <ArrowRight 
                              size={16} 
                              className="text-arch-silver-dark group-hover:text-arch-gold group-hover:translate-x-1 transition-all duration-200" 
                            />
                          </button>
                        </motion.li>
                      );
                    })}
                  </ul>
                )}

                {/* Quick Links (when no search) */}
                {!searchQuery && (
                  <div className="p-6">
                    <p className="text-xs text-arch-silver-dark uppercase tracking-wider mb-4">
                      Quick Links
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: 'Services', path: '/services' },
                        { name: 'Projects', path: '/projects' },
                        { name: 'Get a Quote', path: '/contact' },
                        { name: 'Careers', path: '/careers' }
                      ].map((link) => (
                        <button
                          key={link.path}
                          onClick={() => handleResultClick(link.path)}
                          className="flex items-center justify-between p-3 rounded-lg bg-arch-graphite/50 hover:bg-arch-gold/10 text-arch-silver-light hover:text-arch-gold transition-all duration-200 group"
                        >
                          <span className="text-sm">{link.name}</span>
                          <ArrowRight 
                            size={14} 
                            className="group-hover:translate-x-1 transition-transform duration-200" 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="px-6 py-3 border-t border-arch-graphite/50 flex items-center justify-between text-xs text-arch-silver-dark">
                <span>Press <kbd className="px-1.5 py-0.5 bg-arch-graphite rounded mx-1">↵</kbd> to select</span>
                <span>
                  <kbd className="px-1.5 py-0.5 bg-arch-graphite rounded">⌘</kbd>
                  <kbd className="px-1.5 py-0.5 bg-arch-graphite rounded ml-0.5">K</kbd>
                  {' '}to search
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
