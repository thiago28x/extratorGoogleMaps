console.log("Processo inicializado corretamente... \n \n")



const fs = require('fs/promises');
const puppeteer = require('puppeteer');




(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();


  await page.setViewport({
    width: 1300,
    height: 900
  })


    let keyword = "marmita"
    let local = "floripa"


  await page.goto('https://www.google.com/maps/search/' + keyword + "+" + local);
  //await page.screenshot({path: 'example.png'});

  

    const captar = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("*[aria-label]")).map(x => x.textContent)

});
    //await fs.writeFile('asdasd.txt', captar.join("\r\n"))

    captar.forEach((tag, i) => {
      //console.log(`${"⭐Lugar: " + i } ${tag.replace(/,/g,"⋅").replace(/⋅⋅/g,"")}\n\n\n\n`)
  });  


  const new_array = captar.filter((element) => {
    return element.length > 3;
  });
  
  
  
  console.log(new_array.slice(30))
  console.log( "LARGURA ARRAY:  " + new_array.length)

  console.log("começando outra coisa.....")

  await page.evaluate((new_array) => {

    new_array.forEach(chama);
    function chama(item, index) {
      console.log("item:  " + item);
    }



  });



})();           


