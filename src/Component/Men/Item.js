import { Button } from 'bootstrap'
import React from 'react'
import './Itemcss.css'
import { useContext } from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'

const Item = ({src,title,price,product}) => {
    const {state,dispatch}=useContext(DataContext)
    console.log(product)
  return (
    <>
        <div className='item-div'>
        <div className='item'>
            <img
            src={src}
            className="images"
            alt="alt"/> 
        </div>
        <div className='info'>
           <div>Title:{title} <br/></div> 
           <div>Price:{price}&#8377;</div>
        </div>
        <button className='btn btn-light' onClick={()=>{dispatch({type:'addTask',payload:product,price:price})}}>Add To Cart</button>
        </div>
    </>
  )
}

export default Item