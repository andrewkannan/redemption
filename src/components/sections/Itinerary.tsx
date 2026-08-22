"use client";

import { motion } from "framer-motion";

const days = [
  {
    date: "Sept 2",
    title: "The Gathering",
    events: [
      { time: "4:00 PM", desc: "Arrival & Registration" },
      { time: "6:00 PM", desc: "Welcome Dinner & Icebreakers" },
      { time: "8:00 PM", desc: "Opening Session: The Blood" },
      { time: "10:00 PM", desc: "Campfire & Late Night Worship" },
    ]
  },
  {
    date: "Sept 3",
    title: "The Forgiveness",
    events: [
      { time: "8:00 AM", desc: "Breakfast" },
      { time: "9:30 AM", desc: "Morning Devotion & Group Prayer" },
      { time: "11:00 AM", desc: "Workshop: Riches of His Grace" },
      { time: "1:00 PM", desc: "Lunch" },
      { time: "3:00 PM", desc: "Team Games & Outdoor Activities" },
      { time: "7:00 PM", desc: "Dinner" },
      { time: "8:30 PM", desc: "Evening Revival Session" },
    ]
  },
  {
    date: "Sept 4",
    title: "The Commission",
    events: [
      { time: "8:30 AM", desc: "Breakfast" },
      { time: "10:00 AM", desc: "Closing Session & Testimonies" },
      { time: "12:00 PM", desc: "Farewell Lunch" },
      { time: "2:00 PM", desc: "Departure" },
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
