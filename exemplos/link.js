
console.log("\nIniciando Puppeteer...  \n")

const puppeteer = require('puppeteer');
const thiago = ["abacaxi", "pera"];
console.log("Resultado 0 : \n \n " + thiago)




async function start()  {
  let link = "https://www.google.com/maps/search/sushi/@-26.89291,-49.0690785,15z/data=!3m1!4b1";

  const browser = await puppeteer.launch({headless: true});    //abre o navegador
  const page = await browser.newPage();                           //abre uma TAB

  await page.goto(link);  //abre um link


  //seleciona todos os links da pagina > let arr = Array.from(document.querySelectorAll(" #QA0Szd a"))

  await page.waitForSelector('#QA0Szd a')
  const scrape = await page.evaluate(() => { 
    let arr1 = Array.from(document.querySelectorAll("#QA0Szd a"))
    beta(arr1)
});


function beta(a) {
    let maca = a
console.log("Resultado 3 : \n \n " + thiago + a)
}




console.log("Resultado 1: \n \n " + scrape)


  //await browser.close()
  
//captar = scrape;

 

//return captar
}

start()//FUNÇÃO FECHA AQUI





// ⭐ a função é acima, mas temos que Especificar o que irá exportar, abaixo:
//module.exports = { start, captar}




