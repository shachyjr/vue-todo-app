const Task = require('../models/TaskModel.js');

const TaskController = {};

TaskController.postTask = (req, res, next) => {
  const taskObj = { item: req.body.item};
  Task.create(taskObj, (err, task) => {
    if (err) {
      res.status = 500;
      res.setHeader('Content-type', 'application/json');
      res.send(JSON.stringify(err));
    } else {
      res.status = 200;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(task));


      // TODO: check this ---- i might not need the next() call here
      //next();
    }
  })

}

TaskController.getTasks = (req, res, next) => {
  
  Task.find({}, (err, tasks) => {
    if (err) {
      res.status = 500;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(err));
    } else {
      res.status = 200;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(tasks));
    }
  });


  // when no task is found in database, appropriate response will be sent
      // whe task has been found
      // if (!task) res.status(404).send('Item not found!');
}

TaskController.deleteTask = (req, res, next) => {
  // find item in the database
  Task.remove({ _id: req.body.id }, (err) => {
    if (err) {
      res.status = 500;
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(err));
    } else {
      res.status = 200;
      // res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify('Item removed!'));
    }
  });
  // delete if exists
}


module.exports = TaskController;
