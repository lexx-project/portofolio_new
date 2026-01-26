import React from 'react';
import { HoloCard } from './ui/HoloCard';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left Info */}
            <div>
                <span className="display-font text-[10px] text-primary bg-primary/10 px-3 py-1 border border-primary/30 mb-6 lg:mb-8 inline-block">TERMINAL_UPLINK</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 lg:mb-10 leading-none">
                    READY TO<br/>
                    <span className="text-primary">DEPLOY?</span>
                </h2>
                <p className="text-xs sm:text-sm font-mono text-primary/60 max-w-md mb-8 lg:mb-12 leading-loose">
                    ESTABLISHING DIRECT COMMUNICATION CHANNELS FOR SYSTEM INTEGRATION AND ARCHITECTURAL CONSULTATION. AUTHENTICATION REQUIRED.
                </p>

                <div className="flex items-center gap-6 mb-12 lg:mb-0">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-primary/30 flex items-center justify-center animate-pulse">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-[10px] font-mono text-primary/80">LISTENING_FOR_PINGS...</span>
                </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {[
                    { icon: 'mail', label: 'EMAIL_ME', sub: 'ENCRYPTED_SEND', href: 'mailto:hello@example.com' },
                    { icon: 'code_off', label: 'GITHUB_DB', sub: 'REPO_ACCESS', href: '#' },
                    { icon: 'hub', label: 'LINKEDIN_SYS', sub: 'CONNECT_NODES', href: '#' },
                    { icon: 'terminal', label: 'SOCIAL_INSTA', sub: 'USER_PROFILE', href: '#' },
                ].map((item) => (
                    <HoloCard key={item.label} className="p-6 sm:p-10 flex flex-col group hover:bg-primary/20 transition-all border-primary/40 cursor-pointer">
                        <span className="material-symbols-outlined mb-4 lg:mb-6 text-2xl lg:text-3xl text-primary group-hover:scale-110 transition-transform">{item.icon}</span>
                        <span className="text-[9px] lg:text-[10px] display-font font-bold tracking-widest text-white">{item.label}</span>
                        <span className="text-[7px] lg:text-[8px] font-mono text-primary/40 mt-1 lg:mt-2">{item.sub}</span>
                    </HoloCard>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};