import React from 'react';
import { motion } from 'framer-motion';

// Isometric beam connection pattern - inspired by structural detailing
export const BeamConnectionPattern = ({ className = '', opacity = 0.1 }) => (
  <svg 
    className={className} 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    {/* Vertical beam */}
    <path d="M100 20 L120 30 L120 170 L100 180 L80 170 L80 30 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M80 30 L100 40 L120 30" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M80 170 L100 160 L120 170" stroke="currentColor" strokeWidth="1" fill="none" />
    
    {/* Horizontal beam left */}
    <path d="M20 90 L80 90 L80 110 L20 110 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M20 90 L30 80 L90 80 L80 90" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M30 80 L30 100 L20 110" stroke="currentColor" strokeWidth="1" fill="none" />
    
    {/* Horizontal beam right */}
    <path d="M120 90 L180 90 L180 110 L120 110 Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M120 90 L130 80 L190 80 L180 90" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M190 80 L190 100 L180 110" stroke="currentColor" strokeWidth="1" fill="none" />
    
    {/* Connection bolts */}
    <circle cx="90" cy="95" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="90" cy="105" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="110" cy="95" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="110" cy="105" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

// Aluminium profile cross-section pattern
export const AluminiumProfilePattern = ({ className = '', opacity = 0.15 }) => (
  <svg 
    className={className} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity }}
  >
    {/* Outer frame */}
    <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="1" fill="none" />
    {/* Inner channels */}
    <rect x="20" y="20" width="25" height="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <rect x="55" y="20" width="25" height="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <rect x="20" y="55" width="25" height="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <rect x="55" y="55" width="25" height="25" stroke="currentColor" strokeWidth="0.5" fill="none" />
    {/* Center cross */}
    <line x1="50" y1="20" x2="50" y2="80" stroke="currentColor" strokeWidth="1" />
    <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Geometric grid pattern for backgrounds
export const GeometricGridPattern = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg 
      className="w-full h-full" 
      viewBox="0 0 100 100" 
      preserveAspectRatio="none"
      fill="none"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.1" />
        </pattern>
        <pattern id="gridLarge" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#gridLarge)" />
    </svg>
  </div>
);

// Isometric cube pattern
export const IsometricPattern = ({ className = '', color = '#D4AF37' }) => (
  <svg 
    className={className}
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="isometric" width="30" height="52" patternUnits="userSpaceOnUse">
        {/* Isometric cube */}
        <path d="M15 0 L30 8.66 L30 26 L15 34.66 L0 26 L0 8.66 Z" stroke={color} strokeWidth="0.5" fill="none" opacity="0.2" />
        <path d="M15 0 L15 17.32 M0 8.66 L15 17.32 L30 8.66" stroke={color} strokeWidth="0.5" fill="none" opacity="0.2" />
        
        <path d="M15 17.32 L30 26 L30 43.3 L15 52 L0 43.3 L0 26 Z" stroke={color} strokeWidth="0.5" fill="none" opacity="0.15" transform="translate(0, 17.32)" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#isometric)" />
  </svg>
);

// Animated blueprint lines
export const BlueprintLines = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(5)].map((_, i) => (
        <motion.line
          key={i}
          x1="0%"
          y1={`${20 + i * 15}%`}
          x2="100%"
          y2={`${20 + i * 15}%`}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: i * 0.2, ease: "easeOut" }}
        />
      ))}
    </svg>
  </div>
);

// Corner bracket decorations
export const CornerBrackets = ({ className = '', size = 40, color = '#D4AF37' }) => (
  <>
    {/* Top left */}
    <svg 
      className={`absolute top-0 left-0 ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 40 40"
    >
      <path d="M0 40 L0 0 L40 0" stroke={color} strokeWidth="2" fill="none" />
      <path d="M0 30 L0 10 L10 10 L10 0" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
    
    {/* Top right */}
    <svg 
      className={`absolute top-0 right-0 ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 40 40"
    >
      <path d="M0 0 L40 0 L40 40" stroke={color} strokeWidth="2" fill="none" />
      <path d="M30 0 L30 10 L40 10 L40 30" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
    
    {/* Bottom left */}
    <svg 
      className={`absolute bottom-0 left-0 ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 40 40"
    >
      <path d="M0 0 L0 40 L40 40" stroke={color} strokeWidth="2" fill="none" />
      <path d="M0 10 L0 30 L10 30 L10 40" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
    
    {/* Bottom right */}
    <svg 
      className={`absolute bottom-0 right-0 ${className}`} 
      width={size} 
      height={size} 
      viewBox="0 0 40 40"
    >
      <path d="M40 0 L40 40 L0 40" stroke={color} strokeWidth="2" fill="none" />
      <path d="M40 10 L40 30 L30 30 L30 40" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
  </>
);

// Animated structural joint
export const AnimatedJoint = ({ className = '' }) => (
  <motion.svg 
    className={className}
    viewBox="0 0 120 120" 
    fill="none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Main vertical beam */}
    <motion.path 
      d="M50 0 L70 0 L70 120 L50 120 Z" 
      stroke="#D4AF37" 
      strokeWidth="1.5" 
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    
    {/* Horizontal beam */}
    <motion.path 
      d="M0 50 L120 50 L120 70 L0 70 Z" 
      stroke="#C0C0C0" 
      strokeWidth="1.5" 
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
    />
    
    {/* Gusset plate */}
    <motion.path 
      d="M45 45 L75 45 L75 75 L45 75 Z" 
      stroke="#D4AF37" 
      strokeWidth="2" 
      fill="rgba(212, 175, 55, 0.1)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    />
    
    {/* Bolts */}
    {[[52, 52], [68, 52], [52, 68], [68, 68]].map(([cx, cy], i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={cy}
        r="3"
        stroke="#D4AF37"
        strokeWidth="1"
        fill="none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
      />
    ))}
  </motion.svg>
);

// Section divider with architectural pattern
export const ArchitecturalDivider = ({ className = '' }) => (
  <div className={`w-full py-8 ${className}`}>
    <div className="flex items-center justify-center gap-4">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-arch-gold/30 to-arch-gold/50" />
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
        <path d="M0 10 L15 2 L30 10 L45 2 L60 10" stroke="#D4AF37" strokeWidth="1" fill="none" />
        <path d="M0 10 L15 18 L30 10 L45 18 L60 10" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="30" cy="10" r="3" fill="#D4AF37" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-arch-gold/30 to-arch-gold/50" />
    </div>
  </div>
);

// Floating technical drawings for hero backgrounds
export const TechnicalDrawingBg = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    {/* Large faded structural drawing - responsive size */}
    <motion.div
      className="absolute -right-10 -top-10 md:-right-20 md:-top-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-[0.05] md:opacity-[0.03]"
      animate={{ rotate: 360 }}
      transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-arch-gold">
        <BeamConnectionPattern className="w-full h-full" opacity={1} />
      </svg>
    </motion.div>
    
    {/* Floating profile sections - visible on mobile */}
    <motion.div
      className="absolute left-4 md:left-10 bottom-32 md:bottom-20 w-20 h-20 md:w-32 md:h-32 opacity-[0.07] md:opacity-[0.05]"
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <AluminiumProfilePattern className="w-full h-full text-arch-silver" opacity={1} />
    </motion.div>
    
    <motion.div
      className="absolute right-4 md:right-1/4 top-1/2 md:top-1/3 w-16 h-16 md:w-24 md:h-24 opacity-[0.06] md:opacity-[0.04]"
      animate={{ y: [10, -10, 10], rotate: [0, 5, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <AluminiumProfilePattern className="w-full h-full text-arch-gold" opacity={1} />
    </motion.div>
  </div>
);

// Window frame pattern for service cards
export const WindowFramePattern = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 100 140" fill="none">
    {/* Outer frame */}
    <rect x="5" y="5" width="90" height="130" stroke="currentColor" strokeWidth="2" fill="none" />
    {/* Inner frame */}
    <rect x="10" y="10" width="80" height="120" stroke="currentColor" strokeWidth="1" fill="none" />
    {/* Horizontal divider */}
    <line x1="10" y1="70" x2="90" y2="70" stroke="currentColor" strokeWidth="2" />
    {/* Vertical divider */}
    <line x1="50" y1="10" x2="50" y2="130" stroke="currentColor" strokeWidth="2" />
    {/* Glass panes indication */}
    <rect x="15" y="15" width="30" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    <rect x="55" y="15" width="30" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    <rect x="15" y="75" width="30" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    <rect x="55" y="75" width="30" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3" />
    {/* Handle */}
    <circle cx="85" cy="70" r="3" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

// Curtain wall pattern
export const CurtainWallPattern = ({ className = '', rows = 4, cols = 6 }) => (
  <svg className={className} viewBox={`0 0 ${cols * 30} ${rows * 40}`} fill="none">
    {[...Array(rows)].map((_, row) =>
      [...Array(cols)].map((_, col) => (
        <g key={`${row}-${col}`}>
          <rect
            x={col * 30 + 2}
            y={row * 40 + 2}
            width="26"
            height="36"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity={0.3 + Math.random() * 0.3}
          />
          {/* Glass reflection */}
          <line
            x1={col * 30 + 5}
            y1={row * 40 + 5}
            x2={col * 30 + 15}
            y2={row * 40 + 15}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.2"
          />
        </g>
      ))
    )}
    {/* Mullions */}
    {[...Array(cols + 1)].map((_, i) => (
      <line
        key={`v-${i}`}
        x1={i * 30}
        y1="0"
        x2={i * 30}
        y2={rows * 40}
        stroke="currentColor"
        strokeWidth="2"
      />
    ))}
    {[...Array(rows + 1)].map((_, i) => (
      <line
        key={`h-${i}`}
        x1="0"
        y1={i * 40}
        x2={cols * 30}
        y2={i * 40}
        stroke="currentColor"
        strokeWidth="2"
      />
    ))}
  </svg>
);

// Floating hexagonal grid pattern
export const HexagonalGrid = ({ className = '', opacity = 0.05 }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
    <defs>
      <pattern id="hexPattern" x="0" y="0" width="20" height="17.32" patternUnits="userSpaceOnUse">
        <path 
          d="M10 0 L20 5.77 L20 11.55 L10 17.32 L0 11.55 L0 5.77 Z" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          fill="none"
        />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#hexPattern)" />
  </svg>
);

// Isometric cube grid
export const IsometricCubeGrid = ({ className = '', opacity = 0.05 }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" style={{ opacity }}>
    <defs>
      <pattern id="isoPattern" x="0" y="0" width="30" height="26" patternUnits="userSpaceOnUse">
        <path d="M15 0 L30 7.5 L30 22.5 L15 30 L0 22.5 L0 7.5 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M15 0 L15 15 M0 7.5 L15 15 L30 7.5" stroke="currentColor" strokeWidth="0.3" fill="none" />
      </pattern>
    </defs>
    <rect width="100" height="100" fill="url(#isoPattern)" />
  </svg>
);

// Circuit board inspired pattern
export const CircuitPattern = ({ className = '', color = '#D4AF37' }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 200 200" 
    fill="none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Main traces */}
    <motion.path 
      d="M0 50 H80 V100 H120 V150 H200" 
      stroke={color} 
      strokeWidth="1" 
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path 
      d="M50 0 V40 H100 V80 H150 V120 H180 V200" 
      stroke={color} 
      strokeWidth="1" 
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
    />
    <motion.path 
      d="M0 150 H40 V100 H60 V60 H100" 
      stroke={color} 
      strokeWidth="0.5" 
      fill="none"
      opacity={0.5}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
    />
    {/* Nodes */}
    {[[80, 50], [120, 100], [100, 80], [150, 120], [40, 100], [60, 60]].map(([cx, cy], i) => (
      <motion.circle 
        key={i}
        cx={cx} 
        cy={cy} 
        r="3" 
        fill={color}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
      />
    ))}
  </motion.svg>
);

// Floating dots constellation
export const ConstellationPattern = ({ className = '' }) => {
  const dots = [
    { x: 20, y: 30 }, { x: 50, y: 20 }, { x: 80, y: 40 },
    { x: 30, y: 60 }, { x: 60, y: 70 }, { x: 90, y: 55 },
    { x: 15, y: 85 }, { x: 45, y: 90 }, { x: 75, y: 80 },
  ];
  
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      {/* Connection lines */}
      <motion.path
        d={`M${dots[0].x} ${dots[0].y} L${dots[1].x} ${dots[1].y} L${dots[2].x} ${dots[2].y}`}
        stroke="#D4AF37"
        strokeWidth="0.5"
        opacity={0.3}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d={`M${dots[3].x} ${dots[3].y} L${dots[4].x} ${dots[4].y} L${dots[5].x} ${dots[5].y}`}
        stroke="#D4AF37"
        strokeWidth="0.5"
        opacity={0.3}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      <motion.path
        d={`M${dots[1].x} ${dots[1].y} L${dots[4].x} ${dots[4].y} L${dots[7].x} ${dots[7].y}`}
        stroke="#C0C0C0"
        strokeWidth="0.3"
        opacity={0.2}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
      />
      {/* Dots */}
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={i % 3 === 0 ? 2 : 1}
          fill={i % 2 === 0 ? "#D4AF37" : "#C0C0C0"}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: i % 3 === 0 ? 0.8 : 0.5 }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
        />
      ))}
    </svg>
  );
};

// Animated measurement lines (like technical drawings)
export const MeasurementLines = ({ className = '', vertical = false }) => (
  <motion.svg 
    className={className} 
    viewBox={vertical ? "0 0 40 200" : "0 0 200 40"} 
    fill="none"
  >
    {vertical ? (
      <>
        <motion.line x1="20" y1="10" x2="20" y2="190" stroke="#D4AF37" strokeWidth="1" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
        <path d="M15 10 H25 M15 190 H25" stroke="#D4AF37" strokeWidth="1" />
        <motion.line x1="10" y1="50" x2="30" y2="50" stroke="#D4AF37" strokeWidth="0.5" opacity={0.5}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />
        <motion.line x1="10" y1="100" x2="30" y2="100" stroke="#D4AF37" strokeWidth="0.5" opacity={0.5}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.5 }} />
        <motion.line x1="10" y1="150" x2="30" y2="150" stroke="#D4AF37" strokeWidth="0.5" opacity={0.5}
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.9, duration: 0.5 }} />
      </>
    ) : (
      <>
        <motion.line x1="10" y1="20" x2="190" y2="20" stroke="#D4AF37" strokeWidth="1"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
        <path d="M10 15 V25 M190 15 V25" stroke="#D4AF37" strokeWidth="1" />
        <motion.line x1="50" y1="10" x2="50" y2="30" stroke="#D4AF37" strokeWidth="0.5" opacity={0.5}
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.5, duration: 0.5 }} />
        <motion.line x1="100" y1="10" x2="100" y2="30" stroke="#D4AF37" strokeWidth="0.5" opacity={0.5}
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.7, duration: 0.5 }} />
        <motion.line x1="150" y1="10" x2="150" y2="30" stroke="#D4AF37" strokeWidth="0.5" opacity={0.5}
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.9, duration: 0.5 }} />
      </>
    )}
  </motion.svg>
);

// Rotating geometric ring
export const GeometricRing = ({ className = '', size = 200 }) => (
  <motion.svg 
    className={className}
    width={size} 
    height={size} 
    viewBox="0 0 200 200"
    animate={{ rotate: 360 }}
    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="100" cy="100" r="90" stroke="#D4AF37" strokeWidth="0.5" fill="none" opacity={0.3} />
    <circle cx="100" cy="100" r="70" stroke="#C0C0C0" strokeWidth="0.5" fill="none" opacity={0.2} />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 70 * Math.cos(rad);
      const y1 = 100 + 70 * Math.sin(rad);
      const x2 = 100 + 90 * Math.cos(rad);
      const y2 = 100 + 90 * Math.sin(rad);
      return (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4AF37" strokeWidth="1" opacity={0.5} />
      );
    })}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 100 + 80 * Math.cos(rad);
      const cy = 100 + 80 * Math.sin(rad);
      return <circle key={i} cx={cx} cy={cy} r="3" fill="#D4AF37" opacity={0.6} />;
    })}
  </motion.svg>
);

// Cross-section profile pattern
export const CrossSectionPattern = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 120 80" fill="none">
    {/* I-beam cross section */}
    <path 
      d="M20 10 H60 V20 H45 V60 H60 V70 H20 V60 H35 V20 H20 Z" 
      stroke="#D4AF37" 
      strokeWidth="1.5" 
      fill="none"
    />
    {/* Dimension lines */}
    <path d="M15 10 V70 M65 10 V70" stroke="#D4AF37" strokeWidth="0.5" opacity={0.5} strokeDasharray="2 2" />
    <path d="M20 5 H60 M20 75 H60" stroke="#D4AF37" strokeWidth="0.5" opacity={0.5} strokeDasharray="2 2" />
    {/* Center marks */}
    <path d="M40 35 L40 45 M35 40 H45" stroke="#D4AF37" strokeWidth="0.5" opacity={0.7} />
    {/* L-angle cross section */}
    <path 
      d="M80 20 H110 V30 H90 V70 H80 Z" 
      stroke="#C0C0C0" 
      strokeWidth="1" 
      fill="none"
    />
  </svg>
);

// Interactive floating particles
export const FloatingParticles = ({ className = '', count = 20 }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.id % 3 === 0 ? '#D4AF37' : '#C0C0C0',
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Layered angular shapes
export const AngularLayers = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none">
    <motion.polygon 
      points="100,20 180,80 150,180 50,180 20,80"
      stroke="#D4AF37"
      strokeWidth="1"
      fill="none"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.3 }}
      transition={{ duration: 1 }}
    />
    <motion.polygon 
      points="100,40 160,85 140,160 60,160 40,85"
      stroke="#D4AF37"
      strokeWidth="0.5"
      fill="none"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.5 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.polygon 
      points="100,60 140,90 125,140 75,140 60,90"
      stroke="#C0C0C0"
      strokeWidth="0.5"
      fill="none"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.4 }}
      transition={{ duration: 1, delay: 0.4 }}
    />
    <motion.circle 
      cx="100" cy="100" r="5"
      fill="#D4AF37"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.8, duration: 0.3 }}
    />
  </svg>
);

// Animated grid lines (like blueprint paper)
export const BlueprintGrid = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
    <svg className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D4AF37" strokeWidth="0.3" opacity="0.1" />
        </pattern>
        <pattern id="largeGrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="url(#smallGrid)" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#largeGrid)" />
    </svg>
  </div>
);

export default {
  BeamConnectionPattern,
  AluminiumProfilePattern,
  GeometricGridPattern,
  IsometricPattern,
  BlueprintLines,
  CornerBrackets,
  AnimatedJoint,
  ArchitecturalDivider,
  TechnicalDrawingBg,
  WindowFramePattern,
  CurtainWallPattern
};