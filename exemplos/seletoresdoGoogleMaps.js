




//pega o NOME
let nome = document.querySelector("#QA0Szd > div > div > div.w6VYqd > div.bJzME.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div.TIHn2 > div.tAiQdd > div.lMbq3e > div:nth-child(1) > h1 > span:nth-child(1)").innerText

// pega o ENDEREÇO
let endereço = document.querySelector("div.RcCsl:nth-child(3) > button:nth-child(1)").innerText

 //este pega o CELULAR
let celular = document.querySelector("#QA0Szd > div > div > div.w6VYqd > div.bJzME.tTVLSc > div > div.e07Vkf.kA9KIf > div > div > div:nth-child(9) > div:nth-child(7) > button").innerText


let meuObjeto = [
    {Nome: nome, Endereço: endereço, celular: celular}
]

console.log('Objeto:  ' + meuObjeto[0].Nome);









//esse é melhor par pegar o celular, porque já procura um data it que COMEÇA com phone

const elements1 = document.querySelector('[data-item-id^="phone"]').innerText;
console.log(elements1);





// ✅ Get all where value of data-id ends with `ox1`
const elements2 = document.querySelectorAll('[data-id$="ox1"]');
console.log(elements2); // 👉️ [div]

// ✅ Get all where value of data-id contains with `box`
const elements3 = document.querySelectorAll('[data-id*="box"]');
console.log(elements3); // 👉️ [div, div]
