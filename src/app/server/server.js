'use strict';
// Load dependencies
const express = require('express');
const app = express();
//import the required dependencies
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid access_token sent in the Authorization header
const authCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://status-reporter.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'status-reporter-api',
    issuer: "https://status-reporter.auth0.com/",
    algorithms: ['RS256']
});

// Task route
app.get('/api/tasks', (req, res) => {
    let tasks = [
        // Array of tasks here
        { taskid: 1, projectid: 2, userid: 1, name: "Grind the coffee beans", priority: "Medium", estimate: 3, remaining: 2, completed: 1 },
        { taskid: 2, projectid: 2, userid: 2, name: "Add a coffee filter", priority: "High", estimate: 4, remaining: 3, completed: 2 },
        { taskid: 3, projectid: 2, userid: 3, name: "Measure the coffee into the filter", priority: "Low", estimate: 5, remaining: 4, completed: 1 },
        { taskid: 4, projectid: 2, userid: 1, name: "Add water", priority: "Medium", estimate: 3, remaining: 4, completed: 0 },
        { taskid: 5, projectid: 2, userid: 2, name: "Place the carafe on the heating tray", priority: "High", estimate: 4, remaining: 5, completed: 0 },
        { taskid: 6, projectid: 2, userid: 3, name: "Press brew", priority: "Low", estimate: 5, remaining: 6, completed: 0 },
        { taskid: 7, projectid: 1, userid: 4, name: "File Introspection", priority: "Low", estimate: 3, remaining: 3, completed: 1 },
        { taskid: 8, projectid: 1, userid: 5, name: "File Value Extraction", priority: "Medium", estimate: 4, remaining: 2, completed: 2 },
        { taskid: 9, projectid: 1, userid: 6, name: "Metadata Extraction", priority: "High", estimate: 5, remaining: 4, completed: 2 },
        { taskid: 10, projectid: 1, userid: 4, name: "Ingestion Analytics", priority: "Low", estimate: 3, remaining: 3, completed: 0 },
        { taskid: 11, projectid: 1, userid: 5, name: "Event Notification", priority: "Medium", estimate: 4, remaining: 4, completed: 0 },
        { taskid: 12, projectid: 1, userid: 6, name: "Bulk Load", priority: "High", estimate: 5, remaining: 5, completed: 0 }
    ];
    res.json(tasks);
})

app.get('/api/users', (req, res) => {
    let users = [
        { userid: 1, name: 'Cleo', role: "Engineer", rate: 100.00, projectid: 1 },
        { userid: 2, name: 'Steven', role: "Engineer", rate: 105.00, projectid: 1 },
        { userid: 3, name: 'James', role: "Developer", rate: 200.00, projectid: 1 },
        { userid: 4, name: 'Tyler', role: "Developer", rate: 100.00, projectid: 2 },
        { userid: 5, name: 'Mark', role: "Engineer", rate: 75.00, projectid: 2 },
        { userid: 6, name: 'Lee', role: "Developer", rate: 65.00, projectid: 2 }
    ];
    res.json(users);
})

app.get('/api/projects', (req, res) => {
    let projects = [
        { projectid: 1, name: "Ingestion Engine", description: "Obtaining and importing data for storage in database.", budget: 10000.00 },
        { projectid: 2, name: "Coffee", description: "Make a pot of coffee.", budget: 20000.00 }
    ];
    res.json(projects);
})

app.get('/api/updates', (req, res) => {
    let updates = [
        { taskid: 1, date: "9/1/2017", remaining: 2, completed: 1 },
        { taskid: 2, date: "9/1/2017", remaining: 2, completed: 2 },
        { taskid: 3, date: "9/1/2017", remaining: 2, completed: 1 },
        { taskid: 7, date: "9/1/2017", remaining: 2, completed: 1 },
        { taskid: 8, date: "9/1/2017", remaining: 2, completed: 2 },
        { taskid: 9, date: "9/1/2017", remaining: 2, completed: 2 }
    ];
    res.json(updates);
})


app.listen(3001);
console.log('Serving status report data on localhost:3001');