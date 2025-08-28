import { useState, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import PlanetLoading from '../Loading/Loading';
import { OrbitControls } from '@react-three/drei';
import { ORBIT_PLANETS } from '../Hero/Hero_components/OrbitPlanets';


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
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
          <torusGeometry args={[4.2, 0.22, 2, 120]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.5} metalness={0.7} opacity={0.55} transparent />
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


function Planet2D({ planet, active, style, onClick }: { planet: typeof ORBIT_PLANETS[0]; active: boolean; style?: React.CSSProperties; onClick?: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.18 }}
      animate={{ scale: active ? 1.18 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        background: planet.color,
        boxShadow: active
          ? `0 0 0 3px #fff, 0 0 12px ${planet.shadow}`
          : `0 0 6px ${planet.shadow}`,
        border: planet.border,
        position: 'absolute',
        cursor: 'pointer',
        zIndex: active ? 2 : 1,
        ...style,
      }}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`Select ${planet.name}`}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      {planet.name === 'Planet Tools' && (
        <svg
          width={44}
          height={44}
          style={{
            position: 'absolute',
            left: '-8px',
            top: '-8px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <ellipse
            cx={20}
            cy={22}
            rx={18}
            ry={4}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2"
            opacity="0.7"
          />
          <ellipse
            cx={22}
            cy={22}
            rx={20}
            ry={5}
            fill="none"
            stroke="#ec4899"
            strokeWidth="1.2"
            opacity="0.5"
          />
        </svg>
      )}
    </motion.div>
  );
}


function OrbitSystem({ selected, setSelected, isChanging }: { selected: number; setSelected: (idx: number) => void; isChanging: boolean }) {
  const center = { x: 160, y: 80 };
  const radii = [60, 90, 120, 150];
  return (
    <div className="relative mx-auto" style={{ width: 320, height: 160 }}>
      {radii.map((r, i) => (
        <svg
          key={i}
          width={320}
          height={160}
          style={{ position: 'absolute', left: 0, top: 0, pointerEvents: 'none', zIndex: 0 }}
        >
          <ellipse
            cx={center.x}
            cy={center.y}
            rx={r}
            ry={r / 2.2}
            fill="none"
            stroke="#fff"
            strokeWidth={i === selected ? 2.5 : 1.2}
            opacity={i === selected ? 0.18 : 0.09}
          />
        </svg>
      ))}
      {ORBIT_PLANETS.map((p, idx) => {
        const angle = (Math.PI * 2 * idx) / ORBIT_PLANETS.length - Math.PI / 2;
        const r = radii[idx];
        const x = center.x + r * Math.cos(angle) - 14;
        const y = center.y + (r / 2.2) * Math.sin(angle) - 14;
        return (
          <Planet2D
            key={p.name}
            planet={p}
            active={selected === idx}
            style={{
              left: x,
              top: y,
              transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
              boxShadow: selected === idx ? '0 0 0 4px #fff, 0 0 18px ' + p.shadow : '0 0 10px ' + p.shadow,
            }}
            onClick={() => {
              if (!isChanging) setSelected(idx);
            }}
          />
        );
      })}
    </div>
  );
}

export default function About({ setHideNav }: { setHideNav: (hide: boolean) => void }) {
  const [selected, setSelected] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [showPlanetOnly, setShowPlanetOnly] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [planetAnimStep, setPlanetAnimStep] = useState<'idle' | 'move' | 'loading'>('idle');

  const planet = PLANETS[selected];

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'a' || e.key === 'ArrowLeft') prevPlanet();
    if (e.key === 'd' || e.key === 'ArrowRight') nextPlanet();
  };

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

  return (
    <section
      id="about"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="w-full min-h-screen flex flex-col items-center justify-center bg-[#10131a] px-4 py-16 outline-none relative"
      style={{ overflow: 'hidden' }}
    >
      <div className="w-full flex flex-col items-center mb-2" style={{ position: 'absolute', top: '24px', left: 0, right: 0, zIndex: 10 }}>
        <div className="mt-15 mb-2 text-slate-200 text-xl text-center font-semibold tracking-wide">
          Select a planet or press <span className="font-bold text-white">A</span> / <span className="font-bold text-white">D</span> to navigate
        </div>
        <OrbitSystem selected={selected} setSelected={setSelected} isChanging={isChanging} />
      </div>
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl gap-12 md:gap-24" style={{ marginTop: '180px' }}>
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
              minWidth: '320px',
              minHeight: '320px',
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
                className="text-5xl md:text-6xl font-bold text-white mb-10 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {planet.name}
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
              >
                {planet.description}
              </motion.p>
              <motion.button
                onClick={() => {
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
                }}
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