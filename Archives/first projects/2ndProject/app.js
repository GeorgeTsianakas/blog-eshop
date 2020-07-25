// 2nd Project Description - Introduction to Express.js Framework & Middleware functions ✔️
// Second node.js project in order to understand the basics of Express.js Framework and how middleware works

// Project Description
// Create an Express.js app which funnels the requests through 2 middleware functions that log something to console and return one response.
// Handle requests to "/" and "/users" such that each request only has one handler "/middleware" that does something with it(e.g. send dummy response).
// 'nodemon' dependency package used. Run project through 'npm start' command. Debug configuration using Node Attach and Launch Chrome against localhost.

const express = require('express');

const app = express();

// app.use((req, res, next) => {
//   console.log('First Middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('Second Middleware');
//   res.send('<p>Interacting with middleware functions</p>');
// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>The Middleware that handles just /users</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The Middleware that handles just /</p>');
});


app.listen(3000);
