module.exports = {
	content : [
		'./src/**/*.{js,jsx,ts,tsx}'
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
