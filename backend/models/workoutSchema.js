const mongoose = require('mongoose')
const {Schema} = mongoose;

// Schema contains : name, weight, reps, note

const workoutSchema = new Schema({
    name:{
        required:true,
        type:String
    },
    weight:{
        type:Number,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    note:{
        type:String
    }

}, {timestamps:true})

module.exports = mongoose.model('Workout', workoutSchema);

