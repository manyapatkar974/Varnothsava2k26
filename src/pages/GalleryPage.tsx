import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { X } from "lucide-react";
import { getGalleryImages } from "@/utils/imagePreloader";

// Images are preloaded globally when app starts, so they're cached by the browser
const images = getGalleryImages();

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Optimize animation delays for mobile - reduce delay interval
  const optimizedDelays = useMemo(() => {
    return images.map((_, i) => Math.min(i * 0.02, 0.5)); // Cap max delay at 0.5s
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <motion.h1 
        className="text-4xl md:text-6xl font-festival font-black text-gradient-gold text-center mb-12"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }}
      >
        Gallery
      </motion.h1>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        {images.length === 0 ? (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-cyan-400 text-lg">No images added yet. Add your images to the gallery!</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div 
                key={i} 
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                initial={{ opacity: 0, scale: 0.8 }} 
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }} 
                transition={{ delay: optimizedDelays[i], duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(img)}
                style={{
                  border: "2px solid rgba(0, 212, 255, 0.5)",
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)",
                }}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${i}`} 
                  loading="lazy"
                  decoding="async"
                  className="gallery-image w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                  style={{ contentVisibility: "auto" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center pointer-events-none md:pointer-events-auto">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-white text-sm font-semibold hidden md:block"
                  >
                    View
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.button 
            className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={32} />
          </motion.button>
          <motion.img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-[90vh] rounded-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            loading="eager"
          />
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;
