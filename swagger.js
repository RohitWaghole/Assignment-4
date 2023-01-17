const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node JS API Project Using MySQL",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:2013/",
      },
    ],
  },
  apis: ["./index.js"],
};

module.exports = { swaggerJSDoc, swaggerUi, options };
