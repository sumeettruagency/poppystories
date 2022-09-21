const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const storiesRouter = require('./router/storiesRouter'); // storie router file 
 require('./config/configEnv'); // env file 
require('./config/database').dataBase(); // database  function 
const errorMiddleware = require("./middleware/error");
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
     console.log(`Error: ${err.message}`);
     console.log(`Shutting down the server due to Uncaught Exception`);
     process.exit(1);
});

const app = express();
const port = PORT || 5000;

// parse urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Stories Routers
app.use("/api/", storiesRouter);

// Middleware for Errors
app.use(errorMiddleware);

// Server 
const server = app.listen(port, () => console.log(`Server start on post ${port}`))

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
     console.log(`Error: ${err.message}`);
     console.log(`Shutting down the server due to Unhandled Promise Rejection`);   
     server.close(() => {
       process.exit(1);
     });
 });
