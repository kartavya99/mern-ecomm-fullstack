const { User } = require("../model/User");

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const user = await user.save();
    res.status(201).json({ id: user.id, role: user.role });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();
    // this is just temporary, later will use strong password auth
    if (!user) {
      res.status(401).json({ message: "no such user email" });
    }
    if (user.password === req.body.password) {
      res.status(201).json({
        id: user.id,
        role: user.role,
      });
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
};
