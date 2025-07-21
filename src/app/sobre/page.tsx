import React from 'react';
import { FaBalanceScale, FaChartLine, FaAward } from 'react-icons/fa';

const stats = [
  { id: 1, name: 'Anos de Experiência', value: '15+', icon: <FaAward className="w-8 h-8 icon-gold mx-auto mb-2" /> },
  { id: 2, name: 'Projetos Realizados', value: '500+', icon: <FaChartLine className="w-8 h-8 icon-gold mx-auto mb-2" /> },
  { id: 3, name: 'Clientes Atendidos', value: '200+', icon: <FaBalanceScale className="w-8 h-8 icon-gold mx-auto mb-2" /> },
  { id: 4, name: 'Especialistas', value: '20+', icon: <FaAward className="w-8 h-8 icon-gold mx-auto mb-2" /> },
];

export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-primary text-white py-24 mb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container relative mx-auto px-4 text-center z-10">
          <h1 className="hero-text text-4xl md:text-6xl font-heading font-bold mb-8">
            Excelência jurídica e contábil para sua empresa crescer com segurança
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Confiança, profissionalismo e soluções inteligentes para o seu crescimento seguro.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="stat-card text-center border-gold border-t-4 rounded-lg shadow p-6 bg-white"
              >
                {stat.icon}
                <dt className="text-sm font-medium text-secondary truncate">{stat.name}</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-primary font-heading">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="container py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading mb-6 text-center">Quem somos</h2>
          <p className="text-content mb-10 text-center">
            Somos uma empresa especializada em soluções integradas de advocacia e contabilidade, com mais de 15 anos de experiência, mais de 500 projetos realizados e uma equipe de especialistas altamente qualificados. Nosso objetivo é impulsionar o crescimento seguro e sustentável de empresas, oferecendo assessoria jurídica, contábil e consultoria empresarial de excelência.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-gold border-t-4 rounded-lg p-6 shadow text-center">
              <FaBalanceScale className="w-8 h-8 icon-gold mx-auto mb-2" />
              <h3 className="text-xl font-bold text-primary mb-2 font-heading">Missão</h3>
              <p className="text-content">Proporcionar soluções jurídicas e contábeis inovadoras, com ética, transparência e foco no sucesso dos nossos clientes.</p>
            </div>
            <div className="bg-white border-gold border-t-4 rounded-lg p-6 shadow text-center">
              <FaChartLine className="w-8 h-8 icon-gold mx-auto mb-2" />
              <h3 className="text-xl font-bold text-primary mb-2 font-heading">Visão</h3>
              <p className="text-content">Ser referência nacional em consultoria jurídica e contábil, reconhecida pela excelência e resultados.</p>
            </div>
            <div className="bg-white border-gold border-t-4 rounded-lg p-6 shadow text-center">
              <FaAward className="w-8 h-8 icon-gold mx-auto mb-2" />
              <h3 className="text-xl font-bold text-primary mb-2 font-heading">Valores</h3>
              <ul className="list-disc pl-6 text-left text-content">
                <li>Ética e transparência</li>
                <li>Compromisso com o cliente</li>
                <li>Inovação e excelência</li>
                <li>Profissionalismo</li>
                <li>Responsabilidade social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 