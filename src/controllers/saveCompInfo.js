const {saveCompInfoService} = require("../service/saveCompInfo");

const saveCompInfo = async(req, res) => {
	console.log("POST api/save controller is called");
	//try{
		const company= await saveCompInfoService(req.body.urlLink);
		if (company==null) {
			throw new HTTPError("company not found", 404);
		}
		res.status(200).json(company);
	// } 
	// catch (err) {
	// 	if(err instanceof HTTPError){
	// 		res.status(err.code).json({message: err.message});
	// 	}
	// 	else{
	// 		console.log(err);
	// 		res.status(500).json({ error: "Something went wrong" });
	// 	}
	// }

};


module.exports = { saveCompInfo};