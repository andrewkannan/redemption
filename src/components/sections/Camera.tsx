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
          className="w-full"
        >
          <a 
            href="https://captured.thisiscccbilingual.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-12 border border-zinc-800/80 hover:border-primary-500/50 transition-colors bg-zinc-900/10"
          >
            <div className="w-16 h-16 rounded-full border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-primary-500/50 group-hover:text-primary-400 transition-colors text-zinc-400">
              <CameraIcon className="w-6 h-6" strokeWidth={1.5} />
            </div>
            
            <div className="flex items-center gap-4 text-white text-sm md:text-lg font-light tracking-[0.2em] uppercase">
              <span>Open Camera App</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-primary-500" strokeWidth={1.5} />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
