const button = document.querySelector("#send"); // seleciona o id send do documento html e armazena na const

button.addEventListener("click", function(e) {
    e.preventDefault(); // a opção preventdefault evita o comportamento natural de um elemento
    
    const name = document.querySelector("#name");
    const value = name.value; // armazena o valor digitado no campo name do formulario
    console.log(value); 
})