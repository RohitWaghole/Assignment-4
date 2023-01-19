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
  let query = `SELECT * FROM ${table} WHERE id='${id}'`;

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
  let { employeeName, age, salery, gender } = request.body;
  let query = `INSERT INTO ${table} (id, employeeName, age, salery, gender) VALUES(UNIX_TIMESTAMP(NOW()),?,?,?,?)`;
  try {
    db.query(query, [employeeName, age, salery, gender], (err, result) => {
      if (err) throw err;
      response.send("Data successfully added!");
    });
  } catch (err) {
    throw err;
  }
};

// UPDATE DATA IN THE TABLE
const updateEmployeeData = (request, response) => {
  let id = parseInt(request.params.id);
  let { employeeName, age, salery, gender } = request.body;
  let query = `UPDATE ${table} set employeeName=?, age=?, salery=?, gender=? WHERE id=${id}`;
  try {
    db.query(query, [employeeName, age, salery, gender], (error, result) => {
      if (error) throw error;
      response.send("Data Updated Successfully!");
    });
  } catch (err) {
    throw err;
  }
};

// DELETE DATA IN THE TABLE
const deleteEmployeeData = (requst, response) => {
  let id = parseInt(requst.params.id);
  let query = `DELETE FROM ${table} WHERE id=${id}`;
  try {
    db.query(query, (err, result) => {
      if (err) throw err;
      response.send("Data Deleted Successfully!");
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
