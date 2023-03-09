import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'
import './Cartcss.css'

const Cart = ({product}) => {
    const {state,dispatch}=useContext(DataContext)
    console.log(state.count)
    console.log(state.task)
    console.log(state.task)
    console.log(state.total)
  return (
    <div>
       Count:{state.count}
       <div className='cart-wrapper'>
       {state.task.map((val,ind)=>{
        return (
            <div className='item-div'>
            <div className='item'>
                <img
                src={val.thumbnail}
                className="images"
                alt="alt"/> 
            </div>
            <div className='info'>
               <div>Title:{val.title} <br/></div> 
               <div>Price:{val.price} &#8377;</div>
            </div>
            <button className='btn btn-light' onClick={()=>{dispatch({type:'removeTask',payload:product,index:ind,price:val.price})}}>Remove</button>
            </div>
        )
       })}

         </div>
         Total:{state.total}
    </div>
  )
}

export default Cart