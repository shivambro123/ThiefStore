import Carousel from 'react-bootstrap/Carousel';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import './CarouselCompcss.css'
import { DataContext } from '../Context/ContextComp';


function CarouselComp() {
  const {state,dispatch,store} = useContext(DataContext)
 
    console.log(store)

  return (
    <>
<div className='mt-1'>
    <Carousel variant="dark">
      {
        store.map((ele)=>{
          return  <Carousel.Item>
          <img
            className="d-inlineblock w-80 image"
            src={ele.thumbnail}
            alt="First slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        })
      }
    
    
  </Carousel>
  </div>
  </>
  );
}

export default CarouselComp;