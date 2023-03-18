import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'
const ProtectedRoute = ({children}) => {
    const [auth,setAuth]=useState(localStorage.getItem('token'))

  return (
    <div>
        {
            auth ? children : <Navigate to="/login"/>
        }
    </div>
  )
}

export default ProtectedRoute