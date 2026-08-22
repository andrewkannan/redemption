"use client";

import { motion } from "framer-motion";
import { Camera as CameraIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Camera() {
  return (
    <section id="camera" className="py-24 bg-zinc-950 text-white px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary-900/30 to-black border border-primary-500/20 p-12 rounded-[3rem] relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-500/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center mb-6 border border-primary-500/30">
              <CameraIcon className="w-10 h-10 text-primary-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Capture the Moment</h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
              Document your journey and share the memories we make together at Redemption.
            </p>
            
            <a 
              href="https://captured.thisiscccbilingual.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-6 text-lg font-semibold group flex items-center gap-2">
                Open Camera App
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
