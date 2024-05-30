/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "accordion-down": "accordion-down 500ms linear forwards",
        "accordion-up": "accordion-up 500ms linear forwards",
        scroll: "scroll 15s linear infinite",
        scroll2: "scroll2 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll2: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "100px" },
        },
        "accordion-up": {
          from: { height: "100px" },
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
  plugins: [
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
