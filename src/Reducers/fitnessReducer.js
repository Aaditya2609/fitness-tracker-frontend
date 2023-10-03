const initialState = {
    exercises: [],
    foods: [],
    goals: [],
    loading:false
  };

  const fitnessReducer=(state=initialState,action)=>{
    switch (action.type)
    {
        case "FETCH_EXERCISE_SUCCESS":
            return {...state,exercises:action.payload,loading:false}
        case "FETCH_FOOD_SUCCESS":
            return {...state,foods:action.payload,loading:false}
        case "FETCH_GOALS_SUCCESS":
            return {...state,goals:action.payload,loading:false}
        case "FETCH_DATA_LOADING":
                return {
                  ...state,
                  loading: true
                };
        case "ADD_EXERCISE":
            return {...state,exercises:[...state.exercises,action.payload],loading:false}
        case "ADD_FOOD":
            return {...state,foods:[...state.foods,action.payload],loading:false}
        case "ADD_GOAL":
            return {...state,goals:[...state.goals,action.payload],loading:false}
        case "DELETE_EXERCISE":
            {
            const temp=state.exercises.filter(item=>item._id!==action.payload._id)
            return {...state,exercises:temp,loading:false}
        }
        case "DELETE_FOOD":
            {
            const temp=state.foods.filter(item=>item._id!==action.payload._id)
            return {...state,foods:temp,loading:false}
        }
        case "DELETE_GOAL":
            {
            const temp=state.goals.filter(item=>item._id!==action.payload._id)
            return {...state,goals:temp,loading:false}
        }
 
        default:
                return state;
    }
  }