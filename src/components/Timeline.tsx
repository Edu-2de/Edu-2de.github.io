'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const timelineData = [
  {
    type: 'work',
    title: 'Desenvolvedor Full Stack',
    company: 'Tech Solutions Inc.',
    location: 'São Paulo, SP',
    period: '2023 - Presente',
    description:
      'Desenvolvimento de aplicações web modernas usando React, Next.js e Node.js. Liderança de projetos e mentoria de desenvolvedores junior.',
    highlights: ['React/Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    type: 'work',
    title: 'Desenvolvedor Frontend',
    company: 'Digital Agency',
    location: 'Remote',
    period: '2022 - 2023',
    description: 'Criação de interfaces responsivas e experiências de usuário otimizadas para diversos clientes.',
    highlights: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
  },
  {
    type: 'education',
    title: 'Ciência da Computação',
    company: 'Universidade de São Paulo',
    location: 'São Paulo, SP',
    period: '2019 - 2022',
    description: 'Bacharelado com foco em desenvolvimento de software e estruturas de dados.',
    highlights: ['Algoritmos', 'Estruturas de Dados', 'Programação', 'Banco de Dados'],
  },
  {
    type: 'achievement',
    title: 'Certificação AWS',
    company: 'Amazon Web Services',
    location: 'Online',
    period: '2023',
    description: 'AWS Certified Developer - Associate Level',
    highlights: ['Cloud Computing', 'Lambda', 'DynamoDB', 'S3'],
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'work':
      return <Briefcase size={20} />;
    case 'education':
      return <Award size={20} />;
    case 'achievement':
      return <Award size={20} />;
    default:
      return <Calendar size={20} />;
  }
};

const getColor = (type: string) => {
  switch (type) {
    case 'work':
      return 'from-blue-500 to-cyan-500';
    case 'education':
      return 'from-purple-500 to-pink-500';
    case 'achievement':
      return 'from-green-500 to-emerald-500';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export default function Timeline() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minha <span className="text-gradient">Jornada</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Um resumo da minha experiência profissional, educação e conquistas principais.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${getColor(
                      item.type
                    )} rounded-full flex items-center justify-center text-white shadow-lg`}
                  >
                    {getIcon(item.type)}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} ml-20 md:ml-0`}
                >
                  <motion.div whileHover={{ scale: 1.02, y: -5 }} className="glass-effect p-6 rounded-xl hover-lift">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar size={16} className="text-blue-400" />
                      <span className="text-blue-400 font-medium text-sm">{item.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-gray-300 font-medium">{item.company}</span>
                      {item.location && (
                        <>
                          <MapPin size={14} className="text-gray-400" />
                          <span className="text-gray-400 text-sm">{item.location}</span>
                        </>
                      )}
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map(highlight => (
                        <span
                          key={highlight}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs hover:bg-white/20 transition-all duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
