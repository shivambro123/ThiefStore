import React, { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'
import Item from '../Men/Item'
import './Womencss.css'

const Women = () => {
    const [checked,setChecked]=useState('')
    const {state,dispatch,store}=useContext(DataContext)
    const changeHandler = (e) =>{
        setChecked(e.target.value)
    }
  return (
    <div>
        <div className='main-wrapper'>
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
            <option value="microsoft">Microsoft</option>
            <option value="samsung">Samsung</option>
            <option value="infinix">Infinix</option>
            <option value="hp">HP Pavilion</option>
            </select>
        </div>
        {
            store.filter((ele)=>{
                if(checked=="apple"){
                    return (ele.category=="laptops" && ele.brand=="Apple")
                    }
                    else if(checked=="microsoft"){
                        return (ele.category=="laptops" && ele.brand=="Microsoft Surface"
                        )
                        }
                        else if(checked=="samsung"){
                            return (ele.category=="laptops" && ele.brand=="Samsung")
                            }
                            else if(checked=="infinix"){
                                return (ele.category=="laptops" && ele.brand=="Infinix")
                                }
                                else if(checked=="hp"){
                                    return (ele.category=="laptops" && ele.brand=="HP Pavilion")
                                    }
                            else{
                                return (ele.category=="laptops")
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

export default Women