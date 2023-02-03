const express = require("express");
const tasksRouter = require("./src/routes/tasksRoutes");
const hostname = "127.0.0.1";
const port=5000;

var app = express();

app.use(express.json());
app.use("/tasks", tasksRouter);

app.listen(port, () => {
	console.log(`http://${hostname}:${port}`);
});