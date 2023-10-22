/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(80%)",
          },
        },
      },
      animation: {
        "fade-out-down": "fade-out-down 10s ease-out forwards",
      },
    },
  },
  plugins: [],
};
