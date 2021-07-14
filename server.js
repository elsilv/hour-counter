const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectMongoDB = require('./config/db');

dotenv.config( { path: '/.config/config.env'} )

connectMongoDB();

const workingHours = require('./routes/workingHours')
const user = require('./routes/user')

const app = express();

app.use(express.json());

app.use('/api/workingHours', workingHours);
app.use('/api/user', user);

const PORT =  process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));