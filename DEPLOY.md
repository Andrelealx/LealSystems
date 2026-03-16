# Deploy da Leal Systems na Railway + Cloudflare

## 1. Preparar repositório no GitHub
1. Crie um repositório no GitHub e faça push do projeto.
2. Confirme que os arquivos `railway.json` e `.env.example` estão versionados.

## 2. Criar projeto na Railway
1. Acesse [railway.app](https://railway.app) e faça login.
2. Clique em **New Project**.
3. Selecione **Deploy from GitHub repo** e escolha o repositório.
4. A Railway vai detectar o `railway.json` e aplicar:
   - `buildCommand`: `npm run build`
   - `startCommand`: `npm run preview -- --port ${PORT:-4173} --host 0.0.0.0`

## 3. Configurar variáveis de ambiente
No serviço da Railway, abra a aba **Variables** e adicione:
- `VITE_CONTACT_EMAIL`
- `VITE_APP_URL`

Sugestão inicial:
- `VITE_CONTACT_EMAIL=contato@lealsystems.com.br`
- `VITE_APP_URL=https://lealsystems.com.br`

## 4. Validar deploy
1. Aguarde o build finalizar.
2. Abra o domínio público gerado pela Railway.
3. Verifique responsividade e links de contato.

## 5. Apontar domínio customizado via Cloudflare

### Na Railway
1. Abra o serviço deployado.
2. Vá em **Settings** > **Domains**.
3. Clique em **Custom Domain** e adicione, por exemplo, `lealsystems.com.br` e `www.lealsystems.com.br`.
4. Copie os registros DNS sugeridos pela Railway (normalmente CNAME).

### Na Cloudflare
1. Abra a zona DNS do seu domínio.
2. Crie os registros informados pela Railway.
3. Para `www`, normalmente use `CNAME` apontando para o host da Railway.
4. Para o domínio raiz (`@`), siga a recomendação da Railway para CNAME flattening/ALIAS.
5. Deixe **Proxy status** como **DNS only** até validar SSL.

## 6. SSL e finalização
1. Aguarde a propagação DNS.
2. Volte na Railway e confirme o status do domínio como ativo.
3. Ative proxy na Cloudflare se necessário após SSL ok.
4. Atualize `VITE_APP_URL` com o domínio final, caso tenha mudado, e faça novo deploy.

## 7. Fluxo contínuo
- Cada push na branch conectada ao GitHub dispara novo deploy automático na Railway.
