# Guia Final de Upload para o cPanel - Juliana Grimaldi

Como o seu cPanel **não possui Node.js**, configuramos o projeto para rodar como uma aplicação estática (SPA). Siga exatamente estes passos:

## 1. O que subir?

Você deve subir o **CONTEÚDO** da pasta `dist/client` para a raiz do seu domínio no cPanel (geralmente dentro da pasta `public_html`).

Os arquivos principais que devem estar na raiz do cPanel são:
- `assets/` (pasta com CSS, JS e Imagens)
- `index.html` (arquivo que eu gerei agora)
- `.htaccess` (arquivo de configuração de rotas)
- Pastas como `autonomia-interna/`, `desbloqueio-emocional/`, etc. (elas ajudam o cPanel a encontrar as páginas diretamente).

## 2. URLs das suas Landing Pages

Após subir os arquivos, estas serão as URLs exatas:

- **Página Principal:** `https://seusite.com.br/`
- **Autonomia Interna:** `https://seusite.com.br/autonomia-interna`
- **Desbloqueio Emocional:** `https://seusite.com.br/desbloqueio-emocional`
- **Diagnóstico Emocional:** `https://seusite.com.br/diagnostico-emocional`
- **Diário Emocional:** `https://seusite.com.br/diario-emocional`
- **Protagonismo Profissional:** `https://seusite.com.br/protagonismo-profissional`
- **Visibilidade Natural:** `https://seusite.com.br/visibilidade-natural`

## 3. Como trocar as imagens?

As imagens de "Open Graph" (que aparecem quando você compartilha o link) estão na pasta `assets/`.
Se você quiser trocar as fotos das páginas, você tem duas opções:
1. Substituir os arquivos em `src/assets` no seu computador, rodar o build novamente e gerar os arquivos estáticos.
2. Ou, localizar a imagem correspondente em `assets/` (ex: `og-autonomia-D68WFLZj.jpg`) e substituí-la por uma sua mantendo o **MESMO NOME**.

## 4. Importante sobre o .htaccess

O arquivo `.htaccess` é vital. Ele garante que, se alguém atualizar a página (F5) em `/autonomia-interna`, o cPanel saiba que deve carregar o site principal em vez de dar um erro 404.

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Dica:** Se o seu cPanel não mostrar o arquivo `.htaccess`, certifique-se de que a opção "Show Hidden Files" (Mostrar arquivos ocultos) está marcada nas configurações do Gerenciador de Arquivos.
