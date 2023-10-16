const { login, register } = require("./auth.controller");
const { getProfile } = require("./user.controller");

module.exports = {
  login,
  register,
  getProfile,
};
