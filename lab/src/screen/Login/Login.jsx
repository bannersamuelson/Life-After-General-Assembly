import React from 'react';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../services/apiconfig";
import show from '../../images/show.png'
// import Layout from "../../components/Layout/Layout"

export default function Login(props) {
  const navigate = useNavigate()
  const [hidePassword, setHidePassword] = useState("password");
  const [oldPassword, setOldPassword] = useState("text");
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
      console.log([login.data.user]);
      props.setLoginUser(login.data.user);
      console.log(props.loginUser);
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
  const Toggle = (e) => {
    e.preventDefault();
    let temp = hidePassword;
    setHidePassword(oldPassword);
    setOldPassword(temp);
  }
  return (
    <div className="grid justify-items-center w-full mt-10">
      <form onSubmit={handleSubmit} className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
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
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input

            type={hidePassword}

            placeholder="********"
            id="password"
            value={user.password}
            onChange={handleInput}
            className="focus:placeholder-transparent shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />

          <div className="text-slate-500 mb-2" onClick={(e) => { Toggle(e) }}><img className="w-8 hover:cursor-pointer" src={show} alt="show password eye" /></div>

          <p className="text-slate-500 text-xs italic">Not a user? <Link className="underline hover:cursor-pointer hover:text-red-100" to='/signup'>Sign up!</Link></p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </div>
      </form>
      <p className="mb-44 text-center text-gray-500 text-xs">
        &copy;2022 LAGA. All rights reserved.
      </p>
    </div>

  );
}