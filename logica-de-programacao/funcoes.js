// funções - blocos de construção, procedimento, conjunto de instruções que executa uma tarefa
// definição / declaração da função - * function nome (arg, arg2, argN) {}
// parametros / argumentos são opcionais

function teste() {
    console.log("Olá, essa é a função teste");
} // a função esta declarada dessa forma

teste(); // assim executamos a função

function soma(a, b) {
    const soma = a + b;

    console.log("Soma: " + soma);
}

soma(2, 4);
soma(10, 10);

//return - retorno de dados de uma função

function multiplicacao(a, b){
    const mult = a * b;

    return mult; //retorna para o programa principal o valor de mult
}

console.log(multiplicacao(2, 2));; //uma forma de imprimir a função

const resultado = multiplicacao(5, 5);
console.log(resultado); //outra forma de imprimir a função

// função anonima
const saudacao = function (nome){ //uma constante nao tem como ser sobre escrevida
    console.log("Olá " + nome);
}

saudacao("Gabriel");

// callback - executar uma função como argumento (cb)

function operacao(a, b, callback) {
    return callback(a, b);
}

let resultadoOperacao = operacao(10, 8, soma);

console.log(resultadoOperacao);