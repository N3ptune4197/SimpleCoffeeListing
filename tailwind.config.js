/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      fontFamily: {
        'dmsans' : ['"DM Sans"', 'sans-serif']
      },

      colors: {
        'first-bg': '#121315',
        'second-bg': '#1c1d1f',
        'paragraph': '#6F757C',
        'button': '#BEE3CC',
        'normal': '#FEF7EE',
        'tag': '#F6C768',
        'soldout':'#ED735D',
        
      },

      backgroundImage: {
        'cafebg': "url('./src/assets/bg-cafe.jpg')",
      }

    },
  },
  
}

