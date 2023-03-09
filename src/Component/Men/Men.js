import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'
import Item from './Item'
import './Mencss.css'

const Men = () => {
    const {state,dispatch,store}=useContext(DataContext)
  return (
    <div>
        <div className='main-wrapper px-5'>
        {
            store.filter((ele)=>{
                return (ele.category=="smartphones")
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

export default Men