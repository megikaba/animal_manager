const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://0.0.0.0:27017/animals_manager', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
      console.log('MongoDB connected');
    }).catch((err) => {
      console.log('MongoDB failed to connect');
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
