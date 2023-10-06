import axios from "axios";
import { toast } from "react-toastify";

export const fetchExercises= () => async (dispatch) => {
    try {
      const response = await axios({method:"get",url:"https://assignmen-17.cyclic.cloud/api/exercises"})
      if(response.status===200)
      {
      dispatch({ type: "FETCH_EXERCISE_SUCCESS", payload: response.data.exercises });
      }
    } catch (error) {
      console.error("Error fetching exercise data:", error);
    }
  };
  export const fetchFoods= () => async (dispatch) => {
    try {
      const response = await axios({method:"get",url:"https://assignmen-17.cyclic.cloud/api/food"})
      if(response.status===200)
      {
      dispatch({ type: "FETCH_FOOD_SUCCESS", payload: response.data.food });
      }
    } catch (error) {
      console.error("Error fetching exercise data:", error);
    }
  };
  export const fetchGoals= () => async (dispatch) => {
    try {
      const response = await axios({method:"get",url:"https://assignmen-17.cyclic.cloud/api/goal"})
      if(response.status===200)
      {
      dispatch({ type: "FETCH_GOALS_SUCCESS", payload: response.data.goals });
      }
    } catch (error) {
      console.error("Error fetching exercise data:", error);
    }
  };
  
  export const deleteExercise= (exerciseId) => async (dispatch) => {
    try {
      const response = await axios({method:"delete",url:`https://assignmen-17.cyclic.cloud/api/exercises/${exerciseId}`})
      if(response.status===204)
      {
        toast.error("Exercise Deleted")
      dispatch({ type: "DELETE_EXERCISE", payload: exerciseId });
      }
    } catch (error) {
      console.error("Error deleting exercise", error);
    }
  };
  export const deleteFood= (foodId) => async (dispatch) => {
    try {
      const response = await axios({method:"delete",url:`https://assignmen-17.cyclic.cloud/api/food/${foodId}`})
      if(response.status===204)
      {
        toast.error("Food Deleted")
      dispatch({ type: "DELETE_FOOD", payload: foodId });
      }
    } catch (error) {
      console.error("Error deleting Food", error);
    }
  };
  export const deleteGoal= (goalId) => async (dispatch) => {
    try {
      const response = await axios({method:"delete",url:`https://assignmen-17.cyclic.cloud/api/goal/${goalId}`})
      if(response.status===204)
      {
        toast.error("Goal Deleted")
      dispatch({ type: "DELETE_GOAL", payload: goalId });
      }
    } catch (error) {
      console.error("Error deleting Goal", error);
    }
  };
  export const addExercises= (data) => async (dispatch) => {
    try {
      const response = await axios({method:"post",url:"https://assignmen-17.cyclic.cloud/api/exercises",data:data})
      if(response.status===201)
      {
        toast.success("Exercise Added")
      dispatch({ type: "ADD_EXERCISE", payload: response.data.createdExercise });
      }
    } catch (error) {
      console.error("Error fetching exercise data:", error);
    }
  };
  export const addFood= (data) => async (dispatch) => {
    try {
      const response = await axios({method:"post",url:"https://assignmen-17.cyclic.cloud/api/food",data:data})
      if(response.status===201)
      {
        toast.success("Food Added")
      dispatch({ type: "ADD_FOOD", payload: response.data.createdFood });
      }
    } catch (error) {
      console.error("Error fetching exercise data:", error);
    }
  };
  export const addGoal= (data) => async (dispatch) => {
    try {
      const response = await axios({method:"post",url:"https://assignmen-17.cyclic.cloud/api/goal",data:data})
      if(response.status===201)
      {
        toast.success("Goal Added")
      dispatch({ type: "ADD_GOAL", payload: response.data });
      }
    } catch (error) {
      console.error("Error fetching exercise data:", error);
    }
  };