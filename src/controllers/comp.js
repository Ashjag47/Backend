const compService = require("../service/comp");

const getCompById = async(req, res) => {
	console.log("GET /comp/:id controller is called");
	try{
		const company= await compService.getComp(req.params.id);
		if (company.length==0) {
			throw new HTTPError("company not found", 404);
		}
		res.status(200).json(company);
	} 
	catch (err) {
		if(err instanceof HTTPError){
			res.status(err.code).json({message: err.message});
		}
		else{
			console.log(err);
			res.status(500).json({ error: "Something went wrong" });
		}
	}

};

const getCompBySector = async(req, res) => {
	console.log("GET /comp/:sector controller is called");
	try{
		const company= await compService.getComp(req.params.sector);
		if (company.length==0) {
			throw new HTTPError("company not found", 404);
		}
		res.status(200).json(company);
	} 
	catch (err) {
		if(err instanceof HTTPError){
			res.status(err.code).json({message: err.message});
		}
		else{
			console.log(err);
			res.status(500).json({ error: "Something went wrong" });
		}
	}

};

module.exports = { getCompById, getCompBySector};