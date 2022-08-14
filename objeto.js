console.log("\nIniciando Google Chrome 😀  ...  ⌛  \n");
const puppeteer = require("puppeteer");
const scrape = [];

let browser = ""
let page = ""


async function launch() {
 browser = await puppeteer.launch({ headless: false, slowMo: 0 }); //abre o navegador
 page = await browser.newPage(); //abre uma TAB
page.goto("https://res.cloudinary.com/practicaldev/image/fetch/s--2xEhJi44--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/bked2kyupon5jmkwx4k6.gif"); //abre link de espera, só pra dar contexto, pode ser apagado

}
launch()



async function start(busca, local, qtd) {

  //quantos = qtd
  let link = 'https://www.google.com/maps/search/' + busca + "+" + local;
  //let link =
    "https://www.google.com/maps/search/marmita+em+florian%C3%B3polis/@-27.6141283,-48.6395668,11z/data=!3m1!4b1";

  
  await page.goto(link); //abre um link
  await page.setViewport({ width: 1300, height: 900,});
  await page.waitForSelector("#QA0Szd a");


  const lugares = await page.$$eval(
    "#QA0Szd > div > div > div.w6VYqd > div.bJzME.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div.m6QErb.DxyBCb.kA9KIf.dS8AEf.ecceSd > div.m6QErb.DxyBCb.kA9KIf.dS8AEf.ecceSd > div > div > a",
    (links) => {return links.map((x) => [x.ariaLabel, x.href]);});  //terminou de pegar os LINKS iniciais


  const lugaresFiltrados = lugares.filter((item, i) => {return i < qtd;});

  
  //console.log("Estes são os lugares da função start:" + lugaresFiltrados);
  console.log("\n Encontramos " + lugares.length + " lugares. Vamos visitar: " + lugaresFiltrados.length );


  let dadosFinais = await visitadorDeSites()
  async function visitadorDeSites() {
    for (const [i, value] of lugaresFiltrados.entries()) {
      console.log(`Abrindo a página ${i+1} \n`);

      //console.log('%d: %s', i, value);
      const imagepage = await page.goto(value[1]);
      await page.waitForSelector(".Io6YTe");
      //await page.screenshot({path: i + "imagem.png"})


      //esta parte lê a descrição do restaurante e coloca no data

      scrapePagina = await page.evaluate(() => {
                    console.log('começando....'); //loga no chrome, não aqui
                    //pega o NOME
                    let nome = document.querySelector("#QA0Szd > div > div > div.w6VYqd > div.bJzME.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div.TIHn2 > div.tAiQdd > div.lMbq3e > div:nth-child(1) > h1 > span:nth-child(1)").innerText;

                    // pega o ENDEREÇO
                    let endereço = document.querySelector("div.RcCsl:nth-child(3) > button:nth-child(1)").innerText
                    
                    let celular = "0"
                    //este pega o CELULAR
                    try {
                        console.log("try pegar o celular..  \n");
                         celular = document.querySelector('[data-item-id^="phone"]').innerText;
                        
                        } catch(err) {
                          celular = "vazio"
                          console.log('Não achou o celular: \n' + err);}

                    let meuObjeto = {Nome: nome, Endereço: endereço, Celular: celular}
                    

                    //console.log('Objeto:  ' + meuObjeto[0].Nome + meuObjeto[0].Endereço + meuObjeto[0].celular);  //loga na janela do Chrome!
                    return meuObjeto; 
                                                                         });  //copiou a descrição
        //await browser.close()    
        //return scrape
        scrape.push(scrapePagina)
        console.log('array scrape: \n' + scrape + "\n")   } //fecha o LOOP for of

        return scrape  }  //Aqui finalizou a função de visitar os sites




  return dadosFinais }//fim da start()





//start().then(result => { console.log("\n TERMINOU, vou enviar estes dados: \n" + result[0].Nome )})





// ⭐ a função é acima, mas temos que Especificar o que irá exportar, abaixo:
module.exports = { start}
