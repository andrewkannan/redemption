"use client";

import { motion } from "framer-motion";
import { Camera as CameraIcon, ArrowRight } from "lucide-react";

export function Camera() {
  return (
    <section id="camera" className="py-24 bg-black text-white px-6 border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4 text-zinc-100">Capture the Redemption</h2>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">Document your journey and share the memories.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full relative p-4 md:p-8"
        >
          {/* Viewfinder corner brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 md:w-16 md:h-16 border-t border-l border-zinc-700 opacity-50" />
          <div className="absolute top-0 right-0 w-8 h-8 md:w-16 md:h-16 border-t border-r border-zinc-700 opacity-50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 md:w-16 md:h-16 border-b border-l border-zinc-700 opacity-50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 md:w-16 md:h-16 border-b border-r border-zinc-700 opacity-50" />
          
          {/* Center crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 opacity-20 pointer-events-none hidden md:block">
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-400" />
             <div className="absolute top-0 left-1/2 w-[1px] h-full bg-zinc-400" />
          </div>

          <a 
            href="https://captured.thisiscccbilingual.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-16 md:p-24 border border-zinc-800/50 hover:border-primary-500/30 transition-all duration-700 bg-zinc-900/10 relative overflow-hidden"
          >
            {/* Continuous Scanner line animation */}
            <motion.div 
              animate={{ y: ["-100%", "800%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[1px] bg-primary-500/30 shadow-[0_0_15px_rgba(255,255,255,0.3)] opacity-50"
            />
            
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-primary-500/30 flex items-center justify-center mb-6 md:mb-8 transition-all duration-500 text-primary-400 bg-primary-500/5 backdrop-blur-sm relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:bg-primary-500/10">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CameraIcon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
              </motion.div>
            </div>
            
            <div className="flex items-center gap-4 text-white text-xs md:text-sm font-light tracking-[0.2em] md:tracking-[0.3em] uppercase relative z-10">
              <span>Open Camera App</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary-500" strokeWidth={1.5} />
              </motion.div>
            </div>
            
            {/* REC indicator always visible */}
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
              <span className="text-red-500 font-mono text-[10px] tracking-widest uppercase">REC</span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
