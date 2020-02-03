## 1st Project Description - Parsing Requests & Sending Responses
First node.js project in order to understand the basic core modules
### Project Description
* Spin up a node.js server.
* Handle 2 routes. One "/" and another "/users". Return some greeting text on the first and return a list of dummy users on the second.
* Add a form with a "username" input to the "/" and sumbit a post request to "/create-user" upon a button click.
* Add "/create-user" route and parse the incoming data.

## 2nd Project Description - Introduction to Express.js Framework & Middleware functions
Second node.js project in order to understand the basics of Express.js Framework and how middleware works
### Project Description
* Create an Express.js app which funnels the requests through 2 middleware functions that log something to console and return one response.
* Handle requests to "/" and "/users" such that each request only has one handler "/middleware" that does something with it(e.g. send dummy response).
* 'nodemon' dependency package used. Run project through 'npm start' command. Debug configuration using Node Attach and Launch Chrome against localhost.