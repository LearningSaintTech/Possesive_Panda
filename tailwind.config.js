/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
