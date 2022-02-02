import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../services/apiconfig";
import classes from "./Login.module.css"

export default function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  })

const handleSubmit = async (e)=>{
  e.preventDefault();
  try{
    const login = await loginUser(user)
    //** ??????????????????????? */
    navigate("/")
  }catch(error){
    setUser({
      isError: true,
      errorMsg: "Invalid Credentials",
      email: "",
      password: ""
    })
  }
};

const handleInput = (e)=>{
  const {id, value} = e.target;
  setUser((prevState)=>({
    ...prevState,
    [id]: value,
  }))
};

const handleError = ()=>{
    if (user.isError) {
      return (
        <h3>{user.errorMsg}</h3>
      );
    }
}

  return (
    // <Layout>
      <div className={classes.container}>
        <form className={classes.loginForm} 
        onSubmit={handleSubmit}>
          <h2 className={classes.title}>Login to your account</h2>
          <label className={classes.label}>E-mail</label>
          <br/>
          <input className={classes.loginInput}
            type="text"
            placeholder="type your email"
            id="email" 
            value={user.email}
            onChange={handleInput}/>
          <br />
          <label className={classes.label}>Password</label>
          <br/>
          <input className={classes.loginInput}
            type="text"
            placeholder="type your password"
            id="password" 
            value={user.password}
            onChange={handleInput}/>
          <br />
          {handleError}
          <br/>
          <button className={classes.submit} disabled={handleError}>Submit</button>
        </form>
      </div>
    // </Layout>
  );
}
