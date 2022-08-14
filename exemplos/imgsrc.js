console.log("Processo inicializado corretamente... \n \n")

const fs = require('fs/promises');
const puppeteer = require('puppeteer');

async function start() {

  let keyword = "marmita"
  let local = "floripa"

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://www.google.com/maps/search/' + keyword + "+" + local);
  console.log("abriu chrome!\n \n")

  await page.setViewport({
    width: 1300,
    height: 900
  })
 

console.log("Indo na página... \n")
await page.waitForNavigation();
console.log("carregou 100% \n")


  const photos = await page.$$eval("img", imgs => {
    return imgs.map(x => x.src) 
  })

  console.log("terminou eval \n")
  console.log("Fotos:  \n" + photos[3])


    for (const photo of photos) {

    console.log("foto:  \n" + photo)

    const imagepage = await page.goto(photo)
    await fs.writeFile(photo, await imagepage.buffer())
  }

  
  //await browser.close();


}

start();           



