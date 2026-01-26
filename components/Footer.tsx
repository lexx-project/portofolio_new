import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 py-16 border-t border-primary/20 relative z-10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="flex items-center gap-6 opacity-60">
            <span className="spec-tag">LOGIC_UNIT_2026</span>
            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            <span className="text-[10px] font-mono text-primary/80">BUILT_WITH_COFFEE_AND_LOGIC</span>
        </div>

        <div className="flex gap-16">
            <div className="flex flex-col items-end">
                <span className="text-[9px] display-font text-primary/50 mb-1">SYSTEM_UPTIME</span>
                <span className="text-xs font-mono text-white">99.99%</span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-[9px] display-font text-primary/50 mb-1">COORDINATES</span>
                <span className="text-xs font-mono text-white">51.5074° N, 0.1278° W</span>
            </div>
        </div>

      </div>
    </footer>
  );
};