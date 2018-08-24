var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new InfoSchema object
// This is similar to a Sequelize model
var InfoSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var Info = mongoose.model("Info", InfoSchema);

// Export the Info model
module.exports = Info;
