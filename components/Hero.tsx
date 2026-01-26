import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center px-4 sm:px-8 overflow-hidden">
        {/* Background Visuals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <div className="laser-line w-[1px] h-screen left-1/4 top-0 opacity-20"></div>
            <div className="laser-line w-[1px] h-screen right-1/4 top-0 opacity-20"></div>
            <div className="laser-line w-full h-[1px] top-1/3 left-0 opacity-10"></div>
            <div className="laser-line w-full h-[1px] bottom-1/3 left-0 opacity-10"></div>
            <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#39ff14]"></div>
            <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#39ff14]"></div>
            <div className="absolute top-1/4 right-10 opacity-20 animate-pulse hidden lg:block">
                <span className="material-symbols-outlined text-6xl text-primary">deployed_code</span>
            </div>
        </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Content - Reduced Z-Index to 10 so it goes BEHIND the visual if overlap occurs */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <span className="spec-tag">SCAN_ID: 772-AR</span>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-primary/50 to-transparent max-w-[200px]"></div>
          </div>

          {/* Adjusted responsive font sizes: smaller on lg screens to fit column */}
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white">
            LOGIC<br/>
            <span className="text-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">SYSTEMS</span><br/>
            ARCHITECTURE
          </h1>

          <div className="hologram-card p-6 mb-12 max-w-xl border-l-4 border-l-primary">
            <p className="text-sm text-primary/80 leading-relaxed font-mono">
                &gt; INITIALIZING HUD... <br/>
                &gt; BACKEND_DEV: ONLINE <br/>
                &gt; SYSTEM_ARCHITECT: ANALYZING <br/>
                &gt; TRANSFORMATING MANUAL PROCESSES INTO HIGH-EFFICIENCY DIGITAL ENGINES.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#work" className="relative px-10 py-5 bg-primary/10 border border-primary text-primary font-bold text-xs tracking-[0.2em] display-font hover:bg-primary hover:text-black transition-all group">
                VIEW_DATA_SETS
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary group-hover:bg-black transition-colors"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary group-hover:bg-black transition-colors"></div>
            </a>
            
            <a href="#contact" className="px-10 py-5 border border-white/20 hover:border-primary/50 text-white/70 hover:text-primary font-bold text-xs tracking-[0.2em] display-font transition-all bg-white/5">
                INIT_CONNECTION
            </a>
          </div>
        </div>

        {/* Right Visual - Increased Z-Index to 20 so it covers the text */}
        <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center z-20">
            <div className="relative w-full max-w-md">
                {/* Corner markers */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-primary"></div>
                
                {/* Main container */}
                <div className="photo-glitch-container aspect-[4/5] bg-black relative flex items-center justify-center">
                    <div className="photo-overlay-scanline"></div>
                    <div className="absolute top-2 left-2 text-[8px] font-mono text-primary/60">PRTCL_ID: ARCH_01</div>
                    <div className="absolute bottom-2 right-2 text-[8px] font-mono text-primary/60 text-right">COORD: 51.50_N</div>
                    
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.1)_0%,transparent_70%)]">
                        <span className="material-symbols-outlined text-8xl text-primary/20 mb-4">person_filled</span>
                        <div className="text-[10px] font-mono text-primary/40 tracking-widest px-4 text-center">
                            DATA_VISUALIZATION_PENDING<br/>
                            <span className="animate-pulse">[ SEARCHING_BIOMETRICS ]</span>
                        </div>
                    </div>
                </div>

                {/* Side lines */}
                <div className="absolute top-1/2 -right-8 -translate-y-1/2 flex flex-col gap-4">
                    <div className="w-12 h-[1px] bg-primary"></div>
                    <div className="w-8 h-[1px] bg-primary/60"></div>
                    <div className="w-10 h-[1px] bg-primary/80"></div>
                </div>

                {/* Bottom info */}
                <div className="absolute -bottom-12 left-0 w-full flex justify-between items-center px-2">
                    <div className="flex flex-col">
                        <span className="text-[10px] display-font text-primary">UNIT_01_VISUAL</span>
                        <div className="flex gap-1 mt-1">
                            <div className="w-1 h-1 bg-primary"></div>
                            <div className="w-1 h-1 bg-primary"></div>
                            <div className="w-1 h-1 bg-primary/20"></div>
                        </div>
                    </div>
                    <span className="text-[10px] font-mono text-primary/40">SEC_LVL: 07</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};