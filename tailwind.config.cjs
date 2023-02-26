/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {

       colors: {
        primary: {
          1: '#e9ab53',
          2: '#f15e50',
//     Soft orange: #e9ab53
//     Soft red: #f15e50
        },
        neutral: {
          1: '#fffdfa',
          2: '#c5c6ce',
          3: '#5d5f79',
          4: '#00001a',
//        Off-white: #fffdfa
//        Grayish blue: #c5c6ce
//        Dark grayish blue: #5d5f79
//        Very dark blue: #00001a
        },
      }

    },
    screens: {
      'sm': '640px',
// - Mobile: 375px
// => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
