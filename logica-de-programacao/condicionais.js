const prompt = require('prompt-sync')();

let a = Number(prompt("Digite um valor: "));
let b = Number(prompt("Digite outro valor para somar: "));
var soma = a + b;

if (soma >= 20) {
    console.log(`O valor da sua soma é ${soma} e é maior do que 20`);
} else if (soma < 20) {
    console.log(`o valor da soma é ${soma} e é menor do que 20`); 
} else{
    console.log(`soma é igual a: ${soma}`);
}

const soma1 = 2+2;
const soma2 = 4+3;

if (soma1 === 4 && soma2 === 6) { //condicional E, os dois valores tem que ser true
    console.log("soma1 é igual a 4 e soma2 é igual a 6");
}

if (soma1 === 4 || soma2 ===6) { //condicional OU, somente um dos valores tem que ser true
    console.log("soma1 é igual a 4 ou soma2 é igual a 6")
}

const soma3 = 1+1;

//if (sum ===2) {
// number = 2;
// } else{
//    number = 4;
// }

//Mesma coisa que acima
let number = soma3 === 2 ? 2 : 4; //? - se sim; : - se não

console.log(number);

const car = prompt("Escolha Mercedes, Tesla ou BMW: ")

switch (car) {
    case "Mercedes":
        console.log("Mercedes é um bom carro");
        break;
    case "Tesla":
        console.log("Tesla estaciona sozinho");
        break;
    case "BMW":
        console.log("BMW é um dos carros mais lindos");
        break;
}