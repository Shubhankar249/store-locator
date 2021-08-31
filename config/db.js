const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('Connected ' + connect.connection.host);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
module.exports=connectDB;
