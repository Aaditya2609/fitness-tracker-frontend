import React from 'react'
import Nav from '../Components/Nav'
import Food from '../Components/Food'

function FoodPage() {
  return (
    <div className='flex justify-between'>
        <Nav/>
        <Food/>
    </div>
  )
}

export default FoodPage