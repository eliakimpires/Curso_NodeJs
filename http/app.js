var http = require("http");
const port = 3000
http.createServer(function(req,res){
    res.end("<h1>bem vindo ao meu site<h1/><h4>teste.com.br<h4/>")
}).listen(port)

console.log("meu servidor está rodando!")