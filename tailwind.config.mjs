/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#01478c',
          cyan: '#00C2FF',
          purple: '#8B5CF6',
          green: '#22C55E',
          orange: '#FF5E14',
          yellow: '#FFD233',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 22, 47, 0.08)',
        'premium': '0 20px 40px -15px rgba(20, 87, 255, 0.15)',
        'glow': '0 0 20px 0 rgba(20, 87, 255, 0.35)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #1457FF 0%, #00C2FF 100%)',
        'brand-glow': 'linear-gradient(135deg, #1457FF 0%, #8B5CF6 100%)',
        'orange-gradient': 'linear-gradient(135deg, #FF5E14 0%, #FFD233 100%)',
      },
    },
  },
  plugins: [],
}
