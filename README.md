# Landing Page - Next.js

Uma landing page moderna e responsiva construída com **Next.js 14** e **React 18**.

## Características

✅ Design moderno e responsivo  
✅ Performance otimizada com Next.js  
✅ Componentes React reutilizáveis  
✅ CSS Modules para estilos isolados  
✅ Animações suaves  
✅ SEO friendly  
✅ Mobile-first approach  

## Estrutura do Projeto

```
landing-nextjs/
├── components/          # Componentes React
│   ├── Header.js
│   ├── Hero.js
│   ├── Features.js
│   ├── CTA.js
│   └── Footer.js
├── pages/              # Páginas Next.js
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/             # Arquivos CSS
│   ├── globals.css
│   └── Home.module.css
├── public/             # Arquivos estáticos (adicione favicon.ico aqui)
├── package.json
├── next.config.js
├── .gitignore
└── README.md
```

## Como Usar

### 1. Instalação

```bash
cd landing-nextjs
npm install
```

### 2. Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3000`

### 3. Produção

```bash
npm run build
npm start
```

### 4. Linting

```bash
npm run lint
```

## Personalizações

### Logo e Nome da Empresa

Edite em `components/Header.js`:

```jsx
<div className={styles.logo}>Seu Logo</div>
```

### Textos e Conteúdo

- **Hero Section**: Edite `components/Hero.js`
- **Features**: Edite o array `features` em `components/Features.js`
- **CTA**: Edite `components/CTA.js`

### Cores

Edite `styles/Home.module.css`:

```css
/* Altere o gradiente */
background: linear-gradient(135deg, #SEU_COR_1 0%, #SEU_COR_2 100%);
```

### Email de Contato

Edite em `components/CTA.js`:

```jsx
href="mailto:seu-email@seu-dominio.com"
```

## Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **CSS Modules** - Estilos isolados
- **Vercel** - Deploy (opcional)

## Deploy

### Vercel (Recomendado)

1. Faça push para seu repositório Git
2. Vai até [vercel.com](https://vercel.com)
3. Conecte seu repositório
4. Deploy automático!

### Outras Plataformas

- **Netlify**: Deploy automático para branches
- **AWS**: EC2 ou Amplify
- **DigitalOcean**: App Platform

## Licença

MIT

---

**Desenvolvido com ❤️**
