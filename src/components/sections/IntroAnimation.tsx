"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the animation after 2.8 seconds
    const timer = setTimeout(() => setShow(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.6 } }}
        >
          {/* Top Panel (sweeps up) */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-black border-b border-primary-500/20"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          />
          {/* Bottom Panel (sweeps down) */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black border-t border-primary-500/20"
            initial={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          />
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: [0.5, 1.2, 1], opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="relative z-10 text-center flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-4 ml-4">
              Reflect
            </h1>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
              className="h-1 bg-primary-500/80 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
