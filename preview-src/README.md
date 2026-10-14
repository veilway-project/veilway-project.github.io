# Link preview sources

`en.html`, `fa.html` and `touch.html` render the link preview cards (`img/preview.png`, `img/preview-fa.png`) and `img/apple-touch-icon.png`. The cards show the phases as they stand, so render them again when a phase changes, from the repository root:

```
docker run --rm --cpus 2 --memory 2g -v veilway-ui-pw:/pw -v "$PWD":/site -v "$PWD/preview-src":/og -w /og mcr.microsoft.com/playwright:v1.64.0-noble node shoot.mjs
```

The images land in `preview-src/out/`; copy them into `img/`. The folder is not linked from the site.
