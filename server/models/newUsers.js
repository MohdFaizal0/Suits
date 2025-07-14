const { model, Schema } = require(`mongoose`);

const newUserSchema = new Schema({
  fName: {
    type: String,
    required: true,
    trim: true,
  },
  lName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    requried: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
});

const newUser = model("newUser", newUserSchema);

module.exports = newUser;
