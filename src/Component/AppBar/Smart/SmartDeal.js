import React from 'react'
import './SmartDealcss.css'
import { useContext } from 'react'
import { DataContext } from '../Context/ContextComp'
import Carousel from 'react-bootstrap/Carousel';

const SmartDeal = () => {
    const {state,dispatch,store}=useContext(DataContext)
  return (
    <>
    <div className='hot'>
    <h1>Thief's Hot New Releases</h1>

    </div>
    <div className='all-items'>
    <div className='smart-items'>
     <Carousel variant="dark">
   
      {
        store.filter((ele)=>{
            return ele.category=="laptops"
        }).map((val)=>{
            return  <Carousel.Item>
            <img
              className="d-inlineblock w-100 "
              src={val.thumbnail}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

        })
      }
    
  </Carousel>
    </div>
    <div className='smart-items'>
     <Carousel variant="dark">
   
      {
        store.filter((ele)=>{
            return ele.category=="skincare"
        }).map((val)=>{
            return  (<Carousel.Item>
            <img
              className="d-inlineblock w-100 "
              src={val.thumbnail}
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>)

        })
      }
    
  </Carousel>
    </div>
    </div>
    </>

  )
}

export default SmartDeal