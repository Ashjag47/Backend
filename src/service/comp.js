const {companySect} = require('../database/models');

const getCompById = async(id) => {
    console.log('GET /comp/:id service is called');
    const company = await companySect.findOne({ where: { id } });
    return company;
};

const getCompBySector = async(sector) => {
    console.log('GET /comp/:sector service is called');
    companies= await Tasks.findAll({ where: { sector} });
    return companies;
};

module.exports = { getCompById, getCompBySector};