'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Code, Coffee, Users, Trophy } from 'lucide-react';

interface StatProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color: string;
}

const statsData: StatProps[] = [
  { icon: Code, value: 50, label: 'Projetos Concluídos', suffix: '+', color: 'from-blue-500 to-cyan-500' },
  { icon: Coffee, value: 1500, label: 'Xícaras de Café', suffix: '+', color: 'from-orange-500 to-yellow-500' },
  { icon: Users, value: 25, label: 'Clientes Satisfeitos', suffix: '+', color: 'from-green-500 to-emerald-500' },
  { icon: Trophy, value: 3, label: 'Anos de Experiência', suffix: '+', color: 'from-purple-500 to-pink-500' },
];

const AnimatedCounter = ({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * value);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return (
    <div ref={ref}>
      <span className="text-4xl md:text-5xl font-bold">
        {prefix}
        {count}
        {suffix}
      </span>
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label, suffix, prefix, color }: StatProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="glass-effect p-8 rounded-2xl text-center hover-lift group"
    >
      <div
        className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={28} className="text-white" />
      </div>

      <div className="text-white mb-2">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </div>

      <p className="text-gray-300 font-medium">{label}</p>
    </motion.div>
  );
};

export default function Stats() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Números que <span className="text-gradient">Contam</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Algumas estatísticas que refletem minha jornada como desenvolvedor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Sempre em Evolução</h3>
            <p className="text-gray-300 leading-relaxed">
              Acredito que o aprendizado contínuo é fundamental na área de tecnologia. Estou sempre explorando novas
              ferramentas, frameworks e metodologias para entregar soluções cada vez melhores. Cada projeto é uma
              oportunidade de crescimento e inovação.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
