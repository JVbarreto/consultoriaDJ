import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

export default function Contato() {
  return (
    <div className="container py-16">
      <h1 className="heading mb-4">Contato</h1>
      <p className="text-content mb-6">Estamos prontos para ajudar sua instituição. Entre em contato conosco pelos canais abaixo:</p>
      <div className="space-y-4 mb-8">
        <div className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="h-5 w-5 text-primary mr-3" />
          Rua Passo Alegre, 325 - Lagoa Salgada, Feira de Santana - BA, CEP: 44082-150
        </div>
        <div className="flex items-center text-gray-600">
          <FaWhatsapp className="h-5 w-5 text-primary mr-3" />
          <a href="https://wa.me/557531990770" className="hover:text-primary transition-colors duration-300">
            +55 (75) 3199-0770
          </a>
        </div>
        <div className="flex items-center text-gray-600">
          <HiMail className="h-5 w-5 text-primary mr-3" />
          <a href="mailto:contato@djconsultoria.com.br" className="hover:text-primary transition-colors duration-300">
            contato@djconsultoria.com.br
          </a>
        </div>
      </div>
      <p className="text-content">Ou, se preferir, utilize o formulário de contato na página inicial para nos enviar uma mensagem diretamente.</p>
    </div>
  );
} 