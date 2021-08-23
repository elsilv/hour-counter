const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectMongoDB = require('./config/db');
const errorHandler = require('./middleware/error');
const path = require('path');
const pdf = require('html-pdf');
const pdfTemplate = require('./documents');

dotenv.config( { path: '/.config/config.env'} )

connectMongoDB();

const workingHours = require('./routes/workingHours')
const projects = require('./routes/projects')

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));
app.use('/api/workingHours', workingHours);
app.use('/api/projects', projects);

app.use(errorHandler);

// PDF - POST
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject())
        }
        res.send(Promise.resolve())
    })
})

// PDF - GET
app.get('/projects/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

// For Heroku
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('front/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'));
    })
}

const PORT =  process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));