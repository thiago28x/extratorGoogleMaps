// Node.js program to demonstrate the
// fs.writeFileSync() method

// Import the filesystem module
const fs = require('fs');

let data = "Este arquivo contem uma coleção das melhores frutas:\n"
+ "\n1. Abacate 🥑\n2. Tomate 🍍\n3. Nozes\n\n";

let arr = ["bola", "perro", "auto"]

//IMPORTANTE: para ARRAYS deve ser usado um write stream + junto do ForEach
var file = fs.createWriteStream('aaaaaaa.txt');
file.on('error', function(err) { Console.log(err) });
arr.forEach(value => file.write(`${value}\r\n`));
file.end();

console.log("adicionado ao arquivo com sucesso\n");
//console.log(fs.readFileSync("arquivo-de-texto.txt", "utf8"));
