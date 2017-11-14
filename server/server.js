/* * * * * * *
  Initializaing and instantiating express application
* * * * * * */
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3333;

/* * * * * * *
* * * * * * */
const TaskController = require('./controllers/taskController.js');

/* * * * * * *
  Configuring middleware for application
* * * * * * */
app.use(bodyParser.json());
app.use(cors());

/* * * * * * *
  API routes to database
* * * * * * */
app.post('/postTask', TaskController.postTask);
app.get('/getTasks', TaskController.getTasks);
app.delete('/deleteTask', TaskController.deleteTask);

app.listen(PORT, () => {
  console.log(`Your application is listening on port ${PORT}`);
})