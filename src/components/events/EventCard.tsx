import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Sparkles, Lock } from "lucide-react";
import { getTheme } from "@/lib/themes";
import { getEventImage } from "@/data/events";
import type { EventCategory } from "@/lib/themes";

interface EventCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  price: number;
  isFlagship?: boolean;
  isVisited?: boolean;
  requiresRegistration?: boolean;
  animationIndex?: number;
}

const EventCard = ({ 
  id, 
  name, 
  category, 
  description, 
  date, 
  time, 
  venue,
  price,
  isFlagship,
  isVisited,
  requiresRegistration = true,
  animationIndex = 0,
}: EventCardProps) => {
  const navigate = useNavigate();
  const theme = getTheme(category as EventCategory);

  // Different animation variants for each event
  const animationVariants = [
    // 0: Gentle fade and slide up
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    },
    // 1: Scale bounce
    {
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, type: "spring", stiffness: 100 }
    },
    // 2: Rotate and fade
    {
      initial: { opacity: 0, rotateY: -90 },
      whileInView: { opacity: 1, rotateY: 0 },
      transition: { duration: 0.7 }
    },
    // 3: Slide from left
    {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    // 4: Slide from right
    {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    // 5: Elastic bounce
    {
      initial: { opacity: 0, scale: 0.5 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.8, type: "spring", stiffness: 150, damping: 10 }
    },
    // 6: Rotate and scale
    {
      initial: { opacity: 0, scale: 0.8, rotate: 15 },
      whileInView: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 0.6 }
    },
    // 7: Flip animation
    {
      initial: { opacity: 0, rotateX: -90 },
      whileInView: { opacity: 1, rotateX: 0 },
      transition: { duration: 0.7 }
    },
    // 8: Zoom in with rotation
    {
      initial: { opacity: 0, scale: 0.6, rotate: -20 },
      whileInView: { opacity: 1, scale: 1, rotate: 0 },
      transition: { duration: 0.6 }
    },
    // 9: Slide up with scale
    {
      initial: { opacity: 0, y: 50, scale: 0.9 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.6, type: "spring", stiffness: 120 }
    },
    // 10: Fade with subtle rotation
    {
      initial: { opacity: 0, rotate: -10 },
      whileInView: { opacity: 1, rotate: 0 },
      transition: { duration: 0.5 }
    },
    // 11: Scale from center
    {
      initial: { opacity: 0, scale: 0.3 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.7, type: "spring", stiffness: 100 }
    },
    // 12: Multi-axis animation
    {
      initial: { opacity: 0, y: 30, x: -20 },
      whileInView: { opacity: 1, y: 0, x: 0 },
      transition: { duration: 0.6 }
    },
    // 13: Bounce entrance
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, type: "spring", stiffness: 200, damping: 15 }
    },
    // 14: Slide and fade
    {
      initial: { opacity: 0, x: 60 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.6 }
    },
    // 15: Rotate entrance
    {
      initial: { opacity: 0, rotate: 25 },
      whileInView: { opacity: 1, rotate: 0 },
      transition: { duration: 0.6 }
    },
    // 16: Scale and rotate
    {
      initial: { opacity: 0, scale: 0.7, rotateZ: -15 },
      whileInView: { opacity: 1, scale: 1, rotateZ: 0 },
      transition: { duration: 0.7 }
    },
    // 17: Flip Y entrance
    {
      initial: { opacity: 0, rotateY: 90 },
      whileInView: { opacity: 1, rotateY: 0 },
      transition: { duration: 0.7 }
    },
    // 18: Complex animation
    {
      initial: { opacity: 0, y: -30, scale: 0.8 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      transition: { duration: 0.7 }
    },
    // 19: Bounce from bottom
    {
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.9, type: "spring", stiffness: 80, damping: 12 }
    },
    // 20: Slide left with fade
    {
      initial: { opacity: 0, x: -60 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.6 }
    },
  ];

  const animation = animationVariants[animationIndex % animationVariants.length];
  const eventImage = getEventImage(id);

  return (
    <motion.div
      className="relative rounded-2xl cursor-pointer card-hover overflow-hidden h-72 group"
      onClick={() => navigate(`/event/${id}`)}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 40px ${theme.secondary}50`,
      }}
      whileTap={{ scale: 0.96 }}
      initial={animation.initial}
      whileInView={animation.whileInView}
      viewport={{ once: true }}
      transition={animation.transition}
    >
      {/* Event Image Background */}
      <div className="absolute inset-0">
        <img 
          src={eventImage}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Dark overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${theme.primary}60 0%, ${theme.primary}90 100%)`,
          }}
        />
      </div>

      {/* Visited indicator */}
      {isVisited && (
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/80 text-white border border-blue-400/50 z-20">
          Visited
        </div>
      )}

      {/* No Registration Badge */}
      {!requiresRegistration && (
        <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold bg-emerald-500/80 text-white border border-emerald-400/50 z-20">
          <Lock size={12} />
          <span>Free</span>
        </div>
      )}

      {/* Flagship badge */}
      {isFlagship && (
        <motion.div 
          className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full z-20"
          style={{
            background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
          }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <Sparkles size={14} className="text-white" />
          <span className="text-xs font-bold text-white uppercase">Flagship</span>
        </motion.div>
      )}

      {/* Content Container - Bottom */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/* Category tag */}
        <div 
          className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 w-fit"
          style={{
            background: `${theme.primary}90`,
            color: theme.secondary,
            border: `2px solid ${theme.secondary}60`,
          }}
        >
          {category}
        </div>

        {/* Event name - main text */}
        <h3 className="font-festival font-bold text-2xl md:text-3xl mb-4 drop-shadow-lg">
          {name}
        </h3>

        {/* Quick info row */}
        <div className="flex flex-wrap gap-3 text-xs opacity-90">
          {!requiresRegistration ? (
            <div className="flex items-center gap-1">
              <span className="font-semibold">Free Event</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <span className="font-semibold">₹{price}</span>
            </div>
          )}
        </div>
      </div>

      {/* Click to view indicator - appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
        <div className="text-center">
          <p className="text-white font-semibold text-lg">Click to view details</p>
          <p className="text-white/70 text-sm mt-2">Full event information</p>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${theme.secondary}20 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};

export default EventCard;