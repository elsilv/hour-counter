const express = require('express');
const router = express.Router();
const { getProjects, addProjects, deleteProjects } = require('../controllers/project');

router.route('/')
    .get(getProjects)
    .post(addProjects);

router.route('/:id')
    .delete(deleteProjects);

module.exports = router;