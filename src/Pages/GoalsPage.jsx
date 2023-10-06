import React from 'react'
import Goals from '../Components/Goals'
import Nav from '../Components/Nav'

function GoalsPage() {
    return (
        <div className='flex  justify-between'>
            <Nav/>
            <Goals />
        </div>
    )
}

export default GoalsPage