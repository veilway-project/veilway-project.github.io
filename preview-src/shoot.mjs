import { chromium } from "/pw/node_modules/playwright/index.mjs";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
const probe = true;
const types = { ".html": "text/html", ".css": "text/css", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".png": "image/png" };
const server = http.createServer((req, res) => { const u = decodeURIComponent(req.url.split("?")[0]); const f = u.startsWith("/site/") ? u : path.join("/og", u); fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); res.end(); return; } res.writeHead(200, { "content-type": types[path.extname(f)] || "application/octet-stream" }); res.end(d); }); }).listen(8000);
const browser = await chromium.launch();
const jobs = [["en.html", 1200, 630, "out/preview.png"], ["fa.html", 1200, 630, "out/preview-fa.png"]];
for (const [page, w, h, out] of jobs) { const p = await browser.newPage({ viewport: { width: w, height: h } }); p.on("console", m => console.log(page, m.type(), m.text())); p.on("requestfailed", r => console.log(page, "failed", r.url())); await p.goto(`http://localhost:8000/${page}`); await p.evaluate(() => document.fonts.ready); await p.screenshot({ path: path.join("/og", out) }); console.log(page, "h1", JSON.stringify(await p.evaluate(() => { const r = document.querySelector("h1").getBoundingClientRect(); const range = document.createRange(); range.selectNodeContents(document.querySelector("h1")); const t = range.getBoundingClientRect(); return [t.left, t.right, r.top, r.bottom].map(Math.round); }))); console.log(page, "ok", await p.evaluate(() => [...document.fonts].map(f => f.family + ":" + f.status).join(", "))); }
await browser.close();
server.close();
const b2 = await chromium.launch();
for (const f of ["preview.png", "preview-fa.png"]) { const p = await b2.newPage({ viewport: { width: 400, height: 400 } }); await p.setContent(`<body style="margin:0;background:#fff"><img src="data:image/png;base64,${fs.readFileSync("/og/out/" + f).toString("base64")}" style="width:400px;display:block"><img src="data:image/png;base64,${fs.readFileSync("/og/out/" + f).toString("base64")}" style="width:190px;height:190px;object-fit:cover;display:block;margin-top:4px"></body>`); await p.screenshot({ path: "/og/out/small-" + f, fullPage: true }); }
await b2.close();
