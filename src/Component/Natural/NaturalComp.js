import React from 'react'
import './NaturalCompcss.css'
import Item from '../Men/Item'
import { useContext ,useState} from 'react'
import { DataContext } from '../AppBar/Context/ContextComp'
const NaturalComp = () => {
    const [checked,setChecked]=useState('')
    const {state,dispatch,store}=useContext(DataContext)
    const changeHandler = (e) =>{
        setChecked(e.target.value)
    }
  return (
    <div>
        <div className='main-wrapper '>
        <div className='filter-div'>
        <select onChange={changeHandler} style={{width:'10%'}}>
            <option value="all">show all</option>
            <option value="low">Low To High</option>
            <option value="high">High To Low</option>
            </select>
        </div>
        {
            store.filter((ele)=>{
                return (ele.category==="fragrances" || ele.category==="skincare" || ele.category ===  "home-decoration"
                )
            })
            .sort((a,b)=>{
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

export default NaturalComp