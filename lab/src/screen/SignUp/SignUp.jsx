import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/apiconfig";
// import Layout from "../../components/Layout/Layout"; 


export default function SignUp(props) {
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

  useEffect(() => {
    console.log("validator");
    // const res = signUp(newUser);
    // console.log(res);
    checkIfValid();
  }, [newUser.password, newUser.confirmPassword]);

  const checkIfValid = () => {
    if (newUser.password === "" || newUser.confirmPassword === "") {
      setValidationMessage("");
      setValid(false);
    } else if (newUser.password.length < 9) {
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
    // <div className="w-full flex items-center text-xl bg-gradient-to-r from-blue-800 to-blue-900 h-screen" style={{ fontFamily: "Nunito" }}>
    <div clasName="border-blue-700">
      <h2 className="text-center font-bold ">Sign up</h2>
      <form
        onSubmit={handleSubmit}
        className="p-40 m-72 bg-gray-100 border-blue-700 border rounded-xl">
        <div class="relative z-0 mb-6 w-full group">
          <input
            value={newUser.userName}
            onChange={handleInput}
            type="username"
            name="uusername"
            id="username"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label
            for="username"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input value={newUser.firstName}
              onChange={handleInput}
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label
              for="floating_first_name"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input value={newUser.lastName}
              onChange={handleInput} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_last_name" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
          </div>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input value={newUser.email}
            onChange={handleInput}
            type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_email" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input value={newUser.password}
            onChange={handleInput}
            type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div class="relative z-0 mb-6 w-full group">
          <input value={newUser.confirmPassword}
            onChange={handleInput}
            type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label for="floating_repeat_password" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>
        <h3>{validationMessage}</h3>

        <button
          disabled={!valid}
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Sign Up</button>
      </form>
    </div >
  );
}
{/* <form className="" onSubmit={handleSubmit}>
        <h2 className="text-center font-bold ">Sign up</h2>
        <br />
        <label >User name</label>
        <br />
        <input
          type="text"
          placeholder="create user name"
          id="userName"
          value={newUser.userName}
          onChange={handleInput}
          className="flex items-center border-b border-blue-900 py-2 text-blue-900"
        />
        <br />
        <label>Upload avatar</label>
        <br />
        <input
          type="text"
          placeholder="avatar link"
          id="avatar"
          value={newUser.avatar}
          onChange={handleInput}
          className="flex items-center border-b border-blue-900 py-2 text-blue-900"
        />
        <br />
        <label>First Name</label>
        <br />
        <input
          type="text"
          placeholder="first name"
          id="firstName"
          value={newUser.firstName}
          onChange={handleInput}
          className="flex items-center border-b border-blue-900 py-2 text-blue-900"
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          placeholder="last name"
          id="lastName"
          value={newUser.lastName}
          onChange={handleInput}
          className="flex items-center border-b border-blue-900 py-2 text-blue-900"
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          placeholder="email"
          id="email"
          value={newUser.email}
          onChange={handleInput}
          className="flex items-center border-b border-blue-900 py-2 text-blue-900"
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="text"
          placeholder="create password"
          id="password"
          value={newUser.password}
          onChange={handleInput}
          className="flex items-center border-b border-blue-900 py-2 text-blue-900"
        />
        <br />
        <label>Confirm password</label>
        <br />
        <input
          type="text"
          placeholder="confirm password"
          id="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleInput}
          className="flex items-center border-b border-blue-900 py-2 text-blue-900"
        />
        <br />
        <h3>{validationMessage}</h3>
        <br />
        <button className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-700 hover:border-blue-900 border-4 text-white py-1 px-2 rounded text-xl" disabled={!valid}>
          SIGN UP
        </button>
      </form> */}