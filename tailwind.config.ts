
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cyberpunk Colors
				'neon-green': {
					'300': '#CCFF00',
					'400': '#B8FF00', 
					'500': '#9AFF00'
				},
				'cyber-blue': '#00FFFF',
				'toxic-purple': '#8A00FF',
				'burn-orange': '#FF4500',
				'deep-black': {
					'900': '#000000',
					'800': '#0A0A0A',
					'700': '#111111'
				}
			},
			fontFamily: {
				'cyber': ['JetBrains Mono', 'Courier New', 'monospace'],
				'display': ['Orbitron', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #CCFF00, 0 0 10px #CCFF00, 0 0 15px #CCFF00',
						textShadow: '0 0 5px #CCFF00'
					},
					'50%': { 
						boxShadow: '0 0 10px #CCFF00, 0 0 20px #CCFF00, 0 0 30px #CCFF00',
						textShadow: '0 0 10px #CCFF00, 0 0 20px #CCFF00'
					}
				},
				'typewriter': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'chromatic': {
					'0%': { 
						textShadow: '2px 0 #ff0000, -2px 0 #00ffff' 
					},
					'25%': { 
						textShadow: '3px 0 #ff0000, -3px 0 #00ffff' 
					},
					'50%': { 
						textShadow: '2px 0 #ff0000, -2px 0 #00ffff' 
					},
					'75%': { 
						textShadow: '4px 0 #ff0000, -4px 0 #00ffff' 
					},
					'100%': { 
						textShadow: '2px 0 #ff0000, -2px 0 #00ffff' 
					}
				},
				'scan-line': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'fracture': {
					'0%': { 
						transform: 'skew(0deg) scale(1)',
						clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
					},
					'50%': { 
						transform: 'skew(2deg) scale(1.02)',
						clipPath: 'polygon(5% 0%, 95% 5%, 90% 100%, 10% 95%)'
					},
					'100%': { 
						transform: 'skew(0deg) scale(1)',
						clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.3s infinite',
				'neon-pulse': 'neon-pulse 2s infinite',
				'typewriter': 'typewriter 3s steps(40) 1s forwards',
				'blink': 'blink 1s infinite',
				'float': 'float 6s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 10s linear infinite',
				'chromatic': 'chromatic 2s infinite',
				'scan-line': 'scan-line 2s linear infinite',
				'fracture': 'fracture 0.3s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
