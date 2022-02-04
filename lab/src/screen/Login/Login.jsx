import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../services/apiconfig";
// import Layout from "../../components/Layout/Layout"

export default function Login(props) {
  console.log(props);
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
    console.log(login);
    props.setLoginUser(login.data.user.firstName);
    console.log(props.loginUser);
    localStorage.setItem("token", login.data.token);
    console.log(localStorage.getItem("token")); 
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

// const handleError = (e)=>{
//     if (user.isError) {
//       return (
//         <h3>{user.errorMsg}</h3>
//       );
//     }
// }

  return (
    <div className="w-full mr-auto ml-auto mt-auto mb-auto max-w-xl text-xl" style={{fontFamily:"Nunito"}}>
      <h2 className="text-center font-bold">Login to your account</h2>
      <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-teal-500 py-2">
            <br/>
            <input
              className="placeholder-black text-teal-700"
              type="text"
              placeholder="Email"
              id="email" 
              value={user.email}
              onChange={handleInput}
              />
            <br />
            <br/>
            <input
              className="placeholder-black text-teal-700"
              type="text"
              placeholder="Password"
              id="password" 
              value={user.password}
              onChange={handleInput}/>
          </div>
          {/* <br />
          {handleError}
          <br/> */}
          <br/>
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 border-4 text-white py-1 px-2 rounded text-xl">Submit</button>
      </form>
    </div>
  );
}