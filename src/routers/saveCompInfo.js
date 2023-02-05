const express = require("express");
const { saveCompInfo} = require("../controllers/saveCompInfo");
const {Company, Scores} = require('../../database/models');

const saveCompInfoRouter = express.Router();

saveCompInfoRouter.post("/", saveCompInfo)
// saveCompInfoRouter.get("/", async function (res,req){
//     const result = await Company.findAll(
//         {
//             include: {
//                 model: Scores,
//                 as: 'compId',
//             },
//         }
//     );
//     res.json(result)
// })

module.exports = saveCompInfoRouter;