import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { User, Calendar, Sparkles, CheckCircle, Edit2, Save, X, Trash2 } from "lucide-react";
import { useState } from "react";

const ProfilePage = () => {
  const { registeredEvents, visitedEvents, removeFromCart } = useCart();
  const { profile, updateProfile } = useUser();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const totalAmount = registeredEvents.reduce((sum, e) => sum + e.price, 0);

  const handleSaveProfile = () => {
    updateProfile(editedProfile);
    setIsEditingProfile(false);
  };

  const handleCancelEdit = () => {
    setEditedProfile(profile);
    setIsEditingProfile(false);
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header with Edit */}
        <motion.div 
          className="text-center mb-10" 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #00b4d8, #00d4ff)" }}>
            <User size={48} className="text-black" />
          </div>
          
          {!isEditingProfile ? (
            <div>
              <h1 className="text-3xl font-festival font-bold text-gradient-gold">
                {profile.name || "Guest User"}
              </h1>
              <p className="text-muted-foreground mb-2">{profile.college}</p>
              {profile.year && <p className="text-sm text-muted-foreground">Year: {profile.year}</p>}
              <motion.button
                className="mt-4 px-4 py-2 rounded-lg flex items-center gap-2 mx-auto"
                style={{ background: "rgba(0, 212, 255, 0.2)", border: "1px solid rgba(0, 212, 255, 0.5)" }}
                onClick={() => setIsEditingProfile(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Edit2 size={16} />
                Edit Profile
              </motion.button>
            </div>
          ) : (
            <motion.div 
              className="p-6 rounded-2xl space-y-4"
              style={{ background: "rgba(10,20,30,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div>
                <label className="block text-sm font-semibold mb-2 text-left text-muted-foreground">Name</label>
                <input
                  type="text"
                  value={editedProfile.name}
                  onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-left text-muted-foreground">College</label>
                <input
                  type="text"
                  value={editedProfile.college}
                  onChange={(e) => setEditedProfile({ ...editedProfile, college: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-500 outline-none"
                  placeholder="Enter your college"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-left text-muted-foreground">Year</label>
                <select
                  value={editedProfile.year}
                  onChange={(e) => setEditedProfile({ ...editedProfile, year: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:border-cyan-500 outline-none"
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>

              <div className="flex gap-3 justify-center">
                <motion.button
                  className="px-6 py-2 rounded-lg flex items-center gap-2 font-semibold"
                  style={{ background: "linear-gradient(135deg, #00b4d8, #00d4ff)", color: "#000" }}
                  onClick={handleSaveProfile}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Save size={16} />
                  Save
                </motion.button>
                <motion.button
                  className="px-6 py-2 rounded-lg flex items-center gap-2 font-semibold"
                  style={{ background: "rgba(255, 107, 0, 0.2)", border: "1px solid rgba(255, 107, 0, 0.5)" }}
                  onClick={handleCancelEdit}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={16} />
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          {/* Registered Events Section */}
          <div className="p-6 rounded-2xl" style={{ background: "rgba(10,20,30,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-500" />
              <h2 className="text-lg font-semibold">Registered Events ({registeredEvents.length})</h2>
            </div>
            {registeredEvents.length === 0 ? (
              <p className="text-muted-foreground text-sm">No events registered yet. Add events to your cart and confirm registration.</p>
            ) : (
              <>
                <ul className="space-y-3 mb-4">
                  {registeredEvents.map(e => (
                    <motion.li 
                      key={e.id} 
                      className="flex justify-between items-center p-3 rounded-lg group"
                      style={{ background: "rgba(0,212,255,0.05)" }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <div>
                        <span className="font-medium">{e.name}</span>
                        <p className="text-xs text-muted-foreground">{e.category} • {e.date}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-primary font-bold">₹{e.price}</span>
                        <motion.button
                          className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-red-500/20"
                          onClick={() => removeFromCart(e.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Remove event"
                        >
                          <Trash2 size={16} className="text-red-500" />
                        </motion.button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-muted-foreground">Total to pay on event day:</span>
                  <span className="text-xl font-bold text-gradient-gold">₹{totalAmount}</span>
                </div>
              </>
            )}
          </div>

          {/* Events Explored Section */}
          <div className="p-6 rounded-2xl" style={{ background: "rgba(10,20,30,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-primary" />
              <h2 className="text-lg font-semibold">Events Explored ({visitedEvents.length})</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              {visitedEvents.length > 0 ? `You've checked out ${visitedEvents.length} events!` : "Start exploring events!"}
            </p>
          </div>

          {/* Festival Info Section */}
          <div className="p-6 rounded-2xl" style={{ background: "rgba(10,20,30,0.9)", border: "1px solid rgba(0,212,255,0.2)" }}>
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-primary" />
              <h2 className="text-lg font-semibold">Festival Info</h2>
            </div>
            <p className="text-muted-foreground text-sm">
              Varnothsava 2026 • March 15-16, 2026 • SMVITM Campus
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;