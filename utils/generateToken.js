const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const EXP_DATE = "30d";
const SECRET_KEY = process.env.JWT_TOKEN_KEY;

const generateToken = (id, role) => {
  const token = jwt.sign({ user_id: id, user_role: role }, SECRET_KEY, {
    expiresIn: EXP_DATE,
  });

  return token;
};

module.exports = generateToken;
