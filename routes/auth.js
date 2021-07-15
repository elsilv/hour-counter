const bcrypt = require('bcrypt');
const User = require('../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { addAuth } = require('../controllers/auth');

router.route('/')
    .post(addAuth);

module.exports = router;