function quest1Pneu() {
    let n1 = Number(prompt("Pressão Desejada:"))
    let n2 = Number(prompt("Pressão Atual:"))
    alert(n1 - n2)
}

function quest2Tomadas() {
    let qtdeTomadas1 = Number(prompt("Quantidade de Tomadas da Régua:"))
    let qtdeTomadas2 = Number(prompt("Quantidade de Tomadas da Régua:"))
    let qtdeTomadas3 = Number(prompt("Quantidade de Tomadas da Régua:"))
    let qtdeTomadas4 = Number(prompt("Quantidade de Tomadas da Régua:"))
    alert(qtdeTomadas1 + qtdeTomadas2 + qtdeTomadas3 + qtdeTomadas4 - 3)
}

function quest3Recorde() {
    let resultado = Number(prompt("Melhor Resultado Obtido pelo Atleta:"))
    let recordeMundial = Number(prompt("Recorde Mundial:"))
    let recordeOlimpico = Number(prompt("Recorde Olímpico:"))
    let saida1 = ""
    let saida2 = ""

    if (resultado < recordeMundial) {
        saida1 = "RM"
    } else {
        saida1 = "*"
    }

    if (resultado < recordeOlimpico) {
        saida2 = "RO"
    } else {
        saida2 = "*"
    }

    console.log("Recorde Mundial:", saida1, "Recorde Mundial:", saida2)
}

function quest4Caixas() {
    let qtdeViagens = 3
    let tamanhoCaixa1 = Number(prompt("Tamanho da Primeira Caixa:"))
    let tamanhoCaixa2 = Number(prompt("Tamanho da Segunda Caixa:"))
    let tamanhoCaixa3 = Number(prompt("Tamanho da Terceira Caixa:"))

    if (tamanhoCaixa1 < tamanhoCaixa2) {
        qtdeViagens = qtdeViagens - 1
    }

    if ( tamanhoCaixa1 != tamanhoCaixa2 && (tamanhoCaixa1 + tamanhoCaixa2) < tamanhoCaixa3) {
        qtdeViagens = qtdeViagens - 1
    }

    console.log(qtdeViagens)
}

function quest5Idade() {
    
}

function quest6Piloto() {
    
}

function quest7Lesma() {
    
}

function quest8Idade() {
    
}

function quest9Bondinho() {
    
}

//quest1Pneu();
//quest2Tomadas()
//quest3Recorde()
quest4Caixas()
//quest5Idade()
//quest6Piloto()
//quest7Lesma()
//quest8Idade()
//quest9Bondinho()
