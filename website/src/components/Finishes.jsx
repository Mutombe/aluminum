import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Palette, Sparkles, Image, Droplets, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AnimatedSection } from './AnimatedComponents';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";


// Import anodised images - place your images in src/assets/anodised/
import a1 from '/a1.png';
import a2 from '/a2.png';
import a3 from '/a3.png';
import a4 from '/a4.png';
import a5 from '/a5.png';
import a6 from '/a6.png';

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

// Anodised Finishes - FrostUltra Range
const anodisedFinishes = [
  { name: 'Silver FrostUltra', hex: '#C0C0C0', gradient: 'linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #A0A0A0 100%)', image: a5 },
  { name: 'Champagne FrostUltra', hex: '#C9B896', gradient: 'linear-gradient(135deg, #D4C4A8 0%, #C9B896 50%, #B5A078 100%)', image: a4 },
  { name: 'Light Bronze FrostUltra', hex: '#A89078', gradient: 'linear-gradient(135deg, #BCA088 0%, #A89078 50%, #8B7355 100%)', image: a3 },
  { name: 'Medium Bronze FrostUltra', hex: '#6B5344', gradient: 'linear-gradient(135deg, #7D6355 0%, #6B5344 50%, #5A4535 100%)', image: a2 },
  { name: 'Dark Bronze FrostUltra', hex: '#3D2E25', gradient: 'linear-gradient(135deg, #4D3E35 0%, #3D2E25 50%, #2D1E15 100%)', image: a1 },
  { name: 'Black FrostUltra', hex: '#1A1515', gradient: 'linear-gradient(135deg, #2A2525 0%, #1A1515 50%, #0A0505 100%)', image: a6 },
];

// Anodised Card Component with Image/Color Toggle
const AnodisedCard = ({ finish, isSelected, onSelect }) => {
  const [showImage, setShowImage] = useState(true); // Default to image

  return (
    <div className="group relative rounded-2xl overflow-hidden">
      {/* Main Display Area */}
      <div 
        className="aspect-[4/3] relative cursor-pointer"
        onClick={onSelect}
      >
        {/* Image View */}
        <AnimatePresence mode="wait">
          {showImage ? (
            <motion.div
              key="image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img 
                src={finish.image} 
                alt={finish.name}
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-arch-black/60 via-transparent to-transparent" />
            </motion.div>
          ) : (
            <motion.div
              key="color"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
              style={{ background: finish.gradient }}
            >
              {/* Metallic shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              {/* Ribbed texture overlay to simulate aluminium profiles */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    transparent 0px,
                    transparent 8px,
                    rgba(255,255,255,0.1) 8px,
                    rgba(255,255,255,0.1) 10px,
                    transparent 10px,
                    transparent 18px
                  )`
                }}
              />
              
              {/* Gradient overlay for text */}
              <div className="absolute inset-0 bg-gradient-to-t from-arch-black/70 via-transparent to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Selection ring */}
        {isSelected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 ring-4 ring-arch-gold ring-inset pointer-events-none z-10"
          />
        )}
      </div>
      
      {/* Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowImage(!showImage);
        }}
        className="absolute top-3 right-3 z-20 p-2.5 rounded-xl bg-arch-black/70 backdrop-blur-sm border border-arch-graphite hover:border-arch-gold hover:bg-arch-black/90 transition-all duration-300 group/btn"
        title={showImage ? 'Show color swatch' : 'Show product image'}
      >
        {showImage ? (
          <Droplets size={18} className="text-arch-silver-light group-hover/btn:text-arch-gold transition-colors" />
        ) : (
          <Image size={18} className="text-arch-silver-light group-hover/btn:text-arch-gold transition-colors" />
        )}
      </button>
      
      {/* View indicator badge */}
      <div className="absolute top-3 left-3 z-20">
        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md ${
          showImage 
            ? 'bg-arch-black/70 text-arch-silver-light' 
            : 'bg-arch-gold/20 text-arch-gold border border-arch-gold/50'
        }`}>
          {showImage ? 'Product' : 'Color'}
        </span>
      </div>
      
      {/* Label */}
      <div 
        className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-arch-black via-arch-black/90 to-transparent cursor-pointer z-10"
        onClick={onSelect}
      >
        <h4 className="font-display text-lg font-semibold text-arch-white group-hover:text-arch-gold transition-colors">
          {finish.name.replace(' FrostUltra', '')}
        </h4>
        <p className="text-arch-silver-dark text-sm">
          FrostUltra Anodised
        </p>
      </div>
    </div>
  );
};

const AluminiumFinishes = () => {
  const [activeTab, setActiveTab] = useState('powdercoat');
  const [selectedColor, setSelectedColor] = useState(null);
  const navigate = useNavigate();

  const handleRequestQuote = () => {
    if (selectedColor) {
      const finishType = activeTab === 'powdercoat' ? 'Powder Coat' : 'Anodised';
      const params = new URLSearchParams({
        finish: selectedColor.name,
        finishType: finishType,
        hex: selectedColor.hex
      });
      navigate(`/contact?${params.toString()}#quote-form`);
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
            Choose from our extensive range of powder coat colors and anodised finishes
            to perfectly complement your architectural vision.
          </p>
        </AnimatedSection>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-arch-silver/30 shadow-soft">
            <button
              onClick={() => setActiveTab('powdercoat')}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeTab === 'powdercoat'
                  ? 'bg-arch-black text-white'
                  : 'text-arch-graphite hover:text-arch-charcoal'
              }`}
            >
              <Palette size={18} />
              <span className="hidden sm:inline">Powder Coat</span>
              <span className="sm:hidden">Powder</span>
            </button>
            <button
              onClick={() => setActiveTab('anodised')}
              className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeTab === 'anodised'
                  ? 'bg-arch-black text-white'
                  : 'text-arch-graphite hover:text-arch-charcoal'
              }`}
            >
              <Sparkles size={18} />
              Anodised
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'powdercoat' ? (
            <motion.div
              key="powdercoat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
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
                          <IoCheckmarkDone className={color.category === 'light' ? 'text-white' : 'text-arch-black'} size={14} />
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
            </motion.div>
          ) : (
            <motion.div
              key="anodised"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* View Mode Toggle Hint */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-arch-silver-light text-arch-slate text-sm">
                  <span className="hidden sm:inline">Click</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-arch-platinum border border-arch-silver-light">
                    <Droplets size={14} className="text-arch-gold" />
                    <span className="text-arch-slate">/</span>
                    <Image size={14} className="text-arch-gold" />
                  </span>
                  <span>to switch view</span>
                </div>
              </div>

              {/* Anodised Finishes - Premium Display */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {anodisedFinishes.map((finish, index) => (
                  <motion.div
                    key={finish.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <AnodisedCard
                      finish={finish}
                      isSelected={selectedColor?.name === finish.name}
                      onSelect={() => setSelectedColor(selectedColor?.name === finish.name ? null : finish)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Selected Anodised Finish Info */}
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
                          className="w-12 h-12 md:w-16 md:h-16 rounded-xl shadow-lg flex-shrink-0 overflow-hidden"
                          style={{ background: selectedColor.gradient }}
                        />
                        <div className="text-left">
                          <h4 className="font-display text-base md:text-lg font-semibold text-arch-charcoal">
                            {selectedColor.name.replace(' FrostUltra', '')}
                          </h4>
                          <p className="text-arch-steel text-sm">
                            FrostUltra Anodised Finish
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

              {/* Anodised Info Box */}
              <div className="mt-12 p-6 md:p-8 rounded-2xl bg-white border border-arch-silver-light shadow-soft">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-arch-charcoal mb-4">
                      FrostUltra Anodised Finish
                    </h3>
                    <p className="text-arch-slate mb-4 text-sm md:text-base">
                      Our premium anodised finishes provide exceptional durability and a sophisticated
                      metallic appearance. The electrochemical process creates a protective oxide layer
                      that is integral to the aluminium itself.
                    </p>
                    <ul className="space-y-2">
                      {['Superior corrosion resistance', 'Scratch and wear resistant', 'UV stable - won\'t fade', 'Environmentally friendly'].map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-arch-slate text-sm md:text-base">
                          <IoCheckmarkDone className="text-arch-gold flex-shrink-0" size={16} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
                    {/* Use one of the anodised images */}
                    <img
                      src={a1}
                      alt="Anodised aluminium profiles"
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arch-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-arch-white font-display text-sm">Premium Anodised Profiles</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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