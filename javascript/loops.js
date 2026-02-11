// Estruturas de Repetição: executa N vezes um código
// for = mais comum

//for(INCREMENTO, CONDICAO / INCREMENTADOR) {}
// Incremento = serve para controlar a execução do loop
// Condição = executa o loop ate chegar em um valor, literalmente a condição do loop
// incrementador = adiciona valor a condição

// loop que itere de 0 até 10:

for(let i = 0; i <= 10; i++) {
    console.log(`O valor atual de i é: ${i}`)
}

// arrays = listas
// contem geralmente itens do mesmo tipo de dados: string, numero, etc
// zero based = o primeiro item é o 0, não o 1

const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Pera"];

console.log(frutas); 

//loop que imprime os itens:

for(let i = 0; i < frutas.length; i++) { // length: tamanho da lista, usa como base o tamanho dela em si
    console.log(`Fruta: ${frutas[i]}`);
}

// while: não sabe a condição

let p = 0;

while(p < 5) { // variavel declarada fora do escopo, somente condição no escopo, incrementador pós inicio do loop somente.
    console.log(`O numero atual do loop While é: ${p}`);

    p++;
}

let aleatorio = 0;

while (aleatorio != 10) {
    aleatorio = Math.floor(Math.random() * 10) + 1; // a função math random gera numeros aleatorios 
    // 0 a 9.9
    // math floor arredonda o numero para baixo

    console.log(`Número aleatório atualmente é: ${aleatorio}`);

}

// do while = garante que o loop vai rodar pelo menos uma vez

var j = 0;

do {
    console.log(`O valor de J é: ${j}`);

    j++;
} while (j < 10);