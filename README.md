# Leal Systems - Site Institucional

Site institucional da Leal Systems construído com React + Vite + TypeScript + Tailwind CSS.

## Stack
- React 19
- React Router DOM
- Vite 8
- TypeScript (strict)
- Tailwind CSS

## Recursos
- Navegação por páginas internas (`/`, `/servicos`, `/portfolio`, `/sobre`, `/contato`)
- Tema claro/escuro com alternância manual e persistência em `localStorage`
- Branding customizado com logo vetorial responsivo no navbar e footer
- Página de contato com formulário de briefing e validação
- FAQ, processo de execução, depoimentos e páginas de serviço/portfólio

## Requisitos
- Node.js 20+
- npm 10+

## Ambiente
Copie `.env.example` para `.env` e ajuste os valores:

```bash
cp .env.example .env
```

Variáveis:
- `VITE_CONTACT_EMAIL`
- `VITE_APP_URL`

## Scripts
```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Deploy
O projeto está pronto para Railway via `railway.json`.

Veja o guia completo em [DEPLOY.md](./DEPLOY.md).
