import React from "react";
import { PROJECTS } from "../constants";
import { HoloCard } from "./ui/HoloCard";

import HalaqahImage from "../src/assets/halaqah-arch.png";
import BotWaImage from "../src/assets/bot-wa-engine.png";

export const Projects: React.FC = () => {
  const handleOpenLink = (url: string) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="work" className="py-32 border-t border-primary/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="mb-24 flex items-center gap-6">
          <span className="spec-tag">SECTION_04</span>
          <h2 className="text-4xl font-bold tracking-widest text-white display-font">
            DEPLOYED <span className="text-primary">MODULES</span>
          </h2>
          <div className="h-[1px] flex-grow bg-primary/20"></div>
        </div>

        <div className="space-y-40">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;
            const moduleId =
              project.id === "halaqah"
                ? "MODULE_HALAQAH_01"
                : "MODULE_BOT_WA_02";

            const imagePath =
              project.id === "halaqah" ? HalaqahImage : BotWaImage;

            const githubLink = (project as any).githubUrl || "#";

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
              >
                <div
                  className={`lg:col-span-7 relative cursor-pointer ${isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"}`}
                  onClick={() => handleOpenLink(githubLink)}
                  title="Click to view repository"
                >
                  <HoloCard className="p-4 group">
                    <div className="aspect-video bg-primary/5 flex items-center justify-center relative overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-colors">
                      <img
                        src={imagePath}
                        alt={`${project.title} Visualization`}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 transform group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />

                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none z-0"></div>
                      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30 z-0"></div>

                      <div
                        className={`absolute inset-0 opacity-10 pointer-events-none z-0 ${isEven ? "bg-[radial-gradient(var(--primary)_1px,transparent_1px)] bg-[length:20px_20px]" : "bg-[linear-gradient(90deg,var(--primary)_1px,transparent_1px),linear-gradient(var(--primary)_1px,transparent_1px)] bg-[length:40px_40px]"}`}
                      ></div>

                      <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]"></div>
                          <span className="text-[10px] display-font text-primary/90 bg-black/60 backdrop-blur-sm px-2 py-1 border border-primary/20">
                            {moduleId}
                          </span>
                        </div>
                        <span className="text-[8px] text-primary/60 font-mono bg-black/40 px-1">
                          {project.refId}
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                        <div className="bg-black/80 backdrop-blur-md px-4 py-2 border border-primary/50 text-primary display-font text-xs tracking-widest flex items-center gap-2">
                          OPEN_REPOSITORY{" "}
                          <span className="material-symbols-outlined text-sm">
                            open_in_new
                          </span>
                        </div>
                      </div>

                      <div
                        className={`absolute bottom-6 ${isEven ? "right-6 flex items-center gap-4" : "left-6"} z-10`}
                      >
                        <span className="material-symbols-outlined text-primary/80 text-2xl shadow-sm drop-shadow-[0_0_5px_rgba(var(--primary),0.5)]">
                          {isEven ? "analytics" : "dynamic_feed"}
                        </span>
                        {isEven && (
                          <div className="w-16 h-[1px] bg-primary/50"></div>
                        )}
                      </div>
                    </div>
                  </HoloCard>
                </div>

                <div
                  className={`lg:col-span-5 ${isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"}`}
                >
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={tag}
                        className={`spec-tag ${i > 0 ? "!border-white/20 !text-white/60" : ""}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-white tracking-tight display-font">
                    {project.title}
                  </h3>

                  <p className="text-sm text-primary/70 mb-10 leading-relaxed font-mono italic border-l-2 border-primary/30 pl-6">
                    {project.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {project.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-xs font-mono text-white/80"
                      >
                        <span className="material-symbols-outlined text-primary text-sm">
                          check_circle
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-[10px] display-font font-bold tracking-widest text-primary hover:text-white transition-all group cursor-pointer"
                  >
                    VIEW_SOURCE_CODE
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-3 transition-transform">
                      arrow_forward_ios
                    </span>
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
