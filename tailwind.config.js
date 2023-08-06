/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "scissors-origin": "hsl(39, 89%, 49%)",
          "scissors-to": "hsl(40, 84%, 53%)",
          "scissors-shadow": "#c96d1d",
          "paper-origin": "hsl(230, 89%, 62%)",
          "paper-to": "hsl(230, 89%, 65%)",
          "paper-shadow": "#2740be",
          "rock-origin": "hsl(349, 71%, 52%)",
          "rock-to": "hsl(349, 70%, 56%)",
          "rock-shadow": "#9e152e",
          "lizard-origin": "hsl(261, 73%, 60%)",
          "lizard-to": "hsl(261, 72%, 63%)",
          "cyan-origin": "hsl(189, 59%, 53%)",
          "cyan-to": "hsl(189, 58%, 57%)",
        },
        neutral: {
          dark: "hsl(229, 25%, 31%)",
          score: "hsl(229, 64%, 46%)",
          header: "hsl(217, 16%, 45%)",
        },
        background: {
          origin: "hsl(214, 47%, 23%)",
          to: "hsl(237, 49%, 15%)",
        },
      },
      boxShadow: {
        "game-item-shadow": "inset 0 8px 0 rgba(96,110,133,.25)",
        "game-item-winner":
          "0 0 0 40px rgba(255,255,255,0.05), 0 0 0 80px rgba(255,255,255,0.05), 0 0 0 130px rgba(255,255,255,0.05)",
        "game-item-winner-mb":
          "0 0 0 15px rgba(255,255,255,0.05), 0 0 0 40px rgba(255,255,255,0.05), 0 0 0 70px rgba(255,255,255,0.05)",
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed"],
      },
      borderWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
