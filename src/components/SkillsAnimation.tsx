'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProps {
  name: string;
  level: number;
  color: string;
}

const skillsData: SkillProps[] = [
  { name: 'React / Next.js', level: 95, color: '#61DAFB' },
  { name: 'TypeScript', level: 90, color: '#3178C6' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'PostgreSQL', level: 85, color: '#336791' },
  { name: 'MongoDB', level: 75, color: '#47A248' },
  { name: 'Docker', level: 70, color: '#2496ED' },
  { name: 'AWS', level: 65, color: '#FF9900' },
];

const SkillBar = ({ name, level, color }: SkillProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: [0, 1, 0] } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="absolute inset-0 bg-white/30 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default function SkillsAnimation() {
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
            Habilidades <span className="text-gradient">Técnicas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Aqui estão minhas principais competências técnicas com base na experiência e projetos realizados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Frontend & Backend</h3>
              {skillsData.slice(0, 4).map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Database & DevOps</h3>
              {skillsData.slice(4).map(skill => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
