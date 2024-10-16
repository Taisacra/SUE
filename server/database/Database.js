const Sequelize = require("Sequelize");

const connection = new Sequelize("suesistema", "root", "",{
    host: "localhost",
    dialect: "mysql",
});

module.exports = connection;  