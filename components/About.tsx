import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { HoloCard } from "./ui/HoloCard";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <RevealOnScroll>
              <SectionTitle number="SECTION_02" title="CORE" subtitle="LOGIC" />
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-3 border border-primary/20 bg-primary/5">
                  <span className="text-[9px] block text-primary/50 font-mono mb-1">
                    CPU_LOAD
                  </span>
                  <span className="text-xs font-mono text-primary">44.02%</span>
                  <div className="w-full bg-primary/20 h-0.5 mt-2">
                    <div className="bg-primary h-full w-[44%]"></div>
                  </div>
                </div>
                <div className="p-3 border border-primary/20 bg-primary/5">
                  <span className="text-[9px] block text-primary/50 font-mono mb-1">
                    MEMORY
                  </span>
                  <span className="text-xs font-mono text-primary">
                    1.2 TB/S
                  </span>
                  <div className="w-full bg-primary/20 h-0.5 mt-2">
                    <div className="bg-primary h-full w-[78%]"></div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-16">
            <RevealOnScroll width="100%">
              <HoloCard className="p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-primary/40 opacity-50"></div>
                <span className="text-[10px] text-primary/60 mb-4 block font-mono">
                  :: DECRYPTING_BIODATA...
                </span>
                <p className="text-xl sm:text-2xl leading-relaxed font-mono text-white/90">
                  I am a 17-year-old developer specializing in invisible
                  infrastructure. While most build for the eye, I build for the
                  machine. I architect systems that prioritize resilience and
                  atomic efficiency.
                </p>
              </HoloCard>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RevealOnScroll delay={0.1}>
                <HoloCard className="p-8 group hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <span className="spec-tag">OBJ_01</span>
                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">
                      precision_manufacturing
                    </span>
                  </div>
                  <h3 className="text-white font-bold mb-4 tracking-wider display-font text-xs">
                    STRUCTURAL INTEGRITY
                  </h3>
                  <p className="text-xs text-primary/60 leading-relaxed font-mono">
                    Stripping complex manual processes to their base components
                    and rebuilding as automated, unbreakable workflows.
                  </p>
                </HoloCard>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <HoloCard className="p-8 group hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-6">
                    <span className="spec-tag">OBJ_02</span>
                    <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">
                      account_tree
                    </span>
                  </div>
                  <h3 className="text-white font-bold mb-4 tracking-wider display-font text-xs">
                    DATA PIPELINES
                  </h3>
                  <p className="text-xs text-primary/60 leading-relaxed font-mono">
                    Engineering high-performance API architectures and
                    normalized SQL schemas for mission-critical data management.
                  </p>
                </HoloCard>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
