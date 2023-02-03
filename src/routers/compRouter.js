const express = require("express");
const { getCompById,getCompBySector} = require("../controllers/comp");

const compRouter = express.Router();

compRouter.get("/{id}", getCompById);
compRouter.get("/sector?name={sectorName}", getCompBySector);

module.exports = compRouter;