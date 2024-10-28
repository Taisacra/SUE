const { Sequelize } = require("sequelize");
//import Sequelize from "sequelize";

const connection = new Sequelize("sueprojeto", "root", "",{
    host: "localhost",
    dialect: "mysql",
});

module.exports = connection;  