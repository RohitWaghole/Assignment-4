const database = require("./database");
const table = database.table;
const db = database.connection;

const checkConnection = (request, response) => {
  response.send(
    '<h1><a href="http://localhost:2013/documentation" />Documentation</h1>'
  );
};

// GET ALL THE DATA
const getAllEmployees = (request, response) => {
  let query = `SELECT * FROM ${table}`;
  try {
    db.query(query, (err, result) => {
      if (err) throw err;
      response.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

// GET DATA BY PERTICULAR ID
const getEmployeeById = (request, response) => {
  let id = parseInt(request.params.id);
  let query = `SELECT * FROM ${table} WHERE ID=${id}`;
  try {
    db.query(query, (err, result) => {
      if (err) throw err;
      response.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

// ADD DATA INTO TABLE
const addNewEmployee = (request, response) => {
  let { EMPLOYEE_NAME, AGE, SALERY, GENDER } = request.body;
  let query = `INSERT INTO ${table} (EMPLOYEE_NAME, AGE, SALERY, GENDER) VALUES(?,?,?,?)`;
  try {
    db.query(query, [EMPLOYEE_NAME, AGE, SALERY, GENDER], (err, result) => {
      if (err) throw err;
      response.send(result);
    });
  } catch (err) {
    throw err;
  }
};

// UPDATE DATA IN THE TABLE
const updateEmployeeData = (request, response) => {
  let id = request.params.id;
  let { EMPLOYEE_NAME, AGE, SALERY, GENDER } = request.body;
  let query = `UPDATE ${table} set EMPLOYEE_NAME=?, AGE=?, SALERY=?, GENDER=? WHERE ID=${id}`;
  try {
    db.query(query, [EMPLOYEE_NAME, AGE, SALERY, GENDER], (error, result) => {
      if (error) throw error;
      response.send(result);
    });
  } catch (err) {
    throw err;
  }
};

// DELETE DATA IN THE TABLE
const deleteEmployeeData = (requst, response) => {
  let id = requst.params.id;
  let query = `DELETE FROM ${table} WHERE ID=${id}`;
  try {
    db.query(query, (err, result) => {
      if (err) throw err;
      response.send(result);
    });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  checkConnection,
  getAllEmployees,
  getEmployeeById,
  addNewEmployee,
  updateEmployeeData,
  deleteEmployeeData,
};
