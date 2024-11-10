const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_KEY,
    { expiresIn: '30d' }
  );
};

module.exports = { generateToken };