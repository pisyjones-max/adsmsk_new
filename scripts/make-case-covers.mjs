// Генерация обложек кейсов сайтов (макет браузера с доменом).
// Заменить реальными скриншотами: положить public/img/case-<name>.webp тем же именем.
import sharp from 'sharp'

const covers = [
  { file: 'case-studio-dvoretckaya', domain: 'studio.dvoretckaya.ru', accent: '#C2828F', bg1: '#2a1a20', bg2: '#4a2a35' },
  { file: 'case-platforma',          domain: 'platforma-msk.ru',      accent: '#f59e0b', bg1: '#1c1a14', bg2: '#3a2f16' },
  { file: 'case-sk-craft',           domain: 'sk-craft.ru',           accent: '#60a5fa', bg1: '#111827', bg2: '#1e3a5f' },
]

const svg = ({ domain, accent, bg1, bg2 }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg1}"/><stop offset="1" stop-color="${bg2}"/></linearGradient>
    <linearGradient id="hero" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${accent}" stop-opacity=".9"/><stop offset="1" stop-color="${accent}" stop-opacity=".35"/></linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <g transform="translate(120,80)">
    <rect width="960" height="515" rx="18" fill="#0b0d14" stroke="#ffffff" stroke-opacity=".12"/>
    <rect width="960" height="52" rx="18" fill="#161a26"/>
    <rect y="30" width="960" height="22" fill="#161a26"/>
    <circle cx="28" cy="26" r="7" fill="#ff5f57"/><circle cx="50" cy="26" r="7" fill="#febc2e"/><circle cx="72" cy="26" r="7" fill="#28c840"/>
    <rect x="130" y="12" width="700" height="28" rx="14" fill="#0b0d14"/>
    <text x="480" y="32" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-size="16" fill="#cbd5e1">${domain}</text>
    <rect x="36" y="76" width="888" height="190" rx="14" fill="url(#hero)"/>
    <rect x="64" y="108" width="380" height="20" rx="10" fill="#fff" fill-opacity=".92"/>
    <rect x="64" y="142" width="300" height="20" rx="10" fill="#fff" fill-opacity=".7"/>
    <rect x="64" y="196" width="150" height="40" rx="20" fill="#0b0d14" fill-opacity=".75"/>
    <g fill="#ffffff" fill-opacity=".08" stroke="#ffffff" stroke-opacity=".1">
      <rect x="36" y="290" width="284" height="196" rx="12"/><rect x="338" y="290" width="284" height="196" rx="12"/><rect x="640" y="290" width="284" height="196" rx="12"/>
    </g>
    <g fill="${accent}" fill-opacity=".75">
      <rect x="56" y="310" width="244" height="90" rx="8"/><rect x="358" y="310" width="244" height="90" rx="8"/><rect x="660" y="310" width="244" height="90" rx="8"/>
    </g>
    <g fill="#fff" fill-opacity=".55">
      <rect x="56" y="420" width="170" height="12" rx="6"/><rect x="358" y="420" width="170" height="12" rx="6"/><rect x="660" y="420" width="170" height="12" rx="6"/>
      <rect x="56" y="444" width="110" height="12" rx="6"/><rect x="358" y="444" width="110" height="12" rx="6"/><rect x="660" y="444" width="110" height="12" rx="6"/>
    </g>
  </g>
</svg>`

for (const c of covers) {
  await sharp(Buffer.from(svg(c))).webp({ quality: 88 }).toFile(`public/img/${c.file}.webp`)
  console.log('ok', c.file)
}
