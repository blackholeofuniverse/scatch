const express = require("express");
const router = express.Router(); 

router.get("/users", (req, res) => {
    res.send("hello users")
})

module.exports = router;