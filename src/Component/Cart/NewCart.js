import React from 'react'
import './NewCartcss.css'

const NewCart = () => {
  return (
    <div>

        <div className='newcart-wrapper'>
            <div className='newcart-img'></div>
            <div>Title</div>
            <div><button>-</button>0<button>+</button></div>
            <div>Price</div>
            <div><button>Delete</button></div>
        </div>
    </div>
  )
}

export default NewCart