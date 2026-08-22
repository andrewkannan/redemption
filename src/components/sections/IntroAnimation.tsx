"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HelpingHand } from "lucide-react";

export function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the animation after 4 seconds to allow the full cinematic sequence
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none bg-black"
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          {/* Top Panel (sweeps up) */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-black border-b border-primary-500/20"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          />
          {/* Bottom Panel (sweeps down) */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black border-t border-primary-500/20"
            initial={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
          />

          {/* The Mess & The Hand Sequence */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            {/* The Mess (Chaotic Dark Elements) */}
            <motion.div
              initial={{ opacity: 1, y: 50, scale: 1 }}
              animate={{ opacity: 0, y: 150, scale: 0.5 }}
              transition={{ delay: 1.5, duration: 1, ease: "easeIn" }}
              className="absolute flex items-center justify-center"
            >
              <div className="w-64 h-64 bg-zinc-900 rounded-full blur-3xl absolute animate-pulse" />
              <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-50 animate-spin-slow">
                <path d="M 10 100 Q 50 10 100 100 T 190 100" stroke="black" strokeWidth="8" fill="transparent" />
                <path d="M 10 50 Q 100 190 190 50" stroke="#111" strokeWidth="12" fill="transparent" />
                <path d="M 50 10 Q 190 100 50 190" stroke="#222" strokeWidth="10" fill="transparent" />
              </svg>
            </motion.div>

            {/* The Shadow Hand Pulling Up */}
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: [0, 1, 1, 0], y: [-50, 20, -50, -100], scale: [0.8, 1.2, 1.2, 1.5] }}
              transition={{ duration: 3, times: [0, 0.3, 0.6, 1], ease: "easeInOut" }}
              className="absolute z-20 flex flex-col items-center justify-center text-black drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            >
              <HelpingHand className="w-32 h-32 md:w-48 md:h-48" strokeWidth={1} />
            </motion.div>
          </div>
          
          {/* REDEMPTION Text Reveal */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: [0.5, 1.1, 1], opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 1.5, opacity: 0, filter: "blur(10px)" }}
            transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
            className="relative z-30 text-center flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-zinc-600 mb-4 ml-4">
              Redemption
            </h1>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8, ease: "circOut" }}
              className="h-1 bg-primary-500/80 shadow-[0_0_30px_rgba(59,130,246,1)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
