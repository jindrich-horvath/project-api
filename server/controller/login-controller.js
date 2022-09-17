const express = require("express");
const LoginAbl = require("../abl/request/login-abl");
const router = express.Router();

router.get("/", async (req, res) => {
    LoginAbl(req, res)
});

module.exports = router;
