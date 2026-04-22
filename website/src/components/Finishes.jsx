import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Checks } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from './AnimatedComponents';

// Powder Coat Colors - New Colour Range
const powderCoatColors = [
  { name: 'Grey Gloss', hex: '#5A6872', category: 'grey' },
  { name: 'Dove Grey Satin', hex: '#8A9990', category: 'grey' },
  { name: 'Grey Matt', hex: '#A89888', category: 'earth' },
  { name: 'Oak Gloss', hex: '#B09860', category: 'earth' },
  { name: 'Sand Gloss', hex: '#A8A088', category: 'earth' },
  { name: 'Grey Satin', hex: '#888888', category: 'grey' },
  { name: 'Charcoal Grey', hex: '#36454F', category: 'grey' },
  { name: 'Bronze PC', hex: '#8C7853', category: 'earth' },
  { name: 'Natural PC', hex: '#D4D6D9', category: 'earth' },
  { name: 'Black Matt', hex: '#1C1C1C', category: 'dark' },
  { name: 'White Gloss', hex: '#FFFFFF', category: 'light' },
  { name: 'White Matt', hex: '#F5F5F5', category: 'light' },
];

const AluminiumFinishes = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const navigate = useNavigate();

  const handleRequestQuote = () => {
    if (selectedColor) {
      const params = new URLSearchParams({
        finish: selectedColor.name,
        finishType: 'Powder Coat',
        hex: selectedColor.hex
      });
      navigate(`/get-quote?${params.toString()}`);
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-arch-platinum overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
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
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
            Finishes & Colors
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-black mt-4 mb-6">
            Premium Aluminium
            <span className="block gradient-text">Finishes</span>
          </h2>
          <p className="text-arch-steel text-lg">
            Choose from our extensive range of powder coat colors
            to perfectly complement your architectural vision.
          </p>
        </AnimatedSection>

        <div>
            {/* Powder Coat Color Grid - Centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-4xl">
                {powderCoatColors.map((color, index) => (
                  <motion.button
                    key={color.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => setSelectedColor(selectedColor?.name === color.name ? null : color)}
                    className={`group relative aspect-square rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/20 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 min-h-[44px] ${
                      selectedColor?.name === color.name ? 'ring-2 ring-arch-gold ring-offset-2 ring-offset-arch-platinum scale-105' : ''
                    } ${color.category === 'light' ? 'border border-arch-silver/50' : ''}`}
                    style={{ backgroundColor: color.hex }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Selected indicator */}
                    {selectedColor?.name === color.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                          color.category === 'light' ? 'bg-arch-black/90' : 'bg-arch-white/90'
                        }`}>
                          <Checks className={color.category === 'light' ? 'text-white' : 'text-arch-black'} size={14} />
                        </div>
                      </motion.div>
                    )}
                    
                    {/* Hover label */}
                    <div className={`absolute inset-x-0 bottom-0 p-1.5 md:p-2 bg-gradient-to-t ${
                      color.category === 'light' ? 'from-black/60' : 'from-black/80'
                    } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <p className="text-[8px] md:text-[10px] text-white text-center font-medium truncate">
                        {color.name.replace('Matt ', '')}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
              </div>

              {/* Selected Color Info */}
              <AnimatePresence>
                {selectedColor && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-10 p-4 md:p-6 rounded-2xl bg-white border border-arch-silver/30 shadow-soft max-w-lg mx-auto"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-lg flex-shrink-0 ${
                            selectedColor.category === 'light' ? 'border border-arch-silver/50' : ''
                          }`}
                          style={{ backgroundColor: selectedColor.hex }}
                        />
                        <div className="text-left">
                          <h4 className="font-display text-base md:text-lg font-semibold text-arch-charcoal">
                            {selectedColor.name}
                          </h4>
                          <p className="text-arch-steel text-sm">
                            Powder Coat Finish
                          </p>
                          <p className="text-arch-gold font-mono text-xs mt-1">
                            {selectedColor.hex.toUpperCase()}
                          </p>
                        </div>
                      </div>
                      <motion.button
                        onClick={handleRequestQuote}
                        className="flex items-center gap-2 px-4 py-2.5 bg-arch-black text-white font-semibold rounded-full text-sm hover:bg-arch-charcoal transition-colors whitespace-nowrap"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Get Quote
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3} className="text-center mt-16">
          <p className="text-arch-slate mb-6">
            Can't find the color you're looking for? We offer custom color matching.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-arch-gold hover:text-arch-amber transition-colors font-medium"
          >
            Request Custom Color
            <span>→</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AluminiumFinishes;