var alunos = ["Pedro", "Tiago", "João"]
var notasA = [8.0, 7.0, 6.0]
var notasB = [7.0, 5.7, 6.3]

function media(nota1, nota2) {
    return (nota1 + nota2) / 2
}

function situacao(media) {
    if (media < 5) {
        console.log("Vó tô reprovado, é nota ruim eu to lascado!")            
    }
    else if (media < 7) {
        console.log("Recuperação zé, tá quase rodando!")
    }
    else {
        console.log("Aprovado!")
    }
}

function mostrarNota() {
    for (let i = 0; i < alunos.length; i++) {
        var primeiraNota = notasA[i];
        var segundaNota = notasB[i];
        var mediaAtual = media(primeiraNota, segundaNota)
        situacao(mediaAtual)
    }
}

mostrarNota()
