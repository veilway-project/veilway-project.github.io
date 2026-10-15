# Link preview sources

`en.html`, `fa.html` and `touch.html` render the link preview cards (`img/preview-<date>.png`, `img/preview-fa-<date>.png`) and `img/apple-touch-icon.png`. The cards show the phases as they stand, so render them again when a phase changes, from the repository root:

```
docker run --rm --cpus 2 --memory 2g -v veilway-ui-pw:/pw -v "$PWD":/site -v "$PWD/preview-src":/og -w /og mcr.microsoft.com/playwright:v1.64.0-noble node shoot.mjs
```

The images land in `preview-src/out/`. Copy them into `img/` under a new name with the date (`preview-2026-10-15.png`), delete the old ones, and change the `og:image` and `twitter:image` tags in `index.html` and `fa/index.html` to the new names. Apps that show link previews keep an image by its address, so a card under the same name never updates there. The folder is not linked from the site.
