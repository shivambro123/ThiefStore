import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'
const PublicRoute = ({children}) => {
    const [auth,setAuth]=useState(localStorage.getItem('token'))

  return (
    <div>
        {
            auth ?  <Navigate to="/mainpage"/> : children 
        }
    </div>
  )
}

export default PublicRoute