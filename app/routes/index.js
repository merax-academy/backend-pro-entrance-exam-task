const { Router } = require("express");
const { register, login, getProfile } = require("../controllers");
const { checkJWT } = require("../middleware");
const router = Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/profile", checkJWT, getProfile);

module.exports = { router };
