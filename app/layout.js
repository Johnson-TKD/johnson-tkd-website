'use client'

import { ContextProvider } from '@/components/context-provider';
import './globals.css'

export default function RootLayout({ children }) {

	return (

		<html lang="en" className="scroll-smooth">
			<body className="bg-brand-2">
				<ContextProvider>
					{ children }
				</ContextProvider>
			</body>
		</html> 

	);

}
