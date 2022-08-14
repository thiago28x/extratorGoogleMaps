
//const fetch = require('fetch');

//obs, precisa npm i fetch para rodar aqui, ou rode no navegador
async function pegaDados() {
  const resultado = await fetch('https://api.github.com/users/thiago28x')
  const resultadoJSON = await resultado.json();  
  console.log(" ...  Finalizou: \n " + resultadoJSON.login + "\n Nome: " + resultadoJSON.name)
}

//pegaDados()




const captar = require('../captar');


/* async function testeAwait(a1, a2) {

  let cidade = a1
  let tipo = a2
  let soma = tipo + " em " + cidade
  return soma
} */



async function teste() {
  //captar.start(a1,a2)
  return "somaasldikhaskjdhasm asjhkdbasjhdb lorem"
}



testeAwait("Sushi", "Curitiba")
  .then((resultadoVoltou) => {
    console.log("Aqui voltou o resultado da promessa: + " + resultadoVoltou)
  })











//descreve a função
async function processaAlgumaCoisa() {
    console.warn("\n\n esperando...  ⌛")

    let calculo = new Promise(function(resolve)  



    {
      setTimeout(function() {resolve("\n  .... terminou de calcular! 😍 \n");}, 500);
    });
    
    console.warn(await calculo)
  }
  


  //roda a função
  //processaAlgumaCoisa();