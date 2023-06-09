/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        DarkSlateGrey: ' hsl(234, 29%, 20%)',
        CharcoalGrey: 'hsl(235, 18%, 26%)',
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
        Tomato: 'hsl(4, 100%, 67%)',
        TomatoGradient: ' linear-gradient(#ff8a00, #e52e71)'
      },
    },
  },
  plugins: [],
}