const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const GuestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  events: [String]
});

const GuestlistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  guests: [GuestSchema]
});

const EventSchema = new mongoose.Schema({
  event_title: { type: String, required: true },
  checked: { type: Boolean, default: false }
});

const BudgetItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  checked: { type: Boolean, default: false }
});

const TaskSchema = new mongoose.Schema({
  description: { type: String, required: true },
  checked: { type: Boolean, default: false },
  done_by: { type: Date },
  created_at: { type: Date, default: Date.now }
});

const ChecklistSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tasks: [TaskSchema]
});

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true,
    index: true
  },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    index: true
  },
  phone: { 
    type: String, 
    required: true, 
    unique: true,
    index: true
  },
  guestlists: [GuestlistSchema],
  events: [EventSchema],
  budget: [BudgetItemSchema],
  checklists: [ChecklistSchema],
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
});

//pre is user so that it will run before saving the user in the database
UserSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// generate auth token
UserSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'my_secret_key');
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// login validation
UserSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ $or: [{ username }, { email: username }] });
  if (!user) {
    throw new Error('Unable to login');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Unable to login');
  }
  return user;
};  

const User = mongoose.model('User', UserSchema);
module.exports = User;