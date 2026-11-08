import puppeteer from "puppeteer-core";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await puppeteer.launch({ executablePath: CHROME });
const page = await browser.newPage();
await page.setViewport({ width: 420, height: 900, deviceScaleFactor: 1 });
await page.goto(process.env.URL, { waitUntil: "networkidle0" });
if (process.env.CLICK === "1") {
  await page.click(".v3-burger");
  await new Promise((r) => setTimeout(r, 400));
}
await page.screenshot({ path: process.env.OUT });
await browser.close();
console.log("saved", process.env.OUT);
