import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { UserProvider } from "@/context/UserContext";
import IntroAnimation from "@/components/intro/IntroAnimation";
import Navbar from "@/components/layout/Navbar";
import HomePage from "@/pages/HomePage";
import EventsPage from "@/pages/EventsPage";
import EventDetailPage from "@/pages/EventDetailPage";
import CulturalPage from "@/pages/CulturalPage";
import MotoManiaPage from "@/pages/MotoManiaPage";
import FoodFestPage from "@/pages/FoodFestPage";
import GalleryPage from "@/pages/GalleryPage";
import ProfilePage from "@/pages/ProfilePage";
import FestCart from "@/components/cart/FestCart";
import NotFound from "@/pages/NotFound";
import { preloadGalleryImages } from "@/utils/imagePreloader";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  // Preload gallery images when app starts
  useEffect(() => {
    preloadGalleryImages();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <UserProvider>
            <Toaster />
            <Sonner />
            {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
            <BrowserRouter>
              {!showIntro && <Navbar />}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/event/:id" element={<EventDetailPage />} />
                <Route path="/cultural" element={<CulturalPage />} />
                <Route path="/moto-mania" element={<MotoManiaPage />} />
                <Route path="/food-fest" element={<FoodFestPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/cart" element={<FestCart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </UserProvider>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
