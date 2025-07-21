import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Consultoria Jurídica e Contábil | Seu Negócio em Boas Mãos',
  description: 'Soluções integradas em advocacia e contabilidade para impulsionar seu negócio. Atendimento personalizado e equipe especializada.',
  keywords: 'advocacia empresarial, contabilidade, consultoria jurídica, consultoria contábil, direito empresarial, planejamento tributário',
  authors: [{ name: 'Consultoria Jurídica e Contábil' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Consultoria Jurídica e Contábil | Seu Negócio em Boas Mãos',
    description: 'Soluções integradas em advocacia e contabilidade para impulsionar seu negócio.',
    siteName: 'Consultoria Jurídica e Contábil',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 