//import necessary modules
const express = require('express');
//body-parser is a middleware to parse incoming request bodies
const bodyParser = require('body-parser');


//create an instance of express
const app = express();
const port = 3000;
const users = [];

app.use(bodyParser.json());

//define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Register a new user
app.post('/users', (req, res) => {
    const newuserId =  req.body.userId;
    if(!newuserId){
        return res.status(400).send('userId is required');
    }

    if(users.includes(newuserId)){
        return res.status(409).send('User already exists');
    }
    users.push(newuserId);
    res.status(201).send('User registered successfully');
});

//Get rtegistered users
app.get('/users', (req, res) => {
    return res.json({users});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});