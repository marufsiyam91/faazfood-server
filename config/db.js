const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://marufsiyam9123:${process.env.DATABASE_PASSWORD}@cluster0.snlrzpd.mongodb.net/faazfood_server`).then(() => console.log('DB connected successfully'))
};

module.exports = connectDB;
