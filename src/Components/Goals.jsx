import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteGoal, fetchGoals } from '../Actions/actions';
import AddGoalModal from './AddGoalModal';

function Goals() {
  const [showAddGoal,setShowAddGoal]=useState(false)
  const dispatch=useDispatch();
  const goals = useSelector((state) => state.goals);
  useEffect (()=>{
    dispatch(fetchGoals())},[])
  useEffect(()=>{
  },[goals])
  return (
    <div className='flex flex-col items-center w-full h-[100vh] overflow-auto'> 
      <h1 className='text-3xl my-4 font-bold'>All Goals:</h1>
    <div className='flex gap-4 flex-wrap items-center justify-center '>
      {goals.map(item=>
      {
        const date=new Date(item.targetDate)
      return (<div key={item._id}  className='border-2 p-2 border-[#00CED1] flex flex-col items-center rounded-xl w-80'>
         <div className='flex w-full flex-col justify-between gap-1'>
        <p className='flex justify-between gap-2'>Name: <span>{item.name}</span></p>
        <p className='flex justify-between gap-2'>Description: <span>{item.descroption}</span></p>
        <p className='flex justify-between gap-2'>Target Date: <span>{date.toLocaleDateString()}</span></p>
        <p className='flex justify-between gap-2'>Target Calories Value: <span>{item.targetCaloriesValue}</span></p>
        <p className='flex justify-between gap-2'>status: <span>{item.status}</span></p>
       
        </div>
        <button onClick={()=>dispatch(deleteGoal(item._id))} className="m-1 flex items-center text-md  font-bold my-2 py-2 px-2 border-2 border-[#00CED1] rounded whitespace-nowrap">Delete</button>
      </div>)})}
    </div>
    <button onClick={() => setShowAddGoal(true)} className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap">Add Goal</button>
      {showAddGoal && <AddGoalModal setShowAddGoal={setShowAddGoal} />}
      </div>
  )
}

export default Goals