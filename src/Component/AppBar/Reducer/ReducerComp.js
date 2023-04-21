
export const reducer = (state,action)=>{
    console.log(state.task)
    switch(action.type){
        case 'addTask':
            return {    
                ...state,
                task:[...state.task,action.payload],
                count:state.count+1,
                total:state.total+(+action.price)
            }

        case 'addCart':{
            return{
                
            }
        }
        case 'addProduct':
            return {
                ...state,
                view:action.payload
            }
            case 'removeTask':
                return {
                    task:state.task.filter((ele,i)=>{
                        return (i != action.index)
                    }),
                    count:state.count-1,
                    total:state.total-(+(action.price))
                }

            case 'viewData':
                return{
                    view:action.data,
                }
               
        default:
            return state
    }
  

}