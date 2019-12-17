const express = require('express');
const router = express.Router();

const User = require('../../Models/Users');

/**
 * @route GET api/users
 * @desc Get all Users
 * @access Public
 */
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.json({users})
        });
});

module.exports = router;
