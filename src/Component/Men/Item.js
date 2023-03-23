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
  return (  
    <>
        <div className='item-div'>
         <Link to={`/products/${product.id}`} className="linkdiv">
        <div className='item'>
            <img
            src={src}
            className="images"
            alt="alt"/> 
        </div></Link>
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