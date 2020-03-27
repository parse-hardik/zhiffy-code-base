const mongoose = require('mongoose');


const qSchema = mongoose.Schema({
  ques_id: { type: String, required: true },
  ques:{ type: String, required: true },
  Product_type :{
  	type: mongoose.Schema.Types.ObjectId,
  	ref:'Products'
  },
  type:{type:String, required:true},
  typeOfWeightage:{ type: String, required: true },
  Weightage:{type:Number, required:true},

});

// Update the updated_at field on save
qSchema.pre('save', (next) => {
  this.updated_at = Date.now()
  next()
})

module.exports = Questions = mongoose.model('Questions', qSchema);