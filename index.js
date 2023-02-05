const express = require("express");
const saveCompInfo = require("./src/routers/saveCompInfo");
const {companySect} = require("./database/models");
const hostname = "127.0.0.1";
let request = require("request");
const port=3000;


const app = express();
const _ = require("lodash");
const saveCompInfoRouter = require("./src/routers/saveCompInfo");
// let sectData;
// let compInfo;

app.use(express.json());

app.use('/api/save',saveCompInfoRouter);

// app.get("/api/save",  async(req, res) => {
// 	request("https://store-0001.s3.amazonaws.com/input.csv", (error, response, body) => {
// 		sectData=csvToJson(body);
// 		res.status(200).send(sectData);
// 	});	
//        companyInformation.forEach(async (info) => {
//         await storeCompany(info.company_id, info.company_sector);
//     });
//  	for(i in sectData){
//         	    await companySect.create({
// 	             sectData[i]["company_id"]
// 		});
// 	}
// });

// app.post("/api/save",  async(req, res) => 
// {
// 	for(i in sectData){
//         	    await companySect.create({
// 			compId: sectData[i]["company_id"],
// 			compSect: sectData[i]["company_sector"]
// 		});
// 	}
// 	res.status(201).send(sectData);
// });

// app.use('/company',compRouter);


// const csvToJson = (csv) => {
// 	const content = csv.split("\n");
// 	const header = content[0].split(",");
// 	return _.tail(content).map((row) => {
// 		return _.zipObject(header, row.split(","));
// 	});
// };

app.listen(port, () => {
	console.log(`http://${hostname}:${port}`);
});