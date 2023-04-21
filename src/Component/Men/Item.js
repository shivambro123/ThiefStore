import Button from '@mui/material/Button';
import React from 'react'
import './Itemcss.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'
import { useNavigate } from 'react-router-dom';

const Item = ({src,title,price,product,quantity}) => {
  console.log(quantity)
  const navigate = useNavigate()
    const {state,dispatch}=useContext(DataContext)
   
    //  const viewHandler = () =>{
    //   dispatch({type:'viewData',data:product})
    //   navigate('/view')
    // }
    const addcart = (e,product) =>{
      e.preventDefault();
      dispatch({type:'addTask',payload:product})
    
    }
  return (  
    <>
       
         <Link to={`/products/${product.id}`} className="linkdiv">
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
        <Button variant="contained" size="small" onClick={(e)=>{addcart(e,product)}}>Add To Cart</Button>
        </div>
        </Link>
        
    </>
  )
}

export default Item