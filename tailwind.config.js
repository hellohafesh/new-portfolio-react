/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  themes: [
    {
      cake: {
        ...require('daisyui/src/colors/themes')['[data-theme=cake]'],
        primary: "#1eb854",

        secondary: "#D926A9",

        accent: "#1FB2A6",

        neutral: "#191D24",

        'base-100': "#2A303C",

        info: "#3ABFF8",

        success: "#36D399",

        warning: "#FBBD23",

        error: "#F87272",
      }
    },

  ],
}
