'use client';

import React from 'react';
import { useScrollDirection } from '@/hooks/use-scroll-direction';

interface NavScrollWrapperProps {
  children: React.ReactNode;
}

export const NavScrollWrapper: React.FC<NavScrollWrapperProps> = ({ children }) => {
  const { scrollDirection, atTop } = useScrollDirection();
  const visible = atTop || scrollDirection === 'up' || scrollDirection === 'none';

  return (
    <div
      data-scroll-reactive-navbar
      className={`sticky top-0 z-40 w-full will-change-transform transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {children}
    </div>
  );
};
