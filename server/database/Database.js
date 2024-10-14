const Sequelize = require("Sequelize");

const connection = new Sequelize("sueprojeto", "root", "",{
    host: "localhost",
    dialect: "mysql",
});

module.exports = connection;  