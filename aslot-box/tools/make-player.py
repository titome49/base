"""Génère le lecteur HTML autonome (vidéo embarquée en base64 + bouton de téléchargement).
Usage : python3 tools/make-player.py renders/aslot-box-v1.mp4 renders/aslot-box-lecteur.html
"""
import base64
import sys
from pathlib import Path

src, out = Path(sys.argv[1]), Path(sys.argv[2])
b64 = base64.b64encode(src.read_bytes()).decode()
name = src.name

html = f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ASLOT — Box &amp; Conteneurs</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap" rel="stylesheet">
<style>
  :root {{ --cream:#F1EFE8; --ink:#35422D; --olive:#4A5C3D; --hl:#E7DAC3; }}
  * {{ box-sizing: border-box; margin: 0; }}
  body {{ background: var(--cream); color: var(--ink); font-family: Montserrat, system-ui, sans-serif; min-height: 100vh;
         display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px; padding: 32px 16px; }}
  h1 {{ font-size: clamp(22px, 3vw, 34px); font-weight: 800; letter-spacing: -0.03em; }}
  h1 span {{ color: var(--olive); background: linear-gradient(transparent 58%, var(--hl) 58%); padding: 0 4px; }}
  video {{ width: min(1100px, 100%); aspect-ratio: 16 / 9; border-radius: 18px; background: #000;
           box-shadow: 0 24px 50px rgba(53,66,45,.18); }}
  a.dl {{ display: inline-flex; align-items: center; gap: 12px; padding: 16px 28px; border-radius: 999px; background: var(--olive);
          color: #fff; font-weight: 800; font-size: 18px; text-decoration: none; }}
  a.dl:hover {{ background: var(--ink); }}
</style>
</head>
<body>
  <h1>ASLOT — <span>Box &amp; Conteneurs</span></h1>
  <video id="v" controls playsinline preload="auto" src="data:video/mp4;base64,{b64}"></video>
  <a class="dl" id="dl" download="{name}" href="#">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10l5 5 5-5M5 20h14"/></svg>
    Télécharger la vidéo (avec son)
  </a>
  <script>
    // le bouton réutilise la vidéo déjà embarquée (pas de double encodage dans le fichier)
    document.getElementById("dl").href = document.getElementById("v").getAttribute("src");
  </script>
</body>
</html>
"""
out.write_text(html, encoding="utf-8")
print(out, round(out.stat().st_size / 1e6, 1), "Mo")
