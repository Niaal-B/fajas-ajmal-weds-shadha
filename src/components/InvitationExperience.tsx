import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { RotateCcwIcon, Volume2Icon, VolumeXIcon } from 'lucide-react';
import { Doors } from './Doors';
import { IntroOverlay } from './IntroOverlay';
import { InvitationCard } from './InvitationCard';
import { InvitationSection } from './sections/InvitationSection';
import { TimelineSection } from './sections/TimelineSection';
import { CoupleSection } from './sections/CoupleSection';
import { HostsSection } from './sections/HostsSection';
import { EventsSection } from './sections/EventsSection';
import { ClosingSection } from './sections/ClosingSection';
import { images, music } from '../data/invitation';
import { useYouTubeAudio } from '../hooks/useYouTubeAudio';
import type { Stage } from '../types/invitation';

const ease = [0.23, 1, 0.32, 1] as const;

export function InvitationExperience() {
  const [stage, setStage] = useState<Stage>('intro');
  const reduceMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const song = useYouTubeAudio(music.youtubeId, music.startSeconds);

  const holdClosed = reduceMotion ? 100 : 1100;
  const openDuration = reduceMotion ? 0.01 : 1.8;

  useEffect(() => {
    if (stage === 'closed') {
      const t = window.setTimeout(() => setStage('opening'), holdClosed);
      return () => window.clearTimeout(t);
    }
    if (stage === 'opening') {
      const t = window.setTimeout(() => setStage('revealed'), openDuration * 1000 + 150);
      return () => window.clearTimeout(t);
    }
  }, [stage, holdClosed, openDuration]);

  const framed = stage === 'closed' || stage === 'opening';
  const revealed = stage === 'revealed';

  const replay = () => {
    scrollRef.current?.scrollTo({ top: 0 });
    setStage('intro');
  };

  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center bg-night">
      <div className="relative h-[100dvh] w-full max-w-[440px] overflow-hidden bg-night">
        <div
          ref={scrollRef}
          className={`absolute inset-0 ${revealed ? 'overflow-y-auto' : 'overflow-hidden'} [scrollbar-width:none]`}>
          
          {/* Opening scene */}
          <div className="relative h-[100dvh] w-full overflow-hidden">
            <img
              src={images.backdrop}
              alt=""
              className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70" />
            
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ scale: framed ? 0.9 : 1, y: framed ? -10 : 0 }}
              transition={{ duration: 0.9, ease }}>
              
              <InvitationCard stage={stage} />
              <Doors stage={stage} openDuration={openDuration} />
            </motion.div>
          </div>

          {/* Details, shown once the card is revealed */}
          {revealed &&
          <>
              <InvitationSection />
              <TimelineSection />
              <CoupleSection />
              <HostsSection />
              <EventsSection />
              <ClosingSection />
            </>
          }
        </div>

        <AnimatePresence>
          {stage === 'intro' &&
          <IntroOverlay
            onOpen={() => {
              song.play();
              setStage('closed');
            }} />
          }
        </AnimatePresence>

        <AnimatePresence>
          {revealed &&
          <motion.button
            type="button"
            onClick={replay}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.25, ease } }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
            aria-label="Replay invitation"
            className="absolute bottom-5 left-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/80 bg-door-back text-gold-light shadow-lg transition-[transform,background-color] duration-150 ease-out hover:bg-night active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">
            
              <RotateCcwIcon className="h-5 w-5" aria-hidden="true" />
            </motion.button>
          }
        </AnimatePresence>

        <AnimatePresence>
          {stage !== 'intro' &&
          <motion.button
            type="button"
            onClick={song.toggle}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.25, ease } }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
            aria-label={song.playing ? 'Pause music' : 'Play music'}
            aria-pressed={song.playing}
            className="absolute bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold/80 bg-door-back text-gold-light shadow-lg transition-[transform,background-color] duration-150 ease-out hover:bg-night active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">
            
              {song.playing ?
            <Volume2Icon className="h-5 w-5" aria-hidden="true" /> :
            <VolumeXIcon className="h-5 w-5" aria-hidden="true" />}
            </motion.button>
          }
        </AnimatePresence>
      </div>

      {/* Hidden YouTube player for the background song */}
      <div
        ref={song.hostRef}
        className="pointer-events-none fixed -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0"
        aria-hidden="true" />
      
    </main>);

}