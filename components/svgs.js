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