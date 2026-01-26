import React from 'react';

interface SectionTitleProps {
  number: string;
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ number, title, subtitle, className = '' }) => {
  return (
    <div className={`flex flex-col mb-6 ${className}`}>
        <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-primary"></div>
            <span className="spec-tag">{number}</span>
        </div>
      <h2 className="text-4xl font-bold tracking-tighter text-white mb-6 leading-none">
        {title}<br /> <span className="text-primary">{subtitle}</span>
      </h2>
      <div className="h-1 w-full bg-primary/10 overflow-hidden">
        <div className="h-full w-1/3 bg-primary shadow-[0_0_10px_#39ff14]"></div>
      </div>
    </div>
  );
};