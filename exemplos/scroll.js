
console.log("\nIniciando Puppeteer...  \n")

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage();
    await page.goto('https://www.google.com/maps/search/pizza/@-26.8944016,-49.0716105,15z/data=!3m1!4b1')
    //await browser.close();


                await autoscroll(page)
})()




async function autoscroll(page)  {

    await page.evaluate( async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                const element = document.querySelectorAll("div.m6QErb.DxyBCb.kA9KIf.dS8AEf.ecceSd")[1];
                var scrollHeight = element.scrollHeight;
                element.scrollBy(0, distance)
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 500) }) })}

