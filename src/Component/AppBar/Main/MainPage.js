import React from 'react'
import Footer from '../../Footer/Footer'
import Display from '../Display/Display'
import CarouselComp from '../Hero/CarouselComp'
import SmartDeal from '../Smart/SmartDeal'
import TodayDeal from '../Todays/TodayDeal'

const MainPage = () => {
  return (
    <div>
        <CarouselComp/>
        <SmartDeal/>
        <TodayDeal/>
       <Display/>
       <Footer/>

    </div>
  )
}

export default MainPage