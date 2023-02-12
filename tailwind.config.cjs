/** @type {import('tailwindcss').Config} */

const size = {
  xs:"8px",
  sm:"16px",
  base:"24px",
  md:"32px",
  lg:"48px",
  xl:"72px",
  "2xl":"96px",
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      primary: [ "Comfortaa", "cursive"],
      secondary: ["Montserrat", "sans-serif"]
    },
    extend: {
      animation: {
        'ping-delay-1': 'ping 1s .15s cubic-bezier(0, 0, 0.2, 1) infinite;',
        'ping-delay-2': 'ping 1s .2s cubic-bezier(0, 0, 0.2, 1) infinite;',
      },
      colors: {
        primary: "#76B300",
        background: "#191919",
        "danger-light": "#C82525",
        danger: "#A01E1E",
        "danger-dark": "#781616",
        "info-light": "#474DDD",
        info: "#1920D4",
        "info-dark": "#141AAA",
        "brand-100":"#6AA100",
        "brand-200":"#5E8F00",
        "brand-300":"#537D00",
        "brand-400":"#476B00",
        "brand-500":"#3B5A00",
        "brand-600":"#2F4800",
        "brand-700":"#233600",
        "brand-800":"#182400",
        "dark-100":"#5E5E5E",
        "dark-200":"#474747",
        "dark-300":"#474747",
        "dark-400":"#303030",
        "dark-500":"#171717",
        "dark-600":"#141414",
        "dark-700":"#121212",
        "dark-800":"#0F0F0F",
      },
      spacing:{
        xs:"8px",
        sm:"16px",
        base:"24px",
        md:"32px",
        lg:"48px",
        xl:"72px",
        "2xl":"96px",
      },
      fontsize: {

      }
    },
  },
  plugins: [],
};
