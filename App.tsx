import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Preloader } from "./components/Preloader";
import { CyberBackground } from "./components/ui/CyberBackground";
import { Smooth } from "./src/utils/SmoothScroll";

// Premium easing to match shutter animation
const contentEase = [0.76, 0, 0.24, 1];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll after loading completes
  useEffect(() => {
    if (!isLoading) {
      const scroll = new Smooth();
      return () => scroll.destroy();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}

      <motion.div
        initial={{ scale: 1.05 }}
        animate={isLoading ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 1.2, ease: contentEase }}
        className={
          isLoading ? "opacity-0" : "opacity-100 fixed inset-0 overflow-hidden"
        }
        data-scroll
      >
        <div data-scroll-content>
          <CyberBackground />
          <Header />
          <main className="pt-16">
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default App;
