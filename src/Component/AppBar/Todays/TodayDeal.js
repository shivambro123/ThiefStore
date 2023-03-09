import React from 'react'
import './TodayDealcss.css'
import { useContext } from 'react'
import { DataContext } from '../Context/ContextComp'
const TodayDeal = () => {
    const {state,dispatch,store}=useContext(DataContext)
  return (
    <div>
         <div className='hot'>
    <h1 >Top Todays Deal</h1>
   
    </div>
    <div>
    <div className='main-div'>
        {
            store.filter((ele)=>{
                return ele.price > 50 & ele.price < 80
            })
            .map((val)=>{
                return (
                    <div className='main'>
                        <div className='item'>
                        <img
                        src={val.thumbnail}
                        alt="deal"/>
                        </div>
                        <div>
                            <h5>Title:{val.title}</h5>
                        </div>
                        </div>

                )
            })
        }
                    </div>

    </div>

    </div>

  )
}

export default TodayDeal