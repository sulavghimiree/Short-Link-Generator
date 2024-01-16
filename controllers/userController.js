const { v4: uuidv4 } = require("uuid");
const User = require("../models/userModel");
const { setUser } = require("../authentication/auth");

async function userSignup(req, res) {
  const { fullname, username, email, password } = req.body;
  await User.create({
    fullname,
    username,
    email,
    password,
  });
  res.json({ Status: "Added" });
}

async function userLogin(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) {
    return res.json({ msg: "User not Found", success: false });
  }

  const sessionId = uuidv4();
  console.log(sessionId);
  setUser(sessionId, user);
  res.setHeader("Uid", sessionId);
  return res.json({ success: true, user: user });
}

module.exports = {
  userSignup,
  userLogin,
};
