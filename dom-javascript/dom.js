const addUserText = document.getElementById('add-user');
console.log(addUserText); // da erro no terminal do vs code, pois so roda no console do navegador
addUserText.innerText = "Adicionar Usuário"; //altera o texto

//mesma coisa do codigo acima:
/*const addUserText2 = document.querySelector("#add-user"); // em caso de mais itens, o query selector retorna somente o primeiro.
console.log(addUserText2); // retorna o elemento em si
addUserText2.textContent = "Add User"; //altera o conteudo igual em cima*/

// selecionar multiplos elementos
const allItems = document.querySelectorAll(".item");
console.log(allItems); //retorna uma node list = lista de nós extraidas de um documento

/*
const allItems2 = document.getElementsByClassName("item");
console.log(allItems2); // tambem retorna varios itens, em um HTMLCollection, porem nao é recomendado o uso para isso pois nao conseguimos extrair dados de dentro da lista*/

const items = document.querySelector(".items");
console.log(items);

items.firstElementChild.remove() //remove o primeiro item da lista
items.lastElementChild.remove(); // remove o ultimo item da lista

items.children[0].textContent = "Item que nao foi removido alterado pelo JS"; //Pelo fato dos outros itens serem removidos, o item 2 agora é o 0 do array
//items.remove(); //remove os itens do HTML

const button = document.querySelector(".btn");
console.log(button);
button.style.background = "red"; // altera a cor do botao