import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Consultoria DJ - Especialistas em Marketing para DJs',
  description: 'Consultoria especializada para DJs, marketing musical e gestão de carreira artística. Transforme sua presença no mercado da música.',
  keywords: 'consultoria dj, marketing musical, gestão de carreira dj, marketing digital dj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 