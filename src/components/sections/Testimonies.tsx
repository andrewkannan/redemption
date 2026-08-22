"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockTestimonies = [
  {
    id: 1,
    name: "Sarah J.",
    content: "The worship sessions completely changed my perspective on grace. I felt God's presence in such a tangible way.",
    tag: "Worship"
  },
  {
    id: 2,
    name: "Michael T.",
    content: "I came to this camp feeling lost and burdened. I'm leaving with a renewed sense of purpose and forgiveness.",
    tag: "Freedom"
  },
  {
    id: 3,
    name: "Emily R.",
    content: "Connecting with other youth who share the same fire for God was exactly what I needed this year.",
    tag: "Community"
  },
  {
    id: 4,
    name: "David K.",
    content: "Ephesians 1:7 is now my life verse. Understanding the true cost and gift of redemption blew my mind.",
    tag: "Revelation"
  }
];

export function Testimonies() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="testimonies" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Testimonies</h2>
            <p className="text-zinc-400 text-lg">Stories of grace, forgiveness, and redemption.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-600 hover:bg-primary-500 text-white rounded-full px-6 py-6 gap-2"
            >
              <MessageSquarePlus className="w-5 h-5" />
              Share Your Story
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTestimonies.map((testimony, i) => (
            <motion.div
              key={testimony.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/50 flex flex-col justify-between"
            >
              <p className="text-zinc-300 text-lg mb-6 leading-relaxed italic">
                "{testimony.content}"
              </p>
              <div>
                <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium mb-3">
                  {testimony.tag}
                </span>
                <p className="text-white font-semibold">{testimony.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl w-full max-w-md relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-6">Share Your Testimony</h3>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Your Story</label>
                  <textarea 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors h-32 resize-none"
                    placeholder="How did God move during the camp?"
                    required
                  />
                </div>
                <Button type="submit" className="w-full rounded-xl py-6 bg-white text-black hover:bg-zinc-200 text-base font-semibold mt-4">
                  Submit Testimony
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
