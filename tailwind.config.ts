import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero.png')",
        'howToUse': "url('/images/howtouse.jpg')"
      },
      colors: {
        primary: '#F0F0F0',
        secondary: '#C3C3C3',
        primaryDark: '#121212',
        secondaryDark: '#282828'
      },
      screens: {
        'xs': '375px',
        '3xl': '1640px'
      },
    },
  },
  plugins: [],
}
export default config
