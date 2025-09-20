'use client';

import { useState } from 'react';
import Navigation from '@/components/SpaceNavigation/SpaceNavigation';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Work/Projects';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  const [hideNav, setHideNav] = useState(false);

  return (
    <div className= "overflow-x-hidden">
      {!hideNav && <Navigation />}
      <main>
        <Hero />
        <About setHideNav={setHideNav}/>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
