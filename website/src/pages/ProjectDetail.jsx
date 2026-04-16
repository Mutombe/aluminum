import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CalendarBlank, ArrowLeft, CaretLeft, CaretRight, X, ArrowRight } from '@phosphor-icons/react';
import { AnimatedSection } from '../components/AnimatedComponents';
import SEO from '../components/SEO';
import ScrollToTop from '../components/ScrollToTop';

const projects = [
  {
    id: 1,
    title: 'Ecobank Headquarters',
    category: 'Commercial',
    location: 'Harare',
    year: '2023',
    description: 'Complete aluminium curtain walling, cladding, and interior fit-out for Ecobank\'s striking Pan-African headquarters. Featuring a bold blue and white facade with circular porthole windows, colorful glass panels, and full interior shopfitting including wall panelling, glass partitions, and modern open-plan office systems.',
    services: ['Curtain Walling', 'Cladding', 'Shopfitting', 'Partitioning', 'Office Workstations'],
    image: '/ecobank/DSC08707.jpg',
    gallery: ['/ecobank/DSC08596.jpg', '/ecobank/DSC08648.jpg', '/ecobank/DSC08707.jpg', '/ecobank/DSC08751.jpg', '/ecobank/DSC08839.jpg', '/ecobank/DSC08847.jpg', '/ecobank/DSC08869.jpg', '/ecobank/DSC08611.jpg', '/ecobank/DSC08652.jpg']
  },
  {
    id: 2,
    title: 'First Mutual Park',
    category: 'Commercial',
    location: 'Harare',
    year: '2023',
    description: 'Full exterior glazing, aluminium entrance systems, and cladding for First Mutual\'s modern corporate campus. The project features structural curtain walling, aluminium-framed doors, stainless steel balustrades, and aluminium window systems set within a striking brick and stone facade.',
    services: ['Curtain Walling', 'Entrance Systems', 'Cladding', 'Windows', 'Balustrades'],
    image: '/firstmutual/untitled-561.JPG',
    gallery: ['/firstmutual/untitled-561.JPG', '/firstmutual/untitled-17.JPG', '/firstmutual/untitled-202.JPG', '/firstmutual/untitled-218.JPG', '/firstmutual/untitled-251.JPG', '/firstmutual/untitled-327.JPG', '/firstmutual/untitled-451.JPG', '/firstmutual/untitled-499.JPG', '/firstmutual/untitled-50.JPG', '/firstmutual/untitled-8.JPG']
  },
  {
    id: 3,
    title: 'Seagrave Road Residence',
    category: 'Residential',
    location: 'Harare',
    year: '2024',
    description: 'A luxury residential property featuring floor-to-ceiling aluminium-framed glass walls, frameless glass corner openings, floating steel and timber staircases, stainless steel balustrades, and modern aluminium window systems — all set within beautifully landscaped gardens.',
    services: ['Frameless Glazing', 'Windows', 'Balustrades', 'Steel Structures', 'Aluminium Cladding'],
    image: '/seagrave-road/1.jpg',
    gallery: ['/seagrave-road/1.jpg', '/seagrave-road/6.jpg', '/seagrave-road/9.jpg', '/seagrave-road/10.jpg', '/seagrave-road/12.jpg', '/seagrave-road/14.jpg', '/seagrave-road/17.jpg', '/seagrave-road/18.jpg', '/seagrave-road/22B.jpg']
  }
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));
  const [lightboxImage, setLightboxImage] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-arch-charcoal font-display mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-arch-gold hover:text-arch-amber font-medium">Back to Projects</Link>
        </div>
      </div>
    );
  }

  const currentLightboxIndex = lightboxImage ? project.gallery.indexOf(lightboxImage) : -1;

  return (
    <>
      <ScrollToTop />
      <SEO
        title={`${project.title} - Architectural Aluminium`}
        description={project.description}
      />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-arch-black via-arch-black/50 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 pb-12 md:pb-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
                <ArrowLeft size={16} />
                Back to Projects
              </Link>
              <span className="block px-3 py-1 bg-arch-gold/90 text-arch-black text-xs font-bold rounded-full w-fit mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-4">{project.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <span className="flex items-center gap-2"><MapPin size={18} className="text-arch-gold" />{project.location}</span>
                <span className="flex items-center gap-2"><CalendarBlank size={18} className="text-arch-gold" />{project.year}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-2xl font-bold text-arch-charcoal font-display mb-6">About This Project</h2>
                <p className="text-arch-slate text-lg leading-relaxed">{project.description}</p>
              </AnimatedSection>
            </div>
            <div>
              <AnimatedSection delay={0.1}>
                <div className="bg-arch-platinum rounded-2xl p-6 border border-arch-silver-light">
                  <h3 className="text-lg font-bold text-arch-charcoal font-display mb-4">Services Provided</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-arch-silver-light rounded-full text-arch-slate text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-arch-platinum">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-arch-charcoal font-display mb-10">Project Gallery</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(img)}
              >
                <img src={img} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="eager" />
                <div className="absolute inset-0 bg-arch-black/0 group-hover:bg-arch-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-arch-charcoal mb-6 font-display">Start a Similar Project</h2>
            <p className="text-arch-slate text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how we can bring your vision to life with our premium <Link to="/services" className="text-arch-gold hover:text-arch-amber underline decoration-arch-gold/30 hover:decoration-arch-gold underline-offset-2 transition-colors duration-300">aluminium solutions</Link>.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-arch-gold to-amber-600 text-arch-black font-bold rounded-full hover:shadow-lg hover:shadow-arch-gold/30 transition-all">
              Get a Quote <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-arch-black/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightboxImage(null)}
          >
            <button className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" onClick={() => setLightboxImage(null)}>
              <X size={24} className="text-white" />
            </button>
            {currentLightboxIndex > 0 && (
              <button className="absolute left-4 md:left-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" onClick={(e) => { e.stopPropagation(); setLightboxImage(project.gallery[currentLightboxIndex - 1]); }}>
                <CaretLeft size={24} className="text-white" />
              </button>
            )}
            {currentLightboxIndex < project.gallery.length - 1 && (
              <button className="absolute right-4 md:right-8 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors" onClick={(e) => { e.stopPropagation(); setLightboxImage(project.gallery[currentLightboxIndex + 1]); }}>
                <CaretRight size={24} className="text-white" />
              </button>
            )}
            <motion.img
              key={lightboxImage}
              src={lightboxImage}
              alt={project.title}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} loading="eager"
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-arch-black/70 rounded-full text-white text-sm font-mono">
              {currentLightboxIndex + 1} / {project.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
