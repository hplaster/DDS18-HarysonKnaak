/* 
EXEMPLO DE FUNÇÕES DE ESPERA

function mostrarTexto() {
    console.log("O texto apareceu")
}

var contagem = 0

function mostrarContagem() {
    contagem++
    console.log(contagem)
    if (contagem >= 10) {
        clearInterval(minhaContagem)
    }
}

setTimeout(mostrarTexto, 5000)

// Loop infinito: pode ser usado para ficar verificando qualquer coisa de tempos em tempos
var minhaContagem = setInterval(mostrarContagem, 1000)
*/

var segundos = document.getElementById("segundos")
var minutos = document.getElementById("minutos")
var horas = document.getElementById("horas")
var data = document.getElementById("saudacaoTexto")
var diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
var cumprimento = ""

var atualizaRelogio = setInterval(() => {
    var dataAtual = new Date()
    var horaAtual = dataAtual.getHours()
    var minutosAtual = dataAtual.getMinutes()
    var segundosAtual = dataAtual.getSeconds()

    horas.textContent = String(horaAtual).padStart(2, "0")
    minutos.textContent = String(minutosAtual).padStart(2, "0")
    segundos.textContent = String(segundosAtual).padStart(2, "0")

    if (horaAtual < 6) {
        cumprimento = "Boa Madrugada"
    } else if (horaAtual < 12) {
        cumprimento = "Bom Dia"
    } else if (horaAtual < 18) {
        cumprimento = "Boa Tarde"
    } else {
        cumprimento = "Boa Noite"
    }

    let dataFormatada = cumprimento + " - " + diasSemana[dataAtual.getDay()] + " - " + String(dataAtual.getDate()).padStart(2, "0") + "/" + String(dataAtual.getMonth() + 1).padStart(2, "0") + "/" + String(dataAtual.getFullYear())
    data.textContent = dataFormatada
    
}, 1000);
