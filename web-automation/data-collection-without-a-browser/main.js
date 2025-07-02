import puppeteer from "puppeteer";
import fs from 'fs'

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://example.com")
    const content = await page.content()
    fs.writeFileSync("example.puppeteer.html", content)
    await browser.close()
}

main().catch(err=> console.log("--------------Error--------\n", err))