import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Pravda Teatr draft", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Правда Театр - студия для взрослых и детей<\/title>/);
  assert.match(html, /Правда Театр/);
  assert.match(html, /Ноябрьский набор/);
  assert.match(html, /<span>Взрослые и дети<\/span><span>играют всерьез<\/span>/);
  assert.match(html, /От первого занятия - к роли на сцене перед зрителями/);
  assert.match(html, /Педагоги из театров, где сцена - их ежедневная работа/);
  assert.match(html, /Николай Коротаев/);
  assert.match(html, /Эльвира Цимбал/);
  assert.match(html, /Цены и условия/);
  assert.match(html, /120 000 ₽/);
  assert.match(html, /Калашный пер\., дом 3/);
  assert.doesNotMatch(html, /Правда Театра/);
  assert.doesNotMatch(html, /Проба/);
});

test("keeps the GitHub Pages draft in sync", async () => {
  const [html, css] = await Promise.all([
    readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
    readFile(new URL("../docs/styles.css", import.meta.url), "utf8"),
  ]);

  assert.match(html, /<link rel="stylesheet" href="\.\/styles\.css"/);
  assert.match(html, /<span>Взрослые и дети<\/span><span>играют всерьез<\/span>/);
  assert.match(html, /src="\.\/assets\/teachers\/yuri-konovalov\/portrait\.jpg"/);
  assert.match(html, /src="\.\/assets\/teachers\/nikolai-korotaev\/portrait\.jpg"/);
  assert.match(html, /src="\.\/assets\/teachers\/elvira-tsimbal\/portrait\.jpg"/);
  assert.match(html, /src="\.\/assets\/performances\/master-i-margarita\/169\.jpg"/);
  assert.match(html, /Спектакли, которые уже ставил Правда Театр/);
  assert.match(html, /Сцены из наших спектаклей/);
  assert.match(html, /«Мастер и Маргарита»/);
  assert.match(html, /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/gsap\/3\.12\.5\/gsap\.min\.js/);
  assert.match(css, /font-family: "Oswald"/);
  assert.match(css, /white-space: nowrap/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(html + css, /Стоимость ноябрьского набора|Кадры со сцены|Правда Театра|posterLabel|class="kicker"|class="eyebrow"|Эля Коротаева/);
});
