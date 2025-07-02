import fs from "fs/promises"
import {JSDOM} from "jsdom"

const data = await fs.readFile("curl.example.html", "utf-8");
const dom = new JSDOM(data)
const document = dom.window.document;
console.log(document.querySelector("a").href)