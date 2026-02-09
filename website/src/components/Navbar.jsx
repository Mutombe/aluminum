import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Phone, ChevronDown, Building2, FileDown, Layers, DoorOpen, Store, Armchair, Home, Building } from 'lucide-react';
import { useSearch } from '../context/SearchContext';

const navLinks = [
  { name: 'Home', path: '/' },
  {
    name: 'About',
    path: '/about',
    dropdown: [
      { name: 'Our Company', path: '/about', icon: Building2 },
      { name: 'Business Profile', path: '/AA Company Profile 2023 web.pdf', external: true, icon: FileDown },
      {
        name: 'What We Offer',
        path: '/services',
        icon: Layers,
        children: [
          { name: 'Fenestration', path: '/services/fenestration', icon: DoorOpen },
          { name: 'Shopfitting', path: '/services/shopfitting', icon: Store },
          { name: 'Building Interiors', path: '/services/interiors', icon: Armchair },
          { name: 'Residential', path: '/services/residential', icon: Home },
          { name: 'Commercial Exteriors', path: '/services/exteriors', icon: Building }
        ]
      }
    ]
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Careers', path: '/careers' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { openSearch } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openSearch]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10 flex items-center gap-3 group">
              <div className="relative w-32 h-10 md:w-44 md:h-12 flex items-center justify-center">
                {/* Stylized AA Logo */}
                <img src="/logo-light.png" alt="AA Logo" loading="eager" className="w-28 h-12 md:w-34 md:h-16" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => {
                // Links from Careers onwards (index 3+) get gold color
                const isGoldLink = index >= 3;
                return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-arch-gold'
                        : isGoldLink
                          ? 'text-arch-gold hover:text-arch-amber'
                          : 'text-arch-graphite hover:text-arch-gold'
                    }`}
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-0 mt-2 bg-white rounded-xl overflow-hidden shadow-medium border border-arch-silver/30 ${
                          link.dropdown.some(item => item.children) ? 'w-72' : 'w-56'
                        }`}
                      >
                        {link.dropdown.map((item) => (
                          <div key={item.name}>
                            {item.external ? (
                              <a
                                href={item.path}
                                download
                                className="flex items-center gap-3 px-4 py-3 text-sm text-arch-graphite hover:text-arch-gold hover:bg-arch-platinum transition-colors duration-200"
                              >
                                {item.icon && <item.icon size={16} className="text-arch-gold/70 flex-shrink-0" />}
                                {item.name}
                              </a>
                            ) : (
                              <Link
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 text-sm hover:text-arch-gold hover:bg-arch-platinum transition-colors duration-200 ${
                                  item.children ? 'font-semibold text-arch-charcoal' : 'text-arch-graphite'
                                }`}
                              >
                                {item.icon && <item.icon size={16} className="text-arch-gold/70 flex-shrink-0" />}
                                {item.name}
                              </Link>
                            )}
                            {/* Nested children (e.g. service sublinks) */}
                            {item.children && (
                              <div className="border-t border-arch-silver/20">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    to={child.path}
                                    className="flex items-center gap-3 pl-8 pr-4 py-2.5 text-sm text-arch-slate hover:text-arch-gold hover:bg-arch-platinum/60 transition-colors duration-200"
                                  >
                                    {child.icon && <child.icon size={14} className="text-arch-gold/60 flex-shrink-0" />}
                                    {child.name}
                                  </Link>
                                ))}
                                {/* Lupane Timbers - under services */}
                                <div className="border-t border-arch-silver/20 my-1" />
                                <a
                                  href="https://www.lupanetimbers.co.zw"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-3 pl-8 pr-4 py-2.5 text-sm font-medium text-arch-gold hover:text-arch-amber hover:bg-arch-platinum/50 transition-colors duration-200"
                                >
                                  <img
                                    src="/lupane.png"
                                    alt="Lupane Timbers"
                                    className="w-4 h-4 object-contain"
                                  />
                                  <span>Lupane Timbers</span>
                                </a>
                              </div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )})}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <button
                onClick={openSearch}
                className="p-2 text-arch-graphite hover:text-arch-gold transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Phone (Desktop only) */}
              <a
                href="tel:+263778498911"
                className="hidden md:flex items-center gap-2 text-arch-gold hover:text-arch-amber transition-colors duration-300"
              >
                <Phone size={18} />
                <span className="text-sm font-medium">+263 778 498 911</span>
              </a>

              {/* CTA Button (Desktop) */}
              <Link
                to="/contact"
                className="hidden md:block magnetic-btn bg-arch-black text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-arch-charcoal transition-colors duration-300"
              >
                <span>Get Quote</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-arch-graphite hover:text-arch-gold transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-arch-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Nav Links */}
                <nav className="flex-1 overflow-y-auto">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-4 text-2xl font-display font-semibold border-b border-arch-silver-light transition-colors duration-300 ${
                          location.pathname === link.path
                            ? 'text-arch-gold'
                            : 'text-arch-charcoal hover:text-arch-gold'
                        }`}
                      >
                        {link.name}
                      </Link>
                      {/* Mobile dropdown sub-items */}
                      {link.dropdown && (
                        <div className="pl-4 border-b border-arch-silver-light pb-2">
                          {link.dropdown.map((item) => (
                            <div key={item.name}>
                              {item.external ? (
                                <a
                                  href={item.path}
                                  download
                                  className="flex items-center gap-3 py-2.5 text-base text-arch-slate hover:text-arch-gold transition-colors duration-200"
                                >
                                  {item.icon && <item.icon size={16} className="text-arch-gold/70 flex-shrink-0" />}
                                  {item.name}
                                </a>
                              ) : (
                                <Link
                                  to={item.path}
                                  className={`flex items-center gap-3 py-2.5 text-base hover:text-arch-gold transition-colors duration-200 ${
                                    item.children ? 'font-semibold text-arch-charcoal mt-2' : 'text-arch-slate'
                                  }`}
                                >
                                  {item.icon && <item.icon size={16} className="text-arch-gold/70 flex-shrink-0" />}
                                  {item.name}
                                </Link>
                              )}
                              {/* Nested children */}
                              {item.children && (
                                <div className="pl-4">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.name}
                                      to={child.path}
                                      className="flex items-center gap-3 py-2 text-sm text-arch-slate hover:text-arch-gold transition-colors duration-200"
                                    >
                                      {child.icon && <child.icon size={14} className="text-arch-gold/60 flex-shrink-0" />}
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                  {/* Lupane Timbers - Mobile Menu */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                  >
                    <a
                      href="https://www.lupanetimbers.co.zw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 py-4 text-xl font-display font-semibold border-b border-arch-silver-light text-arch-gold hover:text-arch-amber transition-colors duration-300"
                    >
                      <img 
                        src="/lupane.png" 
                        alt="Lupane Timbers" 
                        className="w-6 h-6 object-contain"
                      />
                      <span>Lupane Timbers</span>
                    </a>
                  </motion.div>
                </nav>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 pt-8 border-t border-arch-silver-light"
                >
                  <a
                    href="tel:+263778498911"
                    className="flex items-center gap-3 text-arch-graphite hover:text-arch-gold transition-colors duration-300"
                  >
                    <Phone size={18} />
                    <span>+263 778 498 911</span>
                  </a>

                  <Link
                    to="/contact"
                    className="block w-full text-center bg-arch-black text-white px-6 py-3 rounded-full font-semibold hover:bg-arch-charcoal transition-colors duration-300"
                  >
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;