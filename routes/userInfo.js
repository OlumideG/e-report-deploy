const express = require("express")
const router = express.Router()
const db = require("../db/index");

// GET request that gets the user's details 
router.get("/username/:id", async (req, res, next) => {
    try {
        const user = await db.query("SELECT first_name, last_name,user_email FROM users WHERE user_id = $1", [req.params.id])
        res.json(user.rows)
        // console.log(user.rows)
    } catch (error) {
        next(error)
    }

})

module.exports = router;