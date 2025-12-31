// arrays - lista de objetos, objetos que contem multiplos valores armazenados em uma lista
// pode armazenar string, numero, objeto, outra variaveis etc
// construidos de colchetes e os itens sao separados por virgulas

//arrays contam a partir de 0

var palavras = ["carro", "moto", "bicicleta", "triciclo", "onibus"];
console.log(palavras); //retorna o array todo
console.log(palavras[2]); // retorna o item bicicleta

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
console.log(numeros[9]);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);  //laço de repetição que imprime cada item em uma linha no array
}

var misturado = [1, 2, "gabriel", [0, 1], 4, "word"]; //array dentro do array = array multidimensional
console.log(misturado[0]);
misturado[0] = "substituição"; //muda o item 0 (1) do array
console.log(misturado[0]);
console.log(misturado.length); //retorna o tamanho do array

console.log(misturado[3]); //retorna o array multidimensional
console.log(misturado[3][0]); //retorna o item 0 do array multidimensional

//métodos uteis de arrays

//converter string em arrays

var SequenciaPalavras = "Itapema, Itajaí, Balneário Piçarras, Balneário Camboriú"
var convArraySt = SequenciaPalavras.split(",");
console.log(convArraySt); //o console imprime em forma de array agora
console.log(convArraySt.length);
console.log(convArraySt[convArraySt.length - 1]); //retorna o ultimo item do array

//converter array em string
var nomes = ["Julio", "Alessandro", "Paulo", "Mateus"];
console.log(nomes.toString());

// adicionar e remover itens de array
// push - adiciona
// pop - remove

var paises = ["Brasil", "Argentina", "Holanda", "Inglaterra", "Alemanha"];
console.log(paises);
paises.push("Portugal");
console.log(paises);
paises.push("Afeganistão", "França");
console.log(paises);

paises.pop(); //remove o ultimo item da array - frança
console.log(paises);

// unshift e shift - mesma coisa que push e pop respectivamente, adicionam e removem
// porem inves de ultimo da lista, mexem no primeiro item
var removedItem = paises.shift();
console.log(paises);

console.log(removedItem);

paises.unshift("Egito");
console.log(paises);