import React from 'react'
import Nav from '../Components/Nav'
import Exercises from '../Components/Exercises'

function ExercisesPage() {
  return (
    <div className='flex justify-between'>
        <Nav/>
        <Exercises/>
    </div>
  )
}

export default ExercisesPage