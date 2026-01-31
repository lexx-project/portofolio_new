import { motion } from "framer-motion";

export const CyberBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      {/* 1. Base Grid (Lightweight CSS) */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.03) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* 2. Moving Scanline (Single element, high performance) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        style={{ height: "200%" }}
        animate={{ y: ["-50%", "0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* 3. Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)]" />
    </div>
  );
};
