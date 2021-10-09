module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('/images/background.png')",
      }),
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
};
