const copiar = document.getElementById("copiar");
const senhas = document.getElementById("resultado");

function digitRandom() {
    return parseInt(Math.random() * 10).toString();
}

function gerar(digitos) {
    let password = "";
    for (let i = 0; i < digitos; i++) {
        password += digitRandom();
    }
    return password;
}

function gerarTodas() {
    senhas.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        let senha = gerar(4);
        senhas.innerHTML += `Quarto ${i}: ${senha}<br>`;
    }
}

window.onload = gerarTodas();

copiar.addEventListener("click", (evt) => {
    navigator.clipboard.writeText(senhas.innerText);
    alert("Senhas copiadas.");
});
