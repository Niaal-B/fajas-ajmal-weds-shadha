import React from 'react';
import { motion } from 'framer-motion';
import { MoonIcon, MoonStarIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { timeline } from '../../data/invitation';

export function TimelineSection() {
  return (
    <section className="bg-cream px-6 pb-16 pt-14" aria-label="Timeline">
      <SectionHeading eyebrow="The Celebrations" title="Timeline" icon={MoonIcon} />

      <ol className="relative mt-10">
        <motion.span
          className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-gold/50"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          aria-hidden="true" />
        
        {timeline.map((t, i) => {
          const Icon = i === 0 ? MoonStarIcon : MoonIcon;
          return (
            <li key={t.title} className="relative pb-10 pl-14 last:pb-0">
              <Reveal delay={0.15 + i * 0.1}>
                <span
                  className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 ${
                  i === 0 ? 'bg-gold text-ivory' : 'bg-paper text-gold'}`
                  }
                  aria-hidden="true">
                  
                  <Icon className="h-4 w-4" />
                </span>
                <p className="pt-1 font-sans text-[10px] uppercase leading-relaxed tracking-[0.25em] text-gold">{t.date}</p>
                <h3 className="mt-1 font-serif text-2xl text-ink-deep">{t.title}</h3>
                <p className="mt-2 font-sans text-sm text-ink-soft">
                  <span className="text-forest">{t.time}</span> · {t.place}
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-ink-soft">{t.description}</p>
              </Reveal>
            </li>);

        })}
      </ol>
    </section>);

}