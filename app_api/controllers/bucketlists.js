const mongoose = require('mongoose');
// const Loc = mongoose.model('User');

const { List } = require('../models/fullSchema');

//Get all BucketList
const allBuckets = (req, res) => {
   List.find({}).then((lists) => {
      res.send(lists)
   });
}

//Add a new BUcketlist
const addNewBucketList = (req, res) => {
   let title = req.body.title;

   let newList = new List({
      title
   });
   newList.save().then((listDoc) => {
      res.send(listDoc);
   })
}

//Update a List
const updateBucketList = (req, res) => {
   List.findOneAndUpdate({ _id: req.params.bucketId }, {
      $set: req.body
   }).then(() => {
      res.sendStatus(200);
   })
}

// get One BucketList
const getOneBucketList = (req, res) =>{
   return res.status(200).json({mesage: 'true'})
}

const deleteBucketList = (req, res) => {
   List.findOneAndRemove({
      _id: req.params.bucketId
   }).then((removedListDoc) => {
      res.send(removedListDoc);
   })
}

module.exports = {
   allBuckets,
   updateBucketList,
   addNewBucketList,
   getOneBucketList,
   deleteBucketList
};