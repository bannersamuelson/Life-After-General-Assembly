import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apiconfig";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const login = await loginUser(user)
      console.log(login);
      props.setLoginUser([login.data.user.userName]);
      console.log(props);
      localStorage.setItem("token", login.data.token);
      console.log(localStorage.getItem("token"));
      navigate("/")
    } catch (error) {
      setUser({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: ""
      })
    }
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
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
    <div class="grid justify-items-center w-full mt-10">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input
            type="text"
            placeholder="erickinder@gmail.com"
            id="email"
            value={user.email}
            onChange={handleInput}
            className="focus:placeholder-transparent shadow appearance-none border rounded w-full py-2 pl-3 pr-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="focus:placeholder-transparent shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********" />
          <p class="text-red-500 text-xs italic">Please enter your password.</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>

        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2022 LAGA. All rights reserved.
      </p>
    </div>
    // {/* <div className="w-full flex items-center text-xl bg-gradient-to-r from-blue-800 to-blue-900 h-screen w-full" style={{ fontFamily: "Nunito" }}>
    // <form className="mr-auto ml-auto w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //   onSubmit={handleSubmit}>
    //   <h2 className="text-center font-bold">Login to your account</h2>
    //   <div className="flex items-center border-b border-blue-900 py-2">
    //     <br />
    //     <input
    //       className="placeholder-black text-blue-900"
    //       type="text"
    //       placeholder="Email"
    //       id="email"
    //       value={user.email}
    //       onChange={handleInput}
    //     />
    //     <br />
    //     <br />
    //     <input
    //       className="placeholder-black text-blue-900"
    //       type="text"
    //       placeholder="Password"
    //       id="password"
    //       value={user.password}
    //       onChange={handleInput} />
    //   </div>
    //   {/* <br />
    //   {handleError}
    //   <br/> */}
    //     <br />
    //     <button className="flex-shrink-0 bg-blue-800 hover:bg-blue-800 border-blue-700 hover:border-blue-800 border-4 text-white py-1 px-2 rounded text-xl">Submit</button>
    //   </form >
    // </div > * /}

  );
}