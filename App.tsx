import React, { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CyberGate } from "./components/CyberGate";
import { CyberBackground } from "./components/ui/CyberBackground";

// Premium easing to match shutter animation
const contentEase = [0.76, 0, 0.24, 1];

function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);

  return (
    <>
      <CyberGate onUnlock={() => setIsGateOpen(true)} />

      <motion.div
        initial={{ scale: 1.05 }}
        animate={!isGateOpen ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 1.2, ease: contentEase }}
        className="min-h-screen bg-black"
      >
        <CyberBackground />
        <Header />
        <main className="pt-16 relative z-10 transition-opacity duration-1000">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
