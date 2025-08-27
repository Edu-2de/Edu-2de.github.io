import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroStars() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      originalX: number;
      originalY: number;
      size: number;
      opacity: number;
    }>
  >([]);

  useEffect(() => {
    const initialStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      originalX: Math.random() * window.innerWidth,
      originalY: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setStars(initialStars);
  }, []);

  useEffect(() => {
    let rafId: number;
    const updateMousePosition = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const newMousePos = { x: e.clientX, y: e.clientY };
        setMousePosition(newMousePos);
        setStars(prevStars =>
          prevStars.map(star => {
            const dx = star.x - newMousePos.x;
            const dy = star.y - newMousePos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 100;
            if (distance < maxDistance && distance > 0) {
              const force = (maxDistance - distance) / maxDistance;
              const pushX = (dx / distance) * force * 50;
              const pushY = (dy / distance) * force * 50;
              return {
                ...star,
                x: Math.max(0, Math.min(window.innerWidth, star.originalX + pushX)),
                y: Math.max(0, Math.min(window.innerHeight, star.originalY + pushY)),
              };
            } else {
              return {
                ...star,
                x: star.x + (star.originalX - star.x) * 0.04,
                y: star.y + (star.originalY - star.y) * 0.04,
              };
            }
          })
        );
      });
    };
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`shooting-star-${i}`}
            initial={{
              x: -10,
              y: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              x: '110vw',
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              delay: i * 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-1 h-1 bg-slate-400 rounded-full"
            style={{
              boxShadow: '0 0 4px rgba(148, 163, 184, 0.5)',
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0">
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-slate-300"
            animate={{
              x: star.x,
              y: star.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 15,
            }}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(148, 163, 184, 0.3)`,
            }}
          />
        ))}
      </div>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(148, 163, 184, 0.03) 0%, 
            transparent 70%)`,
        }}
      />
    </div>
  );
}