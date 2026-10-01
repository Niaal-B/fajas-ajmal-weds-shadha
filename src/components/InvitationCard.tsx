import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { Ornament } from './Ornament';
import { GoldDust } from './GoldDust';
import { images, invitation } from '../data/invitation';
import type { Stage } from '../types/invitation';

type InvitationCardProps = {
  stage: Stage;
};

const ease = [0.23, 1, 0.32, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 10, filter: 'blur(4px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease } }
};

// Names "written" in with a left-to-right wipe
const ink = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0.4 },
  show: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: 1.1, ease: [0.65, 0, 0.35, 1] } }
};

// Gold rules draw outward from the centre
const rule = {
  hidden: { scaleX: 0.3, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.7, ease } }
};

export function InvitationCard({ stage }: InvitationCardProps) {
  const reduce = useReducedMotion();
  const visible = stage === 'opening' || stage === 'revealed';
  const revealed = stage === 'revealed';

  return (
    <motion.article
      className="absolute inset-0 z-10 overflow-hidden"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: revealed ? 1 : 0.86 }}
      transition={{ duration: revealed ? 0.9 : 0.4, ease }}
      aria-label={`Nikah invitation of ${invitation.groom} and ${invitation.bride}`}>
      
      {/* Slow breathing zoom on the artwork */}
      <motion.img
        src={images.card}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={false}
        animate={revealed && !reduce ? { scale: [1, 1.05] } : { scale: 1 }}
        transition={revealed ? { duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } : { duration: 0 }} />
      

      {/* Warm light spilling out as the doors part */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-ivory"
        initial={false}
        animate={{ opacity: stage === 'opening' ? [0, 0.55, 0] : 0 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        aria-hidden="true" />
      

      <GoldDust count={16} active={revealed} />

      <motion.div
        className="relative flex h-full flex-col items-center justify-center px-10 pb-[14%] pt-[18%] text-center text-ink"
        variants={container}
        initial="hidden"
        animate={visible ? 'show' : 'hidden'}>
        
        <motion.p variants={item} dir="rtl" lang="ar" className="font-arabic text-[clamp(1.4rem,6vw,1.75rem)] text-gold-dark">
          {invitation.bismillah}
        </motion.p>

        <motion.p variants={item} className="mt-3 font-display text-[11px] uppercase leading-tight tracking-[0.25em] text-ink/80">
          {invitation.tagline[0]}
          <br />
          {invitation.tagline[1]}
        </motion.p>
        <motion.div variants={rule}>
          <Ornament className="mt-1 h-3 w-16 text-gold-dark" />
        </motion.div>

        <motion.h1 className="mt-2 flex flex-col items-center" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.35 } } }}>
          <motion.span variants={ink} className="whitespace-nowrap font-serif text-[clamp(2.1rem,10vw,2.75rem)] font-semibold leading-none text-ink">
            {invitation.groom}
          </motion.span>
          <motion.span variants={item} className="font-script text-[clamp(2.5rem,12vw,3.25rem)] leading-[1.1] text-gold-dark">
            &amp;
          </motion.span>
          <motion.span variants={ink} className="whitespace-nowrap px-2 font-script text-[clamp(2.5rem,11.5vw,3.1rem)] leading-[1] text-ink">
            {invitation.bride}
          </motion.span>
        </motion.h1>

        <motion.div variants={rule} className="mt-4 w-full">
          <Ornament variant="line" className="mx-auto h-3 w-48 text-gold-dark" />
        </motion.div>

        <motion.p variants={item} className="mt-2 font-display text-lg uppercase tracking-[0.35em] text-ink">
          {invitation.ceremony}
        </motion.p>
        <motion.p variants={item} className="mt-1 whitespace-nowrap font-display text-[clamp(1.05rem,5vw,1.3rem)] font-semibold uppercase tracking-[0.12em] text-ink">
          <time dateTime={invitation.dateIso}>{invitation.dateLong}</time>
        </motion.p>
        <motion.p variants={item} className="mt-0.5 font-display text-[11px] uppercase tracking-[0.2em] text-ink/80">
          {invitation.time}
        </motion.p>

        <motion.div variants={rule}>
          <Ornament className="mt-3 h-3 w-16 text-gold-dark" />
        </motion.div>

        <motion.p variants={item} className="mt-2 font-display text-[11px] uppercase tracking-[0.25em] text-ink/80">
          {invitation.venueLabel}
        </motion.p>
        <motion.address variants={item} className="mt-0.5 whitespace-nowrap font-display text-[clamp(0.85rem,4vw,1rem)] font-semibold not-italic uppercase tracking-[0.12em] text-ink">
          {invitation.venue}
        </motion.address>

        <motion.div variants={rule}>
          <Ornament className="mt-3 h-3 w-16 text-gold-dark" />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      {revealed &&
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-4 flex flex-col items-center text-ink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        aria-hidden="true">
        
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-ink/70">Scroll</span>
          <motion.span animate={reduce ? undefined : { y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDownIcon className="h-4 w-4" />
          </motion.span>
        </motion.div>
      }
    </motion.article>);

}