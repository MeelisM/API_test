const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chuckSchema = new Schema({
  fact:  { 
    type: String
  }
})

chuckSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('fact', chuckSchema);