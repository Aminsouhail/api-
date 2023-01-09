import mongoose from 'mongoose'
const { schema } = mongoose ;
const userSchema = newSchema({name: { type: String, Required: true },
    lastName: String,
    age: Number,
  });
  module.exports = mongoose.model("user", userSchema);