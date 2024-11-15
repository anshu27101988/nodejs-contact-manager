const mongoose = require("mongoose");
//require('dotenv').config();
const URI = process.env.CONNECTION_STRING;
//CONNECTION_STRING=mongodb+srv://admin:admin@page-cluster.grkzm.mongodb.net/?retryWrites=true&w=majority&appName=page-cluster
//DB: node-contact-manager

const connectDatabase = async () => {
    console.log("URI", URI);
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log("database has been connected...");
};

module.exports = connectDatabase;
