'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Zap, Globe } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'Jest', 'Figma'],
    color: 'from-purple-500 to-pink-500',
  },
];

const qualities = [
  {
    icon: Code2,
    title: 'Código Limpo',
    description: 'Escrevo código maintível, bem estruturado e seguindo as melhores práticas.',
  },
  {
    icon: Palette,
    title: 'Design & UX',
    description: 'Combino funcionalidade com design para criar experiências incríveis.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Otimizo aplicações para máxima velocidade e eficiência.',
  },
  {
    icon: Globe,
    title: 'Full Stack',
    description: 'Domino tanto o frontend quanto o backend para soluções completas.',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor full stack com paixão por criar experiências digitais que fazem a diferença. Sempre em busca
            de novas tecnologias e desafios.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Minha História</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Começei minha jornada na programação há mais de 3 anos, e desde então me apaixonei pela possibilidade de
                criar soluções que impactem positivamente a vida das pessoas.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Especializo-me em desenvolvimento full stack, com foco em tecnologias modernas como React, Next.js e
                Node.js. Adoro trabalhar tanto no frontend quanto no backend, criando experiências completas.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Quando não estou codando, gosto de estudar novas tecnologias, contribuir para projetos open source e
                compartilhar conhecimento com a comunidade dev.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Habilidades Técnicas</h3>

            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-effect p-6 rounded-xl"
              >
                <h4
                  className={`text-lg font-semibold mb-3 bg-gradient-to-r ${skillCategory.color} bg-clip-text text-transparent`}
                >
                  {skillCategory.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/20 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Qualities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            O que me <span className="text-gradient">diferencia</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualities.map((quality, index) => {
              const Icon = quality.icon;
              return (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-effect p-6 rounded-xl text-center hover-lift group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{quality.title}</h4>
                  <p className="text-gray-300 text-sm">{quality.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
