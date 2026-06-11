import os
import glob
import re

# Configuração
client_dir = "dist/client"
sub_dir = "/LP/" # Pasta no cPanel
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
js_name = os.path.basename(max(js_files, key=os.path.getsize))

print(f"Usando CSS: {css_name}")
print(f"Usando JS: {js_name}")

# 2. Gerar index.html base com caminhos ajustados para o subdiretório
html_template = f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Juliana Grimaldi — Reestruturação Emocional na Raiz</title>
  <meta name="description" content="Processos de reestruturação emocional baseados em neurociência para reprogramar, na raiz, padrões de autossabotagem.">
  <link rel="stylesheet" href="{sub_dir}assets/{css_name}">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="{sub_dir}assets/{js_name}"></script>
</body>
</html>"""

with open(os.path.join(client_dir, "index.html"), "w") as f:
    f.write(html_template)

# 3. Gerar folders para cada rota
for route in routes:
    route_dir = os.path.join(client_dir, route)
    os.makedirs(route_dir, exist_ok=True)
    with open(os.path.join(route_dir, "index.html"), "w") as f:
        f.write(html_template)

# 4. Gerar .htaccess específico para subdiretório
# Usando %{REQUEST_URI} para evitar conflitos e garantir que caia no index.html correto
htaccess = f"""<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase {sub_dir}

  # Se o arquivo existe, serve ele
  RewriteCond %{{REQUEST_FILENAME}} -f [OR]
  RewriteCond %{{REQUEST_FILENAME}} -d
  RewriteRule ^ - [L]

  # Caso contrário, manda para o index.html da pasta LP
  RewriteRule ^ {sub_dir}index.html [L]
</IfModule>"""

with open(os.path.join(client_dir, ".htaccess"), "w") as f:
    f.write(htaccess)

print(f"Arquivos estáticos gerados com sucesso em dist/client para o subdiretório {sub_dir}")
