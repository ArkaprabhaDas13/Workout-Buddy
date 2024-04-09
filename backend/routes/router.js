const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutSchema')

// get all workouts
// router.get('/', async (req,res)=>{
//     res.send("Hello")
// })

// get a single workout
// router.get('/:id', (req, res)=>{
//     res.json({mssg:"This route gets a single element"})
// })

// create a new workout
router.post('/', async(req, res)=>{  
    const {name, weight, reps, note} = req.body

    try{
        const workout = await Workout.create({name, weight, reps, note})
        res.status(200).json(workout);
    }catch(error)
    {
        res.status(400).json({error:error.message})
    }
})

// delete a workout
// router.delete('/:id', (req, res)=>{
//     res.json({mssg:"Deleted!"});
// }) 

//update a workout
// router.patch('/:id', (req, res)=>{
//     res.json({mssg:"Updated the workout"})
// })

module.exports = router;