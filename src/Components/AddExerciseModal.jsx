import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExercises} from '../Actions/actions';



function AddExerciseModal({ setShowAddExercise }) {
    const [newExercise, setNewExercise] = useState(
        {
            name: "",
            duration: 0,

        })
        const dispatch=useDispatch();

    const handleAddExercise=()=>{
        if(newExercise.name!==""&&newExercise.duration!==0){
        dispatch(addExercises(newExercise))
        setShowAddExercise(false)
        }
        else
        {
            alert("Please fill the fields")
        }
    }


    return (
        <div>
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70 z-100">
                <div className="bg-[rgba(255,255,255,1)] p-4 rounded-xl w-[35%]">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl self-start px-4 my-4 font-bold font-[manga] text-black">
                            Add Exercise
                        </h1>
                        <button
                             className="m-1 flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-1 px-2 border-2 border-[#00CED1] rounded-sm whitespace-nowrap"
                            onClick={() => setShowAddExercise(false)}
                        >
                            X
                        </button>
                    </div>
                    <div className='flex flex-col items-center'>
                        <label className='flex gap-4 m-2 w-8/12 justify-between'>Name
                            <select onChange={(e)=>setNewExercise({...newExercise,name:e.target.value})} className='border-2 border-black rounded-md px-2 py-1'>
                                <option value={""}>None</option>
                                <option value={"cycling"}>Cycling</option>
                                <option value={"swimming"}>Swimming</option>
                                <option value={"running"}>Running</option>
                                <option value={"pushups"}>Pushups</option>
                                <option value={"pullups"}>Pullups</option>
                            </select>
                        </label>
                        
                        <label className='flex gap-4 m-2 w-8/12 justify-between'>
                            Duration
                            <input className='border-2 border-black rounded-md px-2 py-1' type="number" onChange={(e)=>setNewExercise({...newExercise,duration:e.target.value})}></input>
                        </label>
                        
                        <button
                            className="m-1 w-fit flex items-center bg-[white] hover:bg-[#00CED1] hover:text-[white] text-xl text-[#00CED1] font-bold my-4 py-2 px-4 border-2 border-[#00CED1] rounded whitespace-nowrap"
                            onClick={() => handleAddExercise()}
                        >
                            Add Exercise
                        </button>
                    </div>
                    
                </div>
            </div>


        </div>
    )
}

export default AddExerciseModal