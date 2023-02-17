/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  important:"#__next",
  theme: {
    extend: {
      colors:{
        primary:'var(--color-primary)',
        secondary:'var(--color-secondary)',
        accent:'var(--color-accent)'
      }
    },
  },
  plugins: [],
}
