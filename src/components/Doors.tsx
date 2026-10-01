import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../data/invitation';
import type { Stage } from '../types/invitation';

type DoorsProps = {
  stage: Stage;
  openDuration: number;
};

const doorEase = [0.65, 0, 0.35, 1] as const;

export function Doors({ stage, openDuration }: DoorsProps) {
  const open = stage === 'opening' || stage === 'revealed';

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-20"
      style={{ perspective: 1600 }}
      animate={{ opacity: stage === 'revealed' ? 0 : 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: stage === 'revealed' ? 0.1 : 0 }}
      aria-hidden="true">
      
      <Door side="left" open={open} duration={openDuration} />
      <Door side="right" open={open} duration={openDuration} />
    </motion.div>);

}

type DoorProps = {
  side: 'left' | 'right';
  open: boolean;
  duration: number;
};

function Door({ side, open, duration }: DoorProps) {
  const isLeft = side === 'left';
  return (
    <motion.div
      className={`absolute top-0 h-full w-1/2 ${isLeft ? 'left-0' : 'right-0'}`}
      style={{
        transformStyle: 'preserve-3d',
        transformOrigin: isLeft ? 'left center' : 'right center'
      }}
      initial={false}
      animate={{ rotateY: open ? isLeft ? -108 : 108 : 0 }}
      transition={{ duration, ease: doorEase, delay: isLeft ? 0 : 0.06 }}>
      
      {/* Front */}
      <div
        className="absolute inset-0 shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
        style={{
          backgroundImage: `url(${images.doors})`,
          backgroundSize: '200% 100%',
          backgroundPosition: isLeft ? '0% 0%' : '100% 0%',
          backfaceVisibility: 'hidden'
        }}>
        
        <motion.div
          className="absolute inset-0 bg-black"
          initial={false}
          animate={{ opacity: open ? 0.45 : 0 }}
          transition={{ duration, ease: doorEase }} />
        
      </div>
      {/* Back */}
      <div
        className="absolute inset-0 border border-gold/40 bg-door-back"
        style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
        
        <div className="absolute inset-3 border border-gold/30" />
      </div>
    </motion.div>);

}