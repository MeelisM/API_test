const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chuckSchema = new Schema({
  fact:  { 
    type: String, 
    required: false, 
    minlength: 2, 
    maxlength: 100 },
})

chuckSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('fact', chuckSchema);