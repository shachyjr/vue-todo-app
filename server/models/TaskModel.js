// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'mongodb://codesmith:codesmithpw@ds243085.mlab.com:43085/assessment_mongod';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

/* * * * * * *
  Configuring and connecting to mongodb with mongoose
* * * * * * */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(URI, () => {
  console.log('MongoDB connection successful!');
});

const taskSchema = new Schema({
  item: { type: String, required: true},
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema); // <-- export your model
