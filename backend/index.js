const express=require('express');
const { default: mongoose } = require('mongoose');
const app=express()
const dotenv=require('dotenv')


//Database

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected Successfully");
        
    } catch (error) {
        console.log(error);
        
    }
}

dotenv.config();

app.listen(5000,()=>{
    connectDB();
    console.log("Server Is Running On Port 5000....");
})

