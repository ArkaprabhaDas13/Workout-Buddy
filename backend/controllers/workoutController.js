const Workout = require('../models/workoutSchema')
const mongoose = require('mongoose')

// // for getting all the data from db

const getWorkouts = async (req, res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1})
    return res.status(200).json(workouts);
}

// // get a single workout

const getWorkout = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"ID not found!"})
    }

    const workout = await Workout.findById(id)

    if(!workout)
    {
        return res.status(404).json({error:"No such workout!"})
    }
    res.status(200).json(workout)
}

// // create a new workout

const createWorkout = async(req, res)=>{
    const {name, weight, reps, note} = req.body
    try{
        const workout = await Workout.create({name, weight, reps, note})
        return res.status(200).json(workout)
    }catch(error){
        return res.status(400).json({error:error.message})
    }
}

// // update a workout

const updateWorkout = async (req, res)=>{

    const {name, weight, reps, note} = req.body;
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"ID not found!"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})

    // OR we cound use the SPREAD ooperator
    // const workout = await Workout.findOneAndUpdate({_id:id},(...req.body))

    if(!workout)
        {
            return res.status(404).json({error:"No such workout!"})
        }
    res.status(200).json(workout)
}


 // delete a workout  

    const deleteWorkout = async(req, res)=>{
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:"ID not found!"})
        }

        const workout = await Workout.findOneAndDelete({_id:id})

        if(!workout)
        {
            return res.status(404).json({error:"No such workout!"})
        }
        return res.status(200).json(workout)
    }



module.exports={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}