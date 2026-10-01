import { useEffect, useState } from 'react';

export type CountdownParts = {days: number;hours: number;minutes: number;seconds: number;done: boolean;};

function compute(target: number): CountdownParts {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000 % 24),
    minutes: Math.floor(diff / 60000 % 60),
    seconds: Math.floor(diff / 1000 % 60),
    done: diff === 0
  };
}

export function useCountdown(targetIso: string): CountdownParts {
  const target = new Date(targetIso).getTime();
  const [parts, setParts] = useState(() => compute(target));

  useEffect(() => {
    const id = window.setInterval(() => setParts(compute(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return parts;
}