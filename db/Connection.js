const mongoose = require("mongoose");

const URI =
    "mongodb+srv://valentinancy:oco123@cluster0.egolc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("database connected...");
};

module.exports = connectDB;
