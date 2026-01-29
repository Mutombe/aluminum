import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  ChevronRight,
  Heart,
  Users,
  TrendingUp,
  Award,
  Coffee,
  Zap,
  Shield,
  BookOpen,
  ArrowRight,
  Send,
  Building2,
  GraduationCap
} from 'lucide-react';
import { SiFsecure } from "react-icons/si";
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedComponents';
import SEO from '../components/SEO';
import { LiaAwardSolid } from "react-icons/lia";

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [expandedJob, setExpandedJob] = useState(null);

  const departments = [
    { id: 'all', label: 'All Departments' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'sales', label: 'Sales & Marketing' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'admin', label: 'Administration' },
    { id: 'installation', label: 'Installation' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive medical aid coverage for you and your family'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear progression paths with regular training and development'
    },
    {
      icon: Coffee,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and generous leave policies'
    },
    {
      icon: LiaAwardSolid,
      title: 'Recognition Programme',
      description: 'Monthly awards and bonuses for exceptional performance'
    },
    {
      icon: Shield,
      title: 'Job Security',
      description: '30+ years of stable growth and market leadership'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Funded certifications and skills development programmes'
    }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Aluminium Fabricator',
      department: 'manufacturing',
      location: 'Harare Factory',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'We are looking for an experienced aluminium fabricator to join our manufacturing team. You will be responsible for cutting, shaping, and assembling aluminium components for our diverse range of projects.',
      requirements: [
        'Minimum 5 years experience in aluminium fabrication',
        'Proficiency in reading technical drawings',
        'Experience with CNC machinery and manual tools',
        'Knowledge of welding techniques for aluminium',
        'Quality-focused with attention to detail'
      ],
      responsibilities: [
        'Fabricate aluminium components according to specifications',
        'Operate CNC cutting and bending machines',
        'Perform quality checks on finished products',
        'Maintain workshop equipment and tools',
        'Mentor junior fabricators'
      ]
    },
    {
      id: 2,
      title: 'Sales Executive - Commercial',
      department: 'sales',
      location: 'Harare Office',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Join our dynamic sales team to drive commercial project acquisitions. You will be responsible for building relationships with architects, developers, and contractors.',
      requirements: [
        '3+ years B2B sales experience in construction industry',
        'Strong understanding of aluminium products',
        'Excellent presentation and negotiation skills',
        'Valid driver\'s licence and own vehicle',
        'Degree in Marketing or Business Administration preferred'
      ],
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Prepare and present quotations to clients',
        'Maintain relationships with existing customers',
        'Achieve monthly and quarterly sales targets',
        'Attend industry events and exhibitions'
      ]
    },
    {
      id: 3,
      title: 'CAD Draughtsman',
      department: 'engineering',
      location: 'Harare Office',
      type: 'Full-time',
      experience: '2+ years',
      posted: '3 days ago',
      description: 'Create detailed technical drawings for aluminium fabrication projects. Work closely with the sales and manufacturing teams to ensure accurate specifications.',
      requirements: [
        'Diploma in Draughting or Engineering Drawing',
        '2+ years experience with AutoCAD',
        'Experience in aluminium or construction industry preferred',
        'Ability to interpret architectural plans',
        'Strong mathematical skills'
      ],
      responsibilities: [
        'Create shop drawings for manufacturing',
        'Prepare detailed fabrication drawings',
        'Review architectural specifications',
        'Calculate material requirements',
        'Update drawings based on site feedback'
      ]
    },
    {
      id: 4,
      title: 'Installation Team Leader',
      department: 'installation',
      location: 'Various Sites',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Lead a team of installers on commercial and residential projects. Ensure quality installations completed on time and within budget.',
      requirements: [
        '4+ years experience in aluminium installation',
        'Previous supervisory experience',
        'Valid driver\'s licence (Code 10 preferred)',
        'Ability to read technical drawings',
        'Strong leadership and communication skills'
      ],
      responsibilities: [
        'Supervise installation team on site',
        'Coordinate with project managers on schedules',
        'Ensure compliance with safety standards',
        'Conduct quality inspections',
        'Manage site materials and equipment'
      ]
    },
    {
      id: 5,
      title: 'Accounts Administrator',
      department: 'admin',
      location: 'Harare Office',
      type: 'Full-time',
      experience: '2+ years',
      posted: '1 week ago',
      description: 'Support the finance team with day-to-day accounting functions including invoicing, payments, and reconciliations.',
      requirements: [
        'Degree or Diploma in Accounting',
        '2+ years experience in accounts administration',
        'Proficiency in Sage or similar accounting software',
        'Advanced Excel skills',
        'ZIMRA compliance knowledge'
      ],
      responsibilities: [
        'Process supplier invoices and payments',
        'Prepare customer invoices',
        'Perform bank reconciliations',
        'Assist with month-end closing',
        'Maintain accurate financial records'
      ]
    },
    {
      id: 6,
      title: 'Junior Fabricator (Apprentice)',
      department: 'manufacturing',
      location: 'Harare Factory',
      type: 'Full-time',
      experience: 'Entry level',
      posted: '4 days ago',
      description: 'An excellent opportunity for school leavers interested in a career in aluminium fabrication. Full training provided with clear progression path.',
      requirements: [
        'Minimum 5 O-levels including Mathematics and English',
        'Technical aptitude and willingness to learn',
        'Good physical fitness',
        'Basic understanding of workshop safety',
        'Age between 18-25 years'
      ],
      responsibilities: [
        'Assist senior fabricators with daily tasks',
        'Learn aluminium cutting and assembly techniques',
        'Maintain workshop cleanliness',
        'Handle materials and tools safely',
        'Complete training modules'
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment);

  const values = [
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Collaboration drives our success'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest and ethical in all dealings'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Continuously improving our craft'
    }
  ];

  return (
    <>
      <SEO 
        title="Careers | Architectural Aluminium"
        description="Join Zimbabwe's leading aluminium fabrication company. Explore exciting career opportunities in manufacturing, sales, engineering, and more."
        keywords="aluminium jobs Zimbabwe, fabrication careers, construction jobs Harare, manufacturing vacancies"
      />

      {/* Hero Section - Split design with team image */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-arch-snow" />

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-arch-gold/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-arch-silver/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="inline-block px-4 py-2 bg-arch-gold/10 border border-arch-gold/30 rounded-full text-arch-gold text-sm font-mono mb-8">
                  Join Our Team
                </span>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-arch-charcoal mb-6 leading-[1.1]">
                  Build Your
                  <span className="block gradient-text">Future With Us</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="text-xl text-arch-slate mb-8 max-w-lg">
                  Working at Architectural Aluminium means being part of a family
                  enterprise that creates fascinating products. Once you experience it,
                  you'll want to stay.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    href="#openings"
                    className="inline-flex items-center px-8 py-4 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.a>
                </div>
              </AnimatedSection>

              {/* Quick stats */}
              <AnimatedSection delay={0.4} className="mt-12">
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-arch-gold/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-arch-gold" />
                    </div>
                    <div>
                      <span className="block text-2xl font-bold text-arch-charcoal">50+</span>
                      <span className="text-arch-slate text-sm">Team Members</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-arch-gold/10 rounded-full flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-arch-gold" />
                    </div>
                    <div>
                      <span className="block text-2xl font-bold text-arch-charcoal">30+</span>
                      <span className="text-arch-slate text-sm">Years Strong</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Image collage */}
            <AnimatedSection delay={0.2} direction="left" className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {/* Vision: Workers in a modern factory setting, professional team photos */}
                <motion.div 
                  className="space-y-4"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                >
                  <div className="rounded-2xl overflow-hidden h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
                      alt="Manufacturing team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80"
                      alt="Office team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="space-y-4 mt-8"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                >
                  <div className="rounded-2xl overflow-hidden h-64">
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48">
                    <img 
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                      alt="Construction site work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-arch-gold text-arch-black p-6 rounded-2xl shadow-medium"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <GraduationCap className="w-8 h-8 mb-2" />
                <span className="block font-bold text-lg">Training</span>
                <span className="text-sm opacity-80">Provided</span>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 md:py-32 bg-arch-platinum">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedSection>
                <span className="text-arch-gold font-mono text-sm tracking-wider">WHY JOIN US</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-arch-charcoal mt-4 mb-6">
                  More Than Just a Job
                </h2>
                <p className="text-arch-slate text-lg mb-8">
                  At Architectural Aluminium, we invest in our people. We believe that
                  when our team thrives, our business thrives. Here's what you can expect
                  when you join us.
                </p>
              </AnimatedSection>

              {/* Values grid */}
              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
                {values.map((value, index) => (
                  <StaggerItem key={index}>
                    <div className="p-4 bg-white rounded-xl border border-arch-silver-light hover:border-arch-gold/50 transition-colors shadow-soft">
                      <value.icon className="w-8 h-8 text-arch-gold mb-3" />
                      <h3 className="text-arch-charcoal font-semibold mb-1">{value.title}</h3>
                      <p className="text-arch-slate text-sm">{value.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Benefits grid */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="p-6 bg-white rounded-xl border border-arch-silver-light hover:border-arch-gold/50 transition-all group shadow-soft"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 bg-arch-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-arch-gold/20 transition-colors">
                      <benefit.icon className="w-6 h-6 text-arch-gold" />
                    </div>
                    <h3 className="text-arch-charcoal font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-arch-slate">{benefit.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-24 md:py-32 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection className="text-center mb-16">
            <span className="text-arch-gold font-mono text-sm tracking-wider">OPPORTUNITIES</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-arch-charcoal mt-4 mb-6">
              Open Positions
            </h2>
            <p className="text-arch-slate text-lg max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
              Explore our current openings and find your perfect role.
            </p>
          </AnimatedSection>

          {/* Department filter */}
          <AnimatedSection delay={0.1} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {departments.map((dept) => (
                <motion.button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-5 py-2.5 rounded-full text-sm transition-all ${
                    selectedDepartment === dept.id
                      ? 'bg-arch-gold text-arch-black font-medium'
                      : 'bg-arch-platinum text-arch-slate hover:bg-arch-silver-light border border-arch-silver-light'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {dept.label}
                  {dept.id !== 'all' && (
                    <span className="ml-2 opacity-60">
                      ({jobs.filter(j => j.department === dept.id).length})
                    </span>
                  )}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Job listings */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDepartment}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-arch-platinum rounded-2xl border border-arch-silver-light overflow-hidden hover:border-arch-gold/50 transition-colors"
                >
                  {/* Job header - always visible */}
                  <button
                    className="w-full p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-arch-charcoal">{job.title}</h3>
                        <span className="px-3 py-1 bg-arch-gold/10 text-arch-gold text-xs font-mono rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-arch-slate text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.posted}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-arch-slate text-sm hidden sm:block">
                        {departments.find(d => d.id === job.department)?.label}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedJob === job.id ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-6 h-6 text-arch-gold" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-arch-silver-light pt-6">
                          <p className="text-arch-slate mb-6">{job.description}</p>

                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h4 className="text-arch-charcoal font-semibold mb-3">Requirements</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex items-start gap-2 text-arch-slate text-sm">
                                    <ChevronRight className="w-4 h-4 text-arch-gold flex-shrink-0 mt-0.5" />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-arch-charcoal font-semibold mb-3">Responsibilities</h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i} className="flex items-start gap-2 text-arch-slate text-sm">
                                    <ChevronRight className="w-4 h-4 text-arch-gold flex-shrink-0 mt-0.5" />
                                    {resp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <motion.a
                              href={`mailto:careers@archaluminium.co.zw?subject=Application for ${job.title}`}
                              className="inline-flex items-center justify-center px-6 py-3 bg-arch-gold text-arch-black font-semibold rounded-full hover:bg-arch-yellow transition-colors"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Send className="w-4 h-4 mr-2" />
                              Apply Now
                            </motion.a>
                            <motion.a
                              href="/contact"
                              className="inline-flex items-center justify-center px-6 py-3 border border-arch-silver text-arch-charcoal rounded-full hover:bg-arch-silver-light transition-colors"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Ask a Question
                            </motion.a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {filteredJobs.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-arch-slate text-lg mb-4">
                    No openings in this department at the moment.
                  </p>
                  <p className="text-arch-slate">
                    Send us your CV anyway! We're always interested in talented individuals.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-arch-platinum to-arch-snow relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 30px,
              rgba(212, 175, 55, 0.1) 30px,
              rgba(212, 175, 55, 0.1) 31px
            )`
          }} />
        </div>

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-arch-charcoal mb-6">
                Don't See the Right Role?
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="text-xl text-arch-slate mb-10">
                We're always looking for talented individuals. Send us your CV and
                we'll keep you in mind for future opportunities.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl border border-arch-silver-light shadow-soft">
                <h3 className="text-arch-charcoal font-semibold text-lg mb-4">Submit Your CV</h3>
                <p className="text-arch-slate mb-6">
                  Email your CV and cover letter to:
                </p>
                <a
                  href="mailto:careers@archaluminium.co.zw"
                  className="inline-flex items-center text-arch-gold hover:text-arch-amber text-xl font-semibold transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  careers@archaluminium.co.zw
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
