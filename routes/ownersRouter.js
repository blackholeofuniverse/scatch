const express = require("express");
const router = express.Router(); 

router.get("/owners", (req, res) => {
    res.send("hello owners")
})

module.exports = router;