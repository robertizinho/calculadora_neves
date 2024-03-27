let conta = 0 

let pessoas = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input",receberValorConta)

function receberValorConta(evento) {
   conta=Number (evento.target.value)
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input",receberQuantidadePessoas)

function receberQuantidadePessoas(evento) {
    if (evento.target.value === "0") {
       const paragrafoerro = document.querySelector(".pessoas #erro")
       paragrafoerro.style.display = "block"
    }

}