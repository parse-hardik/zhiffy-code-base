const mongoose = require('mongoose');

const pSchema = mongoose.Schema({
  product:{ type: String, required: true },
});



module.exports = Products = mongoose.model('Products', pSchema);