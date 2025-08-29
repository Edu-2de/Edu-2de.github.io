import { useState, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import PlanetLoading from '../Loading/Loading';
import { OrbitControls } from '@react-three/drei';
import { ORBIT_PLANETS } from '../Hero/Hero_components/OrbitPlanets';
import Image from 'next/image';

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
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 10, 7]} intensity={1.2} />
      <mesh ref={meshRef} rotation={[0, 0, 0]}>
        <sphereGeometry args={[3.5, 64, 64]} />
        <meshStandardMaterial
          map={map}
          color="#eaeaea"
          roughness={0.22}
          metalness={0.7}
          emissive={color}
          emissiveIntensity={0.13}
        />
      </mesh>
      {name === 'Planet Tools' && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
          <torusGeometry args={[4.2, 0.22, 2, 120]} />
          <meshStandardMaterial color="#fbbf24" roughness={0.5} metalness={0.7} opacity={0.45} transparent />
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

function Planet2D({
  planet,
  active,
  onClick,
}: {
  planet: (typeof ORBIT_PLANETS)[0];
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.18, boxShadow: `0 0 0 6px #23283a, 0 0 24px ${planet.shadow}` }}
      animate={{ scale: active ? 1.14 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: planet.color,
        boxShadow: active ? `0 0 0 4px #fff, 0 0 18px ${planet.shadow}` : `0 0 8px ${planet.shadow}`,
        border: planet.border,
        margin: '18px auto',
        cursor: 'pointer',
        position: 'relative',
        zIndex: active ? 2 : 1,
        aspectRatio: '1 / 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'box-shadow 0.3s',
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
          width={64}
          height={64}
          style={{
            position: 'absolute',
            left: '-10px',
            top: '-10px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          <ellipse
            cx={32}
            cy={32}
            rx={28}
            ry={18}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="2.5"
            opacity="0.45"
            style={{ filter: 'blur(0.7px)' }}
          />
          <ellipse
            cx={32}
            cy={32}
            rx={22}
            ry={12}
            fill="none"
            stroke="#ec4899"
            strokeWidth="1.5"
            opacity="0.32"
            style={{ filter: 'blur(1.2px)' }}
          />
        </svg>
      )}
    </motion.div>
  );
}

export default function About({ setHideNav }: { setHideNav: (hide: boolean) => void }) {
  const [selected, setSelected] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPlanetOnly, setShowPlanetOnly] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [planetAnimStep, setPlanetAnimStep] = useState<'idle' | 'move' | 'loading'>('idle');

  const [showIntro, setShowIntro] = useState(true);

  // Estado para hover Star Wars
  const [starWarsHover, setStarWarsHover] = useState<string | null>(null);

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
      className="w-full min-h-screen flex items-center justify-center px-0 py-0 outline-none relative group"
      style={{
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 60% 40%, #181c26 70%, #23283a 100%)',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <AnimatePresence>
        {showIntro ? (
          <motion.div
            className="flex flex-col items-center justify-center w-full h-full z-20 absolute left-0 top-0"
            initial={{ opacity: 0, scale: 0.92, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -80 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            style={{
              background: 'linear-gradient(120deg, #181c26 70%, #23283a 100%)',
              minHeight: '100vh',
              width: '100vw',
              left: 0,
              top: 0,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 70 }}
              className="flex flex-col items-center justify-center py-16"
              style={{
                background: 'none',
                minWidth: 340,
                maxWidth: 1500,
              }}
            >
              <div className="flex flex-col items-center justify-center w-full gap-0">
                {/* Linha 1: Hello + imagem + I'm Eduardo */}
                <div
                  className="flex flex-row items-center justify-center w-full gap-6 mb-2"
                  style={{ flexWrap: 'wrap' }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    whileHover={{ scale: 1.06, x: -10 }}
                    className={`transition-all ${starWarsHover === 'hello' ? 'starwars-hover animate-flash' : ''}`}
                    style={{
                      fontSize: '7.5rem',
                      fontWeight: 900,
                      color: '#fff',
                      letterSpacing: '-0.04em',
                      lineHeight: 1.1,
                      fontFamily: starWarsHover === 'hello' ? 'StarWars, Arial, sans-serif' : 'Inter, sans-serif',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setStarWarsHover('hello')}
                    onMouseLeave={() => setStarWarsHover(null)}
                  >
                    Hello
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    whileHover={{ scale: 1.09, y: -10, boxShadow: '0 0 32px #fff' }}
                    className="transition-all"
                    style={{
                      width: 140,
                      height: 70,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      display: 'inline-block',
                      background: '#23283a',
                      border: '2px solid #fff',
                      marginLeft: 12,
                      marginRight: 12,
                      marginTop: 30,
                      cursor: 'pointer',
                    }}
                  >
                    <Image
                      src="/gifs/han-solo.gif"
                      alt="Eduardo Portrait"
                      width={140}
                      height={70}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      priority
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    whileHover={{ scale: 1.06, x: 10 }}
                    className={`transition-all ${starWarsHover === 'edu' ? 'starwars-hover animate-flash' : ''}`}
                    style={{
                      fontSize: '7.5rem',
                      fontWeight: 900,
                      color: '#fff',
                      letterSpacing: '-0.04em',
                      lineHeight: 1.1,
                      fontFamily: starWarsHover === 'edu' ? 'StarWars, Arial, sans-serif' : 'Inter, sans-serif',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setStarWarsHover('edu')}
                    onMouseLeave={() => setStarWarsHover(null)}
                  >
                    I&apos;m Edu
                  </motion.span>
                </div>
                {/* Linha 2: I develop + imagem + systems */}
                <div
                  className="flex flex-row items-center justify-center w-full gap-6 mt-2 mb-2"
                  style={{ flexWrap: 'wrap', marginBottom: '3.5rem' }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    whileHover={{ scale: 1.06, x: -10 }}
                    className={`transition-all ${starWarsHover === 'develop' ? 'starwars-hover animate-flash' : ''}`}
                    style={{
                      fontSize: '7.5rem',
                      fontWeight: 900,
                      color: '#fff',
                      letterSpacing: '-0.04em',
                      lineHeight: 1.1,
                      fontFamily: starWarsHover === 'develop' ? 'StarWars, Arial, sans-serif' : 'Inter, sans-serif',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setStarWarsHover('develop')}
                    onMouseLeave={() => setStarWarsHover(null)}
                  >
                    I develop
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.4 }}
                    whileHover={{ scale: 1.09, y: -10, boxShadow: '0 0 32px #fff' }}
                    className="transition-all"
                    style={{
                      width: 140,
                      height: 70,
                      borderRadius: '24px',
                      overflow: 'hidden',
                      display: 'inline-block',
                      background: '#23283a',
                      border: '2px solid #fff',
                      marginLeft: 12,
                      marginRight: 12,
                      marginTop: 30,
                      cursor: 'pointer',
                    }}
                  >
                    <Image
                      src="/gifs/star-wars.gif"
                      alt="Code Illustration"
                      width={140}
                      height={70}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      priority
                    />
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 1.7 }}
                    whileHover={{ scale: 1.06, x: 10 }}
                    className={`transition-all ${starWarsHover === 'systems' ? 'starwars-hover animate-flash' : ''}`}
                    style={{
                      fontSize: '7.5rem',
                      fontWeight: 900,
                      color: '#fff',
                      letterSpacing: '-0.04em',
                      lineHeight: 1.1,
                      fontFamily: starWarsHover === 'systems' ? 'StarWars, Arial, sans-serif' : 'Inter, sans-serif',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={() => setStarWarsHover('systems')}
                    onMouseLeave={() => setStarWarsHover(null)}
                  >
                    systems
                  </motion.span>
                </div>
                {/* Descrição centralizada enxuta */}
                <motion.p
                  className="text-2xl font-medium text-center mb-12 mt-20"
                  style={{
                    maxWidth: 900,
                    margin: '0 auto',
                    color: 'rgba(226,232,240,0.82)',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.6,
                    cursor: 'pointer',
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.1 }}
                  whileHover={{ scale: 1.03, y: -6, color: '#38bdf8', textShadow: '0 0 18px #38bdf8' }}
                >
                  I create digital solutions with design and code.
                  <br />
                  My focus is on building modern, fast and secure systems that solve real problems and deliver great
                  experiences. Want to know more? See the planets below and explore each theme.
                </motion.p>
                {/* Botão centralizado com espaçamento extra */}
                <motion.button
                  onClick={() => setShowIntro(false)}
                  className="mt-10 px-8 py-4 rounded-full font-bold text-lg bg-[#fff] text-[#23283a] border-2 border-[#fff] hover:bg-[#23283a] hover:text-[#fff] transition shadow"
                  style={{
                    letterSpacing: '-0.02em',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 2.7 }}
                >
                  See planets
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="flex w-full max-w-7xl mx-auto items-center justify-between relative z-10"
            style={{ height: '80vh' }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div
              className="flex flex-col justify-center items-start w-[38%] pl-12 pr-6"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ letterSpacing: '-2px', textShadow: '0 0 18px #000' }}
              >
                {planet.name}
              </motion.h1>
              <motion.p
                className="text-lg text-slate-300 leading-relaxed mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                style={{ textShadow: '0 0 8px #000' }}
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
                className="px-8 py-4 rounded-lg font-medium text-white border border-slate-700 hover:border-slate-400 hover:bg-slate-800/60 transition-all duration-200 text-base tracking-wide cursor-pointer shadow"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{ background: 'rgba(36,41,56,0.85)', boxShadow: '0 0 18px #23283a' }}
              >
                Discover
              </motion.button>
            </motion.div>
            <motion.div
              className="flex items-center justify-center w-[34%] h-full relative"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <AnimatePresence mode="wait">
                {!isChanging && (
                  <motion.div
                    key={planet.name}
                    initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                    animate={
                      planetAnimStep === 'move' || planetAnimStep === 'loading'
                        ? {
                            opacity: 1,
                            scale: 1.08,
                            rotate: 0,
                          }
                        : { opacity: 1, scale: 1, rotate: 0 }
                    }
                    exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
                    transition={{ duration: planetAnimStep === 'move' ? 0.9 : 1, ease: 'easeInOut' }}
                    style={{
                      width: '420px',
                      height: '420px',
                      maxWidth: '90vw',
                      maxHeight: '70vh',
                      borderRadius: '50%',
                      boxShadow: '0 0 0 2px #23283a, 0 0 60px #10131a',
                      background: 'transparent',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    <Canvas
                      camera={{ position: [0, 0, 10], fov: 50 }}
                      style={{
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        borderRadius: '50%',
                      }}
                    >
                      <Suspense fallback={null}>
                        <Planet3D color={planet.color} texture={planet.texture} name={planet.name} />
                      </Suspense>
                    </Canvas>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div
              className="flex flex-col items-center justify-center w-[9%] h-[50%] py-2 px-1"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              style={{
                background: 'linear-gradient(180deg, #181c26 80%, #23283a 100%)',
                borderRadius: '18px',
                boxShadow: '0 0 18px 0 #10131a',
                minWidth: '54px',
                maxWidth: '72px',
                minHeight: '140px',
                maxHeight: '900px',
                position: 'relative',
                zIndex: 3,
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full gap-3">
                {ORBIT_PLANETS.map((p, idx) => (
                  <Planet2D
                    key={p.name}
                    planet={p}
                    active={selected === idx}
                    onClick={() => {
                      if (!isChanging) setSelected(idx);
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {showLoading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 z-[400]">
          <PlanetLoading planetName={planet.name} />
        </div>
      )}
    </section>
  );
}