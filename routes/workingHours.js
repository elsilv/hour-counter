const express = require('express');
const router = express.Router();
const { getWorkingHours, addWorkingHours, deleteWorkingHours } = require('../controllers/hourController')

router.route('/')
    .get(getWorkingHours)
    .post(addWorkingHours);

router.route('/:id')
    .delete(deleteWorkingHours);

module.exports = router;