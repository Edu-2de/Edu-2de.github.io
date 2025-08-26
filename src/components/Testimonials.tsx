'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Maria Silva',
    position: 'Product Manager',
    company: 'TechCorp',
    content:
      'Eduardo é um desenvolvedor excepcional. Sua capacidade de transformar ideias complexas em soluções elegantes é impressionante. Sempre entrega projetos no prazo e com qualidade superior.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 2,
    name: 'João Santos',
    position: 'CTO',
    company: 'StartupXYZ',
    content:
      'Trabalhei com Eduardo em vários projetos e sempre fiquei impressionado com sua atenção aos detalhes e conhecimento técnico. É o tipo de profissional que faz a diferença na equipe.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    name: 'Ana Costa',
    position: 'Designer UX/UI',
    company: 'Creative Agency',
    content:
      'A colaboração com Eduardo foi fantástica. Ele não apenas implementa o design perfeitamente, mas também sugere melhorias que enriquecem a experiência do usuário.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 4,
    name: 'Carlos Oliveira',
    position: 'Founder',
    company: 'EcoTech Solutions',
    content:
      'Eduardo desenvolveu nossa plataforma principal do zero. O resultado superou todas as expectativas. Profissionalismo e competência técnica em alto nível.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O que dizem <span className="text-gradient">sobre mim</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Feedback de clientes e colegas que trabalharam comigo ao longo da minha carreira.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main testimonial card */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote size={80} className="text-blue-400" />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-gray-100 text-center mb-8 leading-relaxed font-light italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              {/* Author info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20"></div>
                </div>
                <div className="text-center">
                  <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-300 text-sm">
                    {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-500/20 transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-blue-500/20 transition-all duration-300"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* All testimonials preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => goToSlide(index)}
              className={`glass-effect p-4 rounded-xl text-left transition-all duration-300 ${
                index === currentIndex ? 'ring-2 ring-blue-400 bg-blue-500/10' : 'hover:bg-white/5'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h5 className="text-white font-medium text-sm">{testimonial.name}</h5>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs line-clamp-3">{testimonial.content}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
