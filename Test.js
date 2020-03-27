const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  encryptedPassword: { type: String, required: true },
  avatar_url: { type: String },
  role: { type: String, enum: ['admin', 'restricted'], required: true },
});

// Update the updated_at field on save
userSchema.pre('save', (next) => {
  this.updated_at = Date.now()
  next()
})

module.exports = NewUser = mongoose.model('NewUser', userSchema);