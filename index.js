const elemento = document.querySelector("#resposta123")

const digiteaqui = document.querySelector("#digite")

const respostas = [
    "Outro usuário já realizou esse cálculo ",
   ]

function fazerpergunta () {

    if (digiteaqui.value == "") {
      alert("Digite Sua Pergunta!")
      return
    }

    const abc123 = "<div>" + digiteaqui.value + "</div>"
  
    const totalrespostas = respostas.length
    const numeroaleatorio = Math.floor(Math.random() * totalrespostas)
    elemento.innerHTML = abc123 + respostas[numeroaleatorio]
  
  }