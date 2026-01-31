import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CyberGateProps {
  onUnlock: () => void;
}

export const CyberGate: React.FC<CyberGateProps> = ({ onUnlock }) => {
  const [isLocked, setIsLocked] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Initial "System Boot" sequence
    const bootTimer = setTimeout(() => {
      setIsLoading(false); // Stop loader spin
    }, 2000);

    // 2. Unlock Mechanism
    const unlockTimer = setTimeout(() => {
      setIsLocked(false); // Panels slide open
      // 3. Trigger content reveal callback slightly before gates fully open
      setTimeout(onUnlock, 200);
    }, 2500);

    return () => {
      clearTimeout(bootTimer);
      clearTimeout(unlockTimer);
    };
  }, [onUnlock]);

  // CSS for standard transitions (High Performance)
  // Left Panel: -tx-full when unlocked
  // Right Panel: tx-full when unlocked
  const gateClass =
    "fixed top-0 bottom-0 w-[50.5%] h-full bg-black z-[9999] transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform";

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Left Gate */}
      <div
        className={`${gateClass} left-0 border-r border-primary/20 ${!isLocked ? "-translate-x-full" : "translate-x-0"}`}
      >
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-10 left-10 text-[10px] font-mono text-primary/40">
          GATE_ID: NOCTIS_01 <br /> STATUS: {isLocked ? "LOCKED" : "OPEN"}
        </div>
      </div>

      {/* Right Gate */}
      <div
        className={`${gateClass} right-0 border-l border-primary/20 ${!isLocked ? "translate-x-full" : "translate-x-0"}`}
      >
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 text-[10px] text-right font-mono text-primary/40">
          SECURE_CONNECTION <br /> ENCRYPTED
        </div>
      </div>

      {/* Center Lock Mechanism */}
      {isLocked && (
        <div
          className={`fixed inset-0 z-[10000] flex items-center justify-center transition-opacity duration-300 ${!isLocked ? "opacity-0" : "opacity-100"}`}
        >
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Spinner Ring */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/30 border-t-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner Lock Icon */}
            <div
              className={`text-primary transition-colors duration-300 ${isLoading ? "text-primary" : "text-green-400"}`}
            >
              <span className="material-symbols-outlined text-4xl">
                {isLoading ? "lock" : "lock_open"}
              </span>
            </div>

            {/* System Text */}
            <div className="absolute top-full mt-4 text-center">
              <p className="text-[10px] font-mono text-primary tracking-widest animate-pulse">
                {isLoading ? "SYSTEM_BOOT" : "ACCESS_GRANTED"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
