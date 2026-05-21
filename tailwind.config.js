/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nx-bg': '#050816',
        'nx-blue': '#2563EB',
        'nx-cyan': '#22D3EE',
        'nx-purple': '#7C3AED',
        'nx-white': '#E5E7EB',
        'nx-dim': '#1E2A4A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      },
      backgroundImage: {
        'neural-gradient': 'radial-gradient(ellipse at center, #2563EB22 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(ellipse at center, #22D3EE33 0%, transparent 60%)',
        'glow-purple': 'radial-gradient(ellipse at center, #7C3AED22 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
