const express = require('express');   
const path = require('path');
const fs = require('fs');
const app = express();

/* Explicação deste arquivo: Inicia o servidor,
declara uma variavel de usuarios/clientes ,  */




const PORT = process.env.PORT || 8080;   //inicia o processo na porta 8080
app.listen(PORT, _ => {
    console.log(`1) Servidor em \n http://localhost:${PORT}`)
});





const listaClientes = [
    { id: 1, nome: "Pedro", price: "1000", cadastro: "28/08/2022" },
    { id: 2, nome: "João", price: "200" },
    { id: 3, nome: "Thiago", price: "450" },
    { id: 4, nome: "Davi", price: "120" },
    { id: 5, nome: "Larissa", price: "450" },
    { id: 6, nome: "Luana", price: "450" },
    { id: 7, nome: "Ana", price: "450" },
    { id: 8, nome: "Maria", price: "450" },
    { id: 9, nome: "Rigoberta", price: "450", cadastro: "01/05/2021" },

];

console.log('Clientes encontrados \n' + listaClientes[2].nome);
console.log('Preço \n' + listaClientes[2].price);


//rota para todos os clientes
app.get('/clientes/', function(req, res) {

    res.json(listaClientes)
   // res.send(listaClientes); //o de cima é mais apropriado
   // res.send(JSON.stringify(listaClientes)); //não fazer

})


//rota para para um cliente especifico
app.get('/clientes/:clienteId/', function(req, res) {

    let clienteID = req.params.clienteId;
    console.log("Pediram o cliente nº:" + clienteID);
    res.json(listaClientes.filter(membro => membro.id === parseInt(clienteID)))
 })






















/*     captar.start(local, tipo).then(result => {
        console.log("ok, vou enviar estes dados: \n" + result); res.send(result);
}).catch(err => {console.log(err); res.sendStatus(501);});
}); */


