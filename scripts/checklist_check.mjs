// Проверка сайта по чеклисту site_checklist_top20.txt
const BASE = "http://localhost:3000";
const pages = ["/", "/orgs", "/flats/chapaeva-14-3room", "/flats/chapaeva-14-2room", "/flats/chapaeva-15-1room", "/flats/chapaeva-17-1room"];

const grab = (html, re) => { const m = html.match(re); return m ? m[1]?.trim() : null; };

const results = [];
for (const p of pages) {
  const r = await fetch(BASE + p);
  const html = await r.text();
  const title = grab(html, /<title>([^<]*)<\/title>/i);
  const desc = grab(html, /<meta name="description" content="([^"]*)"/i);
  const canonical = grab(html, /<link rel="canonical" href="([^"]*)"/i);
  const h1s = (html.match(/<h1[\s>]/gi) || []).length;
  const imgs = (html.match(/<img[\s>]/gi) || []).length;
  const noAlt = (html.match(/<img(?![^>]*alt=)[\s>]/gi) || []).length;
  const lazy = (html.match(/loading="lazy"/g) || []).length;
  const ogImg = html.includes('property="og:image"');
  const jsonLd = (html.match(/application\/ld\+json/g) || []).length;
  results.push({ page: p, status: r.status, title: title?.slice(0, 70), desc: !!desc, canonical, h1s, imgs, noAlt, lazy, ogImg, jsonLd, bytes: html.length });
}

console.log("== robots.txt ==");
console.log(await (await fetch(BASE + "/robots.txt")).text());
console.log("== sitemap.xml (первые URL) ==");
const sm = await (await fetch(BASE + "/sitemap.xml")).text();
console.log((sm.match(/<loc>[^<]*<\/loc>/g) || []).join("\n"));

console.log("\n== СТРАНИЦЫ ==");
for (const x of results) console.log(JSON.stringify(x, null, 1));

// проверка http -> https редиректа
const httpR = await fetch("http://kvartiri-pestovo.vercel.app/", { redirect: "manual" });
console.log("\nhttp -> ", httpR.status, httpR.headers.get("location"));

// уникальность title
const titles = results.map(r => r.title);
console.log("\nуникальных title:", new Set(titles).size, "из", titles.length);
