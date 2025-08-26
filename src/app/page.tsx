'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillsAnimation from '@/components/SkillsAnimation';
import Stats from '@/components/Stats';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />
      <main className="relative">
        <Hero />
        <About />
        <SkillsAnimation />
        <Stats />
        <Timeline />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
