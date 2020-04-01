const express = require('express');
const router = express.Router();

const ctrlBucketlist = require('../controllers/bucketlists');
const ctrlItems = require('../controllers/items');

//locations..
router
   .route('/bucketlists')
   .get(ctrlBucketlist.allBuckets) //list allbucketlist
   .post(ctrlBucketlist.addNewBucketList) //save a new bucketlist


router
   .route('/bucketlists/:bucketId')
   .get(ctrlBucketlist.getOneBucketList)//findone bucketby id
   .patch(ctrlBucketlist.updateBucketList) //upadte a bucketlist by id
   .delete(ctrlBucketlist.deleteBucketList) //delete a bucketlist

router
      .route('/bucketlists/:bucketId/tasks')
      .get(ctrlItems.getTasks) //find all tasks for a Bucketlist
      .post(ctrlItems.createNewTask) //add new task to bucketlist


router
      .route('/bucketlists/:bucketId/tasks/:taskId')
      .patch(ctrlItems.updateTask) //update existing task in a bucketlist
      // .delete(ctrlItems)

module.exports = router;
