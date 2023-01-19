
CREATE DATABASE employeeManagement;
USE employeeManagement;

CREATE TABLE employeeDetails(
	id NUMERIC PRIMARY KEY,
    employeeName VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    salery DOUBLE  NOT NULL,
    gender VARCHAR(10) NOT NULL
    );
    
SELECT * FROM employeeDetails;
