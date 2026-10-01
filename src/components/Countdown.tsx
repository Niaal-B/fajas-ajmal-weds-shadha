import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';

type CountdownProps = {
  target: string;
};

export function Countdown({ target }: CountdownProps) {
  const { days, hours, minutes, seconds, done } = useCountdown(target);

  if (done) {
    return <p className="text-center font-serif text-xl italic text-forest">Alhamdulillah — the day has arrived.</p>;
  }

  const units = [
  { label: 'Days', value: days },
  { label: 'Hours', value: hours },
  { label: 'Minutes', value: minutes },
  { label: 'Seconds', value: seconds }];


  return (
    <div className="flex items-stretch justify-center" role="timer" aria-label={`${days} days, ${hours} hours, ${minutes} minutes until the Nikah`}>
      {units.map((u, i) =>
      <div key={u.label} className={`flex w-[72px] flex-col items-center ${i > 0 ? 'border-l border-gold/40' : ''}`}>
          <span className="relative block h-10 w-full overflow-hidden text-center font-display text-[2rem] leading-10 text-forest" aria-hidden="true">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.span
              key={u.value}
              className="absolute inset-x-0"
              initial={{ y: -14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 14, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}>
              
                {String(u.value).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.25em] text-gold">{u.label}</span>
        </div>
      )}
    </div>);

}