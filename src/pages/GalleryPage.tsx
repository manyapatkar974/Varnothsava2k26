import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "/gallery/image0.jpg",
  "/gallery/image1.jpg",
  "/gallery/image2.jpg",
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
  "/gallery/image5.jpg",
  "/gallery/image6.jpg",
  "/gallery/image7.jpg",
  "/gallery/image8.jpg",
  "/gallery/image9.jpg",
  "/gallery/image10.jpg",
  "/gallery/image11.jpg",
  "/gallery/image12.jpg",
  "/gallery/image13.jpg",
  "/gallery/image14.jpg",
  "/gallery/image15.jpg",
  "/gallery/image16.jpg",
  "/gallery/image17.jpg",
  "/gallery/image18.jpg",
  "/gallery/image19.jpg",
  "/gallery/image20.jpg",
  "/gallery/image21.jpg",
  "/gallery/image22.jpg",
  "/gallery/image23.jpg",
  "/gallery/image24.jpg",
  "/gallery/image25.jpg",
  "/gallery/image26.jpg",
  "/gallery/image27.jpg",
  "/gallery/image28.jpg",
  "/gallery/image29.jpg",
  "/gallery/image30.jpg",
  "/gallery/image31.jpg",
  "/gallery/image32.jpg",
  "/gallery/image33.jpg",
  "/gallery/image34.jpg",
  "/gallery/image35.jpg",
  "/gallery/image36.jpg",
  "/gallery/image37.jpg",
  "/gallery/image38.jpg",
  "/gallery/image39.jpg",
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05 }}
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
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-white text-sm font-semibold"
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
            className="absolute top-6 right-6 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setSelectedImage(null)}
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
          />
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;
