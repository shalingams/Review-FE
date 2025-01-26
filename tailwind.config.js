/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['label-checked'],
    },
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('label-checked', ({ modifySelectors, separator }) => {
          modifySelectors(
              ({ className }) => {
                  const eClassName = e(`label-checked${separator}${className}`);
                  const yourSelector = 'input[type="radio"]';
                  return `${yourSelector}:checked ~ .${eClassName}`;
              }
          )
      })
  }),
  ],
}

