import React from 'react';

const team = [
  {
    name: 'Dourimárcia Benevides Oliveira',
    role: 'Especialista em Contratações Públicas',
    image: '/team/dourimarcia.png',
    description: 'Especialista em contratações públicas e licitações, com vasta experiência no setor público.'
  },
  {
    name: 'Renata Ramos Hayne',
    role: 'Especialista em Direito Público',
    image: '/team/renata.png',
    description: 'Especialista em Direito Público, com foco em Licitações e Contratos.'
  },
  {
    name: 'Juliana Guanes',
    role: 'Advogada',
    image: '/team/juliana.png',
    description: 'Doutoranda em Direito, Mestra em Direito Público (UFBA). Profissional com sólida formação acadêmica e experiência prática.'
  },
  {
    name: 'Ricardo Dantas Moreira',
    role: 'Bacharel em Direito',
    image: '/team/ricardo.png',
    description: 'Bacharel em Direito, Pós-Graduando em Direito Público. Especialista em consultoria jurídica para o setor público.'
  }
];

export default function Equipe() {
  return (
    <div className="container py-16">
      <h1 className="heading mb-8">Equipe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="team-card flex flex-col items-center text-center p-6">
            <div className="relative w-32 h-32 mb-4">
              <img src={member.image} alt={member.name} className="rounded-full object-cover w-full h-full" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">{member.name}</h2>
            <p className="text-primary font-medium mt-1">{member.role}</p>
            <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 