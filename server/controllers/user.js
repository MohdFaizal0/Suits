const newUser = require("../models/newUsers");

const createUser = async (req, res) => {
  try {
    const { email, password, fName, lName } = req.body;
    console.log(email, password, fName, lName);

    if (!email || !password || !fName || !lName) {
      return res.status(400).json({ messaga: "all fields are required" });
    }
    const user = new newUser({ email, password, fName, lName });
    console.log(user);
    await user.save();
    res.status(200).json({ message: "user created sucessfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "cannot be created",
    });
  }
};

module.exports = { createUser };
