'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleInstagramClick = () => {
    window.location.href = 'https://www.instagram.com/consultoria.dj/';
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Consultoria DJ</h3>
            <p className="text-gray-300 mb-4">
              Soluções jurídicas e contábeis integradas para o sucesso do seu negócio.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/advocacia" className="text-gray-300 hover:text-white transition-colors">
                  Advocacia Empresarial
                </Link>
              </li>
              <li>
                <Link href="/servicos/contabilidade" className="text-gray-300 hover:text-white transition-colors">
                  Contabilidade
                </Link>
              </li>
              <li>
                <Link href="/servicos/consultoria" className="text-gray-300 hover:text-white transition-colors">
                  Consultoria Empresarial
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Rua Passo Alegre, 325
                <br />
                Lagoa Salgada
                <br />
                Feira de Santana - BA
                <br />
                CEP: 44082-150
              </li>
              <li>
                <a href="tel:+557531990770" className="text-gray-300 hover:text-white transition-colors">
                  +55 (75) 3199-0770
                </a>
              </li>
              <li>
                <a href="mailto:contato@djconsultoria.com.br" className="text-gray-300 hover:text-white transition-colors">
                  contato@djconsultoria.com.br
                </a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Siga-nos nas redes sociais</h5>
              <div className="flex space-x-4">
                <a
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <button
                  onClick={handleInstagramClick}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </button>
                <a
                  href="javascript:void(0)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/557531990770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Consultoria DJ. Todos os direitos reservados.
            </div>
            <div className="text-gray-300 text-sm">
              Desenvolvido com ❤️ em Feira de Santana
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 