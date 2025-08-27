import { useState, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const PLANETS = [
  {
    name: 'Planet Skills',
    color: '#fbbf24',
    texture: '/textures/earth_atmos_2048.jpg',
    items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS', 'Tailwind'],
    description:
      "🚀 My skills are the fuel for my cosmic journey! I build interactive interfaces with React & TypeScript, connect galaxies with Node.js APIs, and design stellar visuals using CSS & Tailwind. Always exploring new tech constellations.",
    facts: [
      '🌟 TypeScript is my favorite language for clarity and safety.',
      '🪐 React is my daily spaceship for UI adventures.',
      '🔭 Currently learning Next.js for faster launches.',
      '🛰️ Contributor to open source missions.',
      '🌌 Fullstack explorer: frontend & backend.',
    ],
    link: 'https://github.com/edu-2de',
    linkLabel: 'Explore my GitHub Universe',
  },
  {
    name: 'Planet Hobbies',
    color: '#38bdf8',
    texture: '/textures/earth_lights_2048.png',
    items: ['Music', 'Gaming', 'Travel', 'Photography', 'Cooking'],
    description:
      "🎶 My hobbies orbit around creativity and adventure! I compose melodies on my guitar, embark on epic gaming quests, capture cosmic moments with photography, and experiment with flavors in my kitchen. Always seeking new worlds to discover.",
    facts: [
      '🎮 Favorite game: Zelda – for legendary journeys.',
      '🎸 Guitar is my instrument for harmony.',
      '✈️ Dream trip: Japan, land of innovation.',
      '📸 Passionate about capturing the universe.',
      '👨‍🍳 Home chef, always trying new recipes.',
    ],
    link: 'https://instagram.com/',
    linkLabel: 'See My Creative Galaxy',
  },
  {
    name: 'Planet Tools',
    color: '#ec4899',
    texture: '/textures/earth_lights_2048.png',
    items: ['VS Code', 'GitHub', 'Figma', 'Notion', 'Framer Motion'],
    description:
      "🛠️ My toolkit is ready for any mission! I code in VS Code, collaborate on GitHub, design in Figma, organize with Notion, and animate with Framer Motion. These tools keep my workflow in orbit.",
    facts: [
      '🎨 Figma for stellar design systems.',
      '📚 Notion for mission control and notes.',
      '💻 VS Code for fast coding launches.',
      '✨ Framer Motion for smooth UI animations.',
      '🔗 GitHub for version control and teamwork.',
    ],
    link: 'https://figma.com/',
    linkLabel: 'Visit My Design Station',
  },
  {
    name: 'Planet Dreams',
    color: '#22d3ee',
    texture: '/textures/earth_lights_2048.png',
    items: ['Space Travel', 'Remote Work', 'Open Source', 'AI Projects'],
    description:
      "🌠 My dreams reach beyond the stars! I aim to work remotely from anywhere in the universe, contribute to open source, explore AI frontiers, and maybe one day, travel through space itself.",
    facts: [
      '🚀 Goal: Make a real impact in open source.',
      '🪐 Dream: Visit Mars and beyond.',
      '🤖 Fascinated by Artificial Intelligence.',
      '🌍 Advocate for remote work freedom.',
      '✨ Space enthusiast, always looking up.',
    ],
    link: 'https://openai.com/',
    linkLabel: 'Discover My Space Vision',
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
            className="text-6xl md:text-7xl font-extrabold text-white mb-4"
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
          <motion.p
            className="text-xl text-slate-200 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            style={{
              fontWeight: 500,
              lineHeight: '1.5',
            }}
          >
            {planet.description}
          </motion.p>
          <div className="mb-4 flex flex-wrap gap-2">
            {planet.items.map(item => (
              <span
                key={item}
                className="bg-gradient-to-r from-white/10 to-white/20 text-white px-4 py-2 rounded-lg text-base font-semibold shadow hover:scale-105 hover:from-white/20 transition-all duration-200"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mb-6">
            <span className="text-white/80 font-semibold">Curiosities:</span>
            <ul className="mt-2 ml-2 list-disc text-slate-300 text-lg space-y-1">
              {planet.facts.map(fact => (
                <li key={fact} className="">{fact}</li>
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