/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif"]
      },
      colors: {
        // Sea-green palette (calm, cool, professional)
        sea: {
          50:  "#f0fdfb",
          100: "#d9fbf5",
          200: "#b6f4ea",
          300: "#86e8db",
          400: "#51d7c7",
          500: "#2cc2b1",
          600: "#16a695",
          700: "#118a7c",
          800: "#0f766e",
          900: "#0b5c57",
          950: "#063b3a"
        }
      },
      boxShadow: {
        card: "0 4px 24px rgba(9, 84, 78, 0.08)",
        soft: "0 1px 2px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px"
      }
    },
  },
  plugins: [],
}
