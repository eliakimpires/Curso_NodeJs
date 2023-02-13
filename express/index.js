const express = require("express")//Importando o express
const app = express()// Iniciando o express


app.get("/", function(req,res){
    res.send("Bem vindo ao mundo louco")
})

app.get("/blog",function(req,res){
    res.send("Bem vindo ao meu blog")
})

app.get("/perfil",function(req,res){
    res.send("Bem vindo ao perfil")
})

app.get("/ola/:nome",function(req,res){
    //REQ => DADOS ENVIADOS PELO USUÁRIO
    //RES => RESPOSTA QUE SERÁ ENVIADA PARA O USUÁRIO
    var nome = req.params.nome
    res.send("olá, " + nome)
})


app.listen(4000, function(erro){
     if(erro){
        console.log("Ocorreu um erro ao se conectar com o servidor!")
     }else{
        console.log("Servidor iniciado com sucesso!")
     }
})
