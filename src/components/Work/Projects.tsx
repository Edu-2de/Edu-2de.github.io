'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: '/images/ecommerce-thumb.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates and team collaboration features.',
    tech: ['Next.js', 'TypeScript', 'Prisma'],
    image: '/images/task-thumb.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with detailed forecasts and interactive maps.',
    tech: ['React', 'API Integration', 'Charts'],
    image: '/images/weather-thumb.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects, skills, and contact information.',
    tech: ['React', 'TailwindCSS', 'Framer Motion'],
    image: '/images/portfolio-thumb.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat app with authentication and group conversations.',
    tech: ['Next.js', 'Socket.io', 'MongoDB'],
    image: '/images/chat-thumb.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com',
  },
  {
    title: 'Finance Tracker',
    description: 'Track expenses and income with charts and analytics.',
    tech: ['Vue.js', 'Firebase', 'Chart.js'],
    image: '/images/finance-thumb.jpg',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    github: 'https://github.com',
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const [page, setPage] = useState(0);
  const [showVideo, setShowVideo] = useState<null | number>(null);

  const pageSize = 3;
  const totalPages = Math.ceil(projects.length / pageSize);
  const paginatedProjects = projects.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-2 py-20 bg-[#10131a]"
    >
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
          className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
        >
          {t.projectsTitle}
        </motion.h2>
        <p className="mt-4 text-base md:text-lg text-gray-400 max-w-xl mx-auto">{t.projectsDescription}</p>
      </motion.div>

      <div className="w-full flex justify-center items-stretch gap-8 mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="flex gap-8 w-full justify-center"
          >
            {paginatedProjects.map((project, idx) => (
              <motion.div
                key={project.title + idx + page}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                className="bg-[#181c26] border border-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs min-h-[260px] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full flex justify-center mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={128}
                    height={80}
                    className="rounded-lg object-cover w-32 h-20 cursor-pointer transition hover:scale-105"
                    onClick={() => setShowVideo(idx + page * pageSize)}
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-center text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#23283a] text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.13 }}
                    className="bg-[#23283a] hover:bg-blue-600 hover:text-white text-gray-300 rounded-full p-2 transition"
                    aria-label="Show demo video"
                    onClick={() => setShowVideo(idx + page * pageSize)}
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.13 }}
                    className="bg-[#23283a] hover:bg-gray-800 hover:text-white text-gray-300 rounded-full p-2 transition"
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

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mb-8">
          <motion.button
            whileHover={{ scale: 1.12, x: -4 }}
            onClick={() => setPage(page > 0 ? page - 1 : 0)}
            disabled={page === 0}
            className="px-3 py-2 rounded-lg bg-[#23283a] text-gray-300 hover:bg-gray-700 transition disabled:opacity-40"
          >
            ◀
          </motion.button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.12 }}
              onClick={() => setPage(idx)}
              className={`w-3.5 h-3.5 rounded-full border-2 border-gray-700 mx-1 transition-all duration-200
                ${page === idx ? 'bg-gray-800 border-gray-800 shadow' : 'bg-[#23283a]'}
              `}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
          <motion.button
            whileHover={{ scale: 1.12, x: 4 }}
            onClick={() => setPage(page < totalPages - 1 ? page + 1 : page)}
            disabled={page === totalPages - 1}
            className="px-3 py-2 rounded-lg bg-[#23283a] text-gray-300 hover:bg-gray-700 transition disabled:opacity-40"
          >
            ▶
          </motion.button>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-center mt-2"
      >
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 px-6 py-3 rounded-lg bg-[#23283a] border border-gray-700 font-medium"
        >
          <Github size={20} />
          {t.seeMoreOnGithub}
        </motion.a>
      </motion.div>

      <AnimatePresence>
        {showVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          >
            <div className="relative w-full max-w-xl mx-auto">
              <button
                className="absolute -top-12 right-0 z-10 bg-[#23283a] text-white rounded-full p-3 shadow-lg hover:bg-red-600 transition"
                onClick={() => setShowVideo(null)}
                aria-label="Close video"
              >
                <X size={28} />
              </button>
              <div className="bg-[#181c26] rounded-xl shadow-2xl p-0 flex flex-col items-center overflow-hidden">
                <div className="w-full h-0 pb-[56.25%] relative">
                  <iframe
                    src={projects[showVideo].video}
                    title={projects[showVideo].title}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                  />
                </div>
                <div className="w-full px-8 py-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{projects[showVideo].title}</h3>
                  <p className="text-gray-400">{projects[showVideo].description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
