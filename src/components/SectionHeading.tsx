import React from "react";
import { Reveal } from "./Reveal";
import { BoxIcon } from "lucide-react";
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  icon: BoxIcon;
  tone?: 'light' | 'dark';
};
export function SectionHeading({
  eyebrow,
  title,
  icon: Icon,
  tone = 'light'
}: SectionHeadingProps) {
  const dark = tone === 'dark';
  return <Reveal className="flex flex-col items-center text-center">
      <p className={`font-serif text-base italic ${dark ? 'text-gold-light' : 'text-gold'}`}>{eyebrow}</p>
      <h2 className={`mt-1 font-serif text-[2rem] leading-tight ${dark ? 'text-ivory' : 'text-ink-deep'}`}>{title}</h2>
      <div className="mt-4 flex w-full max-w-[260px] items-center gap-4" aria-hidden="true">
        <span className={`h-px flex-1 ${dark ? 'bg-gold/50' : 'bg-gold/60'}`} />
        <Icon className={`h-4 w-4 ${dark ? 'text-gold-light' : 'text-gold'}`} />
        <span className={`h-px flex-1 ${dark ? 'bg-gold/50' : 'bg-gold/60'}`} />
      </div>
    </Reveal>;
}