const express = require("express");
const { saveCompInfo} = require("../controllers/saveCompInfo");
const {urlValidation} = require('../middleware/validation')

const saveCompInfoRouter = express.Router();

saveCompInfoRouter.post("/", urlValidation,saveCompInfo)
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