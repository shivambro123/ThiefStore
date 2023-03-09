import React, { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'
import Item from './Item'
import './Mencss.css'

const Men = () => {
    const {state,dispatch,store}=useContext(DataContext)
    const [checked,setChecked]=useState('')

    const changeHandler = (e) =>{
        // alert(e.target.value)
        setChecked(e.target.value)
    }   
  return (
    <>
    <div className='wrapper-main'>
        <div className='filter-div'>
        <select onChange={changeHandler}>
            <option value="all">show all</option>
            <option value="low">Low To High</option>
            <option value="high">High To Low</option>
            </select>
        </div>
      <div className='main-wrapper '>
        {
            store.filter((ele)=>{
                return (ele.category=="smartphones")
            }).sort((a,b)=>{
                 if(checked=="low"){
                    return a.price - b.price
                }
                else if(checked=="high"){
                    return b.price - a.price

                }
                else{
                    return 1;
                }
            })
            .map((val)=>{
                return (
                    <Item src={val.thumbnail} title={val.title} price={val.price} product={val}/>
                )
            })
        }

        {/* {
           
            store.filter((ele)=>{
                return (ele.category=="smartphones")
            }).reduce((a,b)=>{
                return a.price-b.price
            }).map((val)=>{
                return (console.log(val))
            })
        } */}
        </div>
    </div>
    </>
  )
}

export default Men