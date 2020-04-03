/** const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
   email: {
      type: String,
      required:true,
      minlength: 1,
      trim: true,
      unique:true
   },
   password: {
      type: String,
      required: true,
      minlength: 8
   },
   session: [{
      token: {
         type: String,
         required: true
      },
      expiresAt: {
         type: Number,
         required: true
      }
   }]
});

// instance methods

UserSchema.methods.toJSON() = function() {
   const user = this;
   const userObject = user.toObject();

   // return doc except the password and sessions

   // return 
}

**/