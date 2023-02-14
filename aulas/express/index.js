const express = require("express")//Importando o express
const app = express()// Iniciando o express


app.get("/", function(req,res){
    res.send("Bem vindo ao mundo louco")
})


app.get("/perfil",function(req,res){
    res.send("Bem vindo ao perfil")
})

//PARÂMETRO OPCIONAL DIFERENCIA PELO USO DA "?"
app.get("/blog/:artigo?", function(req,res){
    var artigo = req.params.artigo
    if(artigo){
        res.send("<h2>artigo: " + artigo + "</h2>")
    }else{
        res.send("<h1>Bem vindo ao meu blog</h1>")
    }
})

app.get("/canal/youtube/", function(req,res){
    var canal = req.query["canal"]
    if(canal){
        res.send("Bem vindo ao canal " + canal)
    }else
    res.send("<h2>Bem vindo ao meu canal</h2>")
})

//PARÂMETRO OBRIGATÓRIO
app.get("/ola/:nome",function(req,res){
    //REQ => DADOS ENVIADOS PELO USUÁRIO
    //RES => RESPOSTA QUE SERÁ ENVIADA PARA O USUÁRIO
    var nome = req.params.nome
    res.send("olá, "+ nome)
})


app.listen(4000, function(erro){
     if(erro){
        console.log("Ocorreu um erro ao se conectar com o servidor!")
     }else{
        console.log("Servidor iniciado com sucesso!")
     }
})
