import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood, fetchFoods } from '../Actions/actions';
import AddFoodModal from './AddFoodModal';

function Food() {
  const [showAddFood,setShowAddFood]=useState(false)
  const dispatch=useDispatch();
  const foods = useSelector((state) => state.foods);
  useEffect (()=>{
    dispatch(fetchFoods())},[dispatch])
    useEffect(()=>{
    },[foods])
  return (
    <div className='flex flex-col items-center w-full h-[100vh] overflow-auto'>
     <h1 className='text-3xl my-4 font-bold'> All Foods:</h1>
    <div className='flex flex-wrap gap-4 items-center justify-center'>
      {foods.map(item=><div key={item._id} className='border-2 p-2 border-[#00CED1] flex flex-col items-center rounded-xl w-80'>
      <div className='flex w-full flex-col justify-between gap-1'>
        <p className='flex justify-between'>Name: <span>{item.name}</span></p>
        <p className='flex justify-between'>Calories: <span>{item.calories}</span></p>
        <p className='flex justify-between'>Protein (in g): <span>{item.protein}</span></p>
        <p className='flex justify-between'>Carbhohydartes (in g): <span>{item.carbohydrates}</span></p>
        <p className='flex justify-between'>Fat (in g): <span>{item.fat}</span></p>
        <div className='flex items-center justify-center'>
        <button onClick={()=>dispatch(deleteFood(item._id))} className="m-1 flex items-center text-md font-bold my-2 py-2 px-2 border-2 border-[#00CED1] rounded whitespace-nowrap">Delete</button>
        </div>
        </div>
      </div>)}
    </div>
    <button onClick={() => setShowAddFood(true)} className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap">Add Food</button>
      {showAddFood && <AddFoodModal setShowAddFood={setShowAddFood} />}
    </div>
  )
}

export default Food