/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    styled: true,
    themes: [{
      mytheme: {
        "primary": "#c4b5fd",
        "secondary": "#a78bfa",
        "accent": "#a855f7",
        "neutral": "#6b7280",
        "base-100": "#FFFFFF",
        "info": "#7dd3fc",
        "success": "#5eead4",
        "warning": "#fde047",
        "error": "#f87171",
      },
    }, "cupcake", "dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}
