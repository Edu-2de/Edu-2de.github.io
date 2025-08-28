import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const ORBIT_PLANETS = [
  {
    name: 'Planet Skills',
    color: 'radial-gradient(circle at 60% 40%, #fffbe7 0%, #fbbf24 60%, #f59e42 100%)',
    shadow: 'rgba(251,191,36,0.3)',
    size: 80,
    orbit: 400,
    speed: 0.0088,
    opacity: 0.55,
    border: '2px solid #fffbe7',
  },
  {
    name: 'Planet Hobbies',
    color: 'radial-gradient(circle at 40% 60%, #a7f3f3 0%, #38bdf8 60%, #6366f1 100%)',
    shadow: 'rgba(99,102,241,0.3)',
    size: 70,
    orbit: 540,
    speed: 0.0055,
    opacity: 0.5,
    border: '2px solid #38bdf8',
  },
  {
    name: 'Planet Tools',
    color: 'radial-gradient(circle at 50% 50%, #fbb6ce 0%, #f97316 60%, #ec4899 100%)',
    shadow: 'rgba(249,115,22,0.3)',
    size: 64,
    orbit: 700,
    speed: 0.0033,
    opacity: 0.45,
    border: '2px solid #ec4899',
  },
  {
    name: 'Planet Dreams',
    color: 'radial-gradient(circle at 60% 40%, #a7f3d0 0%, #22d3ee 60%, #0ea5e9 100%)',
    shadow: 'rgba(34,211,238,0.3)',
    size: 68,
    orbit: 860,
    speed: 0.0022,
    opacity: 0.4,
    border: '2px solid #22d3ee',
  },
];

export default function OrbitPlanets() {
  const centerRef = useRef<HTMLDivElement>(null);
  const [centerPos, setCenterPos] = useState({ x: 0, y: 0 });
  const [planetAngles, setPlanetAngles] = useState(ORBIT_PLANETS.map(() => 0));

  // Get center position on mount and resize
  useEffect(() => {
    function updateCenter() {
      if (centerRef.current) {
        const rect = centerRef.current.getBoundingClientRect();
        setCenterPos({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    }
    updateCenter();
    window.addEventListener('resize', updateCenter);
    return () => window.removeEventListener('resize', updateCenter);
  }, []);

  // Animate planet angles
  useEffect(() => {
    let lastTime = performance.now();
    let raf: number;
    const animate = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;
      setPlanetAngles(prev =>
        prev.map((angle, i) => (angle + ORBIT_PLANETS[i].speed * delta) % 360)
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* Invisible center for reference */}
      <div ref={centerRef} className="absolute left-1/2 top-1/2 w-0 h-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Orbits */}
      {centerPos.x !== 0 &&
        centerPos.y !== 0 &&
        ORBIT_PLANETS.map((planet, i) => (
          <div
            key={`orbit-${i}`}
            className="absolute"
            style={{
              left: centerPos.x - planet.orbit,
              top: centerPos.y - planet.orbit,
              width: planet.orbit * 2,
              height: planet.orbit * 2,
              pointerEvents: 'none',
              zIndex: 7,
            }}
          >
            <svg width={planet.orbit * 2} height={planet.orbit * 2}>
              <circle
                cx={planet.orbit}
                cy={planet.orbit}
                r={planet.orbit}
                stroke="rgba(255,255,255,0.13)"
                strokeWidth="1.5"
                fill="none"
                style={{ filter: 'blur(0.5px)' }}
              />
            </svg>
          </div>
        ))}

      {/* Planets */}
      {centerPos.x !== 0 &&
        centerPos.y !== 0 &&
        ORBIT_PLANETS.map((planet, i) => {
          const rad = (planetAngles[i] * Math.PI) / 180;
          const x = centerPos.x + planet.orbit * Math.cos(rad) - planet.size / 2;
          const y = centerPos.y + planet.orbit * Math.sin(rad) - planet.size / 2;
          return (
            <motion.div
              key={planet.name}
              className="absolute"
              style={{
                top: y,
                left: x,
                zIndex: 8,
                pointerEvents: 'none',
                width: planet.size,
                height: planet.size,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
            >
              <div
                style={{
                  width: planet.size,
                  height: planet.size,
                  borderRadius: '50%',
                  background: planet.color,
                  boxShadow: `0 0 30px ${planet.shadow}`,
                  opacity: planet.opacity,
                  filter: 'blur(0.2px)',
                  border: planet.border,
                  position: 'relative',
                }}
              />
              {planet.name === 'Planet Tools' && (
                <svg
                  width={planet.size * 2.2}
                  height={planet.size * 2.2}
                  style={{
                    position: 'absolute',
                    left: `-${planet.size * 0.6}px`,
                    top: `-${planet.size * 0.6}px`,
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                >
                  <ellipse
                    cx={planet.size * 1.1}
                    cy={planet.size * 1.1}
                    rx={planet.size * 1.05}
                    ry={planet.size * 0.38}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    opacity="0.45"
                    style={{ filter: 'blur(0.5px)' }}
                  />
                  <ellipse
                    cx={planet.size * 1.1}
                    cy={planet.size * 1.1}
                    rx={planet.size * 0.85}
                    ry={planet.size * 0.28}
                    fill="none"
                    stroke="#ec4899"
                    strokeWidth="1.2"
                    opacity="0.32"
                    style={{ filter: 'blur(0.7px)' }}
                  />
                </svg>
              )}
            </motion.div>
          );
        })}
    </>
  );
}