/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
        code: ['JetBrains Mono', 'monospace'],
      },
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
