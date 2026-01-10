export type EventCategory = "cultural" | "technical" | "sports" | "food" | "moto" | "annual" | "annual-day" | "college-band" | "extra";

export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  bgGradient: string;
  borderColor: string;
  shadow: string;
}

export const themes: Record<EventCategory, Theme> = {
  // Orange theme for cultural events
  cultural: {
    primary: "#ff6b00",
    secondary: "#ffaa00",
    accent: "#ffd700",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #ff6b00 0%, #ffaa00 100%)",
    borderColor: "#ff8c00",
    shadow: "0 0 30px rgba(255, 107, 0, 0.5)",
  },
  
  // Purple theme for technical events
  technical: {
    primary: "#7c3aed",
    secondary: "#a855f7",
    accent: "#d946ef",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
    borderColor: "#9333ea",
    shadow: "0 0 30px rgba(124, 58, 237, 0.5)",
  },
  
  // Green theme for sports
  sports: {
    primary: "#16a34a",
    secondary: "#22c55e",
    accent: "#4ade80",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
    borderColor: "#22c55e",
    shadow: "0 0 30px rgba(22, 163, 74, 0.5)",
  },
  
  // Red/Pink theme for food
  food: {
    primary: "#dc2626",
    secondary: "#f43f5e",
    accent: "#fb7185",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #dc2626 0%, #f43f5e 100%)",
    borderColor: "#f87171",
    shadow: "0 0 30px rgba(220, 38, 38, 0.5)",
  },
  
  // Orange/Red theme for moto (motorcycle)
  moto: {
    primary: "#ea580c",
    secondary: "#f97316",
    accent: "#fb923c",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
    borderColor: "#f97316",
    shadow: "0 0 30px rgba(234, 88, 12, 0.5)",
  },
  
  // Blue theme for annual events
  annual: {
    primary: "#0284c7",
    secondary: "#0369a1",
    accent: "#06b6d4",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)",
    borderColor: "#0369a1",
    shadow: "0 0 30px rgba(2, 132, 199, 0.5)",
  },
  
  // Gold/Blue theme for annual day
  "annual-day": {
    primary: "#1e40af",
    secondary: "#1e3a8a",
    accent: "#fbbf24",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
    borderColor: "#fbbf24",
    shadow: "0 0 30px rgba(30, 64, 175, 0.5)",
  },
  
  // Cyan/Teal theme for college band
  "college-band": {
    primary: "#0891b2",
    secondary: "#06b6d4",
    accent: "#22d3ee",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)",
    borderColor: "#22d3ee",
    shadow: "0 0 30px rgba(8, 145, 178, 0.5)",
  },
  
  // Indigo theme for extra/misc events
  extra: {
    primary: "#4f46e5",
    secondary: "#6366f1",
    accent: "#818cf8",
    text: "#fff",
    bgGradient: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
    borderColor: "#818cf8",
    shadow: "0 0 30px rgba(79, 70, 229, 0.5)",
  },
};

export const getTheme = (category: EventCategory): Theme => {
  return themes[category] || themes.extra;
};
