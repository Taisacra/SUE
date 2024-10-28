//const Sequelize = require("Sequelize");
import Sequelize from "Sequelize";

const connection = new Sequelize("sueprojeto", "root", "",{
    host: "localhost",
    dialect: "mysql",
});

export default connection;  