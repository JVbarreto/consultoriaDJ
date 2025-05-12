'use client'

import Link from 'next/link'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const navigation = {
  main: [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ],
  social: [
    {
      name: 'WhatsApp',
      href: 'https://wa.me/seu-numero-aqui',
      icon: FaWhatsapp,
    },
    {
      name: 'Email',
      href: 'mailto:contato@djconsultoria.com.br',
      icon: FaEnvelope,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Rodapé
      </h2>
      <div className="container mx-auto px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold text-white">
              DJ Consultoria
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Especialistas em gestão pública, licitações e contratos administrativos.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Links Úteis</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contato</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="mailto:contato@djconsultoria.com.br"
                    className="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    contato@djconsultoria.com.br
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+5511999999999"
                    className="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    (11) 99999-9999
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm leading-6 text-gray-300 hover:text-white"
                  >
                    Portfólio e Agenda 2025
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} DJ Consultoria em Gestão Pública. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
} 