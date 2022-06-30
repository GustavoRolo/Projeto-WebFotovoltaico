const http = require("http");
const express = require("express");
const app = express();
resolve = require('path').resolve;

app.use(express.static(resolve('./public')));

app.get("/", function(req, res) {
    res.sendFile(resolve('./main/index.html'));
});

app.get("/consumo", function(req, res) {
    res.sendFile(resolve('./main/consumo.html'));
});

app.get("/fornecedores", function(req, res) {
    res.sendFile(resolve('./main/fornecedores.html'));
});

app.get("/sobre", function(req, res) {
    res.sendFile(resolve('./main/sobre.html'));
});

http.createServer(app).listen(3001, () => console.log("Servidor rodando local na porta 3001"));