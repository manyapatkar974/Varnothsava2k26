import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
  eventName?: string;
  compact?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type EventStatus = "upcoming" | "live" | "ended";

const CountdownTimer = ({ targetDate, eventName, compact = false }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [status, setStatus] = useState<EventStatus>("upcoming");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      // Festival duration - 2 days
      const festivalEnd = target + (2 * 24 * 60 * 60 * 1000);

      if (difference > 0) {
        setStatus("upcoming");
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else if (now < festivalEnd) {
        setStatus("live");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setStatus("ended");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (status === "live") {
    return (
      <motion.div 
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {eventName && (
          <h3 className="text-xl md:text-2xl font-festival text-gradient-gold">
            {eventName}
          </h3>
        )}
        <motion.div 
          className="live-indicator text-lg font-bold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
          🔴 LIVE NOW
        </motion.div>
        <p className="text-muted-foreground">The festival is happening right now!</p>
      </motion.div>
    );
  }

  if (status === "ended") {
    return (
      <motion.div 
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {eventName && (
          <h3 className="text-xl md:text-2xl font-festival text-gradient-gold">
            {eventName}
          </h3>
        )}
        <div className="text-2xl font-display text-muted-foreground">
          Festival Completed
        </div>
        <p className="text-muted-foreground">Thank you for being part of Varnothsava 2026!</p>
      </motion.div>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm">
        {timeUnits.map((unit, index) => (
          <span key={unit.label} className="flex items-center gap-1">
            <span className="text-primary font-bold font-display">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="text-muted-foreground text-xs">{unit.label.charAt(0)}</span>
            {index < timeUnits.length - 1 && <span className="text-muted-foreground">:</span>}
          </span>
        ))}
      </div>
    );
  }

  return (
    <motion.div 
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {eventName && (
        <h3 className="text-xl md:text-2xl font-festival text-gradient-gold">
          {eventName}
        </h3>
      )}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="countdown-box w-20 h-24 md:w-28 md:h-32"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <motion.span 
              className="text-3xl md:text-5xl font-display font-black text-gradient-gold"
              key={unit.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {String(unit.value).padStart(2, "0")}
            </motion.span>
            <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
              {unit.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
