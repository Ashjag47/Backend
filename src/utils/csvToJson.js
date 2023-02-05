const _ = require("lodash");

const csvToJson = (csv) => {
	const content = csv.split("\n");
	const header = content[0].split(",");
	return _.tail(content).map((row) => {
		return _.zipObject(header, row.split(","));
	});
};

module.exports = { csvToJson};