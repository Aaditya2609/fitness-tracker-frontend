import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchExercises, fetchFoods, fetchGoals } from '../Actions/actions';

function Dashboard() {
  
    const dispatch=useDispatch();
    const exercises = useSelector((state) => state.exercises);
    const foods = useSelector((state) => state.foods);
    const goals = useSelector((state) => state.goals);
  
    useEffect(()=>{
      dispatch(fetchExercises())
      dispatch(fetchFoods())
      dispatch(fetchGoals())
    },[])

    const totalCaloriesBurned=exercises.reduce((acc,cv)=>acc+cv.calories,0)
    const totalCaloriesConsumed=foods.reduce((acc,cv)=>acc+cv.calories,0)
    const totalCaloriesGoal=goals.reduce((acc,cv)=>acc+cv.targetCaloriesValue,0)
    const remainingCaloriesToGoal=totalCaloriesGoal-totalCaloriesBurned
  return (
    <div className='w-full'>
      <h1 className='text-3xl my-4 font-bold'>Dashboard</h1>
      <div className='flex  items-center justify-center w-full'>
      <div className='flex flex-col gap-4 text-xl text-left items-center justify-center border-2 border-[#00CED1] p-4 rounded-3xl'>
      <p className='w-[21rem]'>Total Calories Consumed: {totalCaloriesConsumed}</p>
      <p className='w-[21rem]'>Total Calories Goal: {totalCaloriesGoal}</p>
      <p className='w-[21rem]'>Remaining Calories to Goal: {remainingCaloriesToGoal}</p>
      <p className='w-[21rem]'>Total Calories Burned: {totalCaloriesBurned}</p>
      </div>
      </div>
    </div>
  )
}

export default Dashboard