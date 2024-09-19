/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  theme: {
    screens: {
      sm: '550px',
      md: '678px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 500ms linear forwards",
        "accordion-up": "accordion-up 500ms linear forwards",
        scroll: "scroll 15s linear infinite",
        scrollReverse: "scrollReverse 15s linear infinite",
        moveUp: "moveUp 15s linear infinite",
        moveDown: "moveDown 15s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        swipeOut: "swipeOut 500ms ease-in-out forwards",
        swipeIn: "swipeIn 500ms ease-in-out forwards",
        swipeInFromLeft: "swipeInFromLeft 500ms ease-in-out forwards",
        swipeInFromRight: "swipeIn 500ms ease-in-out forwards",
      },
      keyframes: {
        swipeOut: {
          from: {
            transform: "translateX(0)",
            opacity: "1",
          },
          to: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
        },
        swipeIn: {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        swipeInFromLeft: {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        moveUp: {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        },
        moveDown: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0%)" },
        },
        scroll: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        scrollReverse: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "150px" },
        },
        "accordion-up": {
          from: { height: "150px" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        "custom-gradient": `
          linear-gradient(to bottom right, #60E2FF 2%, #3A8899 50%) bottom right / 50% 50% no-repeat,
          linear-gradient(to bottom left, #60E2FF 2%, #3A8899 50%) bottom left / 50% 50% no-repeat,
          linear-gradient(to top left, #60E2FF 2%, #3A8899 50%) top left / 50% 50% no-repeat,
          linear-gradient(to top right, #60E2FF 2%, #3A8899 50%) top right / 50% 50% no-repeat
        `,
      },
      mixBlendMode: {
        "hard-light": "hard-light",
      },
      filter: {
        "blur-custom": "blur(120.96385192871094px)",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive", "hover"],
      mixBlendMode: ["responsive", "hover"],
      filter: ["responsive", "hover"],
    },
  },

  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-in-out',
        'slide-up': 'slide-up 0.7s ease-in-out',
        'slide-down': 'slide-down 0.7s ease-in-out',
      },
    },
  },

  // tailwind.config.js
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, #2A2A2A 0%, rgba(0, 17, 26, 0.00) 100%)',
      },
      opacity: {
        '10': '0.1',
      },
    },
  },



  plugins: [
    require("tailwind-scrollbar"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".mix-blend-hard-light": {
          "mix-blend-mode": "hard-light",
        },
        ".filter-blur-custom": {
          filter: "blur(120.96385192871094px)",
        },
        ".animation-delay-1": {
          "animation-delay": "calc(15s * -1)",
        },
        ".animation-delay-2": {
          "animation-delay": "calc(15s /-2)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
