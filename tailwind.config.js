import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E46246',// Example custom color
        primaryDark: '#B64E38',// Example custom color
        primaryLight: '#E9816A',// Example custom color
        secondary: '#ffed4a', 
        accent: '',// Example custom color
        background: '#F8F7F4', // Example custom color
        // Add more custom colors as needed
      },
      aspectRatio: {
        '17/9': '17 / 9',
      },

    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};