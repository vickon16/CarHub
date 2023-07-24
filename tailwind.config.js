/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width : {
        clampWMd : "clamp(80rem, 110vw, 140rem)",
      },
      minWidth: {
        280: "280px",
        350: "350px",
        620: "620px",
      },
      maxWidth: {
        280: "280px",
      },
      fontSize: {
        clamp2Xs: "clamp(0.7rem, 0.85vw, 0.85rem)",
        clampXs: "clamp(0.9rem, 1vw, 1rem)",
        clampSm: "clamp(1rem, 1.1vw, 1.1rem)",
        clampMd: "clamp(1.1rem, 1.5vw, 1.5rem)",
        clampBase: "clamp(1.2rem, 1.8vw, 1.8rem)",
        clampLg: "clamp(1.5rem, 2.6vw, 2.6rem)",
        clampXl: "clamp(1.8rem, 3.1vw, 3.1rem)",
        clamp2Xl: "clamp(2.1rem, 3vw, 3rem)",
        clamp3Xl: "clamp(2.5rem, 4.5vw, 4.5rem)",
      },
      screens: {
        // min-width
        xs: { min: "460px" },
        sm: { min: "567px" },
        md: { min: "767px" },
        lg: { min: "992px" },
        xl: { min: "1200px" },
        "2xl": { min: "1600px" },

        // max-width breakpoints
        "max-xs": { max: "460px" },
        "max-sm": { max: "567px" },
        "max-md": { max: "767px" },
        "max-lg": { max: "992px" },
        "max-xl": { max: "1200px" },
        "max-2xl": { max: "1600px" },
      },
    },
  },
  plugins: [],
}
