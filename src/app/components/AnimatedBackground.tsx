'use client';

import { motion } from 'framer-motion';
import { theme } from '../theme';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(to bottom right, ${theme.colors.primary[900]}40, ${theme.colors.background.darker})`,
            `linear-gradient(to bottom right, ${theme.colors.secondary[900]}40, ${theme.colors.background.darker})`,
            `linear-gradient(to bottom right, ${theme.colors.accent[900]}40, ${theme.colors.background.darker})`,
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Animated orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-3xl mix-blend-soft-light"
          style={{
            width: '40%',
            height: '40%',
            background: `radial-gradient(circle, ${
              [theme.colors.primary[400], theme.colors.secondary[400], theme.colors.accent[400]][i]
            }20 0%, transparent 70%)`
          }}
          animate={{
            x: [
              `${Math.random() * 60}%`,
              `${Math.random() * 60}%`,
              `${Math.random() * 60}%`
            ],
            y: [
              `${Math.random() * 60}%`,
              `${Math.random() * 60}%`,
              `${Math.random() * 60}%`
            ],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${theme.colors.primary[400]}20 1px, transparent 1px),
            linear-gradient(to bottom, ${theme.colors.primary[400]}20 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;