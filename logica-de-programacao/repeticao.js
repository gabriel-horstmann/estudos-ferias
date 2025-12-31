// estruturas de repetição - loop
// executa N vezes um código

// for(INCREMENTO, CONDICAO, INCREMENTADOR) {}

// Incremento - i = 0, j, k, l
// Condição = i < 10;
// Incrementador = i++ (cada loop, soma um ao valor de i)

// loop de 0 até 10
for (let i = 0; i <= 10; i++) {
    console.log("Loop for - o valor de i é: " + i);
}

// arrays = listas - abrem e fecham com []
// geralmente com itens do mesmo tipo de dados

const carros = ["BMW", "Porsche", "BYD", "Mercedes"];

console.log(carros);

//arrays iniciam no 0 a contagem

console.log(carros[0]);
console.log(carros[2]);

for (let i = 0; i < carros.length; i++) { //listas.length - quantidade de elementos
    console.log("Carro: " +carros[i])
}

//while - nao sabe a condição
p = 0;

while(p < 5) {
    console.log("Loop While: " + p);
    p++
}

let aleatorio = 0;

while (aleatorio != 10) {
    aleatorio = Math.floor(Math.random() * 10) + 1; //math.floor arredonda 1 para baixo - ex: 5.3 = 5

    console.log("Num. aleatório: " + aleatorio)
}

// while = quando nao sei quando vai acabar `

//do while - while que garante uma execução

let num1 = 10

while (num1 < 10) {
    console.log("A variável é menor do que 10")
}
// nao sera impresso nada pois a variavel nao é menor que 10

//diferente deste codigo aqui, pois tera um "do" antes o que garante que sera rodado o code

do{
    console.log("A variável é igual a 10 e está rodando com do while");
} while (num1 < 10)

//mesmo assim o mais utilizado é o for loop

//soma de numeros pares de 0 a 20

let calc = 0;
let calcImpar = 0;

// 2 % 2 = 0; 3 % 2 = 1; etc 
for (let i = 0; i <= 20; i++) {
    //verificar numeros pares
    if (i % 2 === 0) { //% (modulo) - calcula o resto da divisão - se o resto da divisao for 0 significa que o numero é par
        calc += i; // calc = n + i o valor atual do loop
    } else{
        calcImpar += i;
    }
}

console.log(calc);
console.log(calcImpar);

// contar quantas consoantes tem na palavra
const palavra = "Hogwarts"

let consoantes = 0;

// textos são parecidos com arrays - cada letra um elemento

console.log(palavra[0]);
console.log(palavra.length);

// case sensitive
// A == a > false, a == a > true

for (let i = 0; i < palavra.length; i++) {
    let letra = palavra[i].toLowerCase();

    if (
        letra !== "a" &&
        letra !== "e" &&
        letra !== "i" &&
        letra !== "o" &&
        letra !== "u"
    ) {
        consoantes++
    }
}

console.log(`o número total de consoantes é ${consoantes} da palavra ${palavra}`);