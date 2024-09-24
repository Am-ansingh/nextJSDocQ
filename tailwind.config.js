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
        'rectangle-image' : "url('/public/Rectangle.png')"
      },
      fontFamily: {
        nunito: [ "Nunito", "sans-serif"],
      },


    },
  },
  plugins: [],
};
