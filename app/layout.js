"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { ContextProvider } from '@/components/context-provider'

export default function RootLayout({ children }) {

	return (

		<ContextProvider>
			<html lang="en" className="scroll-smooth">
				<body className="bg-brand-2">
				{ children }
				</body>
			</html> 
		</ContextProvider>

	);

}
