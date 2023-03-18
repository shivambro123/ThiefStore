import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const LoginComp = () => {

    const navigate = useNavigate()
    const [data,setData]=useState({
        username:"kminchelle",
        password:"0lelplR"

    })
    const changeHandlerData = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const clickHandler = () =>{
        console.log(data)
        fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      navigate("/mainpage");
    });
    }
  return (
    <div>
        <h1>Login Here</h1>
        <input type="text" name="username" placeholder="Username" onChange={changeHandlerData} value={data.username}/><br/>
        <input type="password" name="password" placeholder='Password' onChange={changeHandlerData} value={data.password}/><br/>
        <button onClick={clickHandler}>Login</button>
    </div>
  )
}

export default LoginComp