"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-6">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900/40 via-black to-black -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-4xl"
      >
        <motion.h2 
          initial={{ opacity: 0, letterSpacing: "10px" }}
          animate={{ opacity: 1, letterSpacing: "4px" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-primary-400 uppercase text-sm font-bold tracking-widest mb-4"
        >
          Reflect Presents
        </motion.h2>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/40">
          REDEMPTION
        </h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-8"
        >
          <p className="text-lg md:text-xl text-white/80 italic font-light mb-4">
            "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God's grace."
          </p>
          <p className="text-primary-300 font-semibold">— Ephesians 1:7</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-xl font-medium">
            <span className="text-white">September</span>
            <span className="text-primary-500 font-bold">2 - 4</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30" />
          <Button className="rounded-full px-8 py-6 text-base font-semibold bg-white text-black hover:bg-gray-200">
            Join the Experience
          </Button>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <a href="#itinerary" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  );
}
