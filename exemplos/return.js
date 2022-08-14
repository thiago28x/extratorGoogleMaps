 function test() {
    return "hello";
}

let result =  test()
//console.log(result)
console.log(test())




let login = function (senha) {
    if (senha === "dog123") {
        return "\n Senha certa, autenticado com sucesso ✅"
    } else {
        return "\n senha errada ❌"
    }
}


let resultado = login("dog123") //perceba que passei uma função sincrona como argumento do console.log

console.log(resultado)  //perceba que passei uma função sincrona como argumento do console.log