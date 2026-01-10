import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2, CreditCard, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const FestCart = () => {
  const { cart, removeFromCart, confirmRegistration } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((sum, event) => sum + event.price, 0);

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handleConfirm = () => {
    confirmRegistration();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      setShowPayment(false);
      navigate("/profile");
    }, 2000);
  };

  if (confirmed) {
    return (
      <motion.div 
        className="min-h-screen pt-24 px-6 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl font-festival font-bold text-gradient-gold mb-4">
            Registration Confirmed!
          </h2>
          <p className="text-muted-foreground mb-2">
            Your events have been registered successfully.
          </p>
          <p className="text-sm text-primary">
            Redirecting to your profile...
          </p>
        </div>
      </motion.div>
    );
  }

  if (showPayment) {
    return (
      <motion.div 
        className="min-h-screen pt-24 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-festival font-bold text-gradient-gold mb-8 text-center">
            Confirm Registration
          </h2>
          
          <div 
            className="p-6 rounded-2xl mb-6"
            style={{
              background: "rgba(10, 20, 30, 0.9)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-primary" size={24} />
              <span className="text-lg font-semibold">Payment Information</span>
            </div>
            
            <div className="p-4 rounded-xl mb-6" style={{ background: "rgba(0, 212, 255, 0.1)" }}>
              <p className="text-center text-primary font-semibold">
                💰 Payment will be done on the event day
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Please carry the exact amount in cash
              </p>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-center text-lg">
                <span>Total Amount:</span>
                <span className="text-gradient-gold font-bold">₹{totalAmount}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button
              className="flex-1 py-3 rounded-xl font-semibold"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
              onClick={() => setShowPayment(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Back
            </motion.button>
            <motion.button
              className="flex-1 py-3 rounded-xl font-bold btn-festival"
              onClick={handleConfirm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Confirm Registration
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen pt-24 px-6 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <ShoppingCart className="text-primary" size={32} />
          <h1 className="text-3xl md:text-4xl font-festival font-bold text-gradient-gold">
            Fest Cart
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart size={60} className="text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Add events to get started!</p>
            <motion.button
              className="btn-festival"
              onClick={() => navigate("/events")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Events
            </motion.button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="flex items-center justify-between p-4 rounded-xl"
                  style={{
                    background: "rgba(10, 20, 30, 0.9)",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <h3 className="font-semibold text-lg">{event.name}</h3>
                    <p className="text-sm text-muted-foreground">{event.category} • {event.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-bold">₹{event.price}</span>
                    <motion.button
                      className="p-2 rounded-lg hover:bg-destructive/20 transition-colors"
                      onClick={() => removeFromCart(event.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={18} className="text-destructive" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div 
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(10, 20, 30, 0.9)",
                border: "1px solid rgba(0, 212, 255, 0.3)",
              }}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg">Total ({cart.length} events)</span>
                <span className="text-2xl font-bold text-gradient-gold">₹{totalAmount}</span>
              </div>
              <motion.button
                className="w-full btn-festival py-4"
                onClick={handleCheckout}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Proceed to Register
              </motion.button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default FestCart;