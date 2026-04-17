import React, { useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Star,
  CaretDown,
  Trophy,
  Users,
  BuildingOffice,
  Clock,
  CheckCircle,
  Quotes,
  Smiley,
  Factory,
  StarFour,
  ShieldCheck,
} from "@phosphor-icons/react";
import SEO from "../components/SEO";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  RevealText,
} from "../components/AnimatedComponents";
import {
  TechnicalDrawingBg,
  CornerBrackets,
  ArchitecturalDivider,
  CurtainWallPattern,
  BlueprintLines,
  AnimatedJoint,
  WindowFramePattern,
  BeamConnectionPattern,
  AluminiumProfilePattern,
} from "../components/ArchitecturalPatterns";
import AluminiumFinishes from "../components/Finishes";
import { companyInfo, services, projects } from "../data/content";

const heroImages = [
  {
    src: "/more/IMG_2361.jpeg",
    alt: "Precision aluminium fabrication and installation in progress",
  },
  {
    src: "/more/IMG_9173.jpeg",
    alt: "Industrial-scale aluminium window and door systems",
  },
  {
    src: "/firstmutual/untitled-561.JPG",
    alt: "First Mutual Park - structural glazing and aluminium systems",
  },
  {
    src: "/more/IMG_8993.jpeg",
    alt: "Full-height aluminium curtain wall system in reception",
  },
  {
    src: "/more/IMG_2362.jpeg",
    alt: "Bespoke black aluminium atrium structure with glass panels",
  },
];

const googleReviews = [
  {
    name: "Moreblessing Mhondiwa",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWm3Y0OA4A1qIu39bZtsEApBa2FBVB6MH3tFdrSwadH_Zsl38mYSA=s120-c-rp-mo-br100",
    rating: 5,
    text: "Awesome team, time conscious and the team is hardworking. Final products coming out as requested. I would engage Architectural Aluminium again and again for best Aluminium products.",
    date: "2024",
  },
  {
    name: "Robert Tarusenga",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWaIVMUHjUN3u1JDdpD3sUGrGpRkA9ENGxMixfK_rqlLfnpCfE=s120-c-rp-mo-ba3-br100",
    rating: 5,
    text: "Excellent and durable products. Friendly staff.",
    date: "2021",
  },
  {
    name: "Betros Mazarura",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJDPOudmDnAtfFjo7X4qgUM5ssMcZEjBV_Ymri4koqu-3TiGWU=s120-c-rp-mo-br100",
    rating: 5,
    text: "Excellent service. Highly recommended for all aluminium needs.",
    date: "2022",
  },
  {
    name: "Kennedy Mtetwa",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVS8d6N-TrsqEXNYufogf5uc8uxIDC0_Jabd2bpL7eC06F-eWYD=s120-c-rp-mo-ba6-br100",
    rating: 4,
    text: "Good quality products and reliable service delivery.",
    date: "2022",
  },
  {
    name: "adrian mukarati",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUgMOaCnOmDXDHGEWhIjZEx_IF4FGSWSA8JnwcR78Lg08B6iY0=s120-c-rp-mo-ba3-br100",
    rating: 4,
    text: "Professional team with quality aluminium solutions. Would recommend.",
    date: "2024",
  },
  {
    name: "Tawanda William Mukudu",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL0gmru93GXEkXdbo75c5IxrWR5cWQcHaUWJVOuPObvldQXPw=s120-c-rp-mo-ba2-br100",
    rating: 5,
    text: "Top-notch aluminium fabrication. The finished product exceeded expectations.",
    date: "2023",
  },
  {
    name: "kudzai mhembere",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVrnXn0guMC5R5ztfj0i1crsIcEJ1xL9G-PeXogqLPOlS4MTPQhdg=s120-c-rp-mo-ba4-br100",
    rating: 5,
    text: "Great company with solid products. Very happy with the outcome.",
    date: "2023",
  },
  {
    name: "Whitney Chidawanyika Mutinhima",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocI8TyfSFbWvY9Q_zFvt7kkFe-e6SJF2-eKx58Fdhsj0K_mE=s120-c-rp-mo-br100",
    rating: 4,
    text: "Good work on our project. Delivered on time and within budget.",
    date: "2021",
  },
  {
    name: "Tapiwa Masakusi",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJVc5dNANP-vNpU_AKpU3t6yzrAa-IpGfePNdBW4-msHee42Q=s120-c-rp-mo-br100",
    rating: 4,
    text: "Reliable aluminium supplier. Quality products for commercial projects.",
    date: "2021",
  },
  {
    name: "isaac tavengwa",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocIkNMuVWcCweRJaHWaHjF8O2gVb_UtDv5tiVpPuqlp7uSsZtLs=s120-c-rp-mo-br100",
    rating: 5,
    text: "Outstanding craftsmanship. The windows and doors are perfect.",
    date: "2021",
  },
  {
    name: "KUDZANAI TRUST MUKANDIWONA",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWLlHaks8tM6SQErOd0BDGOduDTJD4RHpg8Q4EhWQPH6oB5fOtH=s120-c-rp-mo-br100",
    rating: 5,
    text: "Best aluminium company in Harare. Premium quality products.",
    date: "2020",
  },
  {
    name: "Michael Chikwanda",
    avatar: null,
    rating: 5,
    text: "Architectural Aluminium delivered exceptional quality on our headquarters project. Their attention to detail and professionalism is unmatched in Zimbabwe.",
    date: "2023",
    company: "CBZ Holdings",
    role: "Facilities Director",
  },
  {
    name: "Susan Mpofu",
    avatar: null,
    rating: 5,
    text: "Working with the team was seamless from design to installation. They truly understand the retail environment and delivered beyond our expectations.",
    date: "2023",
    company: "Edgars Stores",
    role: "Operations Manager",
  },
  {
    name: "Robert Chinamasa",
    avatar: null,
    rating: 5,
    text: "The quality of their fenestration products has transformed our properties. We've used them exclusively for all our developments.",
    date: "2024",
    company: "Mashonaland Holdings",
    role: "Managing Director",
  },
];

function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[420px] p-6 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-lg select-none">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            weight={i < review.rating ? "fill" : "regular"}
            className={`w-4 h-4 ${i < review.rating ? 'text-arch-gold' : 'text-white/20'}`}
          />
        ))}
      </div>
      <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-4">
        "{review.text}"
      </p>
      <div className="flex items-center gap-3">
        {review.avatar ? (
          <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover border-2 border-white/20 pointer-events-none" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-arch-gold/30 flex items-center justify-center border-2 border-arch-gold/40">
            <span className="font-display font-bold text-arch-gold text-sm">
              {review.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-white text-sm">{review.name}</p>
          <p className="text-white/50 text-xs">
            {review.company ? `${review.role}, ${review.company}` : `Google Review · ${review.date}`}
          </p>
        </div>
      </div>
    </div>
  );
}

function ReviewMarquee({ reviews, direction = 'left', speed = 0.5 }) {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const isInteracting = useRef(false);
  const resumeTimeout = useRef(null);

  const tripled = [...reviews, ...reviews, ...reviews];

  const autoScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isInteracting.current) {
      animationRef.current = requestAnimationFrame(autoScroll);
      return;
    }

    const third = el.scrollWidth / 3;

    if (direction === 'left') {
      el.scrollLeft += speed;
      if (el.scrollLeft >= third * 2) {
        el.scrollLeft -= third;
      }
    } else {
      el.scrollLeft -= speed;
      if (el.scrollLeft <= 0) {
        el.scrollLeft += third;
      }
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  }, [direction, speed]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Start in the middle third so we can scroll both directions
    const third = el.scrollWidth / 3;
    el.scrollLeft = direction === 'left' ? third : third;

    animationRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, [autoScroll, direction]);

  const handleInteractionStart = () => {
    isInteracting.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const handleInteractionEnd = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      isInteracting.current = false;
    }, 3000);
  };

  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
      style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      onMouseDown={handleInteractionStart}
      onMouseUp={handleInteractionEnd}
      onMouseLeave={handleInteractionEnd}
    >
      {tripled.map((review, index) => (
        <ReviewCard key={`${direction}-${index}`} review={review} />
      ))}
    </div>
  );
}

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO
        title="Home"
        description="Architectural Aluminium - Zimbabwe's leading fabricator of aluminium, shop fitting and joinery products since 1994. Premium fenestration, shopfitting, and commercial building solutions."
        keywords={[
          "aluminium manufacturer Zimbabwe",
          "shop fitting Harare",
          "aluminium windows",
          "aluminium doors",
          "curtain walling",
        ]}
        url="/"
      />

      {/* 
  HERO SECTION WITH SEAMLESS LEFT-TO-RIGHT FADE
  
  Architecture:
  - Layer 1 (Bottom): Full-width image carousel
  - Layer 2: Gradient overlay that's solid on left, fades to transparent on right
  - Layer 3: Content (text, stats, etc.)
  
  This creates the effect where the dark background "dissipates" into the images
*/}

      <section className="relative min-h-screen overflow-hidden bg-arch-snow">
        {/* ============================================
      LAYER 1: FULL-WIDTH IMAGE CAROUSEL (BACKGROUND)
      Images span the entire section, sitting at the bottom layer
      ============================================ */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Image Loop - Now full width */}
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.05,
                zIndex: index === currentImageIndex ? 10 : 0,
              }}
              transition={{
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 6, ease: "linear" },
              }}
              className="absolute inset-0"
            >
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover" loading="eager" />
            </motion.div>
          ))}

          {/* Subtle darkening overlay on images */}
          <div className="absolute inset-0 bg-arch-black/30 z-20" />
        </motion.div>

        {/* ============================================
      LAYER 2: GRADIENT OVERLAY - THE MAGIC FADE
      Solid on left (covering content area), fading to transparent on right
      This creates the "dissipating" effect
      Mobile: Full coverage for readability, Desktop: Side fade effect
      ============================================ */}
        {/* Mobile: Warm cinematic dark overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none lg:hidden"
          style={{
            background: `linear-gradient(
        to bottom,
        rgba(15, 12, 8, 0.92) 0%,
        rgba(18, 14, 10, 0.82) 20%,
        rgba(22, 17, 12, 0.65) 45%,
        rgba(26, 20, 14, 0.50) 65%,
        rgba(20, 16, 11, 0.70) 85%,
        rgba(15, 12, 8, 0.80) 100%
      )`,
          }}
        />
        {/* Mobile: Subtle vignette */}
        <div
          className="absolute inset-0 z-20 pointer-events-none lg:hidden"
          style={{
            background: `radial-gradient(
        ellipse 80% 60% at 50% 40%,
        transparent 0%,
        rgba(12, 9, 6, 0.35) 100%
      )`,
          }}
        />
        {/* Desktop: Cinematic dark gradient — bottom-up vignette + soft left scrim, full-bleed image */}
        <div
          className="absolute inset-0 z-20 pointer-events-none hidden lg:block"
          style={{
            background: `linear-gradient(
        to top,
        rgba(0, 0, 0, 0.70) 0%,
        rgba(0, 0, 0, 0.45) 25%,
        rgba(0, 0, 0, 0.18) 55%,
        rgba(0, 0, 0, 0.10) 75%,
        rgba(0, 0, 0, 0.30) 100%
      ),
      linear-gradient(
        to right,
        rgba(0, 0, 0, 0.45) 0%,
        rgba(0, 0, 0, 0.20) 40%,
        rgba(0, 0, 0, 0.05) 65%,
        transparent 80%
      )`,
          }}
        />

        {/* Alternative: If you prefer Tailwind classes over inline styles */}
        {/* 
  <div 
    className="absolute inset-0 z-20 pointer-events-none 
    bg-gradient-to-r from-arch-black via-arch-black/80 to-transparent"
    style={{
      maskImage: 'linear-gradient(to right, black 0%, black 40%, transparent 70%)'
    }}
  />
  */}

        {/* ============================================
      LAYER 2B: SOFT VIGNETTE/GLOW EFFECT (OPTIONAL)
      Adds depth where the fade happens
      ============================================ */}
        {/* Desktop: Soft radial vignette for atmospheric depth */}
        <div
          className="absolute inset-0 z-21 pointer-events-none hidden lg:block"
          style={{
            background: `radial-gradient(
        ellipse 90% 80% at 60% 50%,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      )`,
          }}
        />

        {/* ============================================
      LAYER 2C: ARCHITECTURAL PATTERN DECORATIONS
      Subtle patterns that reinforce the brand identity
      ============================================ */}
        <div className="absolute top-20 left-4 md:left-10 w-16 h-16 md:w-28 md:h-28 z-25 opacity-[0.06] md:opacity-[0.08]">
          <BeamConnectionPattern className="w-full h-full text-arch-gold" opacity={1} />
        </div>
        <div className="absolute bottom-32 left-6 md:left-16 w-20 h-28 md:w-36 md:h-48 z-25 opacity-[0.04] md:opacity-[0.06]">
          <WindowFramePattern className="w-full h-full text-arch-gold" />
        </div>
        <div className="absolute top-1/3 right-4 md:right-auto md:left-[42%] w-12 h-12 md:w-20 md:h-20 z-25 opacity-[0.08] md:opacity-10">
          <AnimatedJoint />
        </div>
        <div className="absolute bottom-20 right-4 md:bottom-24 md:right-[30%] w-14 h-14 md:w-24 md:h-24 z-25 opacity-[0.05] md:opacity-[0.07]">
          <AluminiumProfilePattern className="w-full h-full text-arch-silver" opacity={1} />
        </div>

        {/* ============================================
      LAYER 3: FLOATING RANK CARD (RIGHT SIDE, DESKTOP)
      Architectural "spec sheet" — credibility callout
      ============================================ */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-40 right-12 xl:right-20 z-30 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[280px]"
          >
            {/* Outer gold glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-arch-gold/30 via-transparent to-arch-gold/20 rounded-2xl blur-xl opacity-70" />

            {/* Card */}
            <div
              className="relative rounded-2xl overflow-hidden px-5 py-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)',
                backdropFilter: 'blur(24px) saturate(160%)',
                WebkitBackdropFilter: 'blur(24px) saturate(160%)',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)',
              }}
            >
              {/* Top gold hairline */}
              <div
                className="absolute top-0 left-5 right-5 h-[2px]"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37 50%, transparent)' }}
              />

              {/* Corner brackets */}
              <span className="absolute top-2 left-2 w-2.5 h-2.5 border-l border-t border-arch-gold/60" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 border-r border-t border-arch-gold/60" />
              <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-l border-b border-arch-gold/60" />
              <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-r border-b border-arch-gold/60" />

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-arch-gold opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-arch-gold" />
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-white/60">
                  Trusted Leader
                </span>
              </div>

              {/* Rank + descriptor on one row */}
              <div className="flex items-center gap-4">
                <div className="flex items-baseline gap-0.5 leading-none">
                  <span className="font-mono text-base text-arch-gold/70">#</span>
                  <span className="font-display font-bold text-5xl gradient-text">01</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-white text-sm leading-tight tracking-wide">
                    Aluminium Supplier
                  </p>
                  <p className="text-white/60 text-xs font-body mt-0.5">
                    in Zimbabwe
                  </p>
                </div>
              </div>

              {/* Footer mono */}
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-white/45">
                  Est. 1994
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-arch-gold/80">
                  AA · ZW
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ============================================
      LAYER 4: HERO CONTENT (LEFT SIDE)
      Text content sits on top of everything
      ============================================ */}
        <div className="relative z-30 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pt-40 lg:pt-44 pb-24 lg:pb-32">
          <div className="max-w-3xl lg:max-w-2xl">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]"
            >
              Crafting
              <span className="block">
                <span className="relative inline-block">
                  <span className="gradient-text">Excellence</span>
                  {/* Stylish SVG brush underline */}
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -bottom-3 left-0 w-full h-4"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M2 8.5C30 3 60 2 100 5.5C140 9 170 4 200 3C230 2 260 6 298 4"
                      stroke="url(#goldGradient)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.path
                      d="M8 10C50 6 90 8 150 5C200 3 240 7 295 6"
                      stroke="url(#goldGradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeOpacity="0.4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#D4AF37" />
                        <stop offset="50%" stopColor="#F5B800" />
                        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </span>
              in Aluminium
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 max-w-xl mb-10 [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]"
            >
              Zimbabwe's leading fabricator of <Link to="/services/fenestration" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">aluminium</Link>, <Link to="/services/shopfitting" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">shop fitting</Link> and{' '}
              <a href="https://www.lupanetimbers.co.zw" target="_blank" rel="noopener noreferrer" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">joinery</a> products. Setting the standard for architectural
              excellence since 1994.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <Link
                to="/contact"
                className="group flex items-center gap-3 bg-arch-gold text-arch-black px-8 py-4 rounded-full font-semibold hover:bg-[#E5C04A] shadow-lg shadow-arch-gold/20 transition-all duration-300"
              >
                Get a Quote
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </Link>

              <Link
                to="/projects"
                className="group flex items-center gap-3 border border-white/30 text-white backdrop-blur-sm px-8 py-4 rounded-full font-medium hover:border-arch-gold hover:text-arch-gold transition-all duration-300"
              >
                View Projects
                <ArrowUpRight
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  size={18}
                />
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                {
                  value: companyInfo.stats.customers,
                  label: "Customers",
                  suffix: "+",
                },
                {
                  value: companyInfo.stats.projects,
                  label: "Projects",
                  suffix: "+",
                },
                { value: companyInfo.stats.years, label: "Years", suffix: "+" },
                { value: 50000, label: "Sqm Factory", suffix: "" },
              ].map((stat, index) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-arch-gold">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/65 text-sm mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/55"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <CaretDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section - Unique asymmetric layout */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-arch-platinum" />
        <div className="absolute inset-0 diagonal-stripes" />

        {/* Blueprint lines decoration - MORE VISIBLE */}
        <BlueprintLines className="text-arch-gold opacity-60" />

        {/* Floating architectural joint decoration - VISIBLE ON MOBILE */}
        <div className="absolute top-4 right-2 md:top-10 md:right-5 w-20 h-20 md:w-40 md:h-40 opacity-15 md:opacity-20">
          <AnimatedJoint />
        </div>

        {/* Additional pattern bottom left - VISIBLE ON MOBILE */}
        <div className="absolute bottom-4 left-2 md:bottom-10 md:left-5 w-16 h-16 md:w-32 md:h-32 opacity-[0.08] md:opacity-10">
          <AluminiumProfilePattern
            className="w-full h-full text-arch-gold"
            opacity={1}
          />
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left column - Sticky heading */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <AnimatedSection>
                <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                  What We Do
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-black mt-4 mb-6">
                  Comprehensive
                  <span className="block text-arch-steel">Solutions</span>
                </h2>
                <p className="text-arch-steel mb-8 max-w-md">
                  From <Link to="/services/residential" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">residential windows</Link> to large-scale <Link to="/services/exteriors" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">commercial facades</Link>, we
                  deliver precision-engineered aluminium solutions for every
                  need.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-arch-gold hover:text-arch-amber transition-colors duration-300"
                >
                  Explore All Services
                  <ArrowRight size={18} />
                </Link>

                {/* Window frame pattern decoration - VISIBLE ON MOBILE */}
                <div className="mt-6 md:mt-8 w-24 h-32 md:w-48 md:h-64 text-arch-gold/20 md:text-arch-gold/30">
                  <WindowFramePattern className="w-full h-full" />
                </div>
              </AnimatedSection>
            </div>

            {/* Right column - Services grid */}
            <div className="lg:col-span-7">
              <StaggerContainer className="space-y-6">
                {services.slice(0, 4).map((service, index) => {
                  const cardImage = [
                    '/firstmutual/untitled-561.JPG',
                    '/ecobank/DSC08707.jpg',
                    '/ecobank/DSC08839.jpg',
                    '/seagrave-road/17.jpg',
                  ][index];
                  return (
                    <StaggerItem key={service.id}>
                      <Link
                        to={`/services/${service.id}`}
                        className="group relative block p-6 md:p-8 rounded-2xl bg-white border border-arch-silver/30 shadow-soft hover:shadow-medium hover:border-arch-gold/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                      >
                        {/* Background image with left-to-right fade */}
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                          <img src={cardImage} alt="" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent" />
                        </div>

                        {/* Corner brackets decoration */}
                        <div className="absolute inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <CornerBrackets size={20} color="#D4AF37" />
                        </div>

                        <div className="relative flex items-start justify-between gap-4">
                          <div>
                            <span className="text-arch-gold font-mono text-sm">
                              0{index + 1}
                            </span>
                            <h3 className="font-display text-xl md:text-2xl font-semibold text-arch-charcoal mt-2 mb-3 group-hover:text-arch-gold transition-colors duration-300">
                              {service.title}
                            </h3>
                            <p className="text-arch-steel">
                              {service.shortDesc}
                            </p>
                          </div>
                          <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-arch-silver-light shadow-sm group-hover:bg-arch-gold group-hover:border-arch-gold group-hover:shadow-md group-hover:shadow-arch-gold/30 transition-all duration-300">
                            <ArrowUpRight
                              className="text-arch-charcoal group-hover:text-arch-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                              size={20}
                            />
                          </span>
                        </div>
                      </Link>
                    </StaggerItem>
                  );
                })}

                {/* Lupane Timbers - Sister Company */}
                <StaggerItem>
                  <a
                    href="https://www.lupanetimbers.co.zw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-arch-gold/10 via-arch-amber/5 to-transparent border border-arch-gold/30 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Corner brackets decoration */}
                    <div className="absolute inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <CornerBrackets size={20} color="#D4AF37" />
                    </div>

                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <img src="/lupane.png" alt="Lupane Timbers" className="w-10 h-10 md:w-12 md:h-12 object-contain mt-1" loading="eager" />
                        <div>
                          <span className="text-arch-gold font-mono text-sm">
                            Sister Company
                          </span>
                          <h3 className="font-display text-xl md:text-2xl font-semibold text-arch-gold mt-2 mb-3 group-hover:text-arch-amber transition-colors duration-300">
                            Lupane Timbers
                          </h3>
                          <p className="text-arch-steel">
                            Premium timber products and joinery solutions from our sister company.
                          </p>
                        </div>
                      </div>
                      <span className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm border border-arch-gold/40 shadow-sm group-hover:bg-arch-gold group-hover:border-arch-gold group-hover:shadow-md group-hover:shadow-arch-gold/30 transition-all duration-300">
                        <ArrowUpRight
                          className="text-arch-gold group-hover:text-arch-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                          size={20}
                        />
                      </span>
                    </div>
                  </a>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Horizontal scroll on mobile, grid on desktop */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                Portfolio
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-black mt-4">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-arch-graphite hover:text-arch-gold transition-colors duration-300"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          {/* Projects Grid - Bento style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={index * 0.1}
                className={index === 0 ? "md:col-span-2 md:row-span-2" : ""}
              >
                <Link
                  to={`/projects#project-${project.id}`}
                  className="group relative block aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] rounded-2xl overflow-hidden"
                >
                  {/* Image */}
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <span className="text-arch-gold text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-arch-white mb-2 group-hover:text-arch-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-arch-silver-dark text-sm line-clamp-2">
                      {project.location} · {project.year}
                    </p>

                    {/* Arrow indicator */}
                    <motion.div className="absolute top-6 right-6 p-3 rounded-full bg-arch-white/10 group-hover:bg-arch-gold transition-colors duration-300">
                      <ArrowUpRight
                        className="text-arch-white group-hover:text-arch-black transition-colors duration-300"
                        size={20}
                      />
                    </motion.div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Aluminium Finishes Section */}
      <AluminiumFinishes />

      {/* Why Choose Us - Unique card layout */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-arch-platinum to-arch-snow" />

        {/* Curtain wall pattern background - VISIBLE ON MOBILE */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/2 opacity-[0.04] md:opacity-[0.05]">
          <CurtainWallPattern
            className="w-full h-full text-arch-gold"
            rows={10}
            cols={8}
          />
        </div>

        {/* Left side pattern - VISIBLE ON MOBILE */}
        <div className="absolute left-0 top-1/4 w-16 h-32 md:w-32 md:h-64 opacity-[0.06] md:opacity-[0.08]">
          <WindowFramePattern className="w-full h-full text-arch-silver" />
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-black mt-4 mb-6">
              The Architectural Aluminium Difference
            </h2>
            <p className="text-arch-steel text-lg">
              We combine decades of expertise with modern technology to deliver
              exceptional quality that stands the test of time.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Trophy,
                title: "30+ Years Experience",
                description:
                  <>Three decades of industry leadership and innovation in <Link to="/about" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">aluminium fabrication</Link>.</>,
              },
              {
                icon: BuildingOffice,
                title: "50,000 sqm Factory",
                description:
                  "State-of-the-art manufacturing facility with modern machinery and capacity.",
              },
              {
                icon: Users,
                title: "675+ Happy Clients",
                description:
                  <>Trusted by leading businesses, institutions, and homeowners across <Link to="/projects" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">Zimbabwe</Link>.</>,
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                description:
                  "Our plant capacity enables quick delivery without compromising quality.",
              },
            ].map((item, index) => {
              const isFilled = index === 1 || index === 3;
              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className={`group p-8 rounded-2xl shadow-soft transition-all duration-500 h-full ${
                    isFilled
                      ? 'border border-arch-gold/50 bg-arch-gold/5 hover:border-arch-gold/70 hover:bg-arch-gold/10'
                      : 'border border-arch-silver/30 hover:border-arch-gold/50 bg-white hover:bg-arch-gold/5'
                  }`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                      isFilled
                        ? 'bg-arch-gold/20 group-hover:bg-arch-gold/30'
                        : 'bg-arch-gold/10 group-hover:bg-arch-gold/20'
                    }`}>
                      <item.icon className="text-arch-gold" size={28} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-arch-charcoal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-arch-steel">{item.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Infinite Scroll with Glassmorphism */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/ecobank/DSC08839.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-arch-black/70 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-arch-black/40 via-transparent to-arch-black/40" />
        </div>

        <div className="relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 px-6">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-arch-silver text-lg">
              Real reviews from our valued customers
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} weight="fill" className="w-5 h-5 text-arch-gold" />
                ))}
              </div>
              <span className="text-white font-semibold">4.2</span>
              <span className="text-arch-silver text-sm">on Google</span>
            </div>
          </AnimatedSection>

          {/* Row 1 - auto-scrolls left, swipable */}
          <div className="mb-6">
            <ReviewMarquee reviews={googleReviews} direction="left" speed={0.5} />
          </div>

          {/* Row 2 - auto-scrolls right, swipable */}
          <div>
            <ReviewMarquee reviews={[...googleReviews].reverse()} direction="right" speed={0.5} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          {/* Vision: Dramatic close-up of aluminium profiles or architectural detail */}
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600" alt="Aluminium profiles" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-arch-platinum via-arch-snow/95 to-arch-platinum" />
        </div>

        {/* Floating patterns - VISIBLE ON MOBILE */}
        <div className="absolute left-2 top-4 md:left-10 md:top-10 w-16 h-16 md:w-24 md:h-24 opacity-[0.08] md:opacity-10">
          <BeamConnectionPattern
            className="w-full h-full text-arch-gold"
            opacity={1}
          />
        </div>
        <div className="absolute right-2 bottom-4 md:right-10 md:bottom-10 w-20 h-20 md:w-32 md:h-32 opacity-[0.08] md:opacity-10">
          <AluminiumProfilePattern
            className="w-full h-full text-arch-silver"
            opacity={1}
          />
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Decorative corner brackets - VISIBLE ON MOBILE 
            <div className="absolute -inset-4 md:-inset-12 block md:hidden">
              <CornerBrackets size={30} color="#D4AF37" />
            </div>
            <div className="absolute -inset-12 hidden md:block">
              <CornerBrackets size={60} color="#D4AF37" />
            </div>*/}

            <AnimatedSection>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-arch-black mb-6">
                Ready to Transform Your
                <span className="block gradient-text">Space?</span>
              </h2>
              <p className="text-xl text-arch-steel mb-10 max-w-2xl mx-auto">
                Whether you're planning a <Link to="/services/residential" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">residential project</Link> or a large-scale{' '}
                <Link to="/services/exteriors" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">commercial development</Link>, our team is ready to bring your vision
                to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center gap-3 bg-arch-black text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-arch-charcoal transition-colors duration-300"
                >
                  Start Your Project
                  <ArrowRight
                    className="group-hover:translate-x-1 transition-transform duration-300"
                    size={22}
                  />
                </Link>
                <a
                  href={`tel:${companyInfo.phone[0].replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-arch-graphite hover:text-arch-gold transition-colors duration-300"
                >
                  <span className="text-lg">
                    Or call {companyInfo.phone[0]}
                  </span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
