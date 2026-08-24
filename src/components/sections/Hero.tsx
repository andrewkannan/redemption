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

        {/* REDEMPTION Logo Reveal */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ delay: 1.5, duration: 2.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center -mt-8 -mb-8 md:-mt-16 md:-mb-16 w-full mix-blend-screen relative z-10"
        >
          {/* Cinematic Glow Layer */}
          <div 
            className="absolute w-80 h-80 md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] opacity-80 blur-3xl pointer-events-none"
            style={{ filter: "contrast(200%) invert(1)" }}
          >
            <Image 
              src="/logo.jpg"
              alt="Glow"
              fill
              className="object-contain scale-125 md:scale-110"
            />
          </div>

          {/* Sharp Sharp Layer */}
          <div 
            className="relative w-80 h-80 md:w-[32rem] md:h-[32rem] lg:w-[40rem] lg:h-[40rem] opacity-100"
            style={{ filter: "contrast(200%) invert(1)" }}
          >
            <Image 
              src="/logo.jpg"
              alt="Redemption Logo"
              fill
              priority
              quality={100}
              className="object-contain scale-125 md:scale-110"
            />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="flex flex-col items-center justify-center gap-4 md:gap-6 w-full max-w-3xl mx-4 mb-12"
        >
          <div className="flex items-center gap-3 text-xl md:text-3xl font-light tracking-[0.25em] uppercase text-white/90">
            2 <span className="text-primary-500/60 font-mono">—</span> 4 SEPTEMBER 2026
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs tracking-[0.4em] text-zinc-500 uppercase">
            <span>Gather</span>
            <span className="text-primary-500/50 hidden md:inline">•</span>
            <span>Connect</span>
            <span className="text-primary-500/50 hidden md:inline">•</span>
            <span>Encounter</span>
            <span className="text-primary-500/50 hidden md:inline">•</span>
            <span>Grow</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="border border-zinc-800/80 bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-10 mx-4 max-w-3xl w-full relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <p className="text-lg md:text-2xl text-zinc-300 italic font-light leading-relaxed mb-6 relative z-10 text-center px-4">
            "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace."
          </p>
          <div className="flex items-center justify-center gap-4 relative z-10">
            <div className="h-[1px] w-8 bg-primary-500/50" />
            <p className="text-zinc-500 font-mono tracking-[0.2em] uppercase text-xs md:text-sm">Ephesians 1:7</p>
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
