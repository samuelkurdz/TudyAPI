const mongoose = require('mongoose');
const { Task } = require('../models/fullSchema');



const getTasks = (req, res) => {
   Task.find({
      _listId: req.params.bucketId
   }).then((tasks) => {
      res.send(tasks);
   })
};

const createNewTask  = (req, res) => {
   let newTask = new Task({
      title: req.body.title,
      _listId: req.params.bucketId
   });
   newTask.save().then((newTaskDoc) => {
      res.send(newTaskDoc)
   })
}

const updateTask = (req, res) => {
   Task.findOneAndUpdate({
      _id: req.params.taskId,
      _listId: req.params.bucketId
   },
   {
      $set: req.body
   }).then(() => {
      res.sendStatus(200);
   })
}

module.exports = {
   getTasks,
   createNewTask,
   updateTask
};