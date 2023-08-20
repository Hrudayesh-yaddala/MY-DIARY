// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

