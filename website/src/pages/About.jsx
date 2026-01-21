import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, Award, Target, Eye, Heart, 
  Lightbulb, Shield, Users, CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import { AnimatedSection, StaggerContainer, StaggerItem, AnimatedCounter } from '../components/AnimatedComponents';
import { companyInfo, team } from '../data/content';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Architectural Aluminium - Zimbabwe's leading aluminium fabricator since 1994. Our history, mission, values, and the team behind 30+ years of excellence."
        keywords={['about us', 'aluminium company Zimbabwe', 'David Stally', 'aluminium history', 'CIFOZ member']}
        url="/about"
      />

      {/* Hero Section - Split design */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32">
        <div className="absolute inset-0">
          {/* Vision: Factory interior or workshop showing craftsmanship */}
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600"
            alt="Manufacturing excellence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/70 to-arch-black/40" />
        </div>

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
            <h1 className="font-display text-5xl md:text-7xl font-bold text-arch-white mt-4 mb-6 leading-[1.1]">
              Building Zimbabwe's
              <span className="block gradient-text">Future in Aluminium</span>
            </h1>
            <p className="text-xl text-arch-silver-dark max-w-2xl">
              From a backyard workshop in 1994 to Zimbabwe's premier aluminium fabricator, 
              our journey is one of vision, dedication, and relentless pursuit of excellence.
            </p>
          </motion.div>
        </div>

        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute bottom-16 right-12 hidden lg:block"
        >
          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-arch-gold font-display text-4xl font-bold">
                  <AnimatedCounter value={companyInfo.stats.years} suffix="+" />
                </p>
                <p className="text-arch-silver-dark text-sm">Years</p>
              </div>
              <div className="w-px h-12 bg-arch-graphite" />
              <div className="text-center">
                <p className="text-arch-gold font-display text-4xl font-bold">
                  <AnimatedCounter value={companyInfo.stats.projects} suffix="+" />
                </p>
                <p className="text-arch-silver-dark text-sm">Projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Timeline/Story Section */}
      <section ref={containerRef} className="relative py-24 md:py-32 bg-arch-charcoal">
        {/* Animated vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block">
          <div className="sticky top-0 h-screen w-full bg-arch-graphite">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-arch-gold"
              style={{ height: lineProgress }}
            />
          </div>
        </div>

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          {/* Our Story */}
          <AnimatedSection className="grid lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="font-display text-4xl font-bold text-arch-white mt-4 mb-6">
                From Humble Beginnings to Industry Leadership
              </h2>
              <div className="space-y-4 text-arch-silver-dark">
                <p>
                  Architectural Aluminium was born in 1994 as a suburban backyard business on Williams Way 
                  in Msasa, Harare. The founder and CEO, David Stally, had a singular vision: to create 
                  the most reputable aluminium and shop fitting company in the region.
                </p>
                <p>
                  Three decades later, that vision has become a reality. We've grown from a small workshop 
                  to a 50,000 square metre factory housing modern machinery, while never losing sight of 
                  the craftsmanship and dedication that defined our early days.
                </p>
                <p>
                  Today, we stand as Zimbabwe's leading fabricator of aluminium, shop fitting and joinery 
                  products, setting the standard that other players in the industry aspire to.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              {/* Vision: Historic photo or founder portrait */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                  alt="Our journey"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl">
                <p className="text-arch-gold font-display text-2xl font-bold">1994</p>
                <p className="text-arch-silver-dark text-sm">Established</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-2xl bg-arch-black border border-arch-graphite h-full">
                <div className="w-14 h-14 rounded-xl bg-arch-gold/10 flex items-center justify-center mb-6">
                  <Target className="text-arch-gold" size={28} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-arch-white mb-4">
                  Our Mission
                </h3>
                <p className="text-arch-silver-dark">
                  To create aluminium residential and commercial solutions for our customers in Zimbabwe 
                  and internationally, irrespective of their need. We strive to be the partner of choice 
                  for all aluminium fabrication requirements, delivering quality, innovation, and value.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl bg-arch-black border border-arch-graphite h-full">
                <div className="w-14 h-14 rounded-xl bg-arch-gold/10 flex items-center justify-center mb-6">
                  <Eye className="text-arch-gold" size={28} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-arch-white mb-4">
                  Our Vision
                </h3>
                <p className="text-arch-silver-dark">
                  To be the most reputable aluminium and shop fitting company in the region, 
                  recognised for our excellence in craftsmanship, innovation in design, and 
                  commitment to customer satisfaction.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Values */}
          <AnimatedSection className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
                Our Values
              </span>
              <h2 className="font-display text-4xl font-bold text-arch-white mt-4">
                The Principles That Guide Us
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: 'Quality', desc: 'Uncompromising standards in every product we create' },
                { icon: Lightbulb, title: 'Innovation', desc: 'Embracing new technologies and design approaches' },
                { icon: Shield, title: 'Integrity', desc: 'Honest dealings and transparent relationships' },
                { icon: Users, title: 'Teamwork', desc: 'Collaborative excellence across all departments' }
              ].map((value, index) => (
                <AnimatedSection key={value.title} delay={index * 0.1}>
                  <div className="text-center p-6 rounded-xl glass-light hover:glass transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-arch-gold/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="text-arch-gold" size={24} />
                    </div>
                    <h4 className="font-display font-semibold text-arch-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-arch-silver-dark">
                      {value.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Factory Stats */}
          <AnimatedSection>
            <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
              {/* Vision: Wide shot of factory floor */}
              <img 
                src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600"
                alt="Our factory"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-arch-black/80" />
              
              <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="font-display text-5xl font-bold text-arch-gold mb-2">
                    <AnimatedCounter value={50000} />
                  </p>
                  <p className="text-arch-silver-light">Square Metres Factory</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-bold text-arch-gold mb-2">
                    <AnimatedCounter value={100} suffix="+" />
                  </p>
                  <p className="text-arch-silver-light">Years Combined Expertise</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-bold text-arch-gold mb-2">
                    <AnimatedCounter value={50} suffix="+" />
                  </p>
                  <p className="text-arch-silver-light">Skilled Professionals</p>
                </div>
                <div>
                  <p className="font-display text-5xl font-bold text-arch-gold mb-2">
                    <AnimatedCounter value={24} suffix="hr" />
                  </p>
                  <p className="text-arch-silver-light">Support Available</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 md:py-32 bg-arch-black">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Our Team
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mt-4 mb-6">
              Leadership That Inspires
            </h2>
            <p className="text-arch-silver-dark text-lg">
              Our skilled management operates in an informal corporate structure that promotes 
              excellence. Every team member is experienced and committed to delivering the best.
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
                  </div>
                  <h3 className="font-display text-xl font-semibold text-arch-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-arch-gold text-sm mb-3">{member.role}</p>
                  <p className="text-arch-silver-dark text-sm">{member.bio}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Memberships */}
      <section className="py-24 md:py-32 bg-arch-charcoal">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider uppercase">
              Credentials
            </span>
            <h2 className="font-display text-4xl font-bold text-arch-white mt-4 mb-6">
              Recognised Excellence
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="p-8 rounded-2xl glass text-center h-full">
                <div className="w-20 h-20 rounded-full bg-arch-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="text-arch-gold" size={40} />
                </div>
                <h3 className="font-display text-xl font-semibold text-arch-white mb-3">
                  CIFOZ Member
                </h3>
                <p className="text-arch-silver-dark">
                  Proud member of the Construction Industry Federation of Zimbabwe, 
                  upholding the highest industry standards.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-2xl glass text-center h-full">
                <div className="w-20 h-20 rounded-full bg-arch-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-arch-gold" size={40} />
                </div>
                <h3 className="font-display text-xl font-semibold text-arch-white mb-3">
                  Fully Insured
                </h3>
                <p className="text-arch-silver-dark">
                  Third Party Insurance and Advance Payment Guarantee provided by 
                  reputable financial institutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-2xl glass text-center h-full">
                <div className="w-20 h-20 rounded-full bg-arch-gold/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-arch-gold" size={40} />
                </div>
                <h3 className="font-display text-xl font-semibold text-arch-white mb-3">
                  Quality Assured
                </h3>
                <p className="text-arch-silver-dark">
                  Rigorous quality control processes ensure every product meets 
                  our exacting standards.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-arch-black">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-arch-white mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-arch-silver-dark mb-10">
              Whether you're a potential client, partner, or team member, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group flex items-center gap-3 bg-arch-gold text-arch-black px-8 py-4 rounded-full font-semibold hover:bg-arch-amber transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Link>
              <Link
                to="/careers"
                className="flex items-center gap-3 border border-arch-graphite text-arch-white px-8 py-4 rounded-full font-medium hover:border-arch-gold hover:text-arch-gold transition-all duration-300"
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
