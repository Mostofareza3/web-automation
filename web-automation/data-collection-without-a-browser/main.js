import puppeteer from "puppeteer-core";
import fs from 'fs'

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com")
    const content = await page.content()
    fs.writeFileSync("example.puppeteer.html", content)
}

main().catch(err=> console.log(err))