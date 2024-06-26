import { WorkoutContext } from "../Context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = ()=>{
    const context = useContext(WorkoutContext)
    if(!context)
    {
        throw Error('useWorkoutContext must be inside an WorkoutContextProvider')
    }
}