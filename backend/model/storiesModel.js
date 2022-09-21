const mongoDb = require('mongoose'); // access mongoos 
// create schema 
const storiesSchema = mongoDb.Schema({
     title: {
          type: String,
          required: [true, "Please Enter Title"],
          trim: true,
          unique : true
     },
     discription: {
          type: String,
          required: [true, "Please Enter Discription"],
          trim: true,
     },
},
{
     timestamps: true
})
// create model and exports 
module.exports = mongoDb.model('Stories', storiesSchema);