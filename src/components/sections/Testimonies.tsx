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
    <section id="testimonies" className="py-24 bg-black text-white px-6 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4 text-zinc-100 select-none cursor-default"
            onClick={handleTitleClick}
          >
            Testimonies
          </h2>
          <p className="text-zinc-500 text-sm tracking-widest uppercase mb-10">Stories of grace, forgiveness, and redemption.</p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center justify-center gap-3 mx-auto text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1"
          >
            <MessageSquarePlus className="w-4 h-4" strokeWidth={1.5} />
            Share Your Story
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {initialTestimonies.length === 0 ? (
            <p className="text-zinc-500 col-span-full text-center font-light tracking-widest uppercase text-sm mt-10">No testimonies yet. Be the first to share.</p>
          ) : (
            initialTestimonies.map((testimony, i) => (
              <motion.div
                key={testimony.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col relative group overflow-hidden p-2"
              >
                {/* Decorative Quote Mark */}
                <div className="absolute -top-10 -left-6 text-[12rem] font-serif text-zinc-800/10 leading-none select-none pointer-events-none group-hover:text-primary-500/5 transition-colors duration-500">
                  "
                </div>

                {isAdmin && (
                  <button
                    onClick={() => handleDelete(testimony.id)}
                    className="absolute -top-2 -right-2 p-2 text-red-500 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all hover:text-red-400 z-20"
                    title="Delete Testimony"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                )}
                
                <div className="mb-6 border-b border-zinc-800/80 pb-6 flex-1 relative z-10">
                  <span className="text-primary-500 font-mono tracking-[0.2em] uppercase text-[10px] mb-4 block group-hover:tracking-[0.25em] transition-all duration-300">
                    {testimony.tag}
                  </span>
                  <p className={`text-zinc-300 font-light text-sm tracking-wide leading-relaxed italic group-hover:text-white transition-colors duration-300 ${isAdmin ? 'mt-2' : ''}`}>
                    "{testimony.content}"
                  </p>
                </div>
                
                <p className="text-white font-light tracking-widest uppercase text-xs relative z-10 group-hover:translate-x-1 transition-transform duration-300">{testimony.name}</p>
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 w-full max-w-md relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
                disabled={isSubmitting}
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
              
              <h3 className="text-xl font-light tracking-[0.2em] uppercase mb-8 text-center text-zinc-100">Share Your Story</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-zinc-500 mb-2">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    className="w-full bg-transparent border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-primary-500 transition-colors font-light text-sm"
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-zinc-500 mb-2">Topic</label>
                  <select 
                    name="tag"
                    className="w-full bg-zinc-950 border-b border-zinc-800 py-2 text-white focus:outline-none focus:border-primary-500 transition-colors font-light text-sm appearance-none"
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
                  <label className="block text-xs font-mono tracking-widest uppercase text-zinc-500 mb-2">Your Story</label>
                  <textarea 
                    name="content"
                    className="w-full bg-transparent border border-zinc-800 p-4 text-white focus:outline-none focus:border-primary-500 transition-colors h-32 resize-none font-light text-sm"
                    placeholder="How did God move during the camp?"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full py-4 bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-bold tracking-[0.2em] uppercase mt-4"
                >
                  {isSubmitting ? "Submitting..." : "Submit Testimony"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
