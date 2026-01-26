import React from 'react';
import { PROJECTS } from '../constants';
import { HoloCard } from './ui/HoloCard';

export const Projects: React.FC = () => {
  return (
    <section id="work" className="py-32 border-t border-primary/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-24 flex items-center gap-6">
            <span className="spec-tag">SECTION_04</span>
            <h2 className="text-4xl font-bold tracking-widest text-white display-font">DEPLOYED <span className="text-primary">MODULES</span></h2>
            <div className="h-[1px] flex-grow bg-primary/20"></div>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            // Map the icons to match the design (architecture vs router/smart_toy)
            const iconName = project.id === 'halaqah' ? 'architecture' : 'router';
            // Specific ID for the design
            const moduleId = project.id === 'halaqah' ? 'MODULE_HALAQAH_01' : 'MODULE_BOT_WA_02';

            return (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* Visual Area */}
                <div className={`lg:col-span-7 relative ${isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                  <HoloCard className="p-4 group">
                    <div className="aspect-video bg-primary/5 flex items-center justify-center relative overflow-hidden border border-primary/20">
                        <div className={`absolute inset-0 opacity-10 ${isEven ? 'bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[length:20px_20px]' : 'bg-[linear-gradient(90deg,var(--primary)_1px,transparent_1px),linear-gradient(var(--primary)_1px,transparent_1px)] bg-[length:40px_40px]'}`}></div>
                        
                        <span className={`material-symbols-outlined text-[10rem] sm:text-[12rem] text-primary/5 group-hover:text-primary/15 transition-all duration-700 ${!isEven ? 'rotate-12 group-hover:rotate-0' : 'scale-110 group-hover:scale-100'}`}>
                            {iconName}
                        </span>

                        <div className="absolute top-6 left-6 flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-primary animate-pulse"></div>
                                <span className="text-[10px] display-font text-primary">{moduleId}</span>
                            </div>
                            <span className="text-[8px] text-primary/40 font-mono">{project.refId}</span>
                        </div>

                        <div className={`absolute bottom-6 ${isEven ? 'right-6 flex items-center gap-4' : 'left-6'}`}>
                            <span className="material-symbols-outlined text-primary text-2xl opacity-50">{isEven ? 'analytics' : 'dynamic_feed'}</span>
                            {isEven && <div className="w-16 h-[1px] bg-primary/30"></div>}
                        </div>
                    </div>
                  </HoloCard>
                </div>

                {/* Text Content */}
                <div className={`lg:col-span-5 ${isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                   <div className="flex flex-wrap gap-3 mb-8">
                      {project.tags.map((tag, i) => (
                          <span key={tag} className={`spec-tag ${i > 0 ? '!border-white/20 !text-white/60' : ''}`}>{tag}</span>
                      ))}
                   </div>
                   
                   <h3 className="text-3xl font-bold mb-6 text-white tracking-tight display-font">{project.title}</h3>
                   
                   <p className="text-sm text-primary/70 mb-10 leading-relaxed font-mono italic border-l-2 border-primary/30 pl-6">
                       {project.description}
                   </p>

                   <ul className="space-y-4 mb-10">
                       {project.features.map((feat, i) => (
                           <li key={i} className="flex items-center gap-4 text-xs font-mono text-white/80">
                               <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                               {feat}
                           </li>
                       ))}
                   </ul>

                   <a href="#" className="inline-flex items-center gap-4 text-[10px] display-font font-bold tracking-widest text-primary hover:text-white transition-all group">
                       VIEW_SOURCE_CODE
                       <span className="material-symbols-outlined text-sm group-hover:translate-x-3 transition-transform">arrow_forward_ios</span>
                   </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};