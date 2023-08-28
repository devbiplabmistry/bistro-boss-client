/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans'],
        roboto: ['Roboto', 'sans'],
        cinzel: ['cinzel', 'sans'],
      },
    },
  },
  plugins: [require("daisyui")],
}

