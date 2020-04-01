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


module.exports = router;
