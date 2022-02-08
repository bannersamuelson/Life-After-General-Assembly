import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/apiconfig";
import show from '../../images/show.png'

// import Layout from "../../components/Layout/Layout"; 


export default function SignUp(props) {
  const [hidePassword, setHidePassword] = useState("password");
  const [oldPassword, setOldPassword] = useState("text");
  const [newUser, setNewUser] = useState({
    userName: "",
    avatar: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [validationMessage, setValidationMessage] = useState("");
  const [valid, setValid] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(newUser);
    console.log(newUser);
    navigation("/login");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const Toggle = (e) => {
    e.preventDefault();
    let temp = hidePassword;
    setHidePassword(oldPassword);
    setOldPassword(temp);
  }
  useEffect(() => {
    // console.log("validator");
    // const res = signUp(newUser);
    // console.log(res);
    checkIfValid();
  }, [newUser.password, newUser.confirmPassword]);

  const checkIfValid = () => {
    if (newUser.password === "" || newUser.confirmPassword === "") {
      setValidationMessage("");
      setValid(false);
    } else if (newUser.password.length < 8) {
      setValidationMessage("Short password! Must be at least 8 characters");
    } else if (newUser.password !== newUser.confirmPassword) {
      setValidationMessage("Passwords must much!");
      setValid(false);
    } else {
      setValidationMessage("Password match!");
      setValid(true);
    }
  };
  // console.log(props);
  return (
    <div className="bg-slate-100 grid justify-items-center py-24">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Username
            </label>
            <input
              value={newUser.userName}
              onChange={handleInput}
              type="text"
              name="username"
              id="userName"
              placeholder="coreygibson"
              className="focus:placeholder-transparent appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" />
          </div>
          <div className="w-full mb-6 md:w-1/2 md:mb-0 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              value={newUser.firstName}
              onChange={handleInput}
              type="text"
              name="floating_first_name"
              id="firstName"
              placeholder="john"
              className="focus:placeholder-transparent appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200" />
          </div>
          <div className="w-full md:w-1/2 md:mb-0 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input value={newUser.lastName}
              onChange={handleInput}
              type="text"
              name="floating_last_name"
              id="lastName"
              placeholder="smith"
              className="focus:placeholder-transparent appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-200" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="focus:placeholder-transparent block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input
              value={newUser.password}
              onChange={handleInput}
              type={hidePassword}
              name="floating_password"
              id="password"
              className="focus:placeholder-transparent appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
              placeholder="********" />
          </div>
          <div className="text-slate-500 mb-2 ml-4" onClick={(e) => { Toggle(e) }}><img className="w-8 hover:cursor-pointer" src={show} alt="show password eye" /></div>

          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Confirm Password
            </label>
            <input
              value={newUser.confirmPassword}
              onChange={handleInput}
              type="password"
              name="floating_password"
              id="confirmPassword"
              className="focus:placeholder-transparent appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200" placeholder="********" />
            <p className="text-red-500 text-xs italic">{validationMessage}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full 3 px-3 mb-6">
            <label className="focus:placeholder-transparent block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email Address
            </label>
            <input
              value={newUser.email}
              onChange={handleInput}
              type="text"
              id="email"
              name="floating_email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:placeholder-transparent focus:outline-none focus:bg-white focus:border-gray-500" placeholder="erickinder@gmail.com" />
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </button>
      </form>
    </div>
  )

}