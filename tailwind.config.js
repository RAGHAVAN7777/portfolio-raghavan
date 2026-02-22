/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#050505',
        'obsidian': '#0a0a0a',
        'cyan-glow': 'rgba(34, 211, 238, 0.4)',
      },
      letterSpacing: {
        'tighter-extra': '-0.05em',
        'widest-extra': '0.2em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      backgroundImage: {
        'grid-white': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [],
}