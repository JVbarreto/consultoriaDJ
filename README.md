# Consultoria DJ - Website

Website institucional moderno e responsivo para a Consultoria DJ, desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- React Icons
- Heroicons

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd consultoriadj
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente (se necessário):
- Crie um arquivo `.env.local` na raiz do projeto
- Adicione as variáveis necessárias

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## Build

Para criar uma versão de produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar a versão de produção:

```bash
npm run start
# ou
yarn start
```

## Estrutura do Projeto

```
consultoriadj/
├── src/
│   ├── app/              # Páginas da aplicação
│   ├── components/       # Componentes reutilizáveis
│   ├── styles/          # Arquivos de estilo
│   └── lib/             # Utilitários e configurações
├── public/              # Arquivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Personalização

Para personalizar o site:

1. Atualize as informações de contato em:
   - `src/components/Footer.tsx`
   - `src/app/page.tsx`

2. Modifique as cores e estilos em:
   - `tailwind.config.js`
   - `src/styles/globals.css`

3. Atualize os textos e conteúdos em:
   - `src/app/page.tsx`

## SEO

O site foi otimizado para SEO com:

- Meta tags apropriadas
- Estrutura semântica HTML
- URLs amigáveis
- Textos otimizados para palavras-chave relevantes

## Suporte

Para suporte ou dúvidas, entre em contato através do e-mail: contato@consultoriadj.com.br 