/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tea-green': '#caffd0',
        'light-cyan': '#c9e4e7',
        'wisteria': '#b4a0e5',
        'neon-violet': '#ca3cff',
        'coffee-bean': '#1e1014',
      },
    },
  },
  plugins: [],
};
