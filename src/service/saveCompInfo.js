const {Companies, Scores} = require("../../database/models");
const {csvToJson} = require("../utils/csvToJson");
const axios = require("axios");
const _ = require("lodash");

const compInfo = [];
const compScore = [];
let sectors =[];
const sectScoreOnly = [];

// To save the company info (Comapny table , Scores table)
const saveCompInfoService = async(url) => {
	console.log("POST /api/save service is called");
	let response = await axios.get(url);
	response= csvToJson(response.data);
	for(i in response){
		let data = ( await axios.get(`http://54.167.46.10/company/${response[i]["company_id"]}`)).data;
		compInfo.push(data);
		sectors.push(await response[i]["company_sector"]);
		await Companies.create({
			companyId:data["id"],
			name:data["name"],
			description:data["description"],
			ceo:data["ceo"],
			tags:data["tags"]
		});      
	}
	const setOfSect = new Set(sectors);
	sectors = [...setOfSect];
	console.log(sectors);
	for(i in sectors){
		let data = ( await axios.get(`http://54.167.46.10/sector?name=${sectors[i]}`)).data;
		compScore.push(data);
	}

	for(i in compScore){
		compScore[i].forEach(async company => {
			let performance = company.performanceIndex;
			let score = ((performance[0]["value"] * 10) + (performance[1]["value"] / 10000) + (performance[2]["value"] * 10) + performance[3]["value"]) / 4;
			company ={
				companyId: company.companyId,
				score: score,
				sector: sectors[i]
			};
			sectScoreOnly.push(company);
			let nam=JSON.parse(JSON.stringify(await Companies.findOne({
				attributes:["name"],
				where: {companyId:company["companyId"]},
				raw: true,
			})));
			if(nam!=null){
				nam = nam.name; 
			}

			await Scores.create({
				companyId:company["companyId"],
				name: nam,
				score:company["score"],
				sector:company["sector"]
			});
		});
	}
	console.log(await Scores.findAll());
	return (await Scores.findAll({attributes: ["companyId", "name", "score"]}));
};


module.exports = { saveCompInfoService};