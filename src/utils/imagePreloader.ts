// Image preloader utility to cache gallery images
const GALLERY_IMAGES = [
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

// Set to track which images have been loaded
const loadedImages = new Set<string>();
let preloadStarted = false;

/**
 * Preloads all gallery images in the background
 * Uses Image objects to ensure browser caching
 */
export const preloadGalleryImages = () => {
  // Prevent multiple preload attempts
  if (preloadStarted) return;
  preloadStarted = true;

  // Preload images in batches to avoid overwhelming the browser
  const batchSize = 5;
  let currentBatch = 0;

  const preloadBatch = (startIndex: number) => {
    const endIndex = Math.min(startIndex + batchSize, GALLERY_IMAGES.length);
    
    for (let i = startIndex; i < endIndex; i++) {
      const src = GALLERY_IMAGES[i];
      
      // Skip if already loaded
      if (loadedImages.has(src)) continue;

      const img = new Image();
      
      img.onload = () => {
        loadedImages.add(src);
      };
      
      img.onerror = () => {
        // Silently handle errors - image might not exist yet
        console.warn(`Failed to preload image: ${src}`);
      };
      
      // Set src to trigger load
      img.src = src;
    }

    // Continue with next batch after a short delay
    if (endIndex < GALLERY_IMAGES.length) {
      setTimeout(() => preloadBatch(endIndex), 100);
    }
  };

  // Start preloading
  preloadBatch(0);
};

/**
 * Get all gallery images
 */
export const getGalleryImages = () => GALLERY_IMAGES;

