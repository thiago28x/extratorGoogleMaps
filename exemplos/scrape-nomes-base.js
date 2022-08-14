const menulateral = document.querySelector("div.m6QErb.DxyBCb.kA9KIf.dS8AEf.ecceSd");
const comprasloja = document.querySelectorAll("div.ah5Ghc")
const aval = document.querySelectorAll("span.ZkP5Je")
const nomes = document.querySelectorAll(".hfpxzc")

menulateral.style.backgroundColor = "#grey";

Array.from(comprasloja).forEach(child => {
    child.style.backgroundColor = "red";
    child.style.display = "none";   
});

Array.from(aval).forEach(child => {
    child.style.backgroundColor = "green";
    child.style.display = "none";
});


Array.from(nomes).forEach(child => {
    child.style.backgroundColor = "blue";
});



let nomes = $$(".hfpxzc")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits: " + fruits)

lista = Array.from(nomes)

Array.from(nomes).forEach(child => {
    console.log(child.ariaLabel)
    fruits.push(child.ariaLabel)
});

console.log("fruits finalizado: " + fruits)

