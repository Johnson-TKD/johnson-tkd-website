"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { ContextProvider } from '@/components/context-provider'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ContextProvider>
  )
}
