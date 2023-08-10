module.exports = {
	content : [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme : {
		colors : {
			transparent : 'transparent',
			black : '#333333',
			white : '#FFFFFF',
			brand : {
				1 : '#0000EE'
			}
		},
		extend : {
			fontFamily : {
				'lora' : ['Lora', 'Serif'],
				'montserrat' : ["'Montserrat'", 'sans-serif']
			}
		}
	},
	plugins : []
}
