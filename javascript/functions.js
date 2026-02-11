// Funções servem para modularizar o código

// function (arg1, arg2 etc) {exec} 

// parametros e argumentos são opcionais

function helloworld() {
    console.log("Hello World");
}

helloworld(); // chamar a função

// função que soma com argumentos

function soma(a, b) {
    let soma = a + b;

    console.log(`O valor dos dois números somados é: ${soma}`);
}

soma(8, 10);
soma(10, 40);

// return - retorno de dados de uma função

function multiplicacao(a, b) {
    let mult = a * b;

    return mult; //nao imprime na tela, somente armazena no codigo
}

const resultado = multiplicacao(10, 2);
console.log(resultado); // para imprimir a função com return, é necessário armazenar a função numa variável e logar a variavel

const somaMult = resultado  + 10;
console.log(somaMult);

// função:
// - nao precisa de parametro
// - nao precisa de retorno
// sao elementos opcionais que podem sim serem utilizados e ajudam na feitoria do código

//função anonima - funcao passada sem nome, criadas para serem usadas imediatamente ou atribuidas a variaeis

const hello = function (nome) {
    console.log(`Olá, ${nome}!`);
}

hello("Gabriel");

// callback - função passada como argumento para outra função

function operacao(a, b, callback) {
    return callback(a, b);
}

let resultadoOperacao = operacao(8, 20, soma); // chamando a função soma, a primeira função criada la em cima

console.log(resultadoOperacao);

let resultadoDois = operacao(10, 5, function(x, y) {
    return x - y;
})

console.log(resultadoDois);

// arrow function = sintaxe menor, ideais para funções anonimas e callback

const divisao = (a, b) => {
    return a / b;
}

console.log(divisao(10, 4));

//quando é somente 1 linha, nao precisa de {} e de return
const multiplicacaoArrow = (a, b) => a * b;

console.log(multiplicacaoArrow(10, 5));

//função que detecta o tipo de dado

function detectarTipo(valor) {
    if(typeof valor === "string") {
        return "String";
    } else if(typeof valor === "number") {
        return "Number";
    } else if(typeof valor === "boolean") {
        return "Boolean";
    } else {
        return "Tipo desconhecido";
    }
}

console.log(detectarTipo("Teste String"));
console.log(detectarTipo(123)); // teste number
console.log(detectarTipo(false)); // teste boolean

// condição ternária - cond/expressão - ? = true; : = false

const idade = 18;

const maiordeIdade = idade >= 18 ? "É maior" : "Não é maior";
console.log(maiordeIdade);