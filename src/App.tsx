import React from 'react';
import { MotionConfig } from 'framer-motion';
import { InvitationExperience } from './components/InvitationExperience';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <InvitationExperience />
    </MotionConfig>);

}