
module.exports = {
  important: true, // Ensures Tailwind styles have higher priority
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Cormorant', 'serif'],  // Your custom font for general use
        paragraph: ['Manrope', 'sans-serif'],  // New font for paragraphs
      }
    }
  },
  plugins: [],
};
