/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": "var(--dark)",
        "light": "var(--light)",
        "primary": "var(--primary)",
        "dark-card": "var(--dark-card)",
        "light-card": "var(--light-card)",
        "dark-second-level": "var(--dark-second-level)",
        "light-second-level": "var(--light-second-level)"
      },
    },
  },
  plugins: [],
}