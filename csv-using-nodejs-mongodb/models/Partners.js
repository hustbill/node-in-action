var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var partnerSchema = new Schema({
  _id: { type: String, Required:  '_id cannot be left blank.' },
  apiKey:    { type: String,     Required:  'apiKey be left blank.'},
  env:    { type: String,     Required:  'env be left blank.'},
  product:    { type: String,     Required:  'product be left blank.'},
  partnerName: { type: String ,    Required:  'partnerName  cannot be left blank'}
});

module.exports = mongoose.model('partners', partnerSchema);
