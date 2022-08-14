let calc = 0

    console.log(calc)

const primeiraFunc = () => {
    let primeira = "Eu sou a variavel 1 🍌";
    //console.log(primeira)

    function dentro() {
        //console.log(` \nEu sou a 2 var, chamei: >> ${primeira}`)
        calc = 1 + 3
        return calc
    } //fim da func 2





    return dentro
}//fim da func 1

function passouResultadoPraCá(abc) {
    mostra = calc + 1;
    console.log(mostra)
}





//console.log("asjdnasjdkbnasjdbnsa:   " + minhaFunc);     // 2) aqui só loga a descrição, não serve pra nada, ver a 3)
let minhaFunc = primeiraFunc()      // 1) guardou a função toda dentro desta variavel
minhaFunc();                // 3) Aqui executa de fato
passouResultadoPraCá()

//console.log(calc)
 