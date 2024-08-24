/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.9)",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(255, 255, 255, 0.7)",
        },
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        inherit: "inherit",
        sedan: "Sedan",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      "11xl": "1.875rem",
      lg: "1.125rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
    screens: {
      mq767: {
        raw: "screen and (max-width: 767px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
