"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 md:px-6">
      {/* Cinematic Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ 
          scale: { duration: 8, ease: "linear" },
          opacity: { duration: 1.5, ease: "easeInOut" }
        }}
        className="absolute inset-0 w-full h-full -z-20"
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-80" />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl w-full flex flex-col items-center mt-12">
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "10px", y: 20 }}
          animate={{ opacity: 1, letterSpacing: "4px", y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="text-zinc-300 uppercase text-xs md:text-sm font-bold tracking-[0.3em] mb-4 md:mb-6"
        >
          REFLECT PRESENTS
        </motion.h2>

        {/* REDEMPTION Text Reveal */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ delay: 1.5, duration: 2.5, ease: "easeOut" }}
          className="flex flex-col items-center mb-8 md:mb-12 w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600 drop-shadow-[0_0_50px_rgba(255,255,255,0.6)]">
            Redemption
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="bg-black/30 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8 mx-4 max-w-2xl w-full shadow-2xl"
        >
          <p className="text-lg md:text-xl text-white/90 italic font-light mb-4 drop-shadow-md">
            "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace."
          </p>
          <p className="text-zinc-400 font-semibold tracking-wider text-sm md:text-base">— Ephesians 1:7</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex flex-col items-center justify-center gap-2 md:gap-4"
        >
          <div className="flex items-center gap-2 text-xl md:text-2xl font-bold tracking-widest uppercase text-white/90">
            2 — 4 SEPTEMBER
          </div>
          <div className="text-sm md:text-base tracking-[0.2em] text-zinc-400 uppercase mt-2 font-medium text-center px-4">
            Gather • Connect • Encounter • Grow
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 4, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10"
      >
        <a href="#itinerary" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10" />
        </a>
      </motion.div>
    </section>
  );
}
