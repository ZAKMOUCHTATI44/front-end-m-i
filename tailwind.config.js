/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/@tw/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: true,
  corePlugins: {
    preflight: false,
  },
}

