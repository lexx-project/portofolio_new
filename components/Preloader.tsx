import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const BOOT_LOGS = [
  "INITIALIZING_KERNEL...",
  "LOADING_MODULES: [AUTH, DB, CRYPTO]...",
  "BYPASSING_FIREWALL...",
  "ESTABLISHING_SECURE_UPLINK...",
  "ACCESS_GRANTED.",
];

// Heavy mechanical easing - starts slow, accelerates, then slams open
const gateEasing = [0.6, 0.05, -0.01, 0.9];

export const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [contentFaded, setContentFaded] = useState(false);
  const [gatesOpen, setGatesOpen] = useState(false);

  useEffect(() => {
    let delay = 0;

    BOOT_LOGS.forEach((log, index) => {
      delay += Math.random() * 200 + 300;
      setTimeout(() => {
        setLogs((prev) => [...prev, log]);
        // Auto-trigger exit sequence after last log
        if (index === BOOT_LOGS.length - 1) {
          // Step 1: Fade content first
          setTimeout(() => {
            setContentFaded(true);
            // Step 2: Open gates after content fades
            setTimeout(() => {
              setGatesOpen(true);
            }, 300);
          }, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Left Gate Panel */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-black z-20"
        initial={{ x: "0%" }}
        animate={{ x: gatesOpen ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: gateEasing }}
        onAnimationComplete={() => {
          if (gatesOpen) onLoadingComplete();
        }}
      />

      {/* Right Gate Panel */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-black z-20"
        initial={{ x: "0%" }}
        animate={{ x: gatesOpen ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: gateEasing }}
      />

      {/* Content Wrapper - Terminal Logs (Higher z-index, centered) */}
      <motion.div
        className="absolute inset-0 z-30 flex flex-col justify-end p-8 md:p-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: contentFaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logs */}
        <div className="max-w-2xl w-full mx-auto space-y-2 mb-12">
          {logs.map((log, i) => (
            <div
              key={i}
              className="text-sm md:text-base tracking-wider text-green-500 font-mono"
            >
              <span className="text-gray-500 mr-2">{`[${new Date().toLocaleTimeString()}]`}</span>
              {">"} {log}
            </div>
          ))}
          {!contentFaded && (
            <div className="w-3 h-5 bg-green-500 animate-pulse inline-block ml-2"></div>
          )}
        </div>

        {/* Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
      </motion.div>
    </div>
  );
};
