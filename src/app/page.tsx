'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomImage from '@/components/CustomImage'
import { FaCheckCircle, FaWhatsapp, FaBook, FaHandshake, FaUserTie, FaLightbulb, FaCrosshairs, FaStar, FaFacebook, FaInstagram, FaMapMarkerAlt, FaChevronRight, FaBalanceScale, FaCalculator } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Image from 'next/image'

const stats = [
  { id: 1, name: 'Anos de Experiência', value: '15+' },
  { id: 2, name: 'Projetos Realizados', value: '500+' },
  { id: 3, name: 'Clientes Atendidos', value: '200+' },
  { id: 4, name: 'Especialistas', value: '20+' },
]

const services = [
  {
    title: 'Advocacia Empresarial',
    description: 'Assessoria jurídica completa para empresas, incluindo contratos, compliance e direito societário.',
    icon: <FaBalanceScale className="w-12 h-12 text-primary" />,
    category: 'legal'
  },
  {
    title: 'Contabilidade',
    description: 'Serviços contábeis especializados, gestão fiscal e planejamento tributário para otimizar seus resultados.',
    icon: <FaCalculator className="w-12 h-12 text-primary" />,
    category: 'accounting'
  },
  {
    title: 'Consultoria Empresarial',
    description: 'Orientação estratégica para tomada de decisões e crescimento sustentável do seu negócio.',
    icon: <FaUserTie className="w-12 h-12 text-primary" />,
    category: 'both'
  }
]

const specialists = [
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
]

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
]

const testimonials = [
  {
    text: "A equipe demonstrou excelência e profissionalismo em todos os aspectos do nosso projeto.",
    author: "Carlos Mendes",
    company: "Tech Solutions Ltda"
  },
  {
    text: "Serviço excepcional e atendimento personalizado que fez toda diferença para nossa empresa.",
    author: "Ana Paula",
    company: "Comercial SP"
  }
]

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-primary text-white">
        {/* Overlay gradiente mais escuro para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        
        {/* Background com padrão sutil */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)]" style={{ backgroundSize: '40px 40px' }}></div>
        
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="hero-text text-4xl md:text-6xl font-heading font-bold mb-8">
            Excelência jurídica e contábil para sua empresa crescer com segurança
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Soluções integradas em advocacia e contabilidade para impulsionar seu negócio
          </p>
          <a 
            href="#contato" 
            className="inline-block bg-white text-primary px-8 py-4 rounded-md text-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Solicite uma Consultoria
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="stat-card"
                data-aos="fade-up"
                data-aos-delay={stat.id * 100}
              >
                <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                <dd className="mt-2 text-3xl font-bold tracking-tight text-primary">{stat.value}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section bg-gray-50">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="heading">Nossos Serviços</h2>
            <p className="subheading">
              Soluções completas em gestão pública e licitações
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="service-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="text-primary mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="icon-spin"
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="section bg-white">
        <div className="container">
          <h2 className="heading text-center" data-aos="fade-up">Nossa Equipe</h2>
          <p className="subheading text-center mb-12" data-aos="fade-up">
            Profissionais altamente qualificados em Direito Público e Gestão Pública
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="team-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative w-48 h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium mt-1">{member.role}</p>
                  <p className="text-gray-600 mt-2 text-sm">{member.description}</p>
                  <motion.button 
                    whileHover={{ x: 10 }}
                    className="mt-4 text-primary hover:text-primary/80 font-medium flex items-center group"
                  >
                    Ver Perfil
                    <FaChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="section bg-gray-50">
        <div className="container">
          <h2 className="heading text-center" data-aos="fade-up">O que nossos clientes dizem</h2>
          <p className="subheading text-center mb-12" data-aos="fade-up">
            Veja o que nossos clientes têm a dizer sobre nossos serviços
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-primary">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="section bg-white">
        <div className="container">
          <h2 className="heading text-center" data-aos="fade-up">Entre em Contato</h2>
          <p className="subheading text-center mb-12" data-aos="fade-up">
            Estamos prontos para ajudar sua instituição
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="contact-form"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6">Envie sua mensagem</h3>
              <form className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full focus-ring"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full focus-ring"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full focus-ring"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full focus-ring"
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full btn btn-primary py-3 px-6"
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1661095185163!2d-38.98911562393813!3d-12.275669848075373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71437c2a5b3c7f1%3A0x7a4c3d9a8d3b3b0!2sR.%20Passo%20Alegre%2C%20325%20-%20Lagoa%20Salgada%2C%20Feira%20de%20Santana%20-%20BA%2C%2044082-150!5e0!3m2!1spt-BR!2sbr!4v1709764865447!5m2!1spt-BR!2sbr"
                  className="w-full h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <motion.div 
                className="contact-info"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4">Informações de Contato</h3>
                <div className="space-y-4">
                  <motion.p 
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 10 }}
                  >
                    <FaMapMarkerAlt className="h-5 w-5 text-primary mr-3" />
                    Rua Passo Alegre, 325 - Lagoa Salgada<br />
                    Feira de Santana - BA<br />
                    CEP: 44082-150
                  </motion.p>
                  <motion.p 
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 10 }}
                  >
                    <FaWhatsapp className="h-5 w-5 text-primary mr-3" />
                    <a
                      href="https://wa.me/557531990770"
                      className="hover:text-primary transition-colors duration-300"
                    >
                      +55 (75) 3199-0770
                    </a>
                  </motion.p>
                  <motion.p 
                    className="flex items-center text-gray-600"
                    whileHover={{ x: 10 }}
                  >
                    <HiMail className="h-5 w-5 text-primary mr-3" />
                    <a
                      href="mailto:contato@djconsultoria.com.br"
                      className="hover:text-primary transition-colors duration-300"
                    >
                      contato@djconsultoria.com.br
                    </a>
                  </motion.p>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    {[
                      { icon: FaFacebook, href: '#' },
                      { icon: FaInstagram, href: '#' },
                      { icon: FaWhatsapp, href: 'https://wa.me/557531990770' },
                      { icon: HiMail, href: 'mailto:contato@djconsultoria.com.br' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="social-link"
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 