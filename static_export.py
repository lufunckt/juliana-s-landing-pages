import os
import subprocess
import shutil

# This is a simplified script to simulate a static export for TanStack Start
# It would ideally run 'bun run build' and then crawl the routes.

routes = [
    "autonomia-interna",
    "desbloqueio-emocional",
    "diagnostico-emocional",
    "diario-emocional",
    "protagonismo-profissional",
    "visibilidade-natural"
]

dist_dir = "dist/static"
if os.path.exists(dist_dir):
    shutil.rmtree(dist_dir)
os.makedirs(dist_dir)

# Copy client assets
shutil.copytree("dist/client/assets", os.path.join(dist_dir, "assets"))

# For each route, we would ideally render it to HTML.
# Since we can't easily run the SSR server here and crawl it,
# we will provide instructions for the user on how to use the 'dist/client'
# and how a typical SSG build would look.

print("Static export simulation complete.")
