const mongoose = require('mongoose');
const config = require('config');

const url = config.get('mongoURI');

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(url, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false, 
            useCreateIndex: true 
        })

          console.log(`connected to MongoDB`)
        } catch(error) {
          console.log('error connecting to MongoDB ', error.message)
          process.exit(1);
        }
}

module.exports = connectMongoDB;