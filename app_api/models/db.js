require('./fullSchema');
const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/tudyAPI';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

mongoose.connection.on('connected', () => {
   console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', (err) => {
   console.log(`Mongoose connected to ${err}`);
});
mongoose.connection.on('disconnected', () => {
   console.log(`Mongoose disconnected from ${dbURI}`);
});









// db.users.save({
//    name: 'David Adeleye',
//    email: 'davidmacho@gmail.com',
//    password:'abcdef',
//    bucketlists: [
//       {
//          _id: ObjectId(),
//          title: 'Today',
//          items:[
//             {
//                taskname: 'Go to gym',
//                done: true
//             },
//             {
//                taskname: 'Buy groceries',
//                done: false
//             }
//          ]
//       },
//       {
//          _id: ObjectId(),
//          title: 'Personal',
//          items:[
//             {
//                taskname: 'Meet friends',
//                done: true
//             },
//             {
//                taskname: 'Watch new girl',
//                done: false
//             }
//          ]
//       },
//       {
//          _id: ObjectId(),
//          title: 'Work',
//          items:[
//             {
//                taskname: 'Update resume',
//                done: false
//             },
//             {
//                taskname: 'Meet director of operations',
//                done: false
//             }
//          ]
//       },
//    ]
// })