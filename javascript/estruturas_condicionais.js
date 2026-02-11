const prompt = require("prompt-sync")();
//Estruturas condicionais servem para criarmos decisões ao longo do código

//IF
//if = recurso
//() = expressão que vai ser avaliada
//{} = bloco de código que é executado

// Else = bloco executado se o IF for falso

const hora = Number(prompt("Digite a hora: "));

if(hora < 12) {
    console.log("Bom Dia!"); // o codigo executa caso a variavel atenda, caso nao atenda o codigo passa reto do if
} else {
    console.log("Boa Tarde!");
}

// Mais de uma possibilidade = else if
// else if = permite 1 ou mais alternativas

const velocidade = Number(prompt("Insira sua velocidade: "))

if (velocidade < 20) {
    console.log("Você está muito abaixo da velocidade");
} else if(velocidade < 50) {
    console.log("Você pode acelerar um pouco mais");
} else if (velocidade < 80) {
    console.log("Você está na velocidade ideal!");
} else {
    console.log("Você está muito rápido");
}

// if = somente 1, nao precisa de nenhum outro condicional
// else if = posso ter vários e precisa do if, nao precisa do else
// else = somente 1, precisa do if 

//switch = bom para analisar casos com valores fixos, ex: dia da semana

// if: geralmente com intervalo de valores
// switch = geralmente com valores específicos 

// switch quando encontra o verdadeiro executa todos os outros cases
// exceto quando se coloca o break no final do case, ai interrompe quando encontra o verdadeiro

let diaDaSemana = 10;

switch (diaDaSemana) {
    case 1:
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terça-Feira");
        break;
    case 3:
        console.log("Quarta-Feira");
        break;
    case 4:
        console.log("Quinta-Feira");
    case 5:
        console.log("Sexta-Feira");
    case 6:
        console.log("Sábado");
    case 7:
        console.log("Domingo");
    default:
        console.log("Dia da Semana inválido"); //como se fosse um else, quando nenhum valor atende a um case do switch
}

// Operadores Lógicos

// AND &&
// OR ||
// NOT !

// Tabela verdade
// Vão permitir lógicas mais complexas

//Exp1 && Exp2 = true se as 2 expresões forem true
//Exp1 || Exp2 = true se 1 for true, false somente se os dois forem false
//!Exp1 = inverte o resultado do boolean - true = false; false = true

//Se o usuário pode dirigir

let idadeUser = Number(prompt("Insira sua idade: "));
let possuiCarteira = prompt("Você possui carteira? ");

if (idadeUser >= 18 && possuiCarteira.toLowerCase() == "sim")  {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não está apto para dirigir")
}

// cadastro no sistema
// pode fazer com rg ou passaporte

const possuiRG = true;
const possuiPassaporte = false;

if(possuiRG || possuiPassaporte) {
    console.log("Pode fazer o cadastro!");
} else {
    console.log("Você não pode fazer o cadastro");
}

const climaBom = false; 

if (!climaBom) { //inverteu o false, agora é true 
    console.log("Não está chovendo!");
}