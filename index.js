const express = require("express");
const Router = require("./router");
const { swaggerJSDoc, swaggerUi, options } = require("./swagger");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(Router);
app.use(cors());

const swaggerSpec = swaggerJSDoc(options);
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(2013);

// CREATING CONNECTION CHECK REQUEST
/**
 * @swagger
 * /:
 *  get:
 *      summary: Connection Checking
 *      description: Cheking Purpose
 *      responses:
 *        2013:
 *              description: CONNECTION SUCCESSFUL!
 *
 */

// SCHEMA FOR SWAGGER UI
/**
 * @swagger
 *  components:
 *      schemas:
 *          Employee:
 *              type : object
 *              properties:
 *                  id:
 *                      type: integer
 *                  employeeName:
 *                      type: string
 *                  age:
 *                      type: integer
 *                  salery:
 *                      type: integer
 *                  gender:
 *                      type: string
 */

// GETTING ALL THE EMPLOYEES
/**
 * @swagger
 * /data:
 *  get:
 *      summary: Getting all the Employees
 *      description: Get all the employees listed down
 *      responses:
 *        2013:
 *              description: Fetch the data from MySQL
 *              content:
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items:
 *                                $ref: '#components/schemas/Employee'
 */

// GETTING EMPLOYEE BY ID
/**
 * @swagger
 * /data/{id}:
 *  get:
 *      summary: Getting employee by employee id
 *      description: Get the employee by writing down the id of it
 *      parameters:
 *          - in: path
 *            name : id
 *            required: true
 *            description: ID required
 *            schema:
 *              type: integer
 *      responses:
 *        2013:
 *              description: Fetch the data from MySQL
 *              content:
 *                    application/json:
 *                        schema:
 *                            type: array
 *                            items:
 *                                $ref: '#/components/schemas/Employee'
 *
 */

// ADD NEW EMPLOYEE DATA
/**
 * @swagger
 * /data/addData:
 *  post:
 *      summary: Adding new Employee
 *      description: Add new employee in the MySQL database
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Employee"
 *      responses:
 *        2013:
 *              description: Added Successfully!
 */

// UPDATE DATA OF THE EMPLOYEE
/**
 * @swagger
 * /data/{id}:
 *  put:
 *      summary: Updating current employee
 *      description: Updating the employee in the MySQL database
 *      parameters:
 *          - in: path
 *            name : id
 *            required: true
 *            description: Numeric ID required
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/Employee"
 *      responses:
 *        2013:
 *              description: Updated Successfully!
 *
 */

// DELETE EMPLOYEE DATA
/**
 * @swagger
 * /data/{id}:
 *  delete:
 *      summary: Deleting current employee
 *      description: Deleting the employee in the MySQL database
 *      parameters:
 *          - in: path
 *            name : id
 *            required: true
 *            description: ID required
 *            schema:
 *              type: integer
 *      responses:
 *        2013:
 *              description: Deleted Successfully!
 */
