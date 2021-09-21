const express = require("express");
const app = express();
const rotas = require("./routes");
const port = 3000;
const cors = require("cors");
app.use(cors());
app.use(rotas);

app.listen(port);
