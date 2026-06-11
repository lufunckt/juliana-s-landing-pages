# Guia de Upload (Subpasta /LP/) - Juliana Grimaldi

Como você tem um WordPress na raiz e quer colocar o site na pasta `LP`, siga estes passos para não haver conflito:

## 1. Preparação no cPanel
1. Acesse o **Gerenciador de Arquivos**.
2. Entre na pasta `public_html` (onde está o seu WordPress).
3. Crie uma nova pasta chamada **`LP`** (em maiúsculas, conforme configurado).

## 2. O que subir?
Suba todo o **CONTEÚDO** da pasta `dist/client` do seu computador para dentro dessa pasta `/LP/` no cPanel.

Os arquivos dentro da pasta `LP` devem ser:
- `assets/` (pasta)
- `autonomia-interna/`, `desbloqueio-emocional/`, etc. (pastas)
- `index.html`
- `.htaccess`

## 3. Novas URLs (Exatas)
Com essa configuração, suas URLs passam a ser:

- **Página Principal:** `https://seusite.com.br/LP/`
- **Autonomia Interna:** `https://seusite.com.br/LP/autonomia-interna`
- **Desbloqueio Emocional:** `https://seusite.com.br/LP/desbloqueio-emocional`
- **Diagnóstico Emocional:** `https://seusite.com.br/LP/diagnostico-emocional`
- **Diário Emocional:** `https://seusite.com.br/LP/diario-emocional`
- **Protagonismo Profissional:** `https://seusite.com.br/LP/protagonismo-profissional`
- **Visibilidade Natural:** `https://seusite.com.br/LP/visibilidade-natural`

## 4. Por que isso funciona com o WordPress?
- O arquivo `.htaccess` dentro da pasta `LP` tem uma instrução `RewriteBase /LP/`. Isso diz ao servidor que as regras de navegação desse site só valem para o que está dentro da pasta `LP`.
- O WordPress na raiz continuará funcionando normalmente, pois o servidor prioriza o arquivo `.htaccess` que está dentro da pasta específica onde o usuário está navegando.

**Dica importante:** Se ao acessar `seusite.com.br/LP/` você cair no WordPress (erro 404 do WP), verifique se o arquivo `.htaccess` foi submetido corretamente para dentro da pasta `LP`.
