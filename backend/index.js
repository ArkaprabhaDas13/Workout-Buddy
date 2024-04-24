require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/router')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());

app.use('/', workoutRoutes);


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to DB!!!")
})
.catch((err)=>{
    console.error("Error connecting to DB !!")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server is running on PORT", process.env.PORT)
})
