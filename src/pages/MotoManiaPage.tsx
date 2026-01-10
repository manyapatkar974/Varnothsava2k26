import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { festivalDate, getEventById } from "@/data/events";
import { useCart } from "@/context/CartContext";
import CountdownTimer from "@/components/countdown/CountdownTimer";
import { Bike, Gauge, Shield, MapPin, ShoppingCart, Check, Zap, Trophy, Flag } from "lucide-react";

const MotoManiaPage = () => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart, isInCart } = useCart();
  const event = getEventById("moto-mania")!;
  const inCart = isInCart(event.id);

  const eventDate = new Date(festivalDate);
  eventDate.setDate(eventDate.getDate() + 1);

  const handleCartAction = () => {
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
  };

  const features = [
    { icon: Gauge, title: "Speed Events", desc: "Racing competitions for the brave" },
    { icon: Zap, title: "Stunt Shows", desc: "Breathtaking performances" },
    { icon: Trophy, title: "Exhibitions", desc: "Premium bike showcase" },
    { icon: Flag, title: "Rally", desc: "Off-road adventures" },
  ];

  const safetyGuidelines = [
    "Valid driving license is mandatory",
    "Wear approved helmets and protective gear",
    "All vehicles must pass safety inspection",
    "Follow track marshals' instructions",
    "No alcohol or substance use",
    "Emergency medical team on standby",
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(255, 69, 0, 0.2) 0%, rgba(0, 0, 0, 0.95) 40%, rgba(255, 140, 0, 0.15) 100%)",
        }}
      >
        {/* Speed lines animation */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5"
            style={{
              left: "-100%",
              top: `${10 + Math.random() * 80}%`,
              width: `${50 + Math.random() * 100}px`,
              background: `linear-gradient(90deg, transparent, rgba(255, 140, 0, ${0.1 + Math.random() * 0.3}), transparent)`,
            }}
            animate={{
              x: ["0%", "300%"],
            }}
            transition={{
              duration: 0.8 + Math.random() * 0.5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}

        <div className="relative z-10 text-center px-6">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: "linear-gradient(90deg, #ff4500, #ff8c00)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Bike size={20} className="text-black" />
            <span className="text-black font-bold uppercase">Flagship Event</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-display font-black mb-6"
            style={{
              background: "linear-gradient(135deg, #ff8c00 0%, #ff4500 30%, #ffd700 70%, #ff8c00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 40px rgba(255, 140, 0, 0.6))",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            MOTO MANIA
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Feel the Speed. Embrace the Thrill.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <CountdownTimer targetDate={eventDate} eventName="Event Starts In" />
          </motion.div>

          <motion.button
            className={`mt-8 px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto ${
              inCart ? "bg-green-600" : ""
            }`}
            style={
              !inCart
                ? {
                    background: "linear-gradient(135deg, #ff4500, #ff8c00)",
                    color: "#000",
                    boxShadow: "0 0 30px rgba(255, 140, 0, 0.5)",
                  }
                : undefined
            }
            onClick={handleCartAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {inCart ? (
              <>
                <Check size={20} />
                Added to Cart • ₹{event.price}
              </>
            ) : (
              <>
                <ShoppingCart size={20} />
                Register Now • ₹{event.price}
              </>
            )}
          </motion.button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-festival font-bold text-center text-gradient-gold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What to Expect
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: "linear-gradient(180deg, rgba(255, 140, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)",
                  border: "1px solid rgba(255, 140, 0, 0.3)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 140, 0, 0.6)" }}
              >
                <feature.icon size={40} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines */}
      <section className="py-16 px-6" style={{ background: "rgba(255, 69, 0, 0.05)" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Shield size={48} className="text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-festival font-bold text-gradient-gold">
              Safety First
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {safetyGuidelines.map((guideline, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{
                  background: "rgba(20, 20, 20, 0.9)",
                  border: "1px solid rgba(255, 140, 0, 0.2)",
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Check size={18} className="text-green-500 flex-shrink-0" />
                <span className="text-sm">{guideline}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="p-8 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(255, 140, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)",
              border: "1px solid rgba(255, 140, 0, 0.3)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <MapPin size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-festival font-bold text-gradient-gold mb-2">
              Racing Track
            </h3>
            <p className="text-muted-foreground mb-4">
              SMVITM Sports Ground<br />
              Dedicated track setup for the event
            </p>
            <p className="text-sm text-accent">March 16, 2026 • 3:00 PM onwards</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MotoManiaPage;
