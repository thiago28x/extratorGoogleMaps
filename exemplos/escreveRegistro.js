const fs = require("fs");
console.log('Carregou módulo de escrita.');


/* const listaClientes = [
    { id: 1, nome: "Pedro", price: "1000", cadastro: "28/08/2022" },
    { id: 2, nome: "João", price: "200" },

]; */


/*  escrevedor(listaClientes).then(result => {
    console.log("ok, vou enviar estes dados: \n" + result);
}).catch(err => {console.log(err)}); */




  async function escrevedor(lista) {





    for (const [i, element] of lista.entries()) {

      fs.appendFile('resultado.csv',  i + ")  "  + "  " , function (err, teste) {}); //fecha a função que escreve arquivo


    const propertyValues = Object.values(element);
    console.log("\n Iniciando escrita 💾... recebi estes dados: \n" + propertyValues);

    
      for (const [i, value] of propertyValues.entries()) {  //LOOP dentro do objeto
      console.log("Escrevendo:\n"  + value + "\n" );
      fs.appendFile('resultado.csv',  value + "\r\n" , function (err, teste) {});} //fecha a função que escreve arquivo
      
      
    }
      
      
      
      
      
      
      
      
      }  //Aqui finalizou a função de escrevedor



module.exports = { escrevedor}
