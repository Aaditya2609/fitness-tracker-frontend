import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFood } from '../Actions/actions';



function AddFoodModal({ setShowAddFood }) {
    const [newFood, setNewFood] = useState(
        {
            name: "",
            calories: 0,
            protein: 0,
            carbohydrates: 0,
            fat: 0

        })
    const dispatch = useDispatch();

    const handleAddFood = () => {
        if (newFood.name !== "" && newFood.calories !== 0 && newFood.protein!==0 && newFood.carbohydrates!==0 && newFood.fat!==0) {
            dispatch(addFood(newFood))
            setShowAddFood(false)
        }
        else {
            alert("Please fill the fields")
        }
    }


    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
                <div className="bg-[rgba(255,255,255,1)] p-4 rounded-xl w-[35%]">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl self-start px-4 my-4 font-bold font-[manga] text-black">
                            Add Food
                        </h1>
                        <button
                            className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-1 px-2 border-2 border-[#00CED1] rounded-sm whitespace-nowrap"
                            onClick={() => setShowAddFood(false)}
                        >
                            X
                        </button>
                    </div>
                    <div className='flex flex-col items-center justify-between w-full '>
                        <label className='flex gap-4 m-2 w-8/12 justify-between'>Name
                            <input className='border-2 border-black rounded-md px-2 py-1' onChange={(e) => setNewFood({ ...newFood, name: e.target.value })} />
                        </label>


                        <label className='flex gap-4 m-2 w-8/12 justify-between'>
                            Calories
                            <input className='border-2 border-black rounded-md px-2 py-1' type="number" onChange={(e) => setNewFood({ ...newFood, calories: e.target.value })}></input>
                        </label>
                        <label className='flex gap-4 m-2 w-8/12 justify-between'>
                            Protein
                            <input className='border-2 border-black rounded-md px-2 py-1' type="number" onChange={(e) => setNewFood({ ...newFood, protein: e.target.value })}></input>
                        </label>
                        <label className='flex gap-4 m-2 w-8/12 justify-between'>
                            Carbohydrates
                            <input className='border-2 border-black rounded-md px-2 py-1' type="number" onChange={(e) => setNewFood({ ...newFood, carbohydrates: e.target.value })}></input>
                        </label>
                        <label className='flex gap-4 m-2 w-8/12 justify-between'>
                            Fat
                            <input className='border-2 border-black rounded-md px-2 py-1' type="number" onChange={(e) => setNewFood({ ...newFood, fat: e.target.value })}></input>
                        </label>

                        <button
                            className="m-1 w-fit flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap"
                            onClick={() => handleAddFood()}
                        >
                            Add Food
                        </button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default AddFoodModal