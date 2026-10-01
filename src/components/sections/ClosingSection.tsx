import React from 'react';
import { motion } from 'framer-motion';
import { MoonStarIcon, SunIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { GoldDust } from '../GoldDust';
import { closing, couple, invitation } from '../../data/invitation';

export function ClosingSection() {
  return (
    <footer className="relative overflow-hidden bg-night px-6 pb-28 pt-20 text-center">
      <GoldDust count={20} />
      <div className="relative flex flex-col items-center">
        <Reveal>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            
            <MoonStarIcon className="h-9 w-9 text-gold-light" strokeWidth={1.3} aria-hidden="true" />
          </motion.div>
        </Reveal>
        <Reveal delay={0.1}>
          <p dir="rtl" lang="ar" className="mt-6 font-arabic text-2xl text-gold-light">{invitation.bismillah}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-[320px] font-serif text-lg italic leading-relaxed text-ivory/70">{closing.blessing}</p>
        </Reveal>
        <SunIcon className="mt-6 h-4 w-4 text-gold" aria-hidden="true" />
        <Reveal delay={0.2}>
          <p className="mt-6 flex flex-col items-center font-serif text-[2rem] leading-tight text-ivory">
            <span>{couple.groom.name}</span>
            <span className="font-script text-2xl text-gold-light">&amp;</span>
            <span>{couple.bride.name}</span>
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-4 max-w-[320px] font-sans text-[10px] uppercase leading-loose tracking-[0.3em] text-ivory/50">
            {closing.dates}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 font-serif text-xl text-gold">Insha Allah</p>
        </Reveal>
      </div>
    </footer>);

}