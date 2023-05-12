/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Homi': "url('./Assets/brennan-burling-ay53qag90W8-unsplash.jpg')", 
        'Homi-dark': "url('./Assets/oleg-laptev-7jQh3EiS8Bs-unsplash.jpg')",
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}