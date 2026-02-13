/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3D2B", // Deep Forest Green
        secondary: "#DDE3E1", // Mist Gray
        accent: "#C9A227", // Soft Gold
        background: "#F8F5F0", // Warm Ivory
        fog: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fog-drift': 'fog-drift 30s linear infinite',
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fog-drift': {
          '0%': { transform: 'translateX(-5%) translateY(0)' },
          '50%': { transform: 'translateX(5%) translateY(2%)' },
          '100%': { transform: 'translateX(-5%) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
