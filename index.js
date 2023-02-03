const express = require("express");
//const compRouter = require("./src/routes/compRoutes");
const hostname = "127.0.0.1";
let request = require("request");
const port=5000;

const app = express();
const _ = require("lodash");
let sectData;
let compById;

app.use(express.json());
app.get("/api/save",  (req, res) => {
	request("https://store-0001.s3.amazonaws.com/input.csv", (error, response, body) => {
		sectData=csvToJson(body);

	});

	res.send(sectData);
});


const csvToJson = (csv) => {
	const content = csv.split("\n");
	const header = content[0].split(",");
	return _.tail(content).map((row) => {
		return _.zipObject(header, row.split(","));
	});
};

app.listen(port, () => {
	console.log(`http://${hostname}:${port}`);
});