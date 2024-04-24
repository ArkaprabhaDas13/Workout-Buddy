import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'

//components
import WorkoutDetails from '../Components/workoutDetails'
import WorkoutForm from '../Components/workoutForm';

const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            await axios.get('http://localhost:3000/')
            .then((response)=>{
                console.log("Response.data : ",response.data)
                const json = response.data
                if(response.status == 200)
                {
                    setWorkouts(json)
                }
            })
            .catch(err=>{
                console.error(err)
            })
        }   
        // console.log("workouts : ",workouts)
        fetchWorkouts()
    },[])

  return (
    <div className='home'>

        <WorkoutForm/>

            <div className="workouts">
                {workouts && workouts.map((workout)=>(    
                // inside we are using () instead of {} beacause we are retrning a value
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>

    </div>
  )
}

export default Home;

