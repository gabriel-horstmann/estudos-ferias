/*AEL - AddEventListener
Seção de estudo sobre esse evento do JavaScript
Estudo feito do canal Coding2GO*/

const button = document.getElementById('my-button') /*Armazena o botao do HTML na constante button*/
const button2 = document.getElementById('button-console');

/* addEventListener("evento", funcao) */
button.addEventListener("click", function doSomething() { //posso passar a função direto ou nomear e passar a função depois, como no exemplo abaixo
    alert("Hello World"); //quando clicar no botao aparecerá o pop-up escrito hello world no navegador
});

button2.addEventListener("click", showConsole); //executando a função fora do evento
function showConsole() {
    console.log("Hello World no console agora!")
}