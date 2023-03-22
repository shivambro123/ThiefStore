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
            <label className="mx-4" >Prices:</label>
        <select onChange={changeHandler} style={{width:'10%'}}>
            <option value="all">show all</option>
            <option value="low">Low To High</option>
            <option value="high">High To Low</option>
    </select>

            <label className="mx-4" >Brand:</label>
            <select onChange={changeHandler} style={{width:'10%'}}>
            <option value="all">show all</option>
            <option value="apple">Apple</option>
            <option value="oppo">OPPO</option>
            <option value="samsung">Samsung</option>
            </select>
        </div>
      <div className='main-wrapper '>
        {
            store.filter((ele)=>{
                if(checked=="apple"){
                return (ele.category=="smartphones" && ele.brand=="Apple")
                }
                else if(checked=="oppo"){
                    return (ele.category=="smartphones" && ele.brand=="OPPO")
                    }
                    else if(checked=="samsung"){
                        return (ele.category=="smartphones" && ele.brand=="Samsung")
                        }
                        else{
                            return (ele.category=="smartphones")
                        }
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
            .map((val,id)=>{
                return (
                    <Item src={val.thumbnail} title={val.title} price={val.price}  quantity={id}product={val}/>
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