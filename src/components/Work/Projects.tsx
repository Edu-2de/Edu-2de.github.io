'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// Space background with subtle stars and glows
function SpaceBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Soft glows */}
      <div
        style={{
          position: 'absolute',
          left: '10%',
          top: '18%',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, #0f172b88 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(32px)',
          opacity: 0.45,
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '8%',
          bottom: '10%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, #23283a88 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(24px)',
          opacity: 0.32,
        }}
      />
      {/* Stars */}
      {Array.from({ length: 38 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() > 0.8 ? 2.5 : 1.2,
            height: Math.random() > 0.8 ? 2.5 : 1.2,
            borderRadius: '50%',
            background: '#e2e8f0',
            opacity: 0.18 + Math.random() * 0.18,
            boxShadow: '0 0 8px 2px #e2e8f0',
            transition: 'opacity 0.8s',
          }}
        />
      ))}
    </div>
  );
}

const categories = [
  { label: "My Favorites", value: "favorites" },
  { label: "Most Difficult", value: "difficult" },
  { label: "UI/UX", value: "uiux" },
  { label: "Business", value: "business" },
  { label: "All Projects", value: null },
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "PostgreSQL"],
    tags: ["favorites", "business", "uiux"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    tech: ["Next.js", "TypeScript", "Prisma"],
    tags: ["difficult", "business"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with detailed forecasts and interactive maps.",
    tech: ["React", "API Integration", "Charts"],
    tags: ["uiux", "favorites"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects, skills, and contact information.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    tags: ["favorites", "uiux"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with authentication and group conversations.",
    tech: ["Next.js", "Socket.io", "MongoDB"],
    tags: ["difficult"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Finance Tracker",
    description: "Track expenses and income with charts and analytics.",
    tech: ["Vue.js", "Firebase", "Chart.js"],
    tags: ["business"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

// Animation for card group
const groupVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    y: direction > 0 ? 40 : -40,
    scale: 0.96,
    filter: 'blur(8px)',
  }),
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 50, damping: 22 }
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: direction < 0 ? 40 : -40,
    scale: 0.96,
    filter: 'blur(8px)',
    transition: { duration: 0.45 }
  }),
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<null | string>(null);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Filter projects by category
  const filteredProjects = selectedCategory
    ? projects.filter(p => p.tags.includes(selectedCategory))
    : projects;

  // Pagination logic: 3 per page
  const pageSize = 3;
  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const paginatedProjects = filteredProjects.slice(page * pageSize, page * pageSize + pageSize);

  // Reset page when category changes
  function handleCategory(cat: string | null) {
    setSelectedCategory(cat);
    setPage(0);
    setDirection(0);
  }

  function handlePageChange(newPage: number) {
    setDirection(newPage > page ? 1 : -1);
    setPage(newPage);
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-2 py-20 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 60% 30%, #0f172b 0%, #07080c 100%)',
      }}
    >
      <SpaceBackground />

      {/* Title and description */}
      <motion.div
        initial={{ opacity: 0, y: -40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-10 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-slate-100 mb-4 tracking-tight"
        >
          Space Projects
        </motion.h2>
        <div className="w-14 h-[2px] bg-slate-800 mx-auto mb-2" />
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-xl mx-auto">
          Discover my favorite and most challenging projects, focused on UI/UX and business solutions.
        </p>
      </motion.div>

      {/* Subcategories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(cat => (
          <motion.button
            key={cat.label}
            onClick={() => handleCategory(cat.value)}
            whileHover={{ scale: 1.08, y: -2, boxShadow: '0 2px 12px #0f172b44' }}
            className={`px-5 py-2 rounded-md border font-medium text-sm transition
              ${selectedCategory === cat.value || (cat.value === null && selectedCategory === null)
                ? 'bg-[#0f172b] text-white border-[#0f172b] shadow-lg'
                : 'bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800'}
            `}
            style={{
              boxShadow: selectedCategory === cat.value || (cat.value === null && selectedCategory === null)
                ? '0 2px 12px 0 #0f172b44'
                : undefined
            }}
          >
            {cat.label}
          </motion.button>
        ))}
      </div>

      {/* Cards with improved animation and subtle space effect */}
      <div className="w-full flex justify-center items-stretch gap-8 mb-8 relative">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={selectedCategory + page}
            custom={direction}
            variants={groupVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex gap-8 w-full justify-center"
            style={{ minHeight: 260 }}
          >
            {paginatedProjects.map((project, idx) => (
              <motion.div
                key={project.title + idx + page}
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.08, type: 'spring', bounce: 0.3 }}
                className="bg-gradient-to-br from-[#10131a] via-[#181c26] to-[#23283a] border border-slate-800 rounded-2xl shadow-xl p-7 flex flex-col items-center w-full max-w-xs min-h-[240px] hover:shadow-2xl transition-all duration-300 relative"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle planet ring effect */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 pointer-events-none z-0"
                  style={{
                    width: 120,
                    height: 40,
                    borderRadius: '50%',
                    border: '2px solid #0f172b55',
                    opacity: 0.18,
                    filter: 'blur(2px)',
                  }}
                />
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(ellipse at 60% 30%, #0f172b33 0%, transparent 70%)'
                }} />
                <h3 className="text-lg font-semibold text-slate-100 mb-2 tracking-tight text-center z-10">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-center leading-relaxed text-sm z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-900 text-slate-200 text-xs rounded-full border border-slate-700 shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto z-10">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.13 }}
                    className="bg-slate-900/80 hover:bg-blue-700/80 text-white rounded-full p-2 shadow transition"
                    aria-label="View demo"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.13 }}
                    className="bg-slate-900/80 hover:bg-slate-700/80 text-white rounded-full p-2 shadow transition"
                    aria-label="View code on GitHub"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-8">
          <motion.button
            whileHover={{ scale: 1.12, x: -4 }}
            onClick={() => handlePageChange(page > 0 ? page - 1 : 0)}
            disabled={page === 0}
            className={`px-3 py-2 rounded-lg bg-slate-900 text-slate-300 hover:bg-[#0f172b] transition disabled:opacity-40`}
          >
            ◀
          </motion.button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.12 }}
              onClick={() => handlePageChange(idx)}
              className={`w-3.5 h-3.5 rounded-full border-2 border-slate-700 mx-1 transition-all duration-200
                ${page === idx ? 'bg-[#0f172b] border-[#0f172b] shadow' : 'bg-slate-800'}
              `}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
          <motion.button
            whileHover={{ scale: 1.12, x: 4 }}
            onClick={() => handlePageChange(page < totalPages - 1 ? page + 1 : page)}
            disabled={page === totalPages - 1}
            className={`px-3 py-2 rounded-lg bg-slate-900 text-slate-300 hover:bg-[#0f172b] transition disabled:opacity-40`}
          >
            ▶
          </motion.button>
        </div>
      )}

      {/* See more on GitHub */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-center mt-2 z-10"
      >
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 px-6 py-3 rounded-lg bg-slate-900 border border-slate-700 font-medium"
        >
          <Github size={20} />
          See more on GitHub
        </motion.a>
      </motion.div>
    </section>
  );
}