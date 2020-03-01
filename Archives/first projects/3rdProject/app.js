// 3rd Project Description - Using Express Router & Serving HTML Pages ✔️
// Third node.js project in order to understand the basic core modules

// Project Description
// Create app that serves two HTML files for "/" and "/users".
// Add some static JS/CSS files to project that should be required for at least one of HTML files

const path = require('path');

const express = require('express');

const mainRoutes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.listen(3000);
