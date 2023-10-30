export const Menu = ( props ) => (

	<svg
		{
			...{
				viewBox : '0 0 24 24',
				xmlns : 'http://www.w3.org/2000/svg',
				...props
			}
		}
	>
		<path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
	</svg>

);

export const Times = ( props ) => (

	<svg
		{
			...{
				viewBox : '0 0 24 24',
				xmlns : 'http://www.w3.org/2000/svg',
				...props
			}
		}
	>
		<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
	</svg>

);

export const Location = ( props ) => (

	<svg	
		{
			...{
				xmlns : 'http://www.w3.org/2000/svg',
				fill : 'none',
				viewBox : '0 0 24 24',
				stroke : 'currentColor',
				...props
			}
		}
	>
		<path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
		<path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
	</svg>

)

export const Check = ( props ) => (

	<svg 
		{
			...{
				xmlns : 'http://www.w3.org/2000/svg',
				fill : 'none',
				viewBox : '0 0 24 24',
				strokeWidth : '1.5',
				stroke : 'currentColor',
				...props
			}
		}
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
	</svg>

)