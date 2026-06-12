import os
import glob
import shutil

# Configuração
dist_dir = "dist"
sub_dir = "/LP/" # Pasta no cPanel
routes = [
    "autonomia-interna",
    "desbloqueio-emocional",
    "diagnostico-emocional",
    "diario-emocional",
    "protagonismo-profissional",
    "visibilidade-natural"
]

# 1. Copiar index.html para as rotas (para suporte a F5 em servidores sem Node)
with open(os.path.join(dist_dir, "index.html"), "r") as f:
    html_content = f.read()

for route in routes:
    route_dir = os.path.join(dist_dir, route)
    os.makedirs(route_dir, exist_ok=True)
    with open(os.path.join(route_dir, "index.html"), "w") as f:
        f.write(html_content)

# 2. Gerar .htaccess
htaccess = f"""<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase {sub_dir}

  # Se o arquivo existe, serve ele diretamente
  RewriteCond %{{REQUEST_FILENAME}} -f [OR]
  RewriteCond %{{REQUEST_FILENAME}} -d
  RewriteRule ^ - [L]

  # Caso contrário, manda para o index.html principal
  RewriteRule ^ {sub_dir}index.html [L]
</IfModule>"""

with open(os.path.join(dist_dir, ".htaccess"), "w") as f:
    f.write(htaccess)

print(f"Build estático pronto em {dist_dir} para o subdiretório {sub_dir}")
