console.log("\nIniciando Google Chrome 😀  ...  ⌛  \n");
const fs = require("fs");
const puppeteer = require("puppeteer");
let captar = ["captar"];
let scrape = ["scrape"];
quantos = 3;



async function start(busca, local) {
  //let link = 'https://www.google.com/maps/search/' + busca + "+" + local;
  let link =
    "https://www.google.com/maps/search/marmita+em+florian%C3%B3polis/@-27.6141283,-48.6395668,11z/data=!3m1!4b1";

  const browser = await puppeteer.launch({ headless: true, slowMo: 0 }); //abre o navegador
  const page = await browser.newPage(); //abre uma TAB
  await page.goto(link); //abre um link
  await page.setViewport({ width: 1300, height: 900,});
  await page.waitForSelector("#QA0Szd a");

  const lugares = await page.$$eval(
    "#QA0Szd > div > div > div.w6VYqd > div.bJzME.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div.m6QErb.DxyBCb.kA9KIf.dS8AEf.ecceSd > div.m6QErb.DxyBCb.kA9KIf.dS8AEf.ecceSd > div > div > a",
    (links) => {return links.map((x) => [x.ariaLabel, x.href]);});  //terminou de pegar os LINKS iniciais


  const lugaresFiltrados = lugares.filter((item, i) => {return i < quantos;});

  
  console.log("\n\nEstes são os lugares da função start: \n");
  //console.log(lugaresFiltrados);
  console.log("\n Encontramos " + lugares.length + " lugares. Vamos visitar: " + lugaresFiltrados.length );


  let dadosFinais = await visitadorDeSites()
  async function visitadorDeSites() {
    for (const [i, value] of lugaresFiltrados.entries()) {
      console.log("\n Abrindo a pagina " + i + ": \n" );

      //console.log('%d: %s', i, value);
      const imagepage = await page.goto(value[1]);
      await page.waitForSelector(".Io6YTe");
      //await page.screenshot({path: i + "imagem.png"})


      //esta parte lê a descrição do restaurante e coloca no data
      scrape = await page.evaluate(() => {
      return Array.from(document.querySelectorAll(".Io6YTe")).map((x) => x.innerText.replace(/Reivindicar esta empresa/g,"").replace(/Enviar para smartphone/g,"").replace(/Fazer um pedido/g,"").replace(/rappi.app.link/g,"").replace(/Se identifica como uma empresa de empreendedoras/g,"").replace(/Cardápio/g,"").replace(/em breve/g,""));});
      //copiou a descrição


    


      //console.log("\n Informação do Local: " + scrape + "\r\n");
      fs.appendFile('resultado.csv',  i + ")  "  + value[0] + "\r\n", function (err, scrape) {});
      //pega cada uma das linhas da descrição do restaurante e APENDE ao arquivo
     
      
      await escrevendo() //inicia escrita de arquivo
      async function escrevendo() { scrape.forEach((tag, i) => {
           //TO DO, talvez era bom transformar esta função em async 
          //async function escrevendo() {
          fs.appendFile('resultado.csv', `${tag}\r\n`, function (err, scrape) {});});}
          //fechou o loop da descrição  
          fs.appendFile('resultado.csv', `\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ o ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \r\n`, function (err, scrape) {});
        } //fecha a função que escreve arquivo

    await browser.close()    
  
      return scrape

  }  //Aqui finalizou a função de visitar os sites

  //console.log("captar: \n" + captar)

  //captar = scrape;
  //console.log("SCRAPE: \n" + scrape)



 // console.log("\n\nEstes são os lugares da função start: \n" + await merda);



  return dadosFinais
  
}//fim da start()



//return captar


start().then(result => { console.log("\n TERMINOU, vou enviar estes dados: \n" + result )})





// ⭐ a função é acima, mas temos que Especificar o que irá exportar, abaixo:
module.exports = { start, captar}
