const swaggerAutogen = require('swagger-autogen')();

const outputFile = './docs/api-spec.json';
const endpointsFiles = ['./src/app.ts'];

swaggerAutogen(outputFile, endpointsFiles);
