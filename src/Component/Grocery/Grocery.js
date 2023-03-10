import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'
import Item from '../Men/Item'
import './Grocerycss.css'

const Grocery = () => {
    const {state,dispatch,store}=useContext(DataContext)
  return (
    <div>
        <div className='main-wrapper'>
        {
            store.filter((ele)=>{
                return (ele.category=="groceries")
            })
            .map((val)=>{
                return (
                    <Item src={val.thumbnail} title={val.title} price={val.price} product={val}/>
                )
            })
        }
        </div>
    </div>
  )
}

export default Grocery