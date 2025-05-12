'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FaCheckCircle, FaEnvelope, FaWhatsapp, FaBook, FaHandshake, FaUserTie } from 'react-icons/fa'

const stats = [
  { id: 1, name: 'Anos de Experiência', value: '15+' },
  { id: 2, name: 'Projetos Realizados', value: '500+' },
  { id: 3, name: 'Clientes Atendidos', value: '200+' },
  { id: 4, name: 'Especialistas', value: '20+' },
]

const services = [
  {
    title: 'Consultoria em Licitações',
    description: 'Assessoria especializada em todas as modalidades de licitação, incluindo Pregão Eletrônico, Concorrência e análise completa de editais.',
    icon: FaBook,
    features: [
      'Análise e elaboração de editais',
      'Gestão de processos licitatórios',
      'Pareceres técnicos especializados',
      'Suporte em recursos administrativos'
    ]
  },
  {
    title: 'Gestão de Contratos',
    description: 'Acompanhamento integral de contratos administrativos, desde a elaboração até o encerramento, garantindo conformidade legal e eficiência.',
    icon: FaHandshake,
    features: [
      'Elaboração de contratos',
      'Fiscalização e gestão',
      'Análise de termos aditivos',
      'Controle de prazos e valores'
    ]
  },
  {
    title: 'Capacitação e Treinamento',
    description: 'Programas de capacitação personalizados sobre a Nova Lei de Licitações e práticas em gestão pública para equipes e gestores.',
    icon: FaUserTie,
    features: [
      'Workshops práticos',
      'Cursos in-company',
      'Mentoria especializada',
      'Material didático exclusivo'
    ]
  },
]

const testimonials = [
  {
    content: 'A consultoria nos ajudou a otimizar nossos processos licitatórios e garantir total conformidade com a legislação.',
    author: 'João Silva',
    role: 'Gestor Público Municipal',
  },
  {
    content: 'Excelente suporte técnico e conhecimento aprofundado em gestão pública.',
    author: 'Maria Santos',
    role: 'Secretária de Administração',
  },
  {
    content: 'O treinamento em licitações transformou a forma como nossa equipe trabalha, trazendo mais eficiência e segurança.',
    author: 'Pedro Oliveira',
    role: 'Diretor de Compras',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Excelência em<br />Gestão Pública
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Soluções especializadas em licitações e contratos administrativos para órgãos públicos e empresas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contato" 
              className="btn bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-3"
            >
              Solicite uma Consultoria
            </Link>
            <Link 
              href="#servicos" 
              className="btn border-2 border-white bg-transparent hover:bg-white hover:text-blue-900 font-semibold px-8 py-3"
            >
              Conheça Nossos Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-gray-50 px-6 py-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-blue-600">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading">Sobre Nós</h2>
            <p className="subheading">
              Referência nacional em consultoria para gestão pública
            </p>
            <div className="mt-8 prose prose-lg">
              <p className="text-gray-600">
                Há mais de 15 anos, somos referência em consultoria especializada para 
                órgãos públicos e empresas que participam de licitações. Nossa equipe 
                é formada por especialistas com vasta experiência em direito administrativo, 
                gestão pública e processos licitatórios.
              </p>
              <p className="text-gray-600">
                Nosso compromisso é oferecer soluções práticas e eficientes, sempre 
                em conformidade com a legislação vigente e as melhores práticas de 
                gestão pública, contribuindo para a excelência administrativa de 
                nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="section bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">Nossos Serviços</h2>
            <p className="subheading">
              Soluções completas em gestão pública e licitações
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FaCheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="section bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">Depoimentos</h2>
            <p className="subheading">
              A confiança de nossos clientes é nosso maior patrimônio
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section bg-blue-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading text-white">Entre em Contato</h2>
            <p className="subheading text-gray-300">
              Estamos prontos para ajudar sua instituição a alcançar a excelência em gestão pública
            </p>
            <div className="mt-12 space-y-6">
              <Link
                href="https://wa.me/seu-numero-aqui"
                className="flex items-center justify-center gap-2 btn bg-green-600 hover:bg-green-700 px-8 py-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="h-6 w-6" />
                Fale com um Especialista
              </Link>
              <Link
                href="mailto:contato@djconsultoria.com.br"
                className="flex items-center justify-center gap-2 btn bg-white text-blue-900 hover:bg-gray-100 px-8 py-3"
              >
                <FaEnvelope className="h-6 w-6" />
                Solicite uma Proposta
              </Link>
              <div className="text-center mt-8">
                <p className="text-gray-300 mb-2">Conheça nosso portfólio completo</p>
                <Link
                  href="#"
                  className="text-white hover:text-gray-200 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfólio e Agenda 2025 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 