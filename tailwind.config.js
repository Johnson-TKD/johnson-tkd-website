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
			green : '#E3F7E2',
			yellow : '#FEF9E4',
			red : '#FEF3F3',
			brand : {
				1 : '#0000EE',
				2 : '#FAF9F6'
			}
		},
		extend : {
			fontFamily : {
				'lora' : ['Lora', 'Serif'],
				'montserrat' : ["'Montserrat'", 'sans-serif']
			}
		}
	},
	safelist : [
		'bg-red',
		'bg-green',
		'bg-yellow'
	],
	plugins : []
}
