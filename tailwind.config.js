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
        primary: '#E46246',
        primaryDark: '#B64E38',
        primaryLight: '#E9816A',
        secondary: '#ffed4a', 
        accent: '',
        background: '#F8F7F4', 
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