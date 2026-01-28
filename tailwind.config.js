/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', "class"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'SF Pro Display',
  				'SF Pro Text',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Monaco',
  				'Cascadia Code',
  				'monospace'
  			]
  		},
  		fontSize: {
  			'large-title': [
  				'34px',
  				{
  					lineHeight: '41px',
  					letterSpacing: '0.41px'
  				}
  			],
  			'title-1': [
  				'28px',
  				{
  					lineHeight: '34px',
  					letterSpacing: '0.36px'
  				}
  			],
  			'title-2': [
  				'22px',
  				{
  					lineHeight: '28px',
  					letterSpacing: '0.35px'
  				}
  			],
  			'title-3': [
  				'20px',
  				{
  					lineHeight: '24px',
  					letterSpacing: '0.38px'
  				}
  			],
  			headline: [
  				'17px',
  				{
  					lineHeight: '22px',
  					letterSpacing: '-0.41px'
  				}
  			],
  			body: [
  				'17px',
  				{
  					lineHeight: '22px',
  					letterSpacing: '-0.41px'
  				}
  			],
  			callout: [
  				'16px',
  				{
  					lineHeight: '21px',
  					letterSpacing: '-0.32px'
  				}
  			],
  			subhead: [
  				'15px',
  				{
  					lineHeight: '20px',
  					letterSpacing: '-0.24px'
  				}
  			],
  			footnote: [
  				'13px',
  				{
  					lineHeight: '18px',
  					letterSpacing: '-0.08px'
  				}
  			],
  			'caption-1': [
  				'12px',
  				{
  					lineHeight: '16px',
  					letterSpacing: '0'
  				}
  			],
  			'caption-2': [
  				'11px',
  				{
  					lineHeight: '13px',
  					letterSpacing: '0.07px'
  				}
  			]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.5s ease-out',
  			'slide-up': 'slideUp 0.3s ease-out',
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		transitionTimingFunction: {
  			'ease-in-out-expo': 'cubic-bezier(0.86, 0, 0.07, 1)',
  			'spring-gentle': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}