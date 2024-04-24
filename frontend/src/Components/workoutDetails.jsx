import React from 'react'
import Button from 'react-bootstrap/Button';
import { MdDelete } from "react-icons/md";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import axios from 'axios'
import EditWindow from '../pages/EditWindow';

async function handleDelete(id)
{
  try{
    const response = await axios.delete(`http://localhost:3000/${id}`)
  }catch(err){
    console.error(err)
  }
}

async function handleEdit(id)
{
  try{
    const response = await axios.patch('http://localhost:3000/')          /////INCOMPLETE
  }catch(err)
  {
    console.error(err);
  }
}

const workoutDetails = ({workout}) => {

  console.log(workout._id)

  return (
    <div className='workoutDetails'>

        <h3>{workout.name}</h3>
        <p><strong>Weight</strong>:{workout.weight}</p>
        <p><strong>Reps</strong>:{workout.reps}</p>
        <p><strong>Note</strong>:{workout.note}</p>
        <p>{workout.createdAt}</p>
        
        <Button variant="danger" onClick={()=>handleDelete(workout._id)}><MdDelete /></Button>{' '}  

          {/* CHECK FROM HEREEE================================= */} 

          <Link to={{ pathname: "/edit", search: `?id=${workout._id}` }}>
            <Button variant="info"><FaEdit /></Button>{' '}
          </Link>
        
    </div>
  )
}

export default workoutDetails