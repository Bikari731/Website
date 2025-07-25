import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gn: '#df1e26',
        gre: '#df1e26',
        rd: '#000000',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeInDown: 'fadeInDown 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
        fadeInLeft: 'fadeInLeft 1s ease-out forwards',
        zoomIn: 'zoomIn 4s ease-in-out forwards',
        marquee: 'marquee 200s linear infinite',
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to bottom, #EB1D26 0%, #000000 50%, #02A653 100%)',
      },
      screens: {
        xs: '375px',
        xm: '425px'
      },
    },
  },
  plugins: [],
};

export default config;
