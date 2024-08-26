function quest1Pneu() { //Completo
    let n1 = Number(prompt("Pressão Desejada:"))
    let n2 = Number(prompt("Pressão Atual:"))
    alert(n1 - n2)
}

function quest2Tomadas() { //Completo
    let qtdeTomadas1 = Number(prompt("Quantidade de Tomadas da Régua:"))
    let qtdeTomadas2 = Number(prompt("Quantidade de Tomadas da Régua:"))
    let qtdeTomadas3 = Number(prompt("Quantidade de Tomadas da Régua:"))
    let qtdeTomadas4 = Number(prompt("Quantidade de Tomadas da Régua:"))
    alert(qtdeTomadas1 + qtdeTomadas2 + qtdeTomadas3 + qtdeTomadas4 - 3)
}

function quest3Recorde() { //Completo
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

function quest4Caixas() { //Incompleto
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

function quest5Idade() { //Completo
    let idade1 = Number(prompt("Primeira Idade:"))
    let idade2 = Number(prompt("Segunda Idade:"))
    let idade3 = Number(prompt("Terceira Idade:"))
    let idadeCamila

    if ( idade2 <= idade1 && idade1 <= idade3 ) {
        idadeCamila = idade1
    }
    if ( idade1 <= idade2 && idade2 <= idade3 ) {
        idadeCamila = idade2
    }
    if (idade1 <= idade3 && idade3 <= idade2 ) {
        idadeCamila = idade3
    }

    console.log(idadeCamila)
}

function quest6Piloto() { //Incompleto
    let carroA = Number(prompt("Carro 1:"))
    let carroB = Number(prompt("Carro 2:"))
    let carroC = Number(prompt("Carro 3:"))
    let acelerar

    if ( (carroA + carroB) < (carroC + carroB) ) {
        acelerar = 1
    } else if ( (carroA + carroB) > (carroC + carroB) ) {
        acelerar = -1
    } else {
        acelerar = 0
    }

    console.log(acelerar)
}

function quest7Lesma() { //Completo
    let alturaMuro = Number(prompt("Altura do Muro:"))
    let distanciaSubida = Number(prompt("Distância de Subida:"))
    let distanciaQueda = Number(prompt("Distância de Queda:"))
    let dias = 0
    let alturaAtual = 0
    
    while (true) {
        dias = dias + 1
        alturaAtual = alturaAtual + distanciaSubida
        
        if (alturaAtual >= alturaMuro) {
            break
        }

        alturaAtual = alturaAtual - distanciaQueda
    }

    console.log(dias)
}

function quest8Idade() { //Completo
    let idadeMae = Number(prompt("Idade da Mãe:"))
    let idadeFilho1 = Number(prompt("Idade do Primeiro Filho:"))
    let idadeFilho2 = Number(prompt("Idade do Segundo Filho:"))
    let idadeFilho3 = idadeMae - (idadeFilho1 + idadeFilho2)
    let idadePrimogenito

    if (idadeFilho1 > idadeFilho2 && idadeFilho1 > idadeFilho3) {
        idadePrimogenito = idadeFilho1
    }
    if (idadeFilho2 > idadeFilho1 && idadeFilho2 > idadeFilho3) {
        idadePrimogenito = idadeFilho2
    }
    if (idadeFilho3 > idadeFilho1 && idadeFilho3 > idadeFilho2) {
        idadePrimogenito = idadeFilho3
    }

    console.log(idadePrimogenito)
}

function quest9Bondinho() { //Completo
    let qtdeAlunos = Number(prompt("Quantidade de Alunos:"))
    let qtdeMonitores = Number(prompt("Quantidade de Monitores:"))

    if ( (qtdeAlunos + qtdeMonitores) <= 50 ) {
        console.log("S")
    } else {
        console.log("N")
    }
}

//quest1Pneu();
//quest2Tomadas()
//quest3Recorde()
//quest4Caixas()
//quest5Idade()
//quest6Piloto()
//quest7Lesma()
//quest8Idade()
//quest9Bondinho()
