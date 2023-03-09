import Button from '@mui/material/Button';
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
        <Button variant="contained" size="small" onClick={()=>{dispatch({type:'addTask',payload:product,price:price})}}>Add To Cart</Button>
        </div>
    </>
  )
}

export default Item