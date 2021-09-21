const express = require("express");
const dados = require("./dados.json");
const app = express();
const port = 3000;
const fs = require("fs");
const cors = require("cors");

app.use(cors());

app.get("/compras", function (req, res, next) {
    console.log({ "query String": req.query.numero });
    let log = { "query String": req.query.numero };
    log = JSON.stringify(log);
    fs.writeFileSync("./log.txt", log + "\n", { encoding: "utf-8", flag: "a" });
    next();
});

app.get("/compras", function (req, res) {
    let numero = req.query.numero;
    if (!numero) {
        numero = 5;
    }
    if (numero < 1 || numero > 16) {
        return res.status(400).json({
            erro: "o valor da query 'numero' precisa estar entre 1 e 15",
        });
    }
    let retorno = [...dados];
    retorno = retorno.slice(0, numero);
    res.json(retorno);
});

app.listen(port);
