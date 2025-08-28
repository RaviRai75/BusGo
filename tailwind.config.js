/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
  keyframes: {
    glow: {
      '0%': { textShadow: '0 0 5px gold, 0 0 10px gold, 0 0 20px orange' },
      '100%': { textShadow: '0 0 15px yellow, 0 0 30px gold, 0 0 45px orange' },
    },
    spark: {
      '0%': { transform: 'translateY(0) scale(0.5)', opacity: '1' },
      '50%': { transform: 'translateY(-75px) scale(1)', opacity: '0.8' },
      '100%': { transform: 'translateY(-200px) scale(0.2)', opacity: '0' },
    },
  },
  animation: {
    glow: 'glow 2s infinite alternate',
    spark: 'spark 3s infinite',
    'spark-delay': 'spark 3s infinite 1.5s',
  },
}
  },
  plugins: [],
}
