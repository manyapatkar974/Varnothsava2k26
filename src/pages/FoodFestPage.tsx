import { motion } from "framer-motion";
import { getEventsByCategory, festivalDate } from "@/data/events";
import EventCard from "@/components/events/EventCard";
import { useCart } from "@/context/CartContext";
import CountdownTimer from "@/components/countdown/CountdownTimer";
import { Utensils, ChefHat, Flame, Coffee, Pizza, IceCream } from "lucide-react";

const FoodFestPage = () => {
  const { visitedEvents } = useCart();
  const foodEvents = getEventsByCategory("food");

  const stalls = [
    { name: "South Indian", icon: Coffee, specialty: "Dosa, Idli, Vada" },
    { name: "North Indian", icon: Flame, specialty: "Pav Bhaji, Chole" },
    { name: "Chinese", icon: Utensils, specialty: "Noodles, Manchurian" },
    { name: "Italian", icon: Pizza, specialty: "Pizza, Pasta" },
    { name: "Desserts", icon: IceCream, specialty: "Ice cream, Cakes" },
    { name: "Beverages", icon: Coffee, specialty: "Mocktails, Shakes" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero */}
      <section 
        className="relative py-24 px-6 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(255, 165, 0, 0.15) 0%, rgba(0, 0, 0, 0.95) 100%)",
        }}
      >
        {/* Floating food animations */}
        {["🍕", "🍔", "🌮", "🍜", "🍰", "🍦"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.random() * 50}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [-10, 10, -10],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {emoji}
          </motion.div>
        ))}

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255, 165, 0, 0.2)",
              border: "1px solid rgba(255, 165, 0, 0.4)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <ChefHat size={20} className="text-accent" />
            <span className="text-accent font-semibold">Culinary Extravaganza</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-festival font-black mb-4"
            style={{
              background: "linear-gradient(135deg, #ffa500 0%, #ff6347 50%, #ffd700 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 30px rgba(255, 165, 0, 0.5))",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Food Fest
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A journey through flavors from around the world
          </motion.p>

          <CountdownTimer targetDate={festivalDate} compact />
        </div>
      </section>

      {/* Stalls */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-festival font-bold text-center text-gradient-gold mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Food Stalls
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stalls.map((stall, index) => (
              <motion.div
                key={stall.name}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 165, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)",
                  border: "1px solid rgba(255, 165, 0, 0.2)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 165, 0, 0.5)" }}
              >
                <stall.icon size={36} className="text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-1">{stall.name}</h3>
                <p className="text-sm text-muted-foreground">{stall.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-6" style={{ background: "rgba(255, 165, 0, 0.05)" }}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-festival font-bold text-center text-gradient-gold mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Food Events
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {foodEvents.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                isVisited={visitedEvents.includes(event.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="p-8 rounded-3xl"
            style={{
              background: "rgba(20, 20, 20, 0.9)",
              border: "1px solid rgba(255, 165, 0, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Utensils size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <ul className="text-muted-foreground text-left space-y-2">
              <li>• Purchase food coupons at the entrance</li>
              <li>• Exchange coupons at any stall</li>
              <li>• Vegetarian and non-vegetarian options available</li>
              <li>• Special dietary requirements accommodated</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-accent">
                March 15-16, 2026 • 10:00 AM - 9:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FoodFestPage;
