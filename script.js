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
       
       const paragrafoerro = document.querySelector(".pessoas #erro")
       const DIVerro = document.querySelector(".pessoas .input-box")
       
      if (evento.target.value === "0") {
       paragrafoerro.style.display = "block"
       DIVerro.setAttribute("id","erro-div")    
      
      
      }  else {
         paragrafoerro.style.display = "none"
         DIVerro.setAttribute("id","")
         pessoas = Number(evento.target.value)
      }

}

const botoesgorjeta = document.querySelectorAll (".gorjeta input[type='button']")
botoesgorjeta.forEach(botao =>{
    botao.addEventListener("click",receberPorcentagem)
})

function receberPorcentagem(evento) {
   
}

