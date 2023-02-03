const taskService = require("../service/comp");

const getComp = async (req, res) => {
	console.log("GET /comp controller is called");
	try{
		res.status(200).json(await(taskService.getComp()));
	}
	catch(err){
		res.status(500).json({
			"message":"something went wrong"
		});
	}
};


module.exports = { getComp};