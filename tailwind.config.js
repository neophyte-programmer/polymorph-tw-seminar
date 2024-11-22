const myPreset = require('nutifafa-tw-preset');

/** @type {import('tailwindcss').Config} */
export default {
  presets: [myPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

