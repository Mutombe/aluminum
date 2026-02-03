import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Target,
  Eye,
  Heart,
  Lightbulb,
  Shield,
  Users,
  CheckCircle2,
} from "lucide-react";
import { SiFsecure } from "react-icons/si";
import SEO from "../components/SEO";
import { BiShieldQuarter } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
} from "../components/AnimatedComponents";
import {
  CornerBrackets,
  BlueprintLines,
  WindowFramePattern,
  BeamConnectionPattern,
  AluminiumProfilePattern,
  CurtainWallPattern,
  ArchitecturalDivider,
  AnimatedJoint,
  GeometricRing,
  CircuitPattern,
  ConstellationPattern,
  MeasurementLines,
  CrossSectionPattern,
  FloatingParticles,
  AngularLayers,
  BlueprintGrid,
  HexagonalGrid,
  IsometricCubeGrid,
} from "../components/ArchitecturalPatterns";
import { companyInfo, team } from "../data/content";
import { LiaAwardSolid } from "react-icons/lia";

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Architectural Aluminium - Zimbabwe's leading aluminium fabricator since 1994. Our history, mission, values, and the team behind 30+ years of excellence."
        keywords={[
          "about us",
          "aluminium company Zimbabwe",
          "David Stally",
          "aluminium history",
          "CIFOZ member",
        ]}
        url="/about"
      />

      {/* Hero Section - Split design */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600"
            alt="Manufacturing excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/50" />
        </div>

        {/* Floating Particles */}
        <FloatingParticles className="opacity-40" count={30} />

        {/* Geometric Ring - Top Right */}
        <div className="absolute -top-20 -right-20 md:top-10 md:right-10 opacity-10 md:opacity-20">
          <GeometricRing size={300} className="hidden md:block" />
          <GeometricRing size={150} className="md:hidden" />
        </div>

        {/* Blueprint Lines Hero */}
        <BlueprintLines className="text-arch-gold opacity-30" />

        {/* Constellation Pattern - Left */}
        <motion.div
          className="absolute left-4 md:left-10 top-1/3 w-32 h-32 md:w-48 md:h-48 opacity-20"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <ConstellationPattern className="w-full h-full" />
        </motion.div>

        {/* Cross Section Pattern - Bottom Left */}
        <motion.div
          className="absolute bottom-32 left-4 md:left-20 w-24 h-16 md:w-40 md:h-28 opacity-15"
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <CrossSectionPattern className="w-full h-full text-arch-gold" />
        </motion.div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-arch-charcoal mt-4 mb-6 leading-[1.1]">
              Building Zimbabwe's
              <span className="block gradient-text">Future in Aluminium</span>
            </h1>
            <p className="text-xl text-arch-slate max-w-2xl">
              From a backyard workshop in 1994 to Zimbabwe's premier aluminium
              fabricator, our journey is one of vision, dedication, and
              relentless pursuit of excellence.
            </p>
          </motion.div>
        </div>

        {/* Floating stat card with corner brackets */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-16 right-6 md:right-12 hidden sm:block"
        >
          <div className="relative bg-white/90 backdrop-blur-sm border border-arch-silver-light p-6 rounded-2xl shadow-soft">
            <div className="absolute inset-2">
              <CornerBrackets size={16} color="#D4AF37" />
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-arch-gold font-display text-4xl font-bold">
                  <AnimatedCounter value={companyInfo.stats.years} suffix="+" />
                </p>
                <p className="text-arch-slate text-sm">Years</p>
              </div>
              <div className="w-px h-12 bg-arch-silver-light" />
              <div className="text-center">
                <p className="text-arch-gold font-display text-4xl font-bold">
                  <AnimatedCounter
                    value={companyInfo.stats.projects}
                    suffix="+"
                  />
                </p>
                <p className="text-arch-slate text-sm">Projects</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Measurement lines decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-12 opacity-30 hidden md:block">
          <MeasurementLines className="w-full h-full" />
        </div>
      </section>

      {/* Timeline/Story Section */}
      <section
        ref={containerRef}
        className="relative py-24 md:py-32 bg-arch-platinum overflow-hidden"
      >
        {/* Blueprint Grid Background */}
        <BlueprintGrid className="opacity-30" />

        {/* Hexagonal Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <HexagonalGrid className="w-full h-full text-arch-gold" opacity={1} />
        </div>

        {/* Animated vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block">
          <div className="sticky top-0 h-screen w-full bg-arch-silver">
            <motion.div
              className="absolute top-0 left-0 w-full bg-arch-gold"
              style={{ height: lineProgress }}
            />
          </div>
        </div>

        {/* Floating Circuit Pattern - Right */}
        <motion.div
          className="absolute right-0 top-40 w-32 h-32 md:w-64 md:h-64 opacity-10"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <CircuitPattern className="w-full h-full" color="#D4AF37" />
        </motion.div>

        {/* Angular Layers - Left */}
        <motion.div
          className="absolute left-0 top-1/3 w-24 h-24 md:w-48 md:h-48 opacity-10"
          animate={{ rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <AngularLayers className="w-full h-full" />
        </motion.div>

        {/* Beam Connection - Bottom Right */}
        <motion.div
          className="absolute right-10 bottom-40 w-20 h-20 md:w-32 md:h-32 opacity-[0.08]"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          <BeamConnectionPattern
            className="w-full h-full text-arch-silver"
            opacity={1}
          />
        </motion.div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          {/* Our Story */}
          <AnimatedSection className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="font-display text-4xl font-bold text-arch-charcoal mt-4 mb-6">
                From Humble Beginnings to Industry Leadership
              </h2>
              <div className="space-y-4 text-arch-slate">
                <p>
                  Architectural Aluminium was born in 1994 as a suburban
                  backyard business on Williams Way in Msasa, Harare. The
                  founder and CEO, David Stally, had a singular vision: to
                  create the most reputable aluminium and shop fitting company
                  in the region.
                </p>
                <p>
                  Three decades later, that vision has become a reality. We've
                  grown from a small workshop to a 50,000 square metre factory
                  housing modern machinery, while never losing sight of the
                  craftsmanship and dedication that defined our early days.
                </p>
                <p>
                  Today, we stand as Zimbabwe's leading fabricator of aluminium,
                  shop fitting and joinery products, setting the standard that
                  other players in the industry aspire to.
                </p>
              </div>

              {/* Window Frame Pattern inline */}
              <div className="mt-8 w-24 h-32 md:w-32 md:h-44 text-arch-gold/20">
                <WindowFramePattern className="w-full h-full" />
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              {/* Measurement Lines around image */}
              <div className="absolute -top-6 left-0 right-0 h-6 opacity-40 hidden md:block">
                <MeasurementLines className="w-full h-full" />
              </div>
              <div className="absolute -left-6 top-0 bottom-0 w-6 opacity-40 hidden md:block">
                <MeasurementLines className="h-full w-full" vertical />
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                  alt="Our journey"
                  className="w-full h-full object-cover"
                />
                {/* Corner brackets on image */}
                <div className="absolute inset-4">
                  <CornerBrackets size={30} color="#D4AF37" />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white border border-arch-silver-light p-4 rounded-xl shadow-soft"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-arch-gold font-display text-2xl font-bold">
                  1994
                </p>
                <p className="text-arch-slate text-sm">Established</p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Architectural Divider */}
          <ArchitecturalDivider />

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 my-24">
            <AnimatedSection delay={0.1}>
              <div className="relative p-8 rounded-2xl bg-white border border-arch-silver-light h-full overflow-hidden group hover:border-arch-gold/50 transition-colors duration-500 shadow-soft">
                {/* Animated Joint in corner */}
                <div className="absolute -top-4 -right-4 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity">
                  <AnimatedJoint />
                </div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-arch-gold/10 flex items-center justify-center mb-6">
                    <Target className="text-arch-gold" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-arch-charcoal mb-4">
                    Our Mission
                  </h3>
                  <p className="text-arch-slate">
                    To design and manufacture high-quality aluminium solutions
                    for residential and commercial customers in Zimbabwe and
                    beyond. We specialize in aluminium windows, doors, and
                    frames, and are a leading supplier of premium aluminium
                    products tailored to every need.
                  </p>
                </div>

                {/* Isometric pattern background */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-[0.03]">
                  <IsometricCubeGrid
                    className="w-full h-full text-arch-gold"
                    opacity={1}
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative p-8 rounded-2xl bg-white border border-arch-silver-light h-full overflow-hidden group hover:border-arch-gold/50 transition-colors duration-500 shadow-soft">
                {/* Circuit Pattern in corner */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CircuitPattern color="#C0C0C0" />
                </div>

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-arch-gold/10 flex items-center justify-center mb-6">
                    <Eye className="text-arch-gold" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-arch-charcoal mb-4">
                    Our Vision
                  </h3>
                  <p className="text-arch-slate">
                    To be the most trusted and innovative provider of aluminium
                    solutions in Zimbabwe and international markets, setting the
                    standard for quality, durability, and design
                  </p>
                </div>

                {/* Hexagonal pattern background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03]">
                  <HexagonalGrid
                    className="w-full h-full text-arch-silver"
                    opacity={1}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Values */}
          <AnimatedSection className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                Our Values
              </span>
              <h2 className="font-display text-4xl font-bold text-arch-charcoal mt-4">
                The Principles That Guide Us
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Quality",
                  desc: "Uncompromising standards in every product we create",
                  pattern: "beam",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  desc: "Embracing new technologies and design approaches",
                  pattern: "circuit",
                },
                {
                  icon: BiShieldQuarter,
                  title: "Integrity",
                  desc: "Honest dealings and transparent relationships",
                  pattern: "angular",
                },
                {
                  icon: RiTeamLine,
                  title: "Teamwork",
                  desc: "Collaborative excellence across all departments",
                  pattern: "constellation",
                },
              ].map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div className="relative text-center p-6 rounded-xl bg-white border border-arch-silver-light hover:border-arch-gold/50 transition-all duration-300 group overflow-hidden shadow-soft">
                    {/* Dynamic pattern based on value */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      {value.pattern === "beam" && (
                        <BeamConnectionPattern
                          className="w-full h-full text-arch-gold"
                          opacity={1}
                        />
                      )}
                      {value.pattern === "circuit" && (
                        <CircuitPattern className="w-full h-full" />
                      )}
                      {value.pattern === "angular" && (
                        <AngularLayers className="w-full h-full" />
                      )}
                      {value.pattern === "constellation" && (
                        <ConstellationPattern className="w-full h-full" />
                      )}
                    </div>

                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-arch-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-arch-gold/20 transition-colors">
                        <value.icon className="text-arch-gold" size={24} />
                      </div>
                      <h4 className="font-display font-semibold text-arch-charcoal mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-arch-slate">{value.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Factory Stats */}
          <AnimatedSection>
            <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600"
                alt="Our factory"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-arch-black/80" />

              {/* Floating Particles over stats */}
              <FloatingParticles className="opacity-30" count={15} />

              {/* Corner brackets */}
              <div className="absolute inset-4 md:inset-8 hidden md:block">
                <CornerBrackets size={40} color="#D4AF37" />
              </div>

              {/* Curtain wall pattern background */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.05]">
                <CurtainWallPattern
                  className="w-full h-full text-arch-gold"
                  rows={6}
                  cols={4}
                />
              </div>

              <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { value: 50000, label: "Square Metres Factory", suffix: "" },
                  {
                    value: 100,
                    label: "Years Combined Expertise",
                    suffix: "+",
                  },
                  { value: 50, label: "Skilled Professionals", suffix: "+" },
                  { value: 24, label: "Support Available", suffix: "hr" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="font-display text-4xl md:text-5xl font-bold text-arch-gold mb-2">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="text-arch-silver-light text-sm md:text-base">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section
        id="team"
        className="relative py-24 md:py-32 bg-white overflow-hidden"
      >
        {/* Large Geometric Ring Background */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-[0.03]">
          <GeometricRing size={600} />
        </div>

        {/* Blueprint lines */}
        <BlueprintLines className="text-arch-silver opacity-20" />

        {/* Floating Aluminium Profiles */}
        <motion.div
          className="absolute right-10 top-20 w-24 h-24 md:w-40 md:h-40 opacity-10"
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <AluminiumProfilePattern
            className="w-full h-full text-arch-gold"
            opacity={1}
          />
        </motion.div>

        <motion.div
          className="absolute left-10 bottom-40 w-20 h-20 md:w-32 md:h-32 opacity-[0.08]"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <CrossSectionPattern className="w-full h-full" />
        </motion.div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Our Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-charcoal mt-4 mb-6">
              Leadership That Inspires
            </h2>
            <p className="text-arch-slate text-lg">
              Our skilled management operates in an informal corporate structure
              that promotes excellence. Every team member is experienced and
              committed to delivering the best.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="group">
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arch-black/80 via-transparent to-transparent" />

                    {/* Corner brackets on hover */}
                    <div className="absolute inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <CornerBrackets size={20} color="#D4AF37" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-arch-charcoal mb-1">
                    {member.name}
                  </h3>
                  <p className="text-arch-gold text-sm mb-3">{member.role}</p>
                  <p className="text-arch-slate text-sm">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Divider */}
      <ArchitecturalDivider className="bg-white" />

      {/* Certifications & Memberships */}
      <section className="relative py-24 md:py-32 bg-arch-platinum overflow-hidden">
        {/* Isometric Grid Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <IsometricCubeGrid
            className="w-full h-full text-arch-gold"
            opacity={1}
          />
        </div>

        {/* Angular Layers decoration */}
        <motion.div
          className="absolute right-0 top-1/4 w-40 h-40 md:w-64 md:h-64 opacity-10"
          animate={{ rotate: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        >
          <AngularLayers className="w-full h-full" />
        </motion.div>

        {/* Constellation pattern */}
        <motion.div
          className="absolute left-10 bottom-20 w-32 h-32 md:w-48 md:h-48 opacity-15"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <ConstellationPattern className="w-full h-full" />
        </motion.div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Credentials
            </span>
            <h2 className="font-display text-4xl font-bold text-arch-charcoal mt-4 mb-6">
              Recognised Excellence
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: LiaAwardSolid,
                title: "CIFOZ Member",
                desc: "Proud member of the Construction Industry Federation of Zimbabwe, upholding the highest industry standards.",
                pattern: "hex",
              },
              {
                icon: SiFsecure,
                title: "Fully Insured",
                desc: "Third Party Insurance and Advance Payment Guarantee provided by reputable financial institutions.",
                pattern: "circuit",
              },
              {
                icon: IoCheckmarkDoneCircleOutline,
                title: "Quality Assured",
                desc: "Rigorous quality control processes ensure every product meets our exacting standards.",
                pattern: "beam",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="relative p-8 rounded-2xl bg-white text-center h-full group overflow-hidden hover:border-arch-gold/50 border border-arch-silver-light transition-all duration-500 shadow-soft">
                  {/* Pattern backgrounds */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500">
                    {item.pattern === "hex" && (
                      <HexagonalGrid
                        className="w-full h-full text-arch-gold"
                        opacity={1}
                      />
                    )}
                    {item.pattern === "circuit" && (
                      <CircuitPattern className="w-full h-full" />
                    )}
                    {item.pattern === "beam" && (
                      <BeamConnectionPattern
                        className="w-full h-full text-arch-gold"
                        opacity={1}
                      />
                    )}
                  </div>

                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-arch-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-arch-gold/20 transition-colors">
                      <item.icon className="text-arch-gold" size={40} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-arch-charcoal mb-3">
                      {item.title}
                    </h3>
                    <p className="text-arch-slate">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-arch-platinum to-arch-snow overflow-hidden">
        {/* Floating Particles */}
        <FloatingParticles className="opacity-20" count={25} />

        {/* Large Window Frame Pattern */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-48 md:w-48 md:h-64 opacity-[0.06]">
          <WindowFramePattern className="w-full h-full text-arch-gold" />
        </div>

        <div className="absolute right-0 bottom-10 w-24 h-24 md:w-40 md:h-40 opacity-[0.08]">
          <BeamConnectionPattern
            className="w-full h-full text-arch-silver"
            opacity={1}
          />
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="relative text-center max-w-3xl mx-auto">
            {/* Corner brackets */}
            <div className="absolute -inset-4 md:-inset-8 hidden sm:block">
              <CornerBrackets size={40} color="#D4AF37" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-charcoal mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-arch-slate mb-10">
              Whether you're a potential client, partner, or team member, we'd
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-3 bg-arch-gold text-arch-black px-8 py-4 rounded-full font-semibold hover:bg-arch-amber transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              </Link>
              <Link
                to="/careers"
                className="flex items-center gap-3 border border-arch-silver text-arch-charcoal px-8 py-4 rounded-full font-medium hover:border-arch-gold hover:text-arch-gold transition-all duration-300"
              >
                View Careers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default About;
