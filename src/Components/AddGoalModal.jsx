import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  addGoal } from '../Actions/actions';



function AddGoalModal({ setShowAddGoal }) {
    const [newGoal, setNewGoal] = useState(
        {
            name: "",
            description: 0,
            targetDate: "",
            targetCaloriesValue: 0,
            status: ""

        })
    const dispatch = useDispatch();

    const handleAddFood = () => {
        console.log(newGoal)
        if (newGoal.name !== "" && newGoal.description !=="" && newGoal.targetDate!=="" && newGoal.targetCaloriesValue!==0 && newGoal.status!=="") {
            dispatch(addGoal(newGoal))
            setShowAddGoal(false)
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
                            onClick={() => setShowAddGoal(false)}
                        >
                            X
                        </button>
                    </div>
                    <div className='flex flex-col items-center justify-between w-full '>
                        <label className='flex gap-4 m-2 w-9/12 justify-between'>Name
                            <input className='border-2 border-black rounded-md px-2 py-1 w-7/12' onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })} />
                        </label>


                        <label className='flex gap-4 m-2 w-9/12 justify-between'>
                            Description
                            <input className='border-2 border-black rounded-md px-2 py-1 w-7/12'  onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}></input>
                        </label>
                        <label className='flex gap-4 m-2 w-9/12 justify-between'>
                            Target Date
                            <input className='border-2 border-black rounded-md px-2 py-1 w-7/12 ' type="date" onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}></input>
                        </label>
                        <label className='flex gap-4 m-2 w-9/12 justify-between'>
                           Total Calorie Value
                            <input className='border-2 border-black rounded-md px-2 py-1 w-7/12' type="number" onChange={(e) => setNewGoal({ ...newGoal, targetCaloriesValue: e.target.value })}></input>
                        </label>
                        <label className='flex gap-4 m-2 w-9/12 justify-between'>
                            Status
                            <select className='border-2 border-black rounded-md px-2 py-1 w-7/12' onChange={(e) => setNewGoal({ ...newGoal, status: e.target.value })}>
                                <option>None</option>
                                <option value={"In Progress"}>In Progress</option>
                                <option value={"Achieved"}>Achieved</option>
                                <option value={"Abandoned"}>Abandonded</option>

                            </select>
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

export default AddGoalModal