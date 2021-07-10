const mongoose = require('mongoose');

const url = 'mongodb+srv://dbUser:kissa123@hourcounter.o15id.mongodb.net/timecounter?retryWrites=true&w=majority';

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(url, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useFindAndModify: false, 
            useCreateIndex: true 
        })

            console.log('connected to MongoDB')
        } catch(error) {
          console.log('error connecting to MongoDB ', error.message)
          process.exit(1);
        }
    }

const workingHoursSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    created : {
        type: Date,
        default: Date.now
    }
});

module.exports = connectMongoDB;
module.exports = mongoose.model('WorkingHour', workingHoursSchema);