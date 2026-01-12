import { motion } from "framer-motion";
import { getEventsByCategory, festivalDate } from "@/data/events";
import EventCard from "@/components/events/EventCard";
import { useCart } from "@/context/CartContext";
import CountdownTimer from "@/components/countdown/CountdownTimer";
import { Music, Sparkles, Mic } from "lucide-react";

const CulturalPage = () => {
  const { visitedEvents } = useCart();
  const culturalEvents = getEventsByCategory("cultural");

  // Group events by actual dates (March 11, 12, 13, 14)
  const day1Events = culturalEvents.filter(e => e.date.includes("March 11"));
  const day2Events = culturalEvents.filter(e => e.date.includes("March 12"));
  const day3Events = culturalEvents.filter(e => e.date.includes("March 13") && !e.date.includes("March 13-14"));
  const day4Events = culturalEvents.filter(e => e.date.includes("March 14") || e.date.includes("March 13-14"));

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      {/* Hero */}
      <section 
        className="max-w-7xl mx-auto mb-16 text-center relative overflow-hidden rounded-3xl py-16 px-8"
        style={{
          background: "linear-gradient(135deg, rgba(0, 180, 216, 0.2) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 212, 255, 0.1) 100%)",
          border: "1px solid rgba(0, 212, 255, 0.2)",
        }}
      >
        {/* Floating icons */}
        <motion.div
          className="absolute top-10 left-10 text-primary/30"
          animate={{ rotate: 360, y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Music size={48} />
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-primary/30"
          animate={{ rotate: -360, y: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <Mic size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/4 text-primary/30"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Sparkles size={36} />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-festival font-black text-gradient-gold mb-4 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Cultural Events
        </motion.h1>
        <motion.p
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Dance, music, drama, and artistic expressions that celebrate our rich cultural heritage
        </motion.p>

        <CountdownTimer targetDate={festivalDate} compact />
      </section>

      {/* Day 1 */}
      {day1Events.length > 0 && (
        <section className="max-w-7xl mx-auto mb-12">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="px-4 py-2 rounded-full font-display font-bold"
              style={{
                background: "linear-gradient(90deg, #00b4d8, #00d4ff)",
                color: "#000",
              }}
            >
              DAY 1
            </div>
            <span className="text-muted-foreground">March 11, 2026</span>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day1Events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                isVisited={visitedEvents.includes(event.id)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Day 2 */}
      {day2Events.length > 0 && (
        <section className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="px-4 py-2 rounded-full font-display font-bold"
              style={{
                background: "linear-gradient(90deg, #00d4ff, #00b4d8)",
                color: "#000",
              }}
            >
              DAY 2
            </div>
            <span className="text-muted-foreground">March 12, 2026</span>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day2Events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                isVisited={visitedEvents.includes(event.id)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Day 3 */}
      {day3Events.length > 0 && (
        <section className="max-w-7xl mx-auto mb-12">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="px-4 py-2 rounded-full font-display font-bold"
              style={{
                background: "linear-gradient(90deg, #00b4d8, #00d4ff)",
                color: "#000",
              }}
            >
              DAY 3
            </div>
            <span className="text-muted-foreground">March 13, 2026</span>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day3Events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                isVisited={visitedEvents.includes(event.id)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Day 4 */}
      {day4Events.length > 0 && (
        <section className="max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="px-4 py-2 rounded-full font-display font-bold"
              style={{
                background: "linear-gradient(90deg, #00d4ff, #00b4d8)",
                color: "#000",
              }}
            >
              DAY 4
            </div>
            <span className="text-muted-foreground">March 14, 2026</span>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {day4Events.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                isVisited={visitedEvents.includes(event.id)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CulturalPage;