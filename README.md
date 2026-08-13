# Douro & Salamanca 2027 — QiMO

Landing page da experiência fluvial da QiMO pelo Rio Douro, de **13 a 20 de novembro de 2027**, a bordo do *Emerald Radiance*.

O design segue a linguagem visual de `ladolcevita.qimobr.com` (tipografia **Cormorant Garamond** + **Figtree**, paleta teal do rio com acento cobre) e o conteúdo vem da apresentação `QimoDouro2027.pdf`.

## Estrutura

```
.
├── netlify-static/        ← SITE PUBLICADO (estático, sem build)
│   ├── index.html
│   ├── styles.css
│   ├── app.js             ← accordion de dúvidas + expansão dos cards do roteiro
│   └── images/
├── site/                  ← Código-fonte React (vinext / Cloudflare) — opcional
│   └── app/               ← page.tsx, layout.tsx, globals.css
├── netlify.toml           ← config de deploy (publish = netlify-static)
├── QimoDouro2027.pdf      ← apresentação de origem (conteúdo)
├── IDENTIDADE-VISUAL.md
└── AUDITORIA-UX-UI.md
```

> O site publicado é a pasta **`netlify-static/`** — é 100% estático e independente. A pasta `site/` guarda a versão em React/vinext usada durante o desenvolvimento; ela **não** é necessária para o deploy no Netlify.

## Deploy no Netlify (via Git)

O Netlify lê o `netlify.toml` da raiz automaticamente — nenhuma configuração manual é necessária:

| Campo | Valor |
|---|---|
| Build command | *(vazio)* |
| Publish directory | `netlify-static` |

Passos:

1. Crie um repositório vazio no GitHub e envie o código:

   ```bash
   # HTTPS
   git remote add origin https://github.com/SEU-USUARIO/douro-experience.git
   git push -u origin main

   # …ou SSH
   git remote add origin git@github.com:SEU-USUARIO/douro-experience.git
   git push -u origin main
   ```

2. No Netlify: **Add new site → Import an existing project → GitHub** e selecione o repositório. Confirme o *Deploy*.

3. Cada `git push` na branch `main` republica o site automaticamente.

## Domínio: douroexperience.qimobr.com

1. No Netlify (*Domain management → Add a domain*), adicione `douroexperience.qimobr.com`.
2. No provedor de DNS de `qimobr.com`, crie um registro:

   | Tipo | Nome | Valor |
   |---|---|---|
   | `CNAME` | `douroexperience` | `seu-site.netlify.app` |

3. O certificado HTTPS (Let's Encrypt) é emitido automaticamente após a propagação do DNS.

## Rodar a versão em React (opcional)

```bash
cd site
npm install
npm run dev      # http://localhost:3000
```

## Imagens

O acervo atual está em `netlify-static/images/`. Para trocar por fotos definitivas de cada destino, basta substituir os arquivos mantendo os mesmos nomes — o HTML não precisa ser alterado.
