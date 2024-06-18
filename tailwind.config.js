/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        c1: '#eeebe6',
        c2: '#dfcaad',
        c3: '#ceb698',
        c4: '#b1ccd4',
        c5: '#76929e',
      },
      backgroundImage: {
        "bg1": 'url("./assets/bg-2.svg")', 
        "bg2": 'url("./assets/bg1.svg")', 
        
      }
    },
  },
  plugins: [],
}