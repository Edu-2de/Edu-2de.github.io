import { useState, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import PlanetLoading from '../Loading/Loading';
import { OrbitControls } from '@react-three/drei';

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
    link: '/skills',
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
    link: '/hobbies',
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
    link: '/tools',
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
    link: '/dreams',
    linkLabel: 'View OpenAI',
  },
];

function Planet3D({ color, texture, name }: { color: string; texture: string; name: string }) {
  const map = useLoader(THREE.TextureLoader, texture);
  const meshRef = useRef<THREE.Mesh>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useFrame(() => {
    if (meshRef.current && !isUserInteracting) {
      meshRef.current.rotation.y += 0.018;
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
      {name === 'Planet Tools' && (
        <mesh rotation={[-Math.PI / 2.2, 0, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[4.2, 0.35, 2, 80]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.5} metalness={0.7} opacity={0.5} transparent />
        </mesh>
      )}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setIsUserInteracting(false)}
      />
    </>
  );
}

export default function About({ setHideNav }: { setHideNav: (hide: boolean) => void }) {
  const [selected, setSelected] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showPlanetOnly, setShowPlanetOnly] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [planetAnimStep, setPlanetAnimStep] = useState<'idle' | 'move' | 'loading'>('idle');

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

  const handleViewPlanet = () => {
    setHideNav(true);
    setShowPlanetOnly(true);
    setTimeout(() => {
      setPlanetAnimStep('move');
      setTimeout(() => {
        setPlanetAnimStep('loading');
        setShowLoading(true);
        setTimeout(() => {
          window.location.href = planet.link;
        }, 1800);
      }, 900);
    }, 400);
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-slate-950 to-gray-900 px-4 py-16"
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl gap-12 md:gap-24">
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
            <AnimatePresence mode="wait">
              {!isChanging && (
                <motion.div
                  key={planet.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={
                    planetAnimStep === 'move' || planetAnimStep === 'loading'
                      ? {
                          opacity: 1,
                          scale: 1.08,
                        }
                      : { opacity: 1, scale: 1 }
                  }
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: planetAnimStep === 'move' ? 0.9 : 1, ease: 'easeInOut' }}
                  style={
                    planetAnimStep === 'move' || planetAnimStep === 'loading'
                      ? {
                          width: '520px',
                          height: '520px',
                          position: 'absolute',
                          left: '55%',
                          top: '0%',
                          zIndex: 400,
                          background: 'transparent',
                          boxShadow: 'none',
                        }
                      : {
                          width: '100%',
                          height: '100%',
                          zIndex: 'auto',
                        }
                  }
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
                      <Planet3D color={planet.color} texture={planet.texture} name={planet.name} />
                    </Suspense>
                  </Canvas>
                </motion.div>
              )}
            </AnimatePresence>
            {!showPlanetOnly && !showLoading && (
              <>
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
              </>
            )}
          </div>
        </motion.div>
        <AnimatePresence>
          {!showPlanetOnly && !showLoading && (
            <motion.div
              className="flex flex-col justify-center w-full md:w-[45%] px-8"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.h2
                className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {planet.name}
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-slate-300 leading-relaxed mb-16 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                {planet.description}
              </motion.p>
              <motion.button
                onClick={handleViewPlanet}
                className="self-start px-12 py-5 rounded-lg font-medium text-white border border-slate-500 hover:border-slate-300 hover:bg-slate-700/40 transition-all duration-200 text-base tracking-wide cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Planet
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
        {showLoading && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 z-[400]">
            <PlanetLoading planetName={planet.name} />
          </div>
        )}
      </div>
    </section>
  );
}
