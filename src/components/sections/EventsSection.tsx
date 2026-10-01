import React from 'react';
import { MapPinIcon, MoonStarIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { GoldDust } from '../GoldDust';
import { events } from '../../data/invitation';

export function EventsSection() {
  return (
    <section className="relative overflow-hidden bg-forest px-6 py-16" aria-label="Nikah and Reception">
      <GoldDust count={16} />
      <div className="relative">
        <SectionHeading eyebrow="Join us for" title="Nikah & Reception" icon={MoonStarIcon} tone="dark" />

        <div className="mt-10 space-y-6">
          {events.map((e, i) =>
          <Reveal key={e.label} delay={i * 0.05}>
              <article className="border border-gold/40 bg-white/[0.04] px-6 py-7">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-light">{e.label}</p>
                <h3 className="mt-2 font-serif text-[2.5rem] leading-none text-ivory">{e.day}</h3>
                <p className="mt-1 font-serif text-xl text-ivory/90">{e.date}</p>
                <p className="mt-4 font-sans text-xs uppercase leading-relaxed tracking-[0.2em] text-gold-light">{e.time}</p>

                <div className="my-6 h-px bg-gold/30" aria-hidden="true" />

                <p className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.3em] text-gold-light">
                  <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" /> Venue
                </p>
                <p className="mt-2 font-serif text-2xl text-ivory">{e.venue}</p>
                {e.place && <p className="mt-1 font-sans text-sm text-ivory/60">{e.place}</p>}
                <p className="mt-4 font-sans text-sm leading-relaxed text-ivory/75">{e.description}</p>

                {e.mapUrl &&
                <a
                href={e.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gold/60 px-6 py-3 font-sans text-xs uppercase tracking-[0.25em] text-gold-light transition-[background-color,transform] duration-150 ease-out hover:bg-gold/10 active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">
                
                  <MapPinIcon className="h-4 w-4" aria-hidden="true" />
                  Open in Maps
                </a>
                }
              </article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}