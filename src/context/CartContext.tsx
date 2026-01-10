import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartEvent {
  id: string;
  name: string;
  category: string;
  date: string;
  price: number;
}

interface CartContextType {
  cart: CartEvent[];
  addToCart: (event: CartEvent) => void;
  removeFromCart: (eventId: string) => void;
  isInCart: (eventId: string) => boolean;
  clearCart: () => void;
  visitedEvents: string[];
  markEventVisited: (eventId: string) => void;
  registeredEvents: CartEvent[];
  confirmRegistration: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartEvent[]>(() => {
    const saved = localStorage.getItem("festCart");
    return saved ? JSON.parse(saved) : [];
  });

  const [visitedEvents, setVisitedEvents] = useState<string[]>(() => {
    const saved = localStorage.getItem("visitedEvents");
    return saved ? JSON.parse(saved) : [];
  });

  const [registeredEvents, setRegisteredEvents] = useState<CartEvent[]>(() => {
    const saved = localStorage.getItem("registeredEvents");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("festCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("visitedEvents", JSON.stringify(visitedEvents));
  }, [visitedEvents]);

  useEffect(() => {
    localStorage.setItem("registeredEvents", JSON.stringify(registeredEvents));
  }, [registeredEvents]);

  const addToCart = (event: CartEvent) => {
    if (!cart.find((e) => e.id === event.id)) {
      setCart([...cart, event]);
    }
  };

  const removeFromCart = (eventId: string) => {
    setCart(cart.filter((e) => e.id !== eventId));
  };

  const isInCart = (eventId: string) => {
    return cart.some((e) => e.id === eventId);
  };

  const clearCart = () => {
    setCart([]);
  };

  const markEventVisited = (eventId: string) => {
    if (!visitedEvents.includes(eventId)) {
      setVisitedEvents([...visitedEvents, eventId]);
    }
  };

  const confirmRegistration = () => {
    // Add cart items to registered events (avoiding duplicates)
    const newRegistered = [...registeredEvents];
    cart.forEach((event) => {
      if (!newRegistered.find((e) => e.id === event.id)) {
        newRegistered.push(event);
      }
    });
    setRegisteredEvents(newRegistered);
    clearCart();
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      isInCart, 
      clearCart,
      visitedEvents,
      markEventVisited,
      registeredEvents,
      confirmRegistration
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};