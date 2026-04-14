import puppeteer from 'puppeteer'
import { existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../public/screenshots')

const projects = [
  { slug: 'riofaz-tracker',    url: 'https://snow-goose-667329.hostingersite.com' },
  { slug: 'elo',               url: 'https://saddlebrown-trout-771246.hostingersite.com/apresentacao.php' },
  { slug: 'goverde',           url: 'https://goverdeportal-production.up.railway.app' },
  { slug: 'vitrine-auto',      url: 'https://autovitrine.com' },
  { slug: 'unica-chamados',    url: 'https://suporteunica.com' },
  { slug: 'controla-facil',    url: 'https://controlafacil.cloud' },
  { slug: 'gm-personal',       url: 'https://gmpersonal.com.br' },
  { slug: 'golden-express',    url: 'https://grupogoldenexpress.com.br' },
  { slug: 'forca-do-saber',    url: 'https://xn--foradosaber-o9a.com.br' },
]

async function screenshot(browser, slug, url) {
  const outFile = path.join(outDir, `${slug}.jpg`)
  console.log(`📸 ${slug} — ${url}`)
  const page = await browser.newPage()
  try {
    await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1.5 })
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 25000 })
    await new Promise(r => setTimeout(r, 1500))
    await page.screenshot({ path: outFile, type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 1280, height: 800 } })
    console.log(`   ✅ salvo em ${outFile}`)
  } catch (err) {
    console.log(`   ❌ erro: ${err.message}`)
  } finally {
    await page.close()
  }
}

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const p of projects) {
  await screenshot(browser, p.slug, p.url)
}

await browser.close()
console.log('\n✅ Todos os screenshots finalizados.')
