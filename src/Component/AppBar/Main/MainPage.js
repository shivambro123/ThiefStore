import React from 'react'
import Footer from '../../Footer/Footer'
import Display from '../Display/Display'
import CarouselComp from '../Hero/CarouselComp'
import SmartDeal from '../Smart/SmartDeal'
import TodayDeal from '../Todays/TodayDeal'

const MainPage = () => {
  return (
    <>
        <CarouselComp/>
        <SmartDeal/>
        <TodayDeal/>
       <Display/>
       <Footer/>

    </>
  )
}

export default MainPage