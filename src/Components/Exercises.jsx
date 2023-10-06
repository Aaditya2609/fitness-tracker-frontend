import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteExercise, fetchExercises } from '../Actions/actions';
import AddExerciseModal from './AddExerciseModal';

function Exercises() {
  const dispatch = useDispatch();
  const [showAddExercise, setShowAddExercise] = useState(false)
  const exercises = useSelector((state) => state.exercises);
  useEffect(() => {
    dispatch(fetchExercises())
  }, [dispatch])
  useEffect(() => {
  }, [exercises])
  return (
    <div className='flex flex-col items-center w-full h-[100vh] overflow-auto'>
      <h1 className='text-3xl my-4 font-bold'>All Exercises:</h1>
      <div className='flex gap-4 items-center justify-center flex-wrap'>
        {exercises.map(item => <div key={item._id} className='border-2 p-2 border-[#00CED1] flex flex-col items-start rounded-xl w-80'>
          <div className='flex w-full flex-col justify-between gap-1'>
          <p className='flex justify-between'>Name: <span>{item.name}</span></p>
          <p className='flex justify-between'>Duration (in minutes): <span>{item.duration}</span></p>
          <p className='flex justify-between'>Calories: <span>{item.calories}</span></p>
          <div className='flex items-center justify-center'>
          <button onClick={() => dispatch(deleteExercise(item._id))} className="m-1 flex items-center text-md  font-bold my-2 py-2 px-2 border-2 border-[#00CED1] rounded whitespace-nowrap">Delete</button>
          </div>
          </div>
          
        </div>)}

      </div>
      <button onClick={() => setShowAddExercise(true)} className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap">Add Exercise</button>
      {showAddExercise && <AddExerciseModal setShowAddExercise={setShowAddExercise} />}
    </div>
  )
}

export default Exercises