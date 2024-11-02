const { Sequelize } = require("sequelize");
//import Sequelize from "sequelize";

const connection = new Sequelize("suesistema", "root", "",{
    host: "localhost",
    dialect: "mysql",
});

module.exports = connection;  