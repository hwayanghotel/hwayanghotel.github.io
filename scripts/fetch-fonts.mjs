import { mkdir, writeFile } from 'node:fs/promises';
const base =
  'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/variable/';
await mkdir('public/fonts/woff2-dynamic-subset', { recursive: true });
await mkdir('public/licenses', { recursive: true });
const response = await fetch(base + 'pretendardvariable-dynamic-subset.css');
if (!response.ok) throw new Error(`Font stylesheet HTTP ${response.status}`);
const css = await response.text();
const urls = [...new Set([...css.matchAll(/url\(([^)]+)\)/g)].map((x) => x[1]))];
for (let i = 0; i < urls.length; i += 6) {
  await Promise.all(
    urls.slice(i, i + 6).map(async (relative) => {
      const r = await fetch(new URL(relative, base));
      if (!r.ok) throw new Error(`Font HTTP ${r.status}`);
      await writeFile(
        'public/fonts/' + relative.replace('./', ''),
        Buffer.from(await r.arrayBuffer()),
      );
    }),
  );
}
await writeFile('public/fonts/pretendard.css', css);
const license = await fetch(
  'https://raw.githubusercontent.com/orioncactus/pretendard/v1.3.9/LICENSE',
);
if (!license.ok) throw new Error(`Font license HTTP ${license.status}`);
await writeFile('public/licenses/Pretendard.txt', await license.text());
console.log(`Self-hosted ${urls.length} unmodified official Pretendard subsets.`);
