const bcrypt = require('bcrypt');
const User = require('../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { addAuth, getUsers } = require('../controllers/auth');

router.route('/')
    .post(addAuth);

router.route('/user')
    .get(getUsers);    

module.exports = router;