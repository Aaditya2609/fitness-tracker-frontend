import React from 'react'
import Dashboard from '../Components/Dashboard';
import Nav from '../Components/Nav';

function HomePage() {
  return (
    <div className='flex  justify-between'>
      <Nav/>
      <Dashboard/>
    </div>
  )
}

export default HomePage