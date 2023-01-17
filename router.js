const express = require("express");
const apis = require("./apiMethods");
const router = express.Router();

router.get("/", apis.checkConnection);

router.get("/data", apis.getAllEmployees);

router.get("/data/:id", apis.getEmployeeById);

router.post("/data/addData", apis.addNewEmployee);

router.put("/data/:id", apis.updateEmployeeData);

router.delete("/data/:id", apis.deleteEmployeeData);

module.exports = router;
