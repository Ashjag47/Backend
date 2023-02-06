const express = require("express");
const { saveCompInfo} = require("../controllers/saveCompInfo");
const {urlValidation} = require("../middleware/validation");

const saveCompInfoRouter = express.Router();

saveCompInfoRouter.post("/", urlValidation,saveCompInfo);


module.exports = saveCompInfoRouter;