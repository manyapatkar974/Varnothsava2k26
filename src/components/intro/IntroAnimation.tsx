import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  onComplete: () => void;
}

const EmberParticle = ({ delay, left }: { delay: number; left: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full"
    style={{
      left: `${left}%`,
      bottom: "-10px",
      background: "radial-gradient(circle, #ff6b00 0%, #ffd700 50%, transparent 70%)",
      boxShadow: "0 0 6px #ff6b00, 0 0 12px #ffd700",
    }}
    initial={{ opacity: 0, y: 0, scale: 1 }}
    animate={{
      opacity: [0, 1, 1, 0],
      y: [-50, -300, -500, -700],
      x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
      scale: [1, 0.8, 0.5, 0.2],
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeOut",
    }}
  />
);

const Sparkle = ({ delay, left, color }: { delay: number; left: number; color: string }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: `${left}%`,
      top: "-10px",
      width: "8px",
      height: "8px",
    }}
    initial={{ y: 0, opacity: 0 }}
    animate={{
      y: window.innerHeight + 20,
      opacity: [0, 1, 1, 1, 0],
    }}
    transition={{
      duration: 2.5 + Math.random() * 1.5,
      delay,
      ease: "easeIn",
    }}
  >
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        background: `radial-gradient(circle, #ffffff 0%, ${color} 40%, ${color}cc 100%)`,
        borderRadius: "50%",
        boxShadow: `0 0 10px #ffffff, 0 0 20px ${color}, 0 0 30px ${color}`,
      }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  </motion.div>
);

const EqualizerBar = ({ index, side }: { index: number; side: "left" | "right" }) => {
  const baseDelay = index * 0.1;
  // Position bars across the full screen width, surrounding the logo
  const xPosition = side === "left" ? (index * 5) : (100 - (index * 5));
  
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left: `${xPosition}%`,
        width: "2%",
        background: "linear-gradient(180deg, #ff6b00 0%, #ff4500 50%, #8b2500 100%)",
        boxShadow: "0 0 10px rgba(255, 107, 0, 0.5)",
        transformOrigin: "bottom",
      }}
      initial={{ height: "10%" }}
      animate={{
        height: ["10%", "60%", "30%", "80%", "20%", "50%", "10%"],
      }}
      transition={{
        duration: 1.5,
        delay: baseDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const DancerSilhouette = ({ side }: { side: "left" | "right" }) => {
  const dancers = side === "left" ? [
    { x: 5, scale: 0.9, rotate: -5 },
    { x: 15, scale: 1, rotate: 5 },
  ] : [
    { x: 80, scale: 1, rotate: -5 },
    { x: 90, scale: 0.9, rotate: 5 },
  ];

  return (
    <>
      {dancers.map((dancer, i) => (
        <motion.div
          key={`${side}-${i}`}
          className="absolute bottom-0"
          style={{
            left: `${dancer.x}%`,
            width: "120px",
            height: "280px",
            background: "#000",
            clipPath: i % 2 === 0 
              ? "polygon(50% 0%, 60% 15%, 70% 20%, 80% 35%, 75% 50%, 85% 60%, 80% 75%, 70% 85%, 60% 100%, 40% 100%, 30% 85%, 20% 75%, 15% 60%, 25% 50%, 20% 35%, 30% 20%, 40% 15%)"
              : "polygon(50% 0%, 55% 10%, 65% 20%, 75% 30%, 80% 45%, 70% 55%, 75% 70%, 65% 85%, 55% 100%, 45% 100%, 35% 85%, 25% 70%, 30% 55%, 20% 45%, 25% 30%, 35% 20%, 45% 10%)",
            transform: `scale(${dancer.scale}) rotate(${dancer.rotate}deg)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      ))}
    </>
  );
};

const Spotlight = ({ side }: { side: "left" | "right" }) => (
  <motion.div
    className="absolute top-0"
    style={{
      left: side === "left" ? "10%" : "70%",
      width: "20%",
      height: "100%",
      background: `linear-gradient(${side === "left" ? "135deg" : "225deg"}, transparent 0%, rgba(255, 107, 0, 0.1) 50%, transparent 100%)`,
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0.2, 0.5, 0.3, 0.6, 0.2] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
);

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),    // Sparks appear
      setTimeout(() => setPhase(2), 1000),   // Logo scales in
      setTimeout(() => setPhase(3), 2500),   // Logo pulses
      setTimeout(() => setPhase(4), 4000),   // Fade out
      setTimeout(() => onComplete(), 4800),  // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center vignette"
          style={{
            background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Spotlights */}
          <Spotlight side="left" />
          <Spotlight side="right" />

          {/* Equalizer bars */}
          {phase >= 1 && (
            <>
              {[...Array(16)].map((_, i) => (
                <EqualizerBar key={`left-${i}`} index={i} side="left" />
              ))}
              {[...Array(16)].map((_, i) => (
                <EqualizerBar key={`right-${i}`} index={i} side="right" />
              ))}
            </>
          )}

          {/* Dancer silhouettes */}
          {phase >= 1 && (
            <>
              <DancerSilhouette side="left" />
              <DancerSilhouette side="right" />
            </>
          )}

          {/* Ember particles */}
          {phase >= 1 && (
            <>
              {[...Array(20)].map((_, i) => (
                <EmberParticle 
                  key={i} 
                  delay={i * 0.3} 
                  left={10 + Math.random() * 80} 
                />
              ))}
            </>
          )}

          {/* Falling sparkles when logo appears */}
          {phase >= 2 && (
            <>
              {[...Array(120)].map((_, i) => {
                const colors = ["#ffd700", "#ffaa00", "#ff6b00", "#ff0000", "#00ffff", "#00ff00", "#ff00ff", "#ffffff", "#ffff00", "#ff69b4"];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                return (
                  <Sparkle
                    key={`sparkle-${i}`}
                    delay={i * 0.05}
                    left={Math.random() * 100}
                    color={randomColor}
                  />
                );
              })}
            </>
          )}

          {/* Main Logo - Using actual image */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={phase >= 2 ? { 
              scale: 1, 
              opacity: 1,
            } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative"
              animate={phase >= 3 ? {
                filter: [
                  "drop-shadow(0 0 30px rgba(255, 215, 0, 0.6))",
                  "drop-shadow(0 0 60px rgba(255, 215, 0, 0.9))",
                  "drop-shadow(0 0 30px rgba(255, 215, 0, 0.6))",
                ]
              } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img 
                src="/varnothsava-logo.png" 
                alt="Varnothsava 2K26"
                className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain"
                style={{
                  filter: "drop-shadow(0 0 40px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 80px rgba(255, 107, 0, 0.6))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom flame effect */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(255, 107, 0, 0.1) 50%, rgba(255, 69, 0, 0.2) 100%)",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;