import React from 'react';

export default function Blog() {
  return (
    <div className="container py-16">
      <h1 className="heading mb-4">Blog</h1>
      <p className="text-content mb-4">
        Acompanhe nosso blog para novidades, artigos e conteúdos relevantes sobre advocacia, contabilidade e gestão empresarial. Em breve, publicaremos dicas, notícias e informações para ajudar sua empresa a crescer com segurança e eficiência.
      </p>
      <div className="mt-8">
        <a
          href="https://www.instagram.com/consultoria.dj?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-md font-semibold shadow hover:scale-105 transition-transform duration-300 mb-8"
        >
          Siga-nos no Instagram: @consultoria.dj
        </a>
        <div className="flex justify-center mt-8">
          <iframe
            src="https://www.instagram.com/p/DMNZUgYsMEY/embed"
            width="400"
            height="480"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            allow="encrypted-media"
            title="Última publicação do Instagram"
            style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
} 