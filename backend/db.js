// import mongoose from "mongoose";

const mongoose = require('mongoose');
require("dotenv").config();

const mongoURI = process.env.REACT_APP_DATABASE;
console.log(mongoURI);

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo successfully");
    })
}

module.exports = connectToMongo;