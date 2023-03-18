import React, { createContext, useEffect, useReducer, useState } from 'react'
import { reducer } from '../Reducer/ReducerComp';

export const DataContext = createContext(null);

const ContextComp = ({children}) => {
    // const [store,stStore]=useState([])
    const initialState = {
        count:0,
        task:[],
        total:0,
        view:{}
    }
    
    const [store,setStore]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>setStore(data.products))
    },[])

    function getSingleproduct (id){
        fetch('https://dummyjson.com/products/'+id)
        .then(res=>res.json())
        .then(data=>dispatch({type:'addProduct',payload:data.products}))
    }
    const [state,dispatch]=useReducer(reducer,initialState)

  return (
    <div>
        <DataContext.Provider value={{state,dispatch,store,getSingleproduct}}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default ContextComp