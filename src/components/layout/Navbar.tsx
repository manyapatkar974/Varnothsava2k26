import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Cultural", path: "/cultural" },
  { name: "Moto Mania", path: "/moto-mania" },
  { name: "Food Fest", path: "/food-fest" },
  { name: "Gallery", path: "/gallery" },
  { name: "Profile", path: "/profile" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
    >
      <div 
        className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3"
        style={{
          background: "rgba(5, 15, 25, 0.8)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(0, 212, 255, 0.1)",
        }}
      >
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src="/varnothsava-logo.png" 
            alt="Varnothsava 2K26" 
            className="w-14 h-14 object-contain drop-shadow-lg hover:drop-shadow-xl transition-all"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-300 font-festival text-xl font-black tracking-wider">
              VARNOTHSAVA
            </span>
            <span className="text-yellow-500/80 font-semibold text-xs tracking-widest">
              2K26
            </span>
          </div>
        </motion.div>

        {/* Dashboard Button */}
        <div className="relative" ref={dropdownRef}>
          <motion.button
            className="btn-dashboard flex items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={18} />
            <span className="hidden sm:inline">Dashboard</span>
          </motion.button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="absolute top-full right-0 mt-3 w-56 dropdown-menu"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    className={`w-full text-left dropdown-item flex items-center gap-3 ${
                      location.pathname === item.path 
                        ? "text-primary" 
                        : "text-foreground/80 hover:text-primary"
                    }`}
                    onClick={() => handleNavigation(item.path)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: location.pathname === item.path 
                          ? "linear-gradient(135deg, #00b4d8, #00d4ff)" 
                          : "rgba(0, 212, 255, 0.3)",
                        boxShadow: location.pathname === item.path 
                          ? "0 0 10px rgba(0, 212, 255, 0.5)" 
                          : "none",
                      }}
                    />
                    {item.name}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;