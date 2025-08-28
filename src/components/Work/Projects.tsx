'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "TypeScript", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with detailed forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "API Integration", "Charts"],
    github: "https://github.com",
    demo: "https://demo.com",
  }
];

// Custom background: deep space with blurred planets and stars
function SpaceBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Blurred planets */}
      <div
        style={{
          position: 'absolute',
          left: '10%',
          top: '15%',
          width: '220px',
          height: '220px',
          background: '#222c3a',
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '8%',
          top: '60%',
          width: '180px',
          height: '180px',
          background: '#334155',
          borderRadius: '50%',
          filter: 'blur(40px)',
          opacity: 0.4,
        }}
      />
      {/* Star field */}
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            borderRadius: '50%',
            background: '#e2e8f0',
            opacity: Math.random() * 0.5 + 0.2,
            boxShadow: '0 0 8px 2px #e2e8f0',
          }}
        />
      ))}
      {/* Subtle cosmic lines */}
      <svg
        width="100vw"
        height="100vh"
        style={{ position: 'absolute', left: 0, top: 0, opacity: 0.12 }}
      >
        <line x1="0" y1="0" x2="100vw" y2="100vh" stroke="#64748b" strokeWidth="2" />
        <line x1="100vw" y1="0" x2="0" y2="100vh" stroke="#64748b" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function Projects() {
  const [current, setCurrent] = useState(0);

  // Show 3 projects at once: previous, current, next
  const getVisibleProjects = () => {
    const prev = (current - 1 + projects.length) % projects.length;
    const next = (current + 1) % projects.length;
    return [
      { ...projects[prev], idx: prev, position: 'left' },
      { ...projects[current], idx: current, position: 'center' },
      { ...projects[next], idx: next, position: 'right' },
    ];
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-2 py-20 bg-[#181c25] overflow-hidden"
    >
      <SpaceBackground />

      <motion.div
        initial={{ opacity: 0, y: -80, scale: 0.95, rotateX: 60 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mb-16 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, rotateY: 40 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-slate-100 mb-6"
        >
          Space Projects
        </motion.h2>
        <div className="w-16 h-[2px] bg-slate-700 mx-auto mb-2" />
        <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">
          Discover my featured work, orbiting around technology, design and interactivity.
        </p>
      </motion.div>

      <div className="relative w-full max-w-5xl flex items-center justify-center min-h-[420px]">
        <AnimatePresence mode="wait">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.idx}
              initial={
                project.position === 'center'
                  ? { opacity: 0, scale: 0.7, y: 120, rotateY: 60 }
                  : { opacity: 0, scale: 0.6, y: 80, x: project.position === 'left' ? -120 : 120, rotateY: project.position === 'left' ? -40 : 40 }
              }
              animate={
                project.position === 'center'
                  ? { opacity: 1, scale: 1, y: 0, x: 0, zIndex: 10, rotateY: 0 }
                  : { opacity: 0.7, scale: 0.85, y: 40, x: project.position === 'left' ? -180 : 180, zIndex: 5, rotateY: project.position === 'left' ? -18 : 18 }
              }
              exit={{ opacity: 0, scale: 0.6, y: 80, x: project.position === 'left' ? -120 : 120, rotateY: project.position === 'left' ? -40 : 40 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className={`absolute top-0 left-1/2 -translate-x-1/2 ${project.position === 'center' ? 'shadow-2xl' : 'pointer-events-none'} w-full max-w-xl`}
              style={{
                filter: project.position === 'center' ? 'none' : 'blur(1.5px) grayscale(0.3)',
                boxShadow: project.position === 'center' ? '0 8px 32px 0 #0f172a88' : 'none',
                zIndex: project.position === 'center' ? 10 : 5,
                cursor: project.position === 'center' ? 'default' : 'pointer',
              }}
            >
              <div className="relative group rounded-3xl overflow-hidden border border-slate-700 bg-[#20232e] backdrop-blur-md">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{
                    filter: project.position === 'center'
                      ? 'brightness(0.85)'
                      : 'brightness(0.65) blur(1.5px)',
                    objectPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />
                {project.position === 'center' && (
                  <div className="absolute top-4 right-4 flex gap-2 z-10">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      className="bg-slate-900/80 hover:bg-blue-700/80 text-white rounded-full p-3 shadow-lg transition"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      className="bg-slate-900/80 hover:bg-slate-700/80 text-white rounded-full p-3 shadow-lg transition"
                    >
                      <Github size={22} />
                    </motion.a>
                  </div>
                )}
                <div className="p-8 flex flex-col items-center">
                  <h3 className="text-2xl font-semibold text-slate-100 mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-5 text-center leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6 justify-center">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 bg-slate-800 text-slate-200 text-sm rounded-full shadow border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {/* Navigation buttons */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <motion.button
            onClick={() => setCurrent((current - 1 + projects.length) % projects.length)}
            whileHover={{ scale: 1.18, x: -8 }}
            className="bg-[#23283a] hover:bg-[#2d3142] text-white rounded-full px-5 py-4 font-medium shadow-lg transition"
            aria-label="Previous project"
          >
            ◀
          </motion.button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
          <motion.button
            onClick={() => setCurrent((current + 1) % projects.length)}
            whileHover={{ scale: 1.18, x: 8 }}
            className="bg-[#23283a] hover:bg-[#2d3142] text-white rounded-full px-5 py-4 font-medium shadow-lg transition"
            aria-label="Next project"
          >
            ▶
          </motion.button>
        </div>
      </div>
      {/* Dots navigation */}
      <div className="mt-10 flex justify-center gap-3 z-10">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full border-2 border-slate-700 transition-all duration-200
              ${current === idx ? 'bg-slate-400 border-slate-400 shadow-lg' : 'bg-slate-800'}
            `}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
      {/* Github link */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: 30 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center mt-16 z-10"
      >
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
        >
          <Github size={22} />
          <span className="font-medium">View More on GitHub</span>
        </motion.a>
      </motion.div>
    </section>
  );
}