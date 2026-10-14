<p align="center">
<img src="img/icon.svg" width="96" height="96" alt="Veilway">
</p>

<h1 align="center">Veilway landing page</h1>

<p align="center">
The front page of Veilway, an open-source VPN for censored and hostile networks.<br>
<b><a href="https://veilway-project.github.io/">veilway-project.github.io</a></b>
</p>

<p align="center">
<a href="LICENSE"><img alt="license" src="https://img.shields.io/badge/license-Apache--2.0-blue"></a>
</p>

## What it is

One page in English (`/`) and Persian (`/fa/`), served by GitHub Pages straight from `main`. Plain HTML and CSS: no build step, no JavaScript, no cookies, and nothing loaded from other sites. A strict Content-Security-Policy in each page enforces that. `.nojekyll` tells Pages to serve the files as they are.

It uses the design system from [veilway-ui](https://github.com/veilway-project/veilway-ui): its colors, radii, type and glass, copied into `site.css`, so the page looks like the apps. The fonts are self-hosted in `fonts/` with their SIL Open Font License files. The screenshots in `img/` come from the design system's gallery, and every name and number in them is made up.

| Path | Holds |
|---|---|
| `index.html` | The English page |
| `fa/index.html` | The Persian page, right to left |
| `site.css` | Design tokens, both color schemes, and the page's own rules |
| `fonts/` | Atkinson Hyperlegible Next and Mono, Vazirmatn, and their licenses |
| `img/` | The icon and two client screenshots |

## Changing it

Edit the files and open `index.html` in a browser, or serve the folder with any static server, for example `python3 -m http.server`. Keep both languages in step, check dark and light at desktop and phone width, and keep the page honest: it says what works today and what does not, and it makes no claim the project cannot back.

## Related

- [veilway](https://github.com/veilway-project/veilway): the core, the control API and the apps
- [veilway-docs](https://github.com/veilway-project/veilway-docs): the docs, published at [veilway-project.github.io/veilway-docs](https://veilway-project.github.io/veilway-docs/)
- [veilway-ui](https://github.com/veilway-project/veilway-ui): the design system and translations

## License

Apache-2.0, see `LICENSE`. The name "Veilway" and the logo are not licensed for use by derived works; see [TRADEMARKS.md](https://github.com/veilway-project/veilway/blob/main/TRADEMARKS.md).
