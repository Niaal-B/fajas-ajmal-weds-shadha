import { useCallback, useEffect, useRef, useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<any> | null = null;

function loadYouTubeApi(): Promise<any> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        resolve(window.YT);
      };
      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(script);
    });
  }
  return apiPromise;
}

// Plays a YouTube video's audio through a hidden player, looping from `startSeconds`.
export function useYouTubeAudio(videoId: string, startSeconds: number) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const readyRef = useRef(false);
  const wantPlayRef = useRef(false);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  const start = useCallback((player: any) => {
    if (!startedRef.current) {
      player.seekTo(startSeconds, true);
      startedRef.current = true;
    }
    player.unMute();
    player.setVolume(80);
    player.playVideo();
  }, [startSeconds]);

  useEffect(() => {
    let cancelled = false;
    loadYouTubeApi().then((YT) => {
      if (cancelled || !hostRef.current) return;
      // YT replaces its target element, so give it a child React doesn't own
      const target = document.createElement('div');
      hostRef.current.appendChild(target);
      playerRef.current = new YT.Player(target, {
        videoId,
        width: 1,
        height: 1,
        playerVars: { start: startSeconds, controls: 0, disablekb: 1, playsinline: 1, rel: 0, fs: 0, iv_load_policy: 3 },
        events: {
          onReady: (e: any) => {
            readyRef.current = true;
            if (wantPlayRef.current) start(e.target);
          },
          onStateChange: (e: any) => {
            if (e.data === YT.PlayerState.PLAYING) setPlaying(true);
            else if (e.data === YT.PlayerState.PAUSED) setPlaying(false);
            else if (e.data === YT.PlayerState.ENDED) {
              e.target.seekTo(startSeconds, true);
              e.target.playVideo();
            }
          }
        }
      });
    });
    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
      readyRef.current = false;
    };
  }, [videoId, startSeconds, start]);

  const play = useCallback(() => {
    wantPlayRef.current = true;
    if (readyRef.current && playerRef.current) start(playerRef.current);
  }, [start]);

  const toggle = useCallback(() => {
    if (playing) {
      wantPlayRef.current = false;
      playerRef.current?.pauseVideo();
    } else {
      play();
    }
  }, [playing, play]);

  return { hostRef, playing, play, toggle };
}
