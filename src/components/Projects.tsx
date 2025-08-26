'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/Edu-2de',
    demo: '#',
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    github: 'https://github.com/Edu-2de',
    demo: '#',
    color: 'from-green-500 to-teal-600',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Dashboard meteorológico com previsões detalhadas e gráficos interativos.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
    github: 'https://github.com/Edu-2de',
    demo: '#',
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Ferramenta de análise de redes sociais com métricas e relatórios automáticos.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/Edu-2de',
    demo: '#',
    color: 'from-pink-500 to-purple-600',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Site portfólio responsivo com animações e efeitos interativos.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind', 'Three.js'],
    github: 'https://github.com/Edu-2de',
    demo: '#',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: 6,
    title: 'Crypto Tracker',
    description: 'Aplicativo de acompanhamento de criptomoedas com alertas e portfólio.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    technologies: ['React Native', 'TypeScript', 'CoinGecko API', 'AsyncStorage'],
    github: 'https://github.com/Edu-2de',
    demo: '#',
    color: 'from-yellow-500 to-orange-600',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meus <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi, desde aplicações web completas até ferramentas e utilitários
            inovadores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover-lift group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <Eye size={20} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs hover:bg-white/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-white rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">Gostou dos projetos? Vamos conversar sobre seu próximo projeto!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contact = document.getElementById('contact');
              contact?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Entrar em Contato
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
