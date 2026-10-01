import React from 'react';
import { SunIcon } from 'lucide-react';
import { SectionHeading } from '../SectionHeading';
import { Reveal } from '../Reveal';
import { GoldDust } from '../GoldDust';
import { couple } from '../../data/invitation';

type Person = {role: string;name: string;lines: string[];};

export function CoupleSection() {
  return (
    <section className="relative overflow-hidden bg-forest px-6 py-16" aria-label="Bride and Groom">
      <GoldDust count={14} />
      <div className="relative">
        <SectionHeading eyebrow="Insha Allah" title="Bride & Groom" icon={SunIcon} tone="dark" />
        <PersonBlock person={couple.groom} />
        <Reveal className="my-8 flex items-center justify-center gap-4" delay={0.1}>
          <span className="h-px w-12 bg-gold/60" aria-hidden="true" />
          <span className="font-script text-3xl text-gold-light">&amp;</span>
          <span className="h-px w-12 bg-gold/60" aria-hidden="true" />
        </Reveal>
        <PersonBlock person={couple.bride} />
      </div>
    </section>);

}

function PersonBlock({ person }: {person: Person;}) {
  return (
    <Reveal className="mt-10 text-center first:mt-10">
      <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-light">{person.role}</p>
      <h3 className="mt-2 whitespace-nowrap font-script text-[clamp(2.4rem,12vw,3.25rem)] leading-tight text-ivory">{person.name}</h3>
      {person.lines.map((line) =>
      <p key={line} className="mx-auto mt-1 max-w-[300px] font-sans text-sm leading-relaxed text-ivory/75">
          {line}
        </p>
      )}
    </Reveal>);

}