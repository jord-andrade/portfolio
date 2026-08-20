import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("public metadata uses the canonical domain", async () => {
  const [layout, robots, sitemap] = await Promise.all([
    read("app/layout.tsx"),
    read("app/robots.ts"),
    read("app/sitemap.ts"),
  ]);

  for (const source of [layout, robots, sitemap]) {
    assert.match(source, /https:\/\/jord-andrade\.dev/);
    assert.doesNotMatch(source, /https:\/\/jandrade\.dev/);
  }
});

test("repository documentation contains reproducible commands", async () => {
  const readme = await read("README.md");

  assert.match(readme, /github\.com\/jord-andrade\/portfolio\.git/);
  assert.match(readme, /npm ci/);
  assert.match(readme, /npm run check/);
  assert.doesNotMatch(readme, /seu-usuario|seu-repositorio/);
});

test("social metadata uses the current portfolio card", async () => {
  const layout = await read("app/layout.tsx");
  const image = await stat(new URL("../public/og-system.png", import.meta.url));

  assert.match(layout, /\/og-system\.png/);
  assert.match(layout, /Jordan Andrade — Full-stack, Data & AI/);
  assert.ok(image.size > 100_000);
});
