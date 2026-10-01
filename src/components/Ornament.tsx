import React from 'react';

type OrnamentProps = {
  variant?: 'diamond' | 'line';
  className?: string;
};

export function Ornament({ variant = 'diamond', className = '' }: OrnamentProps) {
  if (variant === 'line') {
    return (
      <svg viewBox="0 0 200 12" className={className} aria-hidden="true" fill="none">
        <path d="M0 6h82M118 6h82" stroke="currentColor" strokeWidth="1" />
        <path d="M100 1l5 5-5 5-5-5z" fill="currentColor" />
        <circle cx="88" cy="6" r="1.6" fill="currentColor" />
        <circle cx="112" cy="6" r="1.6" fill="currentColor" />
      </svg>);

  }
  return (
    <svg viewBox="0 0 80 16" className={className} aria-hidden="true" fill="none">
      <path d="M2 8h24M54 8h24" stroke="currentColor" strokeWidth="1" />
      <path d="M40 1l6 7-6 7-6-7z" fill="currentColor" />
      <path d="M30 8l3-3 3 3-3 3zM44 8l3-3 3 3-3 3z" fill="currentColor" />
    </svg>);

}