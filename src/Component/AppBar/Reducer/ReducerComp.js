import { act } from "react-dom/test-utils"

export const reducer = (state,action)=>{
    switch(action.type){
        case 'addTask':
            return {
                task:[...state.task,action.payload],
                count:state.count+1,
                total:state.total+(+action.price)
            }
            case 'removeTask':
                return {
                    task:state.task.filter((ele,i)=>{
                        return (i != action.index)
                    }),
                    count:state.count-1,
                    total:state.total-(+(action.price))
                }
               

        default:
            return state
    }
    console.log(state.count)

}