import React from 'react';
import { FaBalanceScale, FaCalculator, FaUserTie } from 'react-icons/fa';

const services = [
  {
    title: 'Segurança Jurídica',
    description: 'Protegemos sua empresa com soluções jurídicas eficazes.',
    icon: <FaBalanceScale className="w-12 h-12 icon-gold mb-4 mx-auto" />,
  },
  {
    title: 'Consultoria Fiscal',
    description: 'Planejamento tributário para o crescimento seguro do seu negócio.',
    icon: <FaCalculator className="w-12 h-12 icon-gold mb-4 mx-auto" />,
  },
  {
    title: 'Assessoria Empresarial',
    description: 'Suporte contábil e legal personalizado para a sua empresa.',
    icon: <FaUserTie className="w-12 h-12 icon-gold mb-4 mx-auto" />,
  },
];

export default function Servicos() {
  return (
    <div className="min-h-screen bg-white">
      <section className="container py-16">
        <h1 className="heading mb-8 text-center">Nossos Serviços</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="card p-8 flex flex-col items-center text-center border-gold border-t-4 bg-white">
              {service.icon}
              <h2 className="text-xl font-heading font-bold text-primary mb-2">{service.title}</h2>
              <p className="text-content text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 