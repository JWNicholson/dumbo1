const express = require( 'express');

//express middleware
const router = express.Router();

// get method to test route
router.get("/", (req, res) => {
    res.status(200).json({api: "*** users route running ***"});
})

module.exports = router;



