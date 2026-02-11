// Variáveis - 3 formas: Var, let e const
// Forma que salvamos valores na memória

//Sintaxe: TIPO (var, let e const) NOME = VALOR;

var nome = "Gabriel";

console.log(nome);
console.log("Gabriel"); //mesma coisa que chamar a variavel

//let = substituir o var
let idade = 20;
// A diferença é o escopo, o var "contamina" muito o escopo e o let respeita a abertura de bloco ({ })

// Reatribuição de valores
nome = "Eloisa"
idade = 30;

console.log(nome, idade);
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`)

const pi = 3.14; // const não tem reatribuição de valores
console.log(pi);

// verificacao dos dados com operador typeof

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof pi); //number nao tem diferença de numero fracionado em JS