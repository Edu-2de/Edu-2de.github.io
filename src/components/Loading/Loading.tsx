import { ORBIT_PLANETS } from '@/components/Hero/Hero_components/OrbitPlanets';

function getOrbitPlanetByName(name: string) {
  const planets = ORBIT_PLANETS;
  return planets.find((p: { name: string }) => p.name === name);
}

export default function PlanetLoading({ planetName }: { planetName: string }) {
  const planet2d = getOrbitPlanetByName(planetName);

  if (!planet2d) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <div style={{ position: 'relative', width: planet2d.size, height: planet2d.size }}>
        {planet2d.name === 'Planet Tools' && (
          <svg
            width={planet2d.size * 2}
            height={planet2d.size * 2}
            style={{
              position: 'absolute',
              left: `-${planet2d.size * 0.5}px`,
              top: `-${planet2d.size * 0.35}px`,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            <ellipse
              cx={planet2d.size}
              cy={planet2d.size * 0.9}
              rx={planet2d.size * 0.95}
              ry={planet2d.size * 0.32}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="6"
              opacity="0.45"
              style={{ filter: 'blur(0.5px)' }}
            />
            <ellipse
              cx={planet2d.size}
              cy={planet2d.size * 0.9}
              rx={planet2d.size * 0.7}
              ry={planet2d.size * 0.22}
              fill="none"
              stroke="#ec4899"
              strokeWidth="3"
              opacity="0.32"
              style={{ filter: 'blur(0.7px)' }}
            />
          </svg>
        )}
        <div
          style={{
            width: planet2d.size,
            height: planet2d.size,
            borderRadius: '50%',
            background: planet2d.color,
            boxShadow: `0 0 30px ${planet2d.shadow}`,
            opacity: planet2d.opacity,
            border: planet2d.border,
            position: 'relative',
            zIndex: 2,
          }}
        />
      </div>
      <span className="mt-6 text-slate-300 text-lg font-medium animate-pulse">Loading planet...</span>
    </div>
  );
}
