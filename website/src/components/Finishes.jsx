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

// --- Realistic metal-finish rendering ---------------------------------------
const clampByte = (n) => Math.max(0, Math.min(255, Math.round(n)));

// Lighten (+) or darken (-) a hex colour, returns an rgb() string
const shade = (hex, amt) => {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgb(${clampByte(r + amt)}, ${clampByte(g + amt)}, ${clampByte(b + amt)})`;
};

// Derive the physical finish from the colour name.
// gloss = sharp bright specular, satin = soft, matt = diffuse + fine grain.
const getFinish = (name) => {
  const n = name.toLowerCase();
  if (n.includes('gloss')) return 'gloss';
  if (n.includes('matt')) return 'matt';
  return 'satin'; // satin + un-suffixed (PC / Charcoal) read as satin
};

const FINISH = {
  gloss: { light: 60, dark: 48, spec: 0.5, grain: 0, sweep: 0.55 },
  satin: { light: 34, dark: 32, spec: 0.26, grain: 0, sweep: 0.32 },
  matt: { light: 16, dark: 18, spec: 0.08, grain: 0.22, sweep: 0.16 },
};

// One swatch surface — composes base sheen, specular highlight, optional matt
// grain, a bevelled edge, and a light-rake sweep on hover.
const MetalSurface = ({ hex, name }) => {
  const f = FINISH[getFinish(name)];

  return (
    <>
      {/* Base: diagonal sheen from a lit top-left to a shaded bottom-right —
          simulates a light source raking across a smooth painted-metal face. */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${shade(hex, f.light)} 0%, ${hex} 46%, ${shade(hex, -f.dark)} 100%)`,
        }}
      />

      {/* Specular highlight — soft elliptical glow near the top-left */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 62% 48% at 28% 22%, rgba(255,255,255,${f.spec}) 0%, rgba(255,255,255,0) 60%)`,
        }}
      />

      {/* Matt grain — fine speckle, only on matt finishes */}
      {f.grain > 0 && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(0,0,0,0.5) 0.5px, transparent 0.5px), radial-gradient(rgba(255,255,255,0.4) 0.5px, transparent 0.5px)',
            backgroundSize: '3px 3px, 3px 3px',
            backgroundPosition: '0 0, 1.5px 1.5px',
            opacity: f.grain,
            mixBlendMode: 'overlay',
          }}
        />
      )}

      {/* Bevelled edge — lit top edge + shaded bottom = a raised physical chip */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow:
            'inset 0 1px 1px rgba(255,255,255,0.45), inset 0 -3px 7px rgba(0,0,0,0.32), inset 0 0 0 1px rgba(0,0,0,0.06)',
        }}
      />

      {/* Light-rake sweep on hover — a bright band that passes across the metal */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div
          className="absolute top-0 bottom-0 -left-1/3 w-1/3 -skew-x-12 -translate-x-[250%] group-hover:translate-x-[450%] transition-transform duration-700 ease-out"
          style={{
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,${f.sweep}), transparent)`,
          }}
        />
      </div>
    </>
  );
};

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
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-arch-black mt-4 mb-6">
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
                    className={`group relative aspect-square rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-black/25 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 min-h-[44px] ${
                      selectedColor?.name === color.name ? 'ring-2 ring-arch-gold ring-offset-2 ring-offset-arch-platinum scale-105' : ''
                    }`}
                  >
                    {/* Realistic metal finish surface */}
                    <MetalSurface hex={color.hex} name={color.name} />

                    {/* Selected indicator */}
                    {selectedColor?.name === color.name && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute inset-0 flex items-center justify-center z-10"
                      >
                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg ${
                          color.category === 'light' ? 'bg-arch-black/90' : 'bg-arch-white/90'
                        }`}>
                          <Checks className={color.category === 'light' ? 'text-white' : 'text-arch-black'} size={14} />
                        </div>
                      </motion.div>
                    )}

                    {/* Hover label */}
                    <div className={`absolute inset-x-0 bottom-0 z-10 p-1.5 md:p-2 bg-gradient-to-t ${
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
                        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-lg flex-shrink-0 overflow-hidden">
                          <MetalSurface hex={selectedColor.hex} name={selectedColor.name} />
                        </div>
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