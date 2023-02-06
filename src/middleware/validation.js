const Joi = require("joi");
const { InvalidInputError } = require("../utils/errors");

const urlSchema = Joi.object({
	urlLink: Joi.string()
		.uri()
		.required()
});

const urlValidation = (req, res, next)=>{
	try{
		const {body} = req;
		const {error} = urlSchema.validate(body);
		if(error){
			throw new InvalidInputError(error.message, 400);
		}
		next();
	}catch(err){
		if(err instanceof InvalidInputError){
			res.status(err.code).json({message: err.message});
		}else{
			res.status(500).json({message: err.message});
		}
	}
};

module.exports = {
	urlValidation, urlSchema
};