import React from "react";
import { TECH_STACK } from "../constants";
import { HoloCard } from "./ui/HoloCard";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-32 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <RevealOnScroll width="100%">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div>
              <span className="spec-tag mb-4 inline-block">SECTION_03</span>
              <h2 className="text-4xl font-bold tracking-widest text-white display-font">
                ENGINE <span className="text-primary">ROOM</span>
              </h2>
            </div>
            <div className="text-right border-r-2 border-primary pr-6 hidden md:block">
              <span className="text-[10px] text-primary block mb-1 font-display">
                SYSTEM_RESOURCES
              </span>
              <span className="text-xs text-white/50 font-mono">
                V_CORE_LOAD: 12% | THREADS: 64
              </span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll width="100%" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TECH_STACK.map((tech) => (
              <HoloCard
                key={tech.name}
                className="p-8 flex flex-col items-center group transition-all hover:scale-105"
              >
                <div className="w-12 h-12 mb-6 flex items-center justify-center border border-primary/20 text-primary group-hover:bg-primary/20 transition-all">
                  <span className="material-symbols-outlined text-3xl">
                    {tech.icon}
                  </span>
                </div>
                <span className="text-[9px] display-font text-white mb-4">
                  {tech.name}
                </span>

                <div className="w-full bg-primary/10 h-0.5 relative">
                  <div
                    className="absolute left-0 top-0 h-full bg-primary shadow-[0_0_5px_#39ff14]"
                    style={{ width: `${tech.load}%` }}
                  />
                </div>
              </HoloCard>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
