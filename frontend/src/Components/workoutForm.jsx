import React, { useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';

const WorkoutForm = () => {
  
  const[name, setName] = useState('')
  const[weight, setWeight] = useState('')
  const[reps, setReps] = useState('')
  const[note, setNote] = useState('') 

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
        const response = await axios.post('http://localhost:3000/', {name, weight, reps, note})
        console.log("Workout added successfully")
        console.log(response.data)
    }
    catch(err){
        console.error(err)
    }

    // const json = response.json()

    // if(response.status == 200)
    // {
    //     setName('')
    //     setWeight('')
    //     setReps('')
    //     setNote('')
    // }
  }
  
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new WORKOUT</h3>
            <label>Exercise Name:</label>
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name}/>

            <label>Weight:</label>
            <input type="number" placeholder='Weight' onChange={(e)=>setWeight(e.target.value)} value={weight}/>

            <label>Reps:</label>
            <input type="number" placeholder='Reps' onChange={(e)=>setReps(e.target.value)} value={reps}/>

            <label>Exercise Note:</label>
            <input type="text" placeholder='Note' onChange={(e)=>setNote(e.target.value)} value={note}/>
            
            <Button type="submit">Add Workout</Button>

        </form>
    ) 
}

export default WorkoutForm