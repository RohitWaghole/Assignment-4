const express = require("express");
const Router = require("./router");

const app = express();

app.use(express.json());
app.use(Router);

app.listen(2013);
