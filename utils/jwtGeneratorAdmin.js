const jwt = require("jsonwebtoken");
require("dotenv").config();


 function jwtGeneratorAdmin(user_id) {
  const payload = {
    admin: user_id
  };

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGeneratorAdmin;
