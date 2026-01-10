import { motion } from "framer-motion";
import CountdownTimer from "@/components/countdown/CountdownTimer";
import SectionPreview from "@/components/sections/SectionPreview";
import EventCard from "@/components/events/EventCard";
import { events, festivalDate, getEventsByCategory } from "@/data/events";
import { useCart } from "@/context/CartContext";
import { MapPin, ExternalLink, Sparkles, Flame, Music, Utensils, Bike } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { visitedEvents } = useCart();
  const navigate = useNavigate();
  const culturalEvents = getEventsByCategory("cultural").slice(0, 3);
  const technicalEvents = getEventsByCategory("technical").slice(0, 2);
  const motoEvent = events.find((e) => e.id === "moto-mania");
  const foodEvents = getEventsByCategory("food").slice(0, 2);

  const galleryImages = [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400",
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center top, rgba(0, 180, 216, 0.15) 0%, transparent 60%)",
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center bottom, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
              boxShadow: "0 0 10px #00d4ff",
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
              y: [-20, -40, -20],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-6 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(0, 212, 255, 0.1)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                color: "hsl(var(--primary))",
              }}
            >
              <Sparkles size={14} className="inline mr-2" />
              SMVITM Presents
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-festival font-black mb-6"
            style={{
              background: "linear-gradient(135deg, #00D4FF 0%, #0096FF 30%, #00D4FF 60%, #00B8E6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(0, 150, 255, 0.6))",
              textShadow: "0 0 60px rgba(0, 180, 255, 0.4)",
            }}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            VARNOTHSAVA 2026
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-4 max-w-2xl mx-auto"
            style={{ color: "rgb(148, 163, 184)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A Festival of Celebration, Culture & Innovation
          </motion.p>

          <motion.p
            className="text-3xl md:text-4xl font-display font-bold mb-12"
            style={{
              background: "linear-gradient(135deg, #00D4FF, #0096FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            March 11-14, 2026
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <CountdownTimer targetDate={festivalDate} eventName="Festival Begins In" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.button
              className="btn-festival"
              onClick={() => navigate("/events")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Events
            </motion.button>
            <motion.button
              className="btn-dashboard"
              onClick={() => navigate("/cart")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Cart
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-2 rounded-full bg-primary"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Gallery Preview */}
      <SectionPreview
        title="Gallery"
        subtitle="Moments that define the festival spirit"
        link="/gallery"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-xl overflow-hidden neon-border"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </SectionPreview>

      {/* Events Preview */}
      <SectionPreview
        title="Events"
        subtitle="Technical, cultural, and more"
        link="/events"
        theme="electric"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...culturalEvents, ...technicalEvents].slice(0, 3).map((event) => (
            <EventCard
              key={event.id}
              {...event}
              isVisited={visitedEvents.includes(event.id)}
            />
          ))}
        </div>
      </SectionPreview>

      {/* Cultural Preview */}
      <SectionPreview
        title="Cultural Events"
        subtitle="Dance, music, and artistic expressions"
        link="/cultural"
      >
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: Music, label: "Live Music" },
            { icon: Sparkles, label: "Dance" },
            { icon: Flame, label: "Drama" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center gap-3 p-6 rounded-2xl"
              style={{
                background: "rgba(10, 20, 30, 0.8)",
                border: "1px solid rgba(0, 212, 255, 0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.5)" }}
            >
              <item.icon size={40} className="text-primary" />
              <span className="font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </SectionPreview>

      {/* Moto Mania Preview */}
      <SectionPreview
        title="Moto Mania"
        subtitle="Feel the speed, embrace the thrill"
        link="/moto-mania"
        theme="speed"
      >
        {motoEvent && (
          <motion.div
            className="relative p-8 rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(0, 180, 216, 0.2) 0%, rgba(0, 0, 0, 0.95) 50%, rgba(0, 212, 255, 0.1) 100%)",
              border: "2px solid rgba(0, 180, 216, 0.4)",
            }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Bike size={40} className="text-primary" />
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                style={{ background: "linear-gradient(90deg, #00b4d8, #00d4ff)" }}
              >
                Flagship Event
              </span>
            </div>
            <h3 className="text-3xl font-festival font-bold text-gradient-gold mb-3">
              {motoEvent.name}
            </h3>
            <p className="text-muted-foreground mb-4 max-w-xl">
              {motoEvent.description}
            </p>
            <motion.button
              className="btn-festival"
              onClick={() => navigate("/moto-mania")}
              whileHover={{ scale: 1.05 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        )}
      </SectionPreview>

      {/* Food Fest Preview */}
      <SectionPreview
        title="Food Fest"
        subtitle="A culinary journey awaits"
        link="/food-fest"
        theme="food"
      >
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <motion.div
            className="flex items-center gap-4 p-6 rounded-2xl"
            style={{
              background: "rgba(10, 20, 30, 0.8)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Utensils size={32} className="text-primary" />
            <div>
              <h4 className="font-semibold">Multi-Cuisine</h4>
              <p className="text-sm text-muted-foreground">From around the world</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 p-6 rounded-2xl"
            style={{
              background: "rgba(10, 20, 30, 0.8)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Flame size={32} className="text-primary" />
            <div>
              <h4 className="font-semibold">Live Cooking</h4>
              <p className="text-sm text-muted-foreground">Watch & learn</p>
            </div>
          </motion.div>
        </div>
      </SectionPreview>

      {/* Location Section */}
      <section className="py-16 md:py-24 px-6 relative">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-festival font-bold text-gradient-gold mb-2">
              Location
            </h2>
            <p className="text-muted-foreground">Find your way to the festival</p>
          </motion.div>

          <motion.div
            className="p-8 rounded-3xl text-center"
            style={{
              background: "rgba(10, 20, 30, 0.9)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <MapPin size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">SMVITM Campus</h3>
            <p className="text-muted-foreground mb-6">
              Shri Madhwa Vadiraja Institute of Technology & Management<br />
              Bantakal, Udupi, Karnataka - 574115
            </p>
            <motion.a
              href="https://maps.google.com/?q=SMVITM+Udupi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-festival"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={18} />
              Open in Google Maps
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Varnothsava - SMVITM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;