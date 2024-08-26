/*
//Trabalhando com Objetos
var aluno = {
    nome: "Pedro", nota: 8
}

//console.log(aluno.nome, "-", aluno.nota)

var pessoa = {
    nome: "Maria",
    idade: 20
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa["idade"])

//Adicionando novas propriedades
pessoa.rg = "1234567"
console.log(pessoa.rg)

pessoa["profissao"] = "Diretora"
console.log(pessoa)

//Adicionando propriedades com variáveis
var novaProp = "sobrenome"
pessoa[novaProp] = "do Bairro"
console.log(pessoa)

//Criando Métodos
var animal = {
    nome: "Mel",
    raca: "Poodle",
    latir: function() {
        console.log("Au, au")
    },
    andar: function() {
        console.log("Poodle andando")
    }
}
console.log(animal.latir())
console.log(animal.andar())


var aluno = {
    nome: "Cris",
    notas: [8, 9, 10],
    media: function(n1,n2,n3) {
        return (n1 + n2 + n3) / 3
    }
}


function calculaMedia(n1, n2) {
    return (n1 + n2) / 2
}

var aluno1 = {
    nome: "Ronaldo",
    notas: [8, 2],
    media: calculaMedia
}

var aluno2 = {
    nome: "Messi",
    notas: [9, 8],
    media: calculaMedia
}

console.log("O nome do aluno é:", aluno1.nome)
console.log("Sua média foi:", aluno1.media(aluno1.notas[0], aluno1.notas[1]) )

console.log("O nome do aluno é:", aluno2.nome)
console.log("Sua média foi:", aluno2.media(aluno2.notas[0], aluno2.notas[1]) )


//Uso do 'this', dentro do objeto
var aluno = {
    nome: "Neymar",
    notas: [1000, 11],
    media: function () {
        return ( (this.notas[0] + this.notas[1]) / 2 )
    }
}
console.log(aluno.media())
*/

//Uso do 'this', fora do objeto
function calculaMediaOretorno() {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno1 = {
    nome: "João",
    notas: [6, 8],
    media: calculaMediaOretorno
}

var aluno2 = {
    nome: "Maria",
    notas: [8, 9],
    media: calculaMediaOretorno
}

console.log(aluno1.media())
console.log(aluno2.media())
