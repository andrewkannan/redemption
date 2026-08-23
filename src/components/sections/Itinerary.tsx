"use client";

import { motion } from "framer-motion";

const days = [
  {
    date: "Day 1 — 2 Sept",
    title: "THE KICK-OFF 🚀",
    events: [
      { time: "7:30 AM", desc: "📍 Gathering at Menara Zurich" },
      { time: "8:30 AM", desc: "🚌 We’re Off! — Departure by Bus" },
      { time: "2:30 PM", desc: "🏕️ We’re Here! — Arrival at Camp Venue" },
      { time: "2:30 PM", desc: "🎉 Welcome & Camp Kick-Off" },
      { time: "3:00 PM", desc: "👋 Icebreaker" },
      { time: "4:00 PM", desc: "🏠 Room Check-In & Squad Up" },
      { time: "5:00 PM", desc: "✨ Chill Time" },
      { time: "6:00 PM", desc: "🍽️ Dinner" },
      { time: "7:00 PM", desc: "🔥 Session 1" },
      { time: "9:30 PM", desc: "🍪 Supper & Late-Night Vibes" },
      { time: "10:30 PM", desc: "😴 Recharge & Lights Out" },
    ]
  },
  {
    date: "Day 2 — 3 Sept",
    title: "THE MAIN CHARACTER DAY 🔥",
    events: [
      { time: "7:30 AM", desc: "🙏 Devotion — Start the Day Right" },
      { time: "8:00 AM", desc: "🍳 Breakfast" },
      { time: "9:00 AM", desc: "🔥 Session 2" },
      { time: "12:00 PM", desc: "🍽️ Lunch" },
      { time: "1:00 PM", desc: "👕 Outfit Change — Get Ready!" },
      { time: "1:30 PM", desc: "🎮 GAME ON! — Team Games & Activities" },
      { time: "5:00 PM", desc: "✨ Chill Time" },
      { time: "6:30 PM", desc: "🍽️ Dinner" },
      { time: "7:30 PM", desc: "🕊️ ENCOUNTER NIGHT" },
      { time: "9:30 PM", desc: "🔥 Campfire Vibes" },
      { time: "After", desc: "😴 Recharge & Lights Out" },
    ]
  },
  {
    date: "Day 3 — 4 Sept",
    title: "THE SEND-OFF ✨",
    events: [
      { time: "7:30 AM", desc: "🙏💃 Devotion + Zumba" },
      { time: "8:00 AM", desc: "🍳 Breakfast" },
      { time: "9:00 AM", desc: "✨ Impartation" },
      { time: "12:00 PM", desc: "🍽️ Lunch" },
      { time: "1:00 PM", desc: "🚌 Pack Up & Head Home" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export function Itinerary() {
  return (
    <section id="itinerary" className="py-24 bg-zinc-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Camp Itinerary</h2>
          <p className="text-zinc-400 text-lg">Three days of worship, fellowship, and encountering God.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {days.map((day, i) => (
            <motion.div 
              key={i}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:bg-zinc-900 transition-colors"
            >
              <div className="mb-8 border-b border-zinc-800 pb-6">
                <span className="text-primary-500 font-bold tracking-wider uppercase text-sm mb-2 block">
                  {day.date}
                </span>
                <h3 className="text-2xl font-semibold">{day.title}</h3>
              </div>
              
              <div className="space-y-6">
                {day.events.map((event, j) => (
                  <motion.div key={j} variants={itemVariants} className="flex gap-4">
                    <span className="text-zinc-500 font-medium whitespace-nowrap w-16 text-sm mt-0.5">
                      {event.time}
                    </span>
                    <p className="text-zinc-300">
                      {event.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
