import { useState, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const PLANETS = [
  {
    name: 'Planet Skills',
    color: '#fbbf24',
    texture: '/textures/venusmap.jpg',
    items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS', 'Tailwind'],
    description:
      'My skills are the foundation of my journey. I build interactive interfaces with React and TypeScript, connect systems with Node.js APIs, and design modern layouts using CSS and Tailwind. Always exploring new technologies and improving my craft.',
    facts: [
      'TypeScript for clarity and safety.',
      'React for dynamic user interfaces.',
      'Currently learning Next.js.',
      'Open source contributor.',
      'Experience in frontend and backend.',
    ],
    link: 'https://github.com/edu-2de',
    linkLabel: 'Explore my GitHub',
  },
  {
    name: 'Planet Hobbies',
    color: '#38bdf8',
    texture: '/textures/neptunemap.jpg',
    items: ['Music', 'Gaming', 'Travel', 'Photography', 'Cooking'],
    description:
      'Creativity and adventure drive my hobbies. I play guitar, enjoy immersive games, travel to new places, capture moments with photography, and experiment with cooking. Always seeking inspiration and new experiences.',
    facts: [
      'Favorite game: Zelda.',
      'Instrument: Guitar.',
      'Dream trip: Japan.',
      'Passionate about photography.',
      'Enjoy cooking and trying new recipes.',
    ],
    link: 'https://instagram.com/',
    linkLabel: 'See my creative side',
  },
  {
    name: 'Planet Tools',
    color: '#ec4899',
    texture: '/textures/mars_1k_color.jpg',
    items: ['VS Code', 'GitHub', 'Figma', 'Notion', 'Framer Motion'],
    description:
      'My toolkit keeps my workflow efficient. I code in VS Code, collaborate on GitHub, design in Figma, organize with Notion, and animate with Framer Motion. These tools help me create and deliver quality projects.',
    facts: [
      'Figma for design systems.',
      'Notion for notes and organization.',
      'VS Code for coding.',
      'Framer Motion for UI animations.',
      'GitHub for version control.',
    ],
    link: 'https://figma.com/',
    linkLabel: 'Visit my design station',
  },
  {
    name: 'Planet Dreams',
    color: '#22d3ee',
    texture: '/textures/plutomap1k.jpg',
    items: ['Space Travel', 'Remote Work', 'Open Source', 'AI Projects'],
    description:
      'My dreams reach beyond boundaries. I aim to work remotely, contribute to open source, explore artificial intelligence, and one day, travel through space. Always looking for new challenges and opportunities.',
    facts: [
      'Goal: Make an impact in open source.',
      'Dream: Visit Mars.',
      'Interest: Artificial Intelligence.',
      'Advocate for remote work.',
      'Space enthusiast.',
    ],
    link: 'https://openai.com/',
    linkLabel: 'Discover my vision',
  },
];

// Planeta 3D claro, girando e com textura visível
function Planet3D({ color, texture }: { color: string; texture: string }) {
  const map = useLoader(THREE.TextureLoader, texture);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.018; // rotação suave
    }
  });

  return (
    <>
      <ambientLight intensity={1.6} />
      <directionalLight position={[5, 10, 7]} intensity={1.5} />
      <mesh ref={meshRef} rotation={[0, 0, 0]}>
        <sphereGeometry args={[3.5, 64, 64]} />
        <meshStandardMaterial
          map={map}
          color="#eaeaea"
          roughness={0.22}
          metalness={0.7}
          emissive={color}
          emissiveIntensity={0.18}
        />
      </mesh>
    </>
  );
}

export default function About() {
  const [selected, setSelected] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const nextPlanet = () => {
    setIsChanging(true);
    setTimeout(() => {
      setSelected((selected + 1) % PLANETS.length);
      setIsChanging(false);
    }, 350);
  };
  const prevPlanet = () => {
    setIsChanging(true);
    setTimeout(() => {
      setSelected((selected - 1 + PLANETS.length) % PLANETS.length);
      setIsChanging(false);
    }, 350);
  };

  const planet = PLANETS[selected];

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-slate-950 to-gray-900 px-4 py-16"
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl gap-12 md:gap-24">
        {/* Planet 3D */}
        <motion.div
          className="flex flex-col items-center justify-center w-full md:w-[55%] min-h-[520px] relative"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div
            className="relative"
            style={{
              width: '520px',
              height: '520px',
              minWidth: '520px',
              minHeight: '520px',
              maxWidth: '100vw',
              maxHeight: '80vh',
            }}
          >
            <button
              aria-label="Previous planet"
              className="absolute left-[-48px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 rounded-full p-3 text-white shadow transition-all z-10"
              onClick={prevPlanet}
              disabled={isChanging}
              style={{ opacity: isChanging ? 0.5 : 1 }}
            >
              <svg width={36} height={36} fill="none"><path d="M26 10l-8 8 8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            {/* Canvas sempre absoluto e fixo */}
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '520px',
                height: '520px',
                pointerEvents: 'none',
              }}
            >
              <AnimatePresence mode="wait">
                {!isChanging && (
                  <motion.div
                    key={planet.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Canvas
                      camera={{ position: [0, 0, 10], fov: 50 }}
                      style={{
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                      }}
                    >
                      <Suspense fallback={null}>
                        <Planet3D color={planet.color} texture={planet.texture} />
                      </Suspense>
                    </Canvas>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              aria-label="Next planet"
              className="absolute right-[-48px] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 rounded-full p-3 text-white shadow transition-all z-10"
              onClick={nextPlanet}
              disabled={isChanging}
              style={{ opacity: isChanging ? 0.5 : 1 }}
            >
              <svg width={36} height={36} fill="none"><path d="M10 10l8 8-8 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </motion.div>
        {/* Infos/Details */}
        <motion.div
          className="flex flex-col justify-center w-full md:w-[45%] px-2"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold text-white mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              letterSpacing: '2px',
              lineHeight: '1.1',
            }}
          >
            {planet.name}
          </motion.h2>

          <div className="mb-6">
            <span className="block text-lg text-blue-200 font-semibold mb-2 tracking-wide">
              {selected === 0 && "Tech Stack"}
              {selected === 1 && "Creative Universe"}
              {selected === 2 && "Daily Tools"}
              {selected === 3 && "Space Dreams"}
            </span>
            <motion.p
              className="text-lg text-slate-200 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              style={{
                fontWeight: 500,
                lineHeight: '1.6',
              }}
            >
              {planet.description}
            </motion.p>
          </div>

          <div className="mb-6">
            <span className="block text-base text-purple-300 font-semibold mb-2">Main Elements</span>
            <div className="flex flex-wrap gap-2 mb-2">
              {planet.items.map(item => (
                <span
                  key={item}
                  className="bg-gradient-to-r from-white/10 to-white/20 text-white px-4 py-2 rounded-lg text-base font-semibold shadow hover:scale-105 hover:from-white/20 transition-all duration-200 cursor-pointer"
                  title={`Learn more about ${item}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <span className="block text-base text-cyan-300 font-semibold mb-2">Highlights</span>
            <ul className="ml-2 list-disc text-slate-300 text-base space-y-1">
              {planet.facts.map(fact => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>

          <a
            href={planet.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-3 rounded-xl font-semibold shadow bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-all duration-200 border border-white/10"
          >
            {planet.linkLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}