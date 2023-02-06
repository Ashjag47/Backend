const express = require("express");
const hostname = "127.0.0.1";
const port=3000;


const app = express();
const _ = require("lodash");
const saveCompInfoRouter = require("./src/routers/saveCompInfo");

app.use(express.json());

app.use("/api/save",saveCompInfoRouter);

app.listen(port, () => {
	console.log(`http://${hostname}:${port}`);
});