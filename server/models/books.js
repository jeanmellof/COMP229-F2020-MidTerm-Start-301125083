/*
Student: Jean M. de Freitas
StudentID: 301125083
COMP229 Midterm Test
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  versionKey: false
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
