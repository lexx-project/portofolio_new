import React, { ReactNode } from 'react';

interface HoloCardProps {
  children: ReactNode;
  className?: string;
  // Retaining noBorder prop for backward compatibility but it's largely handled by CSS now
  noBorder?: boolean;
}

export const HoloCard: React.FC<HoloCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`hologram-card ${className}`}>
      {children}
    </div>
  );
};