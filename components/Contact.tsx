import React from "react";
import { HoloCard } from "./ui/HoloCard";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      icon: "mail",
      label: "EMAIL_ME",
      sub: "ENCRYPTED_SEND",
      href: "mailto:passlexyganteng@gmail.com",
      isExternal: false,
    },
    {
      icon: "data_object",
      label: "GITHUB_DB",
      sub: "REPO_ACCESS",
      href: "https://github.com/lexx-project",
      isExternal: true,
    },
    {
      icon: "hub",
      label: "LINKEDIN_SYS",
      sub: "CONNECT_NODES",
      href: "https://www.linkedin.com/in/lexy-evandra-79155237a",
      isExternal: true,
    },
    {
      icon: "alternate_email",
      label: "SOCIAL_INSTA",
      sub: "USER_PROFILE",
      href: "https://instagram.com/lexycuy",
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-16 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          <RevealOnScroll>
            <div>
              <span className="display-font text-[10px] text-primary bg-primary/10 px-3 py-1 border border-primary/30 mb-4 lg:mb-8 inline-block">
                TERMINAL_UPLINK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter text-white mb-4 lg:mb-10 leading-none">
                READY TO
                <br />
                <span className="text-primary">DEPLOY?</span>
              </h2>
              <p className="text-xs sm:text-sm font-mono text-primary/60 max-w-md mb-6 lg:mb-12 leading-loose">
                ESTABLISHING DIRECT COMMUNICATION CHANNELS FOR SYSTEM
                INTEGRATION AND ARCHITECTURAL CONSULTATION. AUTHENTICATION
                REQUIRED.
              </p>

              <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-0">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-primary/30 flex items-center justify-center animate-pulse">
                  <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-primary rounded-full"></div>
                </div>
                <span className="text-[10px] font-mono text-primary/80">
                  LISTENING_FOR_PINGS...
                </span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.isExternal ? "_blank" : "_self"}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="block h-full"
                >
                  <HoloCard className="p-4 sm:p-6 lg:p-10 flex flex-col h-full justify-between group hover:bg-primary/20 transition-all border-primary/40 cursor-pointer">
                    <span className="material-symbols-outlined mb-4 lg:mb-6 text-2xl lg:text-3xl text-primary group-hover:scale-110 group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </span>
                    <div>
                      <span className="block text-[9px] lg:text-[10px] display-font font-bold tracking-widest text-white group-hover:text-primary transition-colors">
                        {item.label}
                      </span>
                      <span className="block text-[7px] lg:text-[8px] font-mono text-primary/40 mt-1 lg:mt-2 group-hover:text-primary/70 transition-colors">
                        {item.sub}
                      </span>
                    </div>
                  </HoloCard>
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
