'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { theme } from '../theme';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

const StarField = () => {
  // Yıldız sayısını daha da azaltalım
  const STAR_COUNT = 50; // 100'den 50'ye düşürdük
  const BRIGHT_STAR_COUNT = 5; // 10'dan 5'e düşürdük
  const SHOOTING_STAR_COUNT = 1; // 2'den 1'e düşürdük

  const [stars, setStars] = useState<Star[]>([]);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, -15]); // Parallax etkisini daha da azalttık

  const colors = useMemo(() => [
    theme.colors.primary[400],
    theme.colors.secondary[400],
    '#ffffff'
  ], []);

  const generateStars = useCallback(() => {
    const newStars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 1.5 + 2,
        delay: Math.random() * 1,
        opacity: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    setStars(newStars);
  }, [colors]);

  useEffect(() => {
    generateStars();
    const handleResize = () => {
      requestAnimationFrame(generateStars);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateStars]);

  const renderStarLayer = useCallback((starSubset: Star[], yTransform: any) => (
    <motion.div style={{ y: yTransform }} className="absolute inset-0">
      {starSubset.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            opacity: star.opacity
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </motion.div>
  ), []);

  const starLayers = useMemo(() => {
    const half = Math.floor(stars.length / 2);
    return [
      stars.slice(0, half),
      stars.slice(half)
    ];
  }, [stars]);

  return (
    <div className="fixed inset-0 bg-background-darkest pointer-events-none overflow-hidden">
      {renderStarLayer(starLayers[0], backgroundY)}
      {renderStarLayer(starLayers[1], 0)}

      {/* Kayan yıldız - sadece 1 tane */}
      {[...Array(SHOOTING_STAR_COUNT)].map((_, i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute"
          style={{
            width: 60,
            height: 1,
            transform: 'rotate(45deg)',
            left: '-20%',
            top: '30%',
            background: `linear-gradient(90deg, transparent 0%, ${theme.colors.primary[400]}40 50%, transparent 100%)`
          }}
          animate={{
            left: ['-20%', '120%'],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default StarField;