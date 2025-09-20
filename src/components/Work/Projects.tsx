'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const Projects = () => {
  const { language } = useLanguage();
  const [page, setPage] = useState(0);

  // Traduções locais
  const translations = {
    en: {
      projectsTitle: 'Featured Projects',
      projectsDescription: 'A collection of projects that showcase my technical skills, creativity, and passion for solving real-world problems through code.',
      seeMoreOnGithub: 'Explore All Projects',
      githubDescription: 'Discover more projects, contributions, and code experiments on my GitHub profile.',
      viewCode: 'View Code',
      openInNewTab: 'Open in new tab',
      previousPage: 'Previous page',
      nextPage: 'Next page',
      goToPage: 'Go to page',
      
      // Categories
      webApplication: 'Web Application',
      desktopApplication: 'Desktop Application',
      mobileApplication: 'Mobile Application',
      backendSystem: 'Backend System',
      educationalProject: 'Educational Project',
      personalPortfolio: 'Personal Portfolio',

      // Project descriptions
      projectOrganizoDesc: 'A comprehensive web application for personal organization, featuring productivity tools, task management, calendar integration, and daily motivation features. Built with modern technologies for optimal performance.',
      projectAsciiDesc: 'A cross-platform desktop application that transforms images and text into ASCII art. Features an intuitive interface and real-time conversion capabilities, bringing classic ASCII art into the modern era.',
      projectKodeStartDesc: 'A Flutter mobile application developed as part of a technical assessment, demonstrating proficiency in mobile development, UI/UX design, and modern Flutter practices.',
      projectPortfolioDesc: 'A modern, responsive personal portfolio website showcasing my projects, skills, and professional journey. Built with cutting-edge web technologies and optimized for performance.',
      projectPaimContabDesc: 'A comprehensive web application designed for accounting services, featuring an intuitive frontend interface combined with a robust backend architecture for financial management.',
      projectMicroservicesDesc: 'A demonstration of microservices architecture using Python, FastAPI, and RabbitMQ. Showcases asynchronous messaging patterns, scalable design principles, and modern backend development practices.',
      projectCSharpBasicsDesc: 'An educational repository designed to teach Object-Oriented Programming fundamentals using C#. Features practical examples, clear explanations, and hands-on exercises for beginners.',
    },
    pt: {
      projectsTitle: 'Projetos em Destaque',
      projectsDescription: 'Uma coleção de projetos que demonstram minhas habilidades técnicas, criatividade e paixão por resolver problemas do mundo real através do código.',
      seeMoreOnGithub: 'Explorar Todos os Projetos',
      githubDescription: 'Descubra mais projetos, contribuições e experimentos de código no meu perfil do GitHub.',
      viewCode: 'Ver Código',
      openInNewTab: 'Abrir em nova aba',
      previousPage: 'Página anterior',
      nextPage: 'Próxima página',
      goToPage: 'Ir para página',
      
      // Categories
      webApplication: 'Aplicação Web',
      desktopApplication: 'Aplicação Desktop',
      mobileApplication: 'Aplicação Mobile',
      backendSystem: 'Sistema Backend',
      educationalProject: 'Projeto Educacional',
      personalPortfolio: 'Portfólio Pessoal',

      // Project descriptions
      projectOrganizoDesc: 'Uma aplicação web abrangente para organização pessoal, com ferramentas de produtividade, gerenciamento de tarefas, integração de calendário e recursos de motivação diária. Construída com tecnologias modernas para desempenho otimizado.',
      projectAsciiDesc: 'Uma aplicação desktop multiplataforma que transforma imagens e texto em arte ASCII. Possui interface intuitiva e capacidades de conversão em tempo real, trazendo a arte ASCII clássica para a era moderna.',
      projectKodeStartDesc: 'Uma aplicação mobile Flutter desenvolvida como parte de um processo seletivo técnico, demonstrando proficiência em desenvolvimento mobile, design UI/UX e práticas modernas do Flutter.',
      projectPortfolioDesc: 'Um site de portfólio pessoal moderno e responsivo que apresenta meus projetos, habilidades e jornada profissional. Construído com tecnologias web de ponta e otimizado para performance.',
      projectPaimContabDesc: 'Uma aplicação web abrangente projetada para serviços contábeis, apresentando uma interface frontend intuitiva combinada com uma arquitetura backend robusta para gestão financeira.',
      projectMicroservicesDesc: 'Uma demonstração de arquitetura de microsserviços usando Python, FastAPI e RabbitMQ. Apresenta padrões de mensageria assíncrona, princípios de design escalável e práticas modernas de desenvolvimento backend.',
      projectCSharpBasicsDesc: 'Um repositório educacional projetado para ensinar fundamentos de Programação Orientada a Objetos usando C#. Apresenta exemplos práticos, explicações claras e exercícios práticos para iniciantes.',
    }
  };

  const t = translations[language];

  const projects = [
    {
      title: 'Organizo',
      description: t.projectOrganizoDesc,
      tech: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Django', 'PostgreSQL'],
      github: 'https://github.com/Edu-2de/Organizo',
      category: t.webApplication,
    },
    {
      title: 'ASCII Visualizer',
      description: t.projectAsciiDesc,
      tech: ['JavaScript', 'Electron', 'Node.js', 'Cross-platform'],
      github: 'https://github.com/Edu-2de/AsciiVisualizer',
      category: t.desktopApplication,
    },
    {
      title: 'Kode Start',
      description: t.projectKodeStartDesc,
      tech: ['Flutter', 'Dart', 'Mobile Development'],
      github: 'https://github.com/Edu-2de/kode-start',
      category: t.mobileApplication,
    },
    {
      title: t.personalPortfolio,
      description: t.projectPortfolioDesc,
      tech: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      github: 'https://github.com/Edu-2de/Edu-2de.github.io',
      category: t.webApplication,
    },
    {
      title: 'PaimContab',
      description: t.projectPaimContabDesc,
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Responsive Design'],
      github: 'https://github.com/Edu-2de/PaimContab',
      category: t.webApplication,
    },
    {
      title: 'Microservices Messaging',
      description: t.projectMicroservicesDesc,
      tech: ['Python', 'FastAPI', 'RabbitMQ', 'Docker', 'Microservices'],
      github: 'https://github.com/Edu-2de/MicroservicesMessaging',
      category: t.backendSystem,
    },
    {
      title: 'C# Basics',
      description: t.projectCSharpBasicsDesc,
      tech: ['C#', '.NET', 'OOP', 'Educational Content'],
      github: 'https://github.com/Edu-2de/csharp-basics',
      category: t.educationalProject,
    },
  ];

  const pageSize = 3;
  const totalPages = Math.ceil(projects.length / pageSize);
  const paginatedProjects = projects.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section id="projects" className="relative min-h-screen bg-neutral-900 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight"
          >
            {t.projectsTitle}
          </motion.h2>
          <div className="w-20 h-px bg-neutral-600 mx-auto mb-8"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t.projectsDescription}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedProjects.map((project, idx) => (
                <motion.div
                  key={project.title + page}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/20"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-neutral-700 to-neutral-800 rounded-lg flex items-center justify-center group-hover:from-neutral-600 group-hover:to-neutral-700 transition-all duration-300">
                        <Github className="w-6 h-6 text-neutral-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-neutral-100 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-sm text-neutral-500 font-medium">{project.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neutral-700 text-neutral-300 text-xs rounded-full border border-neutral-600 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 bg-neutral-700/50 text-neutral-400 text-xs rounded-full font-medium">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-neutral-900 px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Github size={16} />
                      {t.viewCode}
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 text-neutral-400 hover:text-white transition-colors duration-300"
                      aria-label={t.openInNewTab}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage(Math.max(0, page - 1))}
              disabled={page === 0}
              className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={t.previousPage}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPage(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    page === idx
                      ? 'bg-white shadow-lg'
                      : 'bg-neutral-600 hover:bg-neutral-500'
                  }`}
                  aria-label={`${t.goToPage} ${idx + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
              disabled={page === totalPages - 1}
              className="p-2 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={t.nextPage}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
        {/* End Pagination motion.div */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/Edu-2de"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            {t.seeMoreOnGithub}
            <ExternalLink size={16} className="opacity-60" />
          </motion.a>
          <p className="text-neutral-500 text-sm mt-4 max-w-2xl mx-auto">
            {t.githubDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;