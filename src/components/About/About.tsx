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
      'Explore my universe of skills: interfaces with React & TypeScript, APIs with Node.js, and beautiful UIs with CSS & Tailwind. Always learning, always evolving!',
    facts: [
      'Favorite language: TypeScript',
      'Most used: React',
      'Learning: Next.js',
      'Open Source contributor',
      'Frontend & Backend experience',
    ],
    link: 'https://github.com/edu-2de',
    linkLabel: 'View GitHub',
  },
  {
    name: 'Planet Hobbies',
    color: '#38bdf8',
    texture: '/textures/neptunemap.jpg',
    items: ['Music', 'Gaming', 'Travel', 'Photography', 'Cooking'],
    description:
      'My passions orbit around music, games, travel, photography, and cooking. Always searching for new adventures and creative inspiration!',
    facts: ['Favorite game: Zelda', 'Instrument: Guitar', 'Dream trip: Japan', 'Photography lover', 'Home chef'],
    link: 'https://instagram.com/',
    linkLabel: 'View Instagram',
  },
  {
    name: 'Planet Tools',
    color: '#ec4899',
    texture: '/textures/mars_1k_color.jpg',
    items: ['VS Code', 'GitHub', 'Figma', 'Notion', 'Framer Motion'],
    description:
      'My toolkit: coding in VS Code, collaborating on GitHub, designing in Figma, organizing with Notion, and animating with Framer Motion.',
    facts: ['Design: Figma', 'Docs: Notion', 'Code: VS Code', 'Animations: Framer Motion', 'Version control: GitHub'],
    link: 'https://figma.com/',
    linkLabel: 'View Figma',
  },
  {
    name: 'Planet Dreams',
    color: '#22d3ee',
    texture: '/textures/plutomap1k.jpg',
    items: ['Space Travel', 'Remote Work', 'Open Source', 'AI Projects'],
    description:
      'Dreaming big: working remotely, contributing to open source, exploring AI, and maybe one day, traveling through space!',
    facts: [
      'Goal: Contribute to open source',
      'Dream: Visit Mars',
      'Interest: Artificial Intelligence',
      'Remote work advocate',
      'Space enthusiast',
    ],
    link: 'https://openai.com/',
    linkLabel: 'View OpenAI',
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
              <svg width={36} height={36} fill="none">
                <path
                  d="M26 10l-8 8 8 8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
              <svg width={36} height={36} fill="none">
                <path
                  d="M10 10l8 8-8 8"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>
        {/* Infos/Details */}
        <motion.div
          className="flex flex-col justify-center w-full md:w-[45%] "
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Título */}
          <motion.h2
            className=" text-5xl md:text-6xl font-bold text-white mb-9 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {planet.name}
          </motion.h2>

          {/* Descrição */}
          <motion.p
            className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {planet.description}
          </motion.p>

          {/* Botão */}
          <motion.a
            href={planet.link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start px-6 py-2 rounded-md font-medium text-white border border-slate-500 hover:border-slate-300 hover:bg-slate-700/40 transition-all duration-200 text-sm tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Planet
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
