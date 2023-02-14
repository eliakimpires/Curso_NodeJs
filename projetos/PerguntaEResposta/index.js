const express = require('express')
const app = express()
const port = 3000

//DIZENDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.set('view engine', 'ejs')

//ROTAS
app.get('/:nome?/:lang?', (req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    if(nome&&lang){    
    res.render('index',{
        nomeUser: nome,
        langUser: lang,
        empresaUser: "Empresa do Eliakim",
        rendimentosUser: 5000
    })   
    }else{
        res.render('home')
    }
    
})


//RODAR O APP NO SERVIDOR
app.listen(port, (erro) => {
    if(erro){
        console.log('Houve um erro ao iniciar o servidor ' + erro)
    }else{
        console.log('Servidor iniciado com sucesso na porta: ' + port)
    } 
})