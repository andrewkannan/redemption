"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus, X, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createTestimony, deleteTestimony } from "@/app/actions/testimonies";

type Testimony = {
  id: string;
  name: string;
  content: string;
  tag: string;
  createdAt: Date;
};

export function Testimonies({ initialTestimonies }: { initialTestimonies: Testimony[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const clickCount = useRef(0);

  function handleTitleClick() {
    clickCount.current += 1;
    if (clickCount.current >= 5) {
      setIsAdmin(true);
      clickCount.current = 0; // reset
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this testimony?")) return;
    const result = await deleteTestimony(id);
    if (!result.success) {
      alert("Failed to delete testimony");
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await createTestimony(formData);
    
    setIsSubmitting(false);
    if (result.success) {
      setIsModalOpen(false);
    } else {
      alert("Failed to submit testimony");
    }
  }

  return (
    <section id="testimonies" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-6xl font-bold mb-4 select-none cursor-default"
              onClick={handleTitleClick}
            >
              Testimonies
            </h2>
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
          {initialTestimonies.length === 0 ? (
            <p className="text-zinc-500 col-span-full">No testimonies yet. Be the first to share!</p>
          ) : (
            initialTestimonies.map((testimony, i) => (
              <motion.div
                key={testimony.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-zinc-900/40 p-6 rounded-3xl border border-zinc-800/50 flex flex-col justify-between relative group"
              >
                {isAdmin && (
                  <button
                    onClick={() => handleDelete(testimony.id)}
                    className="absolute top-4 right-4 p-2 bg-red-500/10 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white z-10"
                    title="Delete Testimony"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <p className={`text-zinc-300 text-lg mb-6 leading-relaxed italic ${isAdmin ? 'mt-2' : ''}`}>
                  "{testimony.content}"
                </p>
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs font-medium mb-3">
                    {testimony.tag}
                  </span>
                  <p className="text-white font-semibold">{testimony.name}</p>
                </div>
              </motion.div>
            ))
          )}
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
                disabled={isSubmitting}
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-6">Share Your Testimony</h3>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Topic/Tag</label>
                  <select 
                    name="tag"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                    required
                    disabled={isSubmitting}
                  >
                    <option value="Worship">Worship</option>
                    <option value="Freedom">Freedom</option>
                    <option value="Community">Community</option>
                    <option value="Revelation">Revelation</option>
                    <option value="Healing">Healing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Your Story</label>
                  <textarea 
                    name="content"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors h-32 resize-none"
                    placeholder="How did God move during the camp?"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full rounded-xl py-6 bg-white text-black hover:bg-zinc-200 text-base font-semibold mt-4">
                  {isSubmitting ? "Submitting..." : "Submit Testimony"}
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
