import React from 'react'
import './Displaycss.css'
import { useContext } from 'react'
import { DataContext } from '../Context/ContextComp'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Display = () => {
    const {state,dispatch,store}=useContext(DataContext)
    console.log(store)
    const navigate= useNavigate();
  return (
    <div>
        <div className='wrapper'>
        <div className='data' onClick={()=>{navigate('/smartphones')}}>
       <div><h3>Smart phones</h3></div>
        {
            store.filter((ele)=>{
                return ele.category=="smartphones" & ele.price > 300
            }).map((val)=>{
                return (
                    <div className='inner-div'>
                        <img
                        src={val.thumbnail}
                        alt="img"
                        />
                    </div>
                )
            })
        }
     <Link>see more</Link> 
        </div>
        <div className='data' onClick={()=>{navigate('/laptop')}}>
        <div> <h3>Laptops</h3></div>
        {
            store.filter((ele)=>{
                return ele.category=="laptops" & ele.price > 1400
            }).map((val)=>{
                return (
                    <div className='inner-div'> 
                        <img
                        src={val.thumbnail}
                        alt="img"
                        />
                    </div>
                )
            })
        }
        <Link>see more</Link>

        </div>
        <div className='data' onClick={()=>{navigate('/natural')}}>
        <div> <h3>Fragrances</h3></div>
        {
            store.filter((ele)=>{
                return ele.category=="fragrances" & ele.price < 200 & ele.price > 13
            }).map((val)=>{
                return (
                    <div className='inner-div'> 
                        <img
                        src={val.thumbnail}
                        alt="img"
                        />
                    </div>
                )
            })
        }
        <Link>see more</Link>

        </div>
        <div className='data' onClick={()=>{navigate('/grocery')}}>
        <div> <h3>Groceries</h3></div>
        {
            store.filter((ele)=>{
                return ele.category=="groceries" & ele.price > 16
            }).map((val)=>{
                return (
                    <div className='inner-div'> 
                        <img
                        src={val.thumbnail}
                        alt="img"
                        />
                    </div>
                )
            })
        }
        <Link>see more</Link>
        </div>
        </div>

    </div>
  )
}

export default Display