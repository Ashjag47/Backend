"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.addColumn("users", "dishId",
				{
					type: Sequelize.INTEGER,
					references: { model: "dishes", key: "id" },
				}),
		]);
	},
	async down (queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.removeColumn("users", "dishId"),
		]);
	}
};
