import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import Button from '@mui/material/Button';
import { DataContext } from '../AppBar/Context/ContextComp'
import Carousel from 'react-bootstrap/Carousel';
import './Viewcss.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const View = () => {
  const {state,dispatch}=useContext(DataContext)
    const [proview,setProductview]=useState({
    })
    const {id}=useParams();
    console.log(id)
  console.log(proview.images)
    useEffect(()=>{
      axios.get(`https://dummyjson.com/products/${id}`)
      .then(res=>setProductview(res.data))
      .catch(err=>console.log(err))
    },[])
    return (  
    <>
      <div className='view'>
         <div className='view-item'>
     <Carousel variant="dark">
   
      {/* {
        proview.images.map((val)=>{
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
      } */}
    
  </Carousel>
    </div>
   <h3>{proview.title}</h3> 
   <h5>{proview.description}</h5>
   <h2>Price:{proview.price}&#8377;</h2>
   
   <div className='desc'>
      <h4>Brand : {proview.brand}</h4>
      <h4>Rating : {proview.rating}</h4>
    <h4>Title : {proview.title}</h4> 
    <h4>Available : {proview.stock}</h4> 

   </div>

   <Button variant="contained" size="small" onClick={()=>{dispatch({type:'addTask',payload:proview,price:proview.price})}}>click</Button>

    </div>
    </>
  )
}

export default View