let conta = 0 

let pessoas = 0

let Porcentagem = 0

const containput = document.querySelector("#conta")
containput.addEventListener("input",receberValorConta)

function receberValorConta(evento) {
   conta=Number (evento.target.value)
   calcular()
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
       calcular()
}

const botoesgorjeta = document.querySelectorAll (".gorjeta input[type='button']")
botoesgorjeta.forEach(botao =>{
    botao.addEventListener("click",receberPorcentagem)
})

function receberPorcentagem(evento) {
   botoesgorjeta.forEach(botao => {
      botao.classList.remove("botao-ativo")

      if(botao.value === evento.target.value) {
         botao.classList.add("botao-ativo")
      }
   })

   if(evento.target.value !== "") {
      Porcentagem = parseFloat(evento.target.value) / 100
   } else {
      Porcentagem = 0
   }
    calcular()

}


const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input",receberPorcentagem)



function calcular () {
   if(conta !== 0 && Porcentagem !== 0 && pessoas !==0) {
     const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
     strongGorjetaTotal.innerHTML =`R$ ${(conta * Porcentagem / pessoas).toFixed(2)}`
   
     const strongTotal = document.querySelector(".total > strong")
     strongTotal.innerHTML = `R$ ${((conta +(conta * Porcentagem)) / pessoas).toFixed(2)}`
   
   
   }
}

const botaoLimpar = document.querySelector(".resultados button")
botaoLimpar.addEventListener("click", Limpar)

function Limpar() {
   containput.value = ""

   botoesgorjeta.forEach(botao=>{
      botao.classList.remove("botao-ativo")
   })

gorjetaInput= ""

pessoasInput= ""


document.querySelector(".gorjeta-total > strong").innerHTML = "R$0.00"
document.querySelector(".total > strong").innerHTML = "R$0.00"


}
