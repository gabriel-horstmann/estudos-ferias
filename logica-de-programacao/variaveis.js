/*Váriaveis - var, let e const
Var = escopo global quando declarado fora de uma função e escopo de função quando declarado dentro de uma função
let = funciona somente dentro do escopo declarado
const = constante, nao pode ser reatribuido um valor a esse atributo

dados e sintaxe:
string = " "
number = 0
float = 0.1
boolean = true or false*/

var nome = "matheus"
nome = "gabriel" //reatribuição do valor da variável
console.log(nome) //imprime normalmente o nome no cmd, a variavel é global então pode ser puxada de fora do escopo e imprime o ultimo nome declarado fazendo a reatribuição

if(true){
    let nome2 = "hugo";
    nome2 = "Lucas" //reatribuição funciona normalmente
    console.log(nome2)
}
//console.log(nome2) - esse codigo vai dar erro, dizendo que nome2 nao esta definido pois so existe dentro daquela função

if(true){
    const nome3 = "Jorge";
    //nome3 = "Igor" - caso eu colocasse esse codigo daria erro pois estou reatribuindo um valor a uma constante
    console.log(nome3)
}

if(true){
    const nome4 = { nome: "Romário"};
    nome4.nome = "Mário";
    console.log(nome4) //caso a const esteja declarado como um objeto, ai sim pode ser feito a reatribuição
}

    const firstName = "Gabriel";
    const lastName = "Horstmann";
    //console.log("Meu nome é " + firstName + " " + lastName) concatenação tradicional do código de baixo
    console.log(`Meu nome é ${firstName} ${lastName}`) //o ${} forma a interpolação de string, indicando que o conteudo dentro das chaves é uma expressão javascript
    console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLowerCase()}`) //toUpperCase deixa a string em maiuscula e toLowerCase deixa a string minuscula

    const names = "Felipe, Gabriel, Ricardo";
    console.log(names.split(",")); //a virgula eh o separador de onde termina um item e começa a procima parte da lista

    const number = 5;
    console.log(number.toString()); //converte o number para string
    console.log(typeof number) //dirá que number é number mesmo
    console.log(typeof number.toString()) //dira que number é string pois ja esta dentro do objeto

    console.log(2 == 3); //dira se é false ou true 

    const x = null; //variavel vazia

    const y = undefined; //variavel indefinida

    console.log("Isso só existe na branch teste, mas com o merge aparecerá no main");