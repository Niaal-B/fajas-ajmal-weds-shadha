import React from 'react';
import { motion } from 'framer-motion';
import { MoonStarIcon } from 'lucide-react';
import { creator, invitation } from '../data/invitation';

type IntroOverlayProps = {
  onOpen: () => void;
};

const ease = [0.23, 1, 0.32, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
};

export function IntroOverlay({ onOpen }: IntroOverlayProps) {
  return (
    <motion.div
      className="absolute inset-0 z-30 flex flex-col items-center px-6 pb-10 pt-[12vh] text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }}>
      
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <motion.div
        className="relative flex h-full w-full flex-col items-center"
        variants={container}
        initial="hidden"
        animate="show">
        
        <motion.p variants={item} dir="rtl" lang="ar" className="font-arabic text-2xl text-gold-light">
          {invitation.bismillah}
        </motion.p>
        <motion.p
          variants={item}
          className="mt-3 max-w-[280px] font-display text-[10px] uppercase leading-relaxed tracking-[0.3em] text-ivory/80">
          
          {invitation.bismillahTranslation}
        </motion.p>

        <motion.h1 variants={item} className="mt-auto flex flex-col items-center font-script text-ivory">
          <span className="whitespace-nowrap text-[clamp(2.4rem,12.5vw,3.6rem)] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {invitation.groom}
          </span>
          <span className="sr-only">and</span>
          <span className="mt-16 whitespace-nowrap text-[clamp(2.4rem,12.5vw,3.6rem)] leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {invitation.bride}
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-8 font-display text-base tracking-[0.5em] text-ivory/90">
          {invitation.dateShort}
        </motion.p>

        <motion.div variants={item} className="mt-auto flex flex-col items-center">
          <button
            type="button"
            onClick={onOpen}
            className="group flex items-center gap-4 rounded-full border border-gold/60 bg-black/40 py-3 pl-5 pr-10 text-left backdrop-blur-sm transition-[background-color,border-color,transform] duration-150 ease-out hover:border-gold hover:bg-black/55 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">
            
            <MoonStarIcon className="h-5 w-5 text-gold-light" aria-hidden="true" />
            <span className="flex flex-col">
              <span className="whitespace-nowrap font-display text-sm uppercase tracking-[0.3em] text-ivory">
                {invitation.ctaLabel}
              </span>
              <span className="font-serif text-xs italic text-gold-light/90">{invitation.ctaSub}</span>
            </span>
          </button>
          <p className="mt-4 font-display text-[9px] uppercase tracking-[0.4em] text-ivory/50">
            {invitation.ctaHint}
          </p>
          <a
            href={creator.url}
            target="_blank"
            rel="noreferrer"
            className="mt-3 font-display text-[9px] uppercase tracking-[0.3em] text-ivory/45 transition-colors duration-150 hover:text-ivory/70 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-light">
            
            {creator.label} <span className="font-sans normal-case tracking-[0.15em] text-gold-light/80">{creator.handle}</span>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>);

}