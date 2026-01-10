import { motion } from "framer-motion";
import { events } from "@/data/events";
import EventCard from "@/components/events/EventCard";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Filter, Sparkles, Calendar } from "lucide-react";

const EventsPage = () => {
  const { visitedEvents } = useCart();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", name: "All Events" },
    { id: "external", name: " Events (11-12 Mar)" },
    { id: "internal", name: " Events (13-14 Mar)" },
    { id: "free", name: "Free Events (No Registration)" },
    { id: "cultural", name: "Cultural" },
    { id: "technical", name: "Technical" },
    { id: "moto", name: "Moto Mania" },
    { id: "food", name: "Food Fest" },
    { id: "sports", name: "Sports" },
  ];

  const getFilteredEvents = () => {
    let filtered = events;

    if (selectedFilter === "external") {
      filtered = events.filter(e => e.isExternal);
    } else if (selectedFilter === "internal") {
      filtered = events.filter(e => !e.isExternal);
    } else if (selectedFilter === "free") {
      filtered = events.filter(e => !e.requiresRegistration);
    } else if (selectedFilter !== "all") {
      filtered = events.filter(e => e.category === selectedFilter);
    }

    return filtered;
  };

  const filteredEvents = getFilteredEvents();

  // Sort to show flagship first
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (a.isFlagship && !b.isFlagship) return -1;
    if (!a.isFlagship && b.isFlagship) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen pt-24 px-6 pb-12" style={{ background: "linear-gradient(180deg, rgba(0, 50, 100, 0.1) 0%, transparent 100%)" }}>
      {/* Hero */}
      <section className="max-w-7xl mx-auto mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-festival font-black mb-4"
            style={{
              background: "linear-gradient(135deg, #00D4FF 0%, #0096FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            All Events
          </motion.h1>
          <p className="text-blue-200/80 text-lg max-w-2xl mx-auto">
            Discover exciting events across technical, cultural, and fun categories. 
            Register now and be part of Varnothsava 2026!
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto mb-8">
        <motion.div
          className="flex items-center gap-3 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Filter size={18} className="text-blue-400" />
          {filterOptions.map((opt) => (
            <motion.button
              key={opt.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all`}
              style={{
                background: selectedFilter === opt.id
                  ? "linear-gradient(135deg, #0096FF, #00D4FF)"
                  : "rgba(0, 100, 200, 0.1)",
                color: selectedFilter === opt.id ? "#fff" : "#00D4FF",
                border: `1px solid ${selectedFilter === opt.id ? "#00D4FF" : "rgba(0, 180, 255, 0.3)"}`,
                boxShadow: selectedFilter === opt.id ? "0 0 15px rgba(0, 150, 255, 0.4)" : "none",
              }}
              onClick={() => setSelectedFilter(opt.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {opt.name}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Events Info */}
      <section className="max-w-7xl mx-auto mb-8">
        <motion.div
          className="p-4 rounded-lg flex items-center gap-3"
          style={{
            background: "rgba(0, 100, 200, 0.1)",
            border: "1px solid rgba(0, 150, 255, 0.3)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Calendar size={18} style={{ color: "#00D4FF" }} />
          <span className="text-blue-200">
            Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}
          </span>
        </motion.div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={event.isFlagship ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <EventCard
                {...event}
                isVisited={visitedEvents.includes(event.id)}
              />
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <Sparkles size={48} className="text-blue-400/50 mx-auto mb-4" />
            <p className="text-blue-200/60">No events found in this category</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default EventsPage;