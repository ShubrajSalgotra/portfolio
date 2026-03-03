import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2A5FFF",
          dark: "#1E3FB3"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.2)"
      },
      borderRadius: {
        xl2: "1rem"
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
