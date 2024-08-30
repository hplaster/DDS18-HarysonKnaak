/*
window.console.log("Testandoooo") // objeto window = janela do navegador
window.alert("Alertei")
window.prompt("Diz pra mim, o que eu já sei:")
console.log(document.head)
console.log(document.body)

let titulo = document.getElementsByTagName("h1")
let para = document.getElementsByClassName("para")
let grafo = document.getElementById("p3")
let p1 = document.getElementsByTagName("p")[0]
p1.style.backgroundColor = "red"

console.log(para[1])
console.log(grafo.textContent)

para[0].innerText = "Pafagaro"
grafo.innerHTML = "<h3>Texto do pafagrafo trocado</h3>"
*/

function bait() {
    console.log("Caiu no BAIT")
}

function outroFoco() {
    console.log("Clicou fora da caixa, mudou o foco")
}

function trocaTexto(text) {
    let texto = document.getElementById("textoParaTrocar")
    texto.innerText = text.value
}

function corVerde(element) {
    element.style.color = "green"
}

function corAzul(element) {
    element.style.color = "blue"
}
