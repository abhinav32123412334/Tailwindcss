/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],  // Specify the paths to your HTML files
  theme: {
    extend: {
      fontSize: {
        small: '28px',
        medium: '40px',
        huge: '50px'
      }, 
      colors: {
        customBlue: '#1E40AF',  // Add custom color
        customPink: '#F43F5E', // Add another custom color
        customGray: '#2E2E2E', 
      },
      fontFamily: {
        customFont: ['Ambar Pearl Personal Use', 'sans-serif'],  // Add your custom font
      },
    },
  },
  plugins: [],
}; 