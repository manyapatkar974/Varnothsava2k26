import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface SectionPreviewProps {
  title: string;
  subtitle: string;
  link: string;
  children: ReactNode;
  theme?: "default" | "electric" | "speed" | "food";
}

const SectionPreview = ({ title, subtitle, link, children, theme = "default" }: SectionPreviewProps) => {
  const navigate = useNavigate();

  const themeStyles = {
    default: {
      gradient: "linear-gradient(180deg, transparent 0%, rgba(0, 180, 216, 0.05) 100%)",
      accent: "rgba(0, 212, 255, 0.1)",
    },
    electric: {
      gradient: "linear-gradient(180deg, rgba(0, 180, 216, 0.1) 0%, rgba(0, 50, 80, 0.05) 100%)",
      accent: "rgba(0, 180, 216, 0.2)",
    },
    speed: {
      gradient: "linear-gradient(180deg, rgba(0, 150, 200, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)",
      accent: "rgba(0, 180, 216, 0.3)",
    },
    food: {
      gradient: "linear-gradient(180deg, rgba(0, 180, 216, 0.1) 0%, rgba(0, 80, 120, 0.05) 100%)",
      accent: "rgba(0, 212, 255, 0.2)",
    },
  };

  return (
    <motion.section
      className="py-16 md:py-24 px-6 relative overflow-hidden"
      style={{ background: themeStyles[theme].gradient }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background accent */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${themeStyles[theme].accent} 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-festival font-bold text-gradient-gold mb-2">
              {title}
            </h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          
          <motion.button
            className="flex items-center gap-2 text-primary font-semibold group self-start md:self-auto"
            onClick={() => navigate(link)}
            whileHover={{ x: 5 }}
          >
            View All
            <ArrowRight 
              size={18} 
              className="transition-transform group-hover:translate-x-1" 
            />
          </motion.button>
        </motion.div>

        {/* Content */}
        {children}
      </div>
    </motion.section>
  );
};

export default SectionPreview;