import React from 'react';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../services/apiconfig";
// import Layout from "../../components/Layout/Layout"

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
    console.log(login);
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
//     <form className="w-full max-w-sm"  onSubmit={handleSubmit}>
//       <h2 className="cd r">Login to your account</h2>
//       <div className="flex items-center border-b border-teal-500 py-2">
//          <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//             type="text"
//             placeholder="type your email"
//             id="email" 
//             value={user.email}
//             onChange={handleInput}
//             />
//             <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"     type="text"
//             placeholder="password"
//             id="password" 
//             value={user.password}
//             onChange={handleInput}
//             />
//              <br />
//              {handleError}
//              <br/>

//       <button  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" 
//       disabled={() =>  user.isError ? true : false  }>Submit</button>
   
//   </div>
// </form>
    <div className="w-full mr-auto ml-auto mt-auto mb-auto w-full max-w-lg bg-white shadow-md rounded pt-6 pb-8 mb-4">
        <form className="w-full max-w-lg"
        onSubmit={handleSubmit}>
          <h2 className="flex items-center">Login to your account</h2>
      <div className="flex items-center border-b border-teal-500 py-2">
          <br/>
          <input
          className=".placeholder-black"
            type="text"
            placeholder="Email"
            id="email" 
            value={user.email}
            onChange={handleInput}
            />
          <br />
          <br/>
          <input
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
          <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">Submit</button>
        
        </form>
        </div>
      

  );
}