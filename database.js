const mysql = require("mysql2");
const dotenv = require("dotenv");
const table = "employeeDetails";

dotenv.config();

connection = mysql.createConnection({
  host: "localhost",
  user: process.env.user,
  password: process.env.password,
  database: "employeeManagement",
});

module.exports = { table, connection };
