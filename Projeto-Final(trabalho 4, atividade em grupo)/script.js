let usuarios = 
[
    admin1={login: "admin", senha:"admin"},
    usuario1={login: "batata", senha:"1234"}
]

login = document.getElementById("login")
senha = document.getElementById("senha")

btn.addEventListener("click", function (verificarUsuario)
{
    verificarUsuario.preventDefault()
    if(login.value == admin1.login && senha.value == admin1.senha)
    {
        window.location.href = "telas/Estoque/estoque.html"
    }
    else if(login.value == usuario1.login && senha.value == usuario1.senha)
    {
        mensagem.innerHTML = "Usuario não posssui nível soficiente para essa operação"
    }
    else
    {
        console.log("Usuario não encontrado")
    }  
})