import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type GoldDustProps = {
  count?: number;
  active?: boolean;
  className?: string;
};

// Deterministic pseudo-random so particles don't jump between renders
function seeded(i: number) {
  const x = Math.sin(i * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

export function GoldDust({ count = 18, active = true, className = '' }: GoldDustProps) {
  const reduce = useReducedMotion();
  const particles = useMemo(
    () =>
    Array.from({ length: count }, (_, i) => ({
      left: seeded(i) * 100,
      top: 20 + seeded(i + 100) * 80,
      size: 2 + seeded(i + 200) * 3,
      duration: 7 + seeded(i + 300) * 7,
      delay: seeded(i + 400) * 6,
      drift: (seeded(i + 500) - 0.5) * 40
    })),
    [count]
  );

  if (reduce || !active) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p, i) =>
      <motion.span
        key={i}
        className="absolute rounded-full bg-gold-light"
        style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{ opacity: [0, 0.9, 0], y: -160, x: p.drift }}
        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'linear' }} />

      )}
    </div>);

}