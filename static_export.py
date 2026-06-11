import os
import glob
import re

# Configuração
client_dir = "dist/client"
routes = [
    "autonomia-interna",
    "desbloqueio-emocional",
    "diagnostico-emocional",
    "diario-emocional",
    "protagonismo-profissional",
    "visibilidade-natural"
]

# 1. Encontrar assets
css_files = glob.glob(os.path.join(client_dir, "assets/*.css"))
js_files = glob.glob(os.path.join(client_dir, "assets/index-*.js"))

if not css_files or not js_files:
    print("Erro: Assets não encontrados em dist/client/assets")
    exit(1)

css_name = os.path.basename(css_files[0])
# Pegar o maior arquivo JS index
js_name = os.path.basename(max(js_files, key=os.path.getsize))

print(f"Usando CSS: {css_name}")
print(f"Usando JS: {js_name}")

# 2. Gerar index.html base
html_template = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Juliana Grimaldi — Reestruturação Emocional na Raiz</title>
  <meta name="description" content="Processos de reestruturação emocional baseados em neurociência para reprogramar, na raiz, padrões de autossabotagem.">
  <link rel="stylesheet" href="/assets/{css_name}">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/{js_name}"></script>
</body>
</html>"""

with open(os.path.join(client_dir, "index.html"), "w") as f:
    f.write(html_template)

# 3. Gerar folders para cada rota (opcional mas bom para cPanel)
for route in routes:
    route_dir = os.path.join(client_dir, route)
    os.makedirs(route_dir, exist_ok=True)
    # Ajustar caminhos para caminhos relativos se necessário, ou manter absoluto se for no root
    # Aqui usaremos caminhos absolutos /assets/ para simplificar se subir na raiz
    with open(os.path.join(route_dir, "index.html"), "w") as f:
        f.write(html_template)

# 4. Gerar .htaccess
htaccess = """<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>"""

with open(os.path.join(client_dir, ".htaccess"), "w") as f:
    f.write(htaccess)

print("Arquivos estáticos gerados com sucesso em dist/client")
