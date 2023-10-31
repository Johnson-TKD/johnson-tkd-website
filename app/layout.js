import './globals.css'

export default function RootLayout({ children }) {

	return (

		<html lang="en" className="scroll-smooth">
			<body className="bg-brand-2">
				{ children }
			</body>
		</html> 

	);

}
