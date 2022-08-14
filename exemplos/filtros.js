const products = [
    { productName: "Television", price: "1000" },
    { productName: "Pendrive", price: "200" },
    { productName: "Camera", price: "450" },
    { productName: "Mouse", price: "120" },
    { productName: "carro", price: "450" },
    { productName: "cachorro", price: "450" },
    { productName: "gato", price: "450" },
    { productName: "leão", price: "450" },
    { productName: "girafa", price: "450" },

];

console.log(products.length);


let qtd = 3



const filtered = products.filter((item, i) => {
    return i < qtd;
});

console.log(filtered.length);
console.log(filtered);

let captar = ["abacaxi"];
const scrape = ["limão"];

RESULTADO = scrape.concat(captar);

console.log(RESULTADO);

