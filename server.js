const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectMongoDB = require('./config/db');

dotenv.config( { path: '/.config/config.env'} )

connectMongoDB();

const workingHours = require('./routes/workingHours')

const app = express();

app.use('/api/workingHours', workingHours);

const PORT =  process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));