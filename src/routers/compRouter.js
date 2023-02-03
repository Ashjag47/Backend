const express = require("express");
const { getComp} = require("../controllers/comp");
//const {bodyValidation} = require('../middleware/middleware')

const compRouter = express.Router();

compRouter.get("/", getComp);

// //taskRouter.get('/done', doneTasks);

// taskRouter.get('/:id', getTask);

// taskRouter.post('/',bodyValidation,postTask);

// taskRouter.put('/:id', checkTask);

// taskRouter.delete('/', deleteDoneTasks);

// router.route("/")
//     .get(taskController.getAllTasks)
//     .post(createTaskValidation, taskController.createTask)
//     .delete(taskController.deleteFinishedTasks);

module.exports = compRouter;