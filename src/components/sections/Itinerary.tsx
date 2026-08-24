"use client";

import { motion } from "framer-motion";

const days = [
  {
    date: "DAY 01 // SEP 2",
    title: "THE KICK-OFF",
    events: [
      { time: "07:30 AM", desc: "Gathering at Menara Zurich" },
      { time: "08:30 AM", desc: "Departure by Bus" },
      { time: "02:30 PM", desc: "Arrival at Camp Venue" },
      { time: "02:30 PM", desc: "Welcome & Camp Kick-Off" },
      { time: "03:00 PM", desc: "Icebreaker" },
      { time: "04:00 PM", desc: "Room Check-In & Squad Up" },
      { time: "05:00 PM", desc: "Chill Time" },
      { time: "06:00 PM", desc: "Dinner" },
      { time: "07:00 PM", desc: "Session 1" },
      { time: "09:30 PM", desc: "Supper & Late-Night Vibes" },
      { time: "10:30 PM", desc: "Recharge & Lights Out" },
    ]
  },
  {
    date: "DAY 02 // SEP 3",
    title: "MAIN CHARACTER",
    events: [
      { time: "07:30 AM", desc: "Devotion" },
      { time: "08:00 AM", desc: "Breakfast" },
      { time: "09:00 AM", desc: "Session 2" },
      { time: "12:00 PM", desc: "Lunch" },
      { time: "01:00 PM", desc: "Outfit Change" },
      { time: "01:30 PM", desc: "Team Games & Activities" },
      { time: "05:00 PM", desc: "Chill Time" },
      { time: "06:30 PM", desc: "Dinner" },
      { time: "07:30 PM", desc: "Encounter Night" },
      { time: "09:30 PM", desc: "Campfire Vibes" },
      { time: "LATE", desc: "Recharge & Lights Out" },
    ]
  },
  {
    date: "DAY 03 // SEP 4",
    title: "THE SEND-OFF",
    events: [
      { time: "07:30 AM", desc: "Devotion & Zumba" },
      { time: "08:00 AM", desc: "Breakfast" },
      { time: "09:00 AM", desc: "Impartation" },
      { time: "12:00 PM", desc: "Lunch" },
      { time: "01:00 PM", desc: "Pack Up & Head Home" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export function Itinerary() {
  return (
    <section id="itinerary" className="py-24 bg-black text-white px-6 border-t border-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase mb-4 text-zinc-100">Itinerary</h2>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">Three days of worship, fellowship, and encountering God.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
          {days.map((day, i) => (
            <motion.div 
              key={i}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col relative"
            >
              <div className="mb-10 border-b border-zinc-800/80 pb-6">
                <span className="text-primary-500 font-mono tracking-[0.2em] uppercase text-xs mb-4 block">
                  {day.date}
                </span>
                <h3 className="text-2xl lg:text-3xl font-light tracking-widest uppercase text-white">{day.title}</h3>
              </div>
              
              <div className="space-y-8 relative">
                {day.events.map((event, j) => (
                  <motion.div key={j} variants={itemVariants} className="flex gap-6 group">
                    <span className="text-zinc-500 font-mono tracking-wider w-20 shrink-0 text-xs mt-1 uppercase group-hover:text-primary-400 transition-colors">
                      {event.time}
                    </span>
                    <p className="text-zinc-300 font-light text-sm tracking-wide leading-relaxed group-hover:text-white transition-colors">
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
