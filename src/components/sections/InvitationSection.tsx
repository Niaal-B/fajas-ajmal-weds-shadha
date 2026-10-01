import React from "react";
import { CalendarDaysIcon, ClockIcon, MapPinIcon, MoonIcon, SunIcon, BoxIcon } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Countdown } from "../Countdown";
import { invitation, invitationMessage, keyDetails } from "../../data/invitation";
const iconMap: Record<string, BoxIcon> = {
  calendar: CalendarDaysIcon,
  clock: ClockIcon,
  pin: MapPinIcon,
  moon: MoonIcon
};
export function InvitationSection() {
  return <section className="bg-paper px-6 pb-16 pt-14" aria-label="The Invitation">
      <SectionHeading eyebrow="Insha Allah" title="The Invitation" icon={SunIcon} />

      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-[360px] text-center font-serif text-[1.15rem] leading-[1.75] text-ink-soft">
          {invitationMessage.map((part, i) => 'emphasis' in part && part.emphasis ? <em key={i} className="font-semibold text-forest">
                {part.text}
              </em> : <React.Fragment key={i}>{part.text}</React.Fragment>)}
        </p>
      </Reveal>

      <ul className="mt-10 space-y-4">
        {keyDetails.map((d, i) => {
        const Icon = iconMap[d.icon];
        return <li key={d.label}>
              <Reveal delay={i * 0.04}>
                <div className="relative bg-paper-card px-6 py-7 text-center shadow-[0_8px_24px_rgba(90,52,18,0.08)]">
                  <div className="pointer-events-none absolute inset-2 border border-gold/25" aria-hidden="true" />
                  <Icon className="mx-auto h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-gold">{d.label}</p>
                  <p className="mt-1.5 font-display text-[1.05rem] text-ink-deep">{d.value}</p>
                  <p className="mt-1 font-sans text-xs text-ink-soft">{d.note}</p>
                </div>
              </Reveal>
            </li>;
      })}
      </ul>

      <Reveal className="mt-12">
        <Countdown target={invitation.countdownTarget} />
      </Reveal>
    </section>;
}