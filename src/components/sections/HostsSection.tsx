import React from 'react';
import { HomeIcon, MoonStarIcon, PhoneIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { hosts } from '../../data/invitation';

export function HostsSection() {
  return (
    <section className="bg-cream px-6 pb-16 pt-14" aria-label="Hosted by">
      <SectionHeading eyebrow="With Love & Prayers" title="Hosted By" icon={MoonStarIcon} />

      <Reveal className="mt-10" delay={0.1}>
        <div className="relative bg-paper-card px-6 py-10 text-center shadow-[0_12px_32px_rgba(90,52,18,0.1)]">
          <div className="pointer-events-none absolute inset-2 border border-gold/25" aria-hidden="true" />
          <HomeIcon className="mx-auto h-7 w-7 text-gold" strokeWidth={1.4} aria-hidden="true" />
          <p className="mt-4 font-display text-sm uppercase tracking-[0.4em] text-ink-soft">Hosts</p>
          <p className="mt-5 font-serif text-2xl text-ink-deep">{hosts.first}</p>
          <p className="my-1 font-script text-xl text-gold">&amp;</p>
          <p className="font-serif text-2xl text-ink-deep">{hosts.second}</p>
          <p className="mt-5 font-sans text-sm text-ink-soft">{hosts.address}</p>
          {hosts.phone &&
          <a
            href={`tel:+91${hosts.phone}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2 font-sans text-sm text-forest transition-[background-color,transform] duration-150 ease-out hover:bg-gold/10 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            
            <PhoneIcon className="h-4 w-4" aria-hidden="true" />
            {hosts.phone}
          </a>
          }
        </div>
      </Reveal>

      <Reveal className="mt-6" delay={0.15}>
        <p className="text-center font-serif text-lg italic text-ink-soft">{hosts.note}</p>
      </Reveal>
    </section>);

}