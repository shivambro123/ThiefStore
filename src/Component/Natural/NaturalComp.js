import React from 'react'
import './NaturalCompcss.css'
import Item from '../Men/Item'
import { useContext } from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'
const NaturalComp = () => {
    const {state,dispatch,store}=useContext(DataContext)
  return (
    <div>
        <div className='main-wrapper px-5'>
        {
            store.filter((ele)=>{
                return (ele.category==="fragrances" || ele.category==="skincare" || ele.category ===  "home-decoration"
                )
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

export default NaturalComp