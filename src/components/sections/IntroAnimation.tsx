"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Cinematic intro lasts for 5.5 seconds to make a deep impact
    const timer = setTimeout(() => setShow(false), 5500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black pointer-events-none"
          exit={{ opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
        >
          {/* Cinematic Background Image with Ken Burns Effect */}
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.05, opacity: 1 }}
            transition={{ 
              scale: { duration: 6, ease: "linear" },
              opacity: { duration: 1.5, ease: "easeInOut" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/cinematic-hand-mobile.jpg"
              alt="Hand of the Lord"
              fill
              priority
              quality={90}
              className="object-cover object-center"
            />
            {/* Dramatic Vignette / Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-80" />
          </motion.div>

          {/* REDEMPTION Text Reveal */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ delay: 2, duration: 2.5, ease: "easeOut" }}
            className="relative z-30 text-center flex flex-col items-center px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600 mb-6 drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]">
              Redemption
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
