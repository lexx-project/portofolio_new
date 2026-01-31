import React, { useState } from "react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "../constants";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 w-full border-b border-primary/20 bg-black/40 backdrop-blur-md h-16"
    >
      <div className="mx-auto flex h-full max-w-full items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <div
          className="flex items-center gap-6 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-sm"></div>
            <div className="relative flex h-10 w-10 items-center justify-center border border-primary text-primary">
              <span className="material-symbols-outlined text-xl">
                view_in_ar
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="display-font text-xs font-bold leading-none text-primary">
              LEXY_EVANDRA
            </span>
            <span className="text-[13px] text-primary/60 font-mono mt-1">
              JUNIOR DEVELOPER
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="display-font text-[10px] text-primary/70 hover:text-primary transition-all flex items-center gap-2 group"
            >
              <span className="text-[8px] opacity-50 group-hover:opacity-100 transition-opacity">
                {item.number}
              </span>{" "}
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Status */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col items-end mr-4">
            <div className="h-1 w-24 bg-primary/10 rounded-full overflow-hidden">
              <div className="h-full bg-primary w-2/3 animate-pulse"></div>
            </div>
            <span className="text-[9px] text-primary/50 mt-1 font-mono">
              LINK_ESTABLISHED
            </span>
          </div>
          <span className="material-symbols-outlined text-primary text-sm animate-pulse">
            sensors
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/95 border-b border-primary/20 p-4 lg:hidden flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-4 py-3 border-b border-primary/10 text-left"
            >
              <span className="font-mono text-primary text-xs">
                {item.number}
              </span>
              <span className="display-font text-white text-sm tracking-widest">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </motion.header>
  );
};
