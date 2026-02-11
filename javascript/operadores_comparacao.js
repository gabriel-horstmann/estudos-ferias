//Operadores e Comparações

/*
 + = soma
- = subtração
* = multiplicação
/ = divisão
% = resto da divisão
*/

console.log(12 / 2); // resultado 6

console.log(12 % 2) // resultado 0
console.log(13 % 2) // resultado 1

// o parenteses funciona igual na matematica, o que está nele vem primeiro no calculo
const operacao = (12 + 5) * 2 + 4;
console.log(operacao)

// Operadores
/* 
> = maior
< = menor
>= = maior igual
<= = menor igual
*/

/*
== : igual
=== identico
!= diferente
!== diferente avaliando o tipo*/

// = a mais avalia o tipo

console.log(12 == "12"); // true
console.log(12 === "12"); // false

console.log(1 != 2); // true
console.log(1 !== "1"); // true
console.log(1 != 1); //false

//toda comparação gera um resultado booleano

// operador de pós incremento e pré incremento

let num = 1;
console.log(num);
console.log(num++); // pos incremento, vem depois do codigo o resultado é 1 e na linha de baixo vai ser 2
console.log(++num); // pre incremento, vem antes do codigo, o resultado é 3
console.log(--num); // resultado ja volta a ser 2

num = num + 5; // o resultado vai ser 7
console.log(num);

// o mesmo que num = num + x é o codigo abaixo
num += 5; // o resultado vai ser 12
console.log(num)

console.log(num *= 2); // resultado vai ser 23

const idade = 18;

const podeDirigir = idade >= 18;

console.log(podeDirigir);

if(idade >= 18) {
    console.log(`Você pode dirigir pois sua idade é ${idade}`);
}