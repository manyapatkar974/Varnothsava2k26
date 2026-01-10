import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowLeft, ShoppingCart, Check, Shield, Lock, AlertCircle } from "lucide-react";
import { getEventById, festivalDate } from "@/data/events";
import { useCart } from "@/context/CartContext";
import CountdownTimer from "@/components/countdown/CountdownTimer";
import { getTheme } from "@/lib/themes";
import { useEffect } from "react";

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, isInCart, markEventVisited } = useCart();
  const event = getEventById(id || "");
  const theme = event ? getTheme(event.category) : getTheme("extra");

  useEffect(() => {
    if (id) {
      markEventVisited(id);
    }
  }, [id, markEventVisited]);

  if (!event) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-festival text-gradient-gold mb-4">Event Not Found</h2>
          <motion.button
            className="btn-dashboard"
            onClick={() => navigate("/events")}
            whileHover={{ scale: 1.05 }}
          >
            Back to Events
          </motion.button>
        </div>
      </div>
    );
  }

  const inCart = isInCart(event.id);
  const eventDate = new Date(festivalDate);
  if (event.date.includes("14")) {
    eventDate.setDate(eventDate.getDate() + 3);
  } else if (event.date.includes("13")) {
    eventDate.setDate(eventDate.getDate() + 2);
  } else if (event.date.includes("12")) {
    eventDate.setDate(eventDate.getDate() + 1);
  }

  const handleCartAction = () => {
    if (event.requiresRegistration) {
      if (inCart) {
        removeFromCart(event.id);
      } else {
        addToCart({
          id: event.id,
          name: event.name,
          category: event.category,
          date: event.date,
          price: event.price,
        });
      }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Back button */}
      <motion.button
        className="fixed top-24 left-6 z-30 flex items-center gap-2 px-4 py-2 rounded-full"
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          border: `1px solid ${theme.primary}60`,
          backdropFilter: "blur(10px)",
        }}
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ArrowLeft size={18} style={{ color: theme.primary }} />
        <span className="text-sm">Back</span>
      </motion.button>

      {/* Hero section with animated background */}
      <section 
        className="relative py-16 px-6 overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${theme.primary}15 0%, ${theme.primary}05 100%)`,
        }}
      >
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: theme.secondary,
              boxShadow: `0 0 15px ${theme.secondary}`,
              filter: "blur(0.5px)",
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Category & Flagship badge */}
          <motion.div
            className="flex flex-wrap items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span
              className="px-4 py-1.5 rounded-full text-sm font-semibold uppercase"
              style={{
                background: `${theme.primary}20`,
                border: `1px solid ${theme.primary}60`,
                color: theme.secondary,
              }}
            >
              {event.category}
            </span>
            {event.isFlagship && (
              <span
                className="px-4 py-1.5 rounded-full text-sm font-bold uppercase"
                style={{
                  background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                  color: "#fff",
                  boxShadow: `0 0 20px ${theme.secondary}`,
                }}
              >
                ⭐ Flagship Event
              </span>
            )}
            {!event.requiresRegistration && (
              <span
                className="px-4 py-1.5 rounded-full text-sm font-bold uppercase flex items-center gap-2"
                style={{
                  background: "rgba(34, 197, 94, 0.2)",
                  border: "1px solid rgb(34, 197, 94)",
                  color: "rgb(134, 239, 172)",
                }}
              >
                <Lock size={14} />
                No Registration
              </span>
            )}
          </motion.div>

          {/* Event name */}
          <motion.h1
            className="text-4xl md:text-6xl font-festival font-black mb-4"
            style={{
              background: `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.primary} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: `0 0 30px ${theme.primary}30`,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {event.name}
          </motion.h1>

          {/* Event details */}
          <motion.div
            className="flex flex-wrap gap-6 text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <Calendar size={18} style={{ color: theme.secondary }} />
              <span style={{ color: "rgb(148, 163, 184)" }}>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} style={{ color: theme.secondary }} />
              <span style={{ color: "rgb(148, 163, 184)" }}>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} style={{ color: theme.secondary }} />
              <span style={{ color: "rgb(148, 163, 184)" }}>{event.venue}</span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <CountdownTimer targetDate={eventDate} compact />
          </motion.div>
        </div>
      </section>

      {/* Content section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              className="p-6 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}20 0%, ${theme.primary}10 100%)`,
                border: `1px solid ${theme.primary}40`,
                boxShadow: `0 0 20px ${theme.primary}10`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-semibold mb-4" style={{ color: theme.secondary }}>
                About This Event
              </h2>
              <p className="text-blue-200/80 leading-relaxed">
                {event.description}
              </p>
            </motion.div>

            {/* Rules */}
            <motion.div
              className="p-6 rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}20 0%, ${theme.primary}10 100%)`,
                border: `1px solid ${theme.primary}40`,
                boxShadow: `0 0 20px ${theme.primary}10`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield size={20} style={{ color: theme.secondary }} />
                <span style={{ color: theme.secondary }}>Rules & Guidelines</span>
              </h2>
              <ul className="space-y-3">
                {event.rules.map((rule, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Check size={16} className="mt-1 flex-shrink-0" style={{ color: theme.secondary }} />
                    <span className="text-blue-200/80">{rule}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info/Registration card */}
            <motion.div
              className="p-6 rounded-2xl sticky top-24"
              style={{
                background: event.requiresRegistration
                  ? `linear-gradient(135deg, ${theme.primary}15 0%, rgba(20, 20, 20, 0.95) 100%)`
                  : "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(20, 20, 20, 0.95) 100%)",
                border: event.requiresRegistration
                  ? `2px solid ${theme.primary}50`
                  : "2px solid rgb(34, 197, 94)",
                boxShadow: event.requiresRegistration
                  ? `0 0 30px ${theme.primary}20`
                  : "0 0 30px rgba(34, 197, 94, 0.2)",
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              {event.requiresRegistration ? (
                <>
                  <div className="text-center mb-6">
                    <p className="text-sm text-blue-300/70 mb-1">Registration Fee</p>
                    <p
                      className="text-4xl font-display font-black"
                      style={{
                        background: `linear-gradient(135deg, ${theme.secondary}, ${theme.primary})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      ₹{event.price}
                    </p>
                  </div>

                  <motion.button
                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                      inCart ? "bg-emerald-600 hover:bg-emerald-700" : ""
                    }`}
                    style={
                      !inCart
                        ? {
                            background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                            color: "#fff",
                            boxShadow: `0 0 20px ${theme.primary}40`,
                          }
                        : undefined
                    }
                    onClick={handleCartAction}
                    whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${theme.primary}60` }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {inCart ? (
                      <>
                        <Check size={20} />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={20} />
                        Add to Fest Cart
                      </>
                    )}
                  </motion.button>

                  {inCart && (
                    <motion.p
                      className="text-center text-sm text-emerald-300 mt-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      Click again to remove
                    </motion.p>
                  )}
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-4 p-4 rounded-lg" style={{ background: "rgba(34, 197, 94, 0.1)" }}>
                    <AlertCircle size={24} style={{ color: "rgb(134, 239, 172)" }} />
                    <div>
                      <p className="font-semibold text-emerald-300">Free Event</p>
                      <p className="text-sm text-emerald-200/70">No registration required</p>
                    </div>
                  </div>

                  <motion.button
                    className="w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, rgb(34, 197, 94), rgb(74, 222, 128))",
                      color: "#fff",
                      boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)",
                    }}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Check size={20} />
                    Open for All
                  </motion.button>

                  <p className="text-center text-xs text-emerald-200/60 mt-4">
                    Just show up on the day of the event with your college ID
                  </p>
                </>
              )}
            </motion.div>

            {/* Event type badge */}
            <motion.div
              className="p-4 rounded-xl text-center"
              style={{
                background: event.isExternal
                  ? "rgba(59, 130, 246, 0.15)"
                  : "rgba(168, 85, 247, 0.15)",
                border: event.isExternal
                  ? "1px solid rgb(96, 165, 250)"
                  : "1px solid rgb(196, 181, 253)",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-xs font-semibold" style={{ color: event.isExternal ? "rgb(147, 197, 253)" : "rgb(216, 180, 254)" }}>
                {event.isExternal ? "External College Event" : "College Internal Event"}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetailPage;
