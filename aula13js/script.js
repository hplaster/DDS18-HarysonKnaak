var login = 'admin'
var senha = 'admin'

function logar() {
    let txtLogin = document.getElementById('inputUsuario').value
    let txtPassword = document.getElementById('inputSenha').value
    console.log(txtLogin)
    console.log(txtPassword)
    console
    if (txtLogin == login && txtPassword == senha) {
        location.href = "home.html"
    }

}