import {ORBIT_PLANETS} from '@/components/Hero/components/OrbitPlanets';


function getOrbitPlanetByName(name: string) {
  const planets = ORBIT_PLANETS;
  return planets.find((p: { name: string; }) => p.name === name);
}



export default function PlanetLoading({ planetName }: { planetName: string }) {
  const planet2d = getOrbitPlanetByName(planetName);

  if (!planet2d) return null;

  return (
    <div className="flex flex-col items-center justify-center">
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
        }}
      />
      <span className="mt-6 text-slate-300 text-lg font-medium animate-pulse">Loading planet...</span>
    </div>
  );
}