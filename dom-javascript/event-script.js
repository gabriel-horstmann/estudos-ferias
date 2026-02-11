const submitButton = document.querySelector('#submit-button');
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const myForm = document.querySelector("#my-form");

const items = document.querySelector(".items");
const body = document.querySelector("body");


submitButton.addEventListener("click", function(e) {
    e.preventDefault(); // evita o comportamento padrão do elemento
    console.log("clicked!") //aparece bem rapido no console por conta do submit no HTML

    const nameValue = nameInput.value; //pega o valor do elemento que vai ser digitado em name
    const emailValue = emailInput.value; // pega o valor digitado no elemento email para o console
    console.log(nameValue);
    console.log(emailValue);

    if (nameValue === '' || emailValue === '') {
       return alert("Por favor, preencha os campos!");
    }

    myForm.style.background = "blue";

    items.firstElementChild.textContent = nameValue; // armazena o valor da constante name no primeiro item da lista
    items.children[1].textContent = emailValue; // armazena o valor da constante email no segundo item da lista

    body.style.background = "blue";
})