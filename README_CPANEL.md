# Guia de Upload para o cPanel - Juliana Grimaldi

Para subir as landing pages no seu cPanel e manter cada uma em sua própria pasta/URL, siga estes passos:

## 1. Preparar os Arquivos

Como o site é uma aplicação React moderna, o build gera arquivos otimizados.

- Rode `bun run build`.
- A pasta `dist/client` conterá todos os arquivos necessários.

## 2. Estrutura de Pastas no cPanel

Para que cada página tenha sua própria URL (ex: `site.com.br/autonomia`), você tem duas opções:

### Opção A: Aplicativo Único (Recomendado)

Suba todo o conteúdo da pasta `dist/client` para a pasta raiz do seu domínio (geralmente `public_html`).

- Para que as rotas funcionem (ex: ao atualizar a página `/autonomia-interna`), você precisa criar um arquivo `.htaccess` na raiz com o seguinte conteúdo:

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

### Opção B: Pastas Físicas Independentes

Se você realmente precisa de pastas separadas fisicamente:

1. Crie a pasta no cPanel (ex: `autonomia`).
2. Suba o conteúdo de `dist/client` para dentro dela.
3. Repita o processo para as outras, mas note que isso pode duplicar arquivos de código (assets). A **Opção A** é muito mais eficiente.

## 3. Imagens (Assets)

As imagens que usei são do Unsplash para visualização. Para trocar pelas suas fotos:

- Você pode substituir os arquivos na pasta `src/assets` antes de fazer o build.
- Ou, após subir no cPanel, localizar a imagem na pasta `assets` (ela terá um nome com código, ex: `og-autonomia-D68WFLZj.jpg`) e substituí-la por uma sua com o **mesmo nome exato**.
