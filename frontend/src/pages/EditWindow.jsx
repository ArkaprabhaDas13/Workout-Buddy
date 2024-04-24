import React from 'react'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';

const EditWindow = () => {

  const[name, setName] = useState('')
  const[weight, setWeight] = useState('')
  const[reps, setReps] = useState('')
  const[note, setNote] = useState('') 
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get('id');

  const handleSubmit = async(e)=>{

    e.preventDefault()


    try{

      const response = await axios.patch(`http://localhost:3000/edit/${id}`, {name, weight, reps, note})
      console.log("Workout edited successfully")
      console.log(response.data)

    }catch(err){
      console.err(err)
    }

  }


  return (
    <div>

      <h1>Edit Window:</h1>

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

    </div>
  )
}

export default EditWindow