const express = require('express')
const app = express()
const port = 3000
const bodyParser= require("body-parser")
const connection = require('./database/database')
const perguntaModel = require('./database/pergunta')

//Database
connection.authenticate().then(() => {
    console.log('Conexão feita com o banco de dados!')
}).catch((msgErro) => {
    console.log('Ocorreu o seguinte erro: ' + msgErro)
})


app.set('view engine', 'ejs')//DIZENDO PARA O EXPRESS USAR O EJS COMO VIEW ENGINE
app.use(express.static('public'))//HABILITANDO USABILIDADE DE ARQUIVOS ESTÁTICOS
app.use(bodyParser.urlencoded({extended:false}))//HABILITANDO O BODY-PARSER
app.use(bodyParser.json())//TRANSFORMANDO O DADO RECEBIDO NO HTML EM JSON NO BACKEND


//ROTAS
app.get('/', (req,res) => {
   res.render('principal/index')
})
app.get('/perguntar',(req,res) => {
    res.render('principal/perguntar')
})
app.post('/salvarpergunta',(req,res) =>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send("Formulario recebido <br>" + "titulo: " + titulo + " " + "descricao: " + descricao)
})


//RODAR O APP NO SERVIDOR
app.listen(port, (erro) => {
    if(erro){
        console.log('Houve um erro ao iniciar o servidor ' + erro)
    }else{
        console.log('Servidor iniciado com sucesso na porta: ' + port)
    } 
})