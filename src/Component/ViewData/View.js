import React, { useState } from 'react'
import { useContext } from 'react'
import Button from '@mui/material/Button';
import { DataContext } from '../AppBar/Context/ContextComp'
import Carousel from 'react-bootstrap/Carousel';
import './Viewcss.css'

const View = ({product,task}) => {
    const {state,dispatch}=useContext(DataContext)
    console.log(state)


    const [click,setClick]=useState(true)
    return (
    <>
      <div className='view'>
         <div className='view-item'>
     <Carousel variant="dark">
   
      {
        state.view.images.map((val)=>{
            return  (<Carousel.Item>
            <img
              className="d-block w-100 img-div"
              src={val}
              alt="First"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>)

        })
      }
    
  </Carousel>
    </div>
   <h3>{state.view.title}</h3> 
   <h5>{state.view.description}</h5>
   <h2>Price:{state.view.price}&#8377;</h2>
   
   <div className='desc'>
      <h4>Brand : {state.view.brand}</h4>
      <h4>Rating : {state.view.rating}</h4>
    <h4>Title : {state.view.title}</h4> 
    <h4>Available : {state.view.stock}</h4> 

   </div>

   <Button variant="contained" size="small" onClick={()=>{dispatch({type:'addTask',payload:state.view,price:state.view.price});console.log(state.view)}}>{(click)? 'Add To Cart' : 'Addded' }</Button>

    </div>
    </>
  )
}

export default View