'use client';
import { useState, useEffect, useRef } from 'react';
import { useAnimation, Variants } from 'framer-motion';
import OrbitPlanets from './Hero_components/OrbitPlanets';
import HeroStars from './Hero_components/HeroStars';
import HeroContent from './Hero_components/HeroContent';

export default function Hero() {
  const controls = useAnimation();
  const nameRef = useRef<HTMLDivElement>(null);
  const [nameHover, setNameHover] = useState(false);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    });
  }, [controls]);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const centerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-slate-950 to-gray-900 select-none"
    >
      <HeroStars />
      <OrbitPlanets />
      <HeroContent
        nameHover={nameHover}
        setNameHover={setNameHover}
        centerRef={centerRef}
        nameRef={nameRef}
        controls={controls}
        nameVariants={nameVariants}
        textVariants={textVariants}
        scrollToNext={scrollToNext}
      />
    </section>
  );
}
