const mysql = require("mysql2");
const dotenv = require("dotenv");
const table = "EMPLOYEE_DETAILS";

dotenv.config();

connection = mysql.createConnection({
  host: "localhost",
  user: process.env.user,
  password: process.env.password,
  database: "EMPLOYEE_MANAGEMENT",
});

module.exports = { table, connection };
