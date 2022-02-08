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
              type="password"
              name="floating_password"
              id="password"
              className="focus:placeholder-transparent appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-200" placeholder="********" />
          </div>
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
            <label className="focus:placeholder-transparent block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
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

//     {/* <div className="bg-slate-100 text-slate-600 py-20 h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="px-10 py-12 mx-5 sm:px-10 sm:py-10 sm:mx-5 bg-slate-200 border-slate300 border rounded-xl md:px-10 md:py-5 md:mx-44 lg:px-20 lg:py-10 lg:mx-66 xl:px-20 xl:py-10 xl:mx-96 ">
//         <h2 className="text-center font-bold pb-2">Sign up</h2>
//         <div class="relative z-0 mb-6 w-full group">
//           <input
//             value={newUser.userName}
//             onChange={handleInput}
//             type="text"
//             name="username"
//             id="userName"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-800  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer" placeholder=" " required />
//           <label
//             for="username"
//             className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
//         </div>
//         <div className="grid xl:grid-cols-2 xl:gap-6">
//           <div className="relative z-0 mb-6 w-full group">
//             <input value={newUser.firstName}
//               onChange={handleInput}
//               type="text"
//               name="floating_first_name"
//               id="firstName"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-800  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer" placeholder=" " required />
//             <label
//               for="floating_first_name"
//               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
//           </div>
//           <div className="relative z-0 mb-6 w-full group">
//             <input value={newUser.lastName}
//               onChange={handleInput}
//               type="text"
//               name="floating_last_name"
//               id="lastName"
//               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-800  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer" placeholder=" " required />
//             <label
//               for="floating_last_name"
//               className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
//           </div>
//         </div>
//         <div className="relative z-0 mb-6 w-full group">
//           <input
//             value={newUser.email}
//             onChange={handleInput}
//             type="text"
//             id="email"
//             name="floating_email"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-800  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer" placeholder=" " required />
//           <label
//             for="floating_email"
//             className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//         </div>
//         <div className="relative z-0 mb-6 w-full group">
//           <input
//             value={newUser.password}
//             onChange={handleInput}
//             type="text"
//             name="floating_password"
//             id="password"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-800  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer" placeholder=" " required />
//           <label
//             for="floating_password"
//             className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//         </div>
//         <div className="relative z-0 mb-6 w-full group">
//           <input
//             value={newUser.confirmPassword}
//             onChange={handleInput}
//             type="text"
//             name="repeat_password"
//             id="confirmPassword"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-slate-800  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
//             placeholder=" " required />
//           <label
//             for="floating_repeat_password"
//             className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
//         </div>
//         <h3>{validationMessage}</h3>

//         <button
//           disabled={!valid}
//           className="text-white bg-blue-800 hover:bg-blue-600 mt-4 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-700 dark:hover:bg-blue-900 dark:hover:cursor-pointer dark:focus:ring-blue-800">
//           Sign Up</button>
//       </form>
//     </div>

//   );
// } */}
//   {/* <form className="" onSubmit={handleSubmit}>
//         <h2 className="text-center font-bold ">Sign up</h2>
//         <br />
//         <label >User name</label>
//         <br />
//         <input
//           type="text"
//           placeholder="create user name"
//           id="userName"
//           value={newUser.userName}
//           onChange={handleInput}
//           className="flex items-center border-b border-blue-900 py-2 text-blue-900"
//         />
//         <br />
//         <label>Upload avatar</label>
//         <br />
//         <input
//           type="text"
//           placeholder="avatar link"
//           id="avatar"
//           value={newUser.avatar}
//           onChange={handleInput}
//           className="flex items-center border-b border-blue-900 py-2 text-blue-900"
//         />
//         <br />
//         <label>First Name</label>
//         <br />
//         <input
//           type="text"
//           placeholder="first name"
//           id="firstName"
//           value={newUser.firstName}
//           onChange={handleInput}
//           className="flex items-center border-b border-blue-900 py-2 text-blue-900"
//         />
//         <br />
//         <label>Last Name</label>
//         <br />
//         <input
//           type="text"
//           placeholder="last name"
//           id="lastName"
//           value={newUser.lastName}
//           onChange={handleInput}
//           className="flex items-center border-b border-blue-900 py-2 text-blue-900"
//         />
//         <br />
//         <label>Email</label>
//         <br />
//         <input
//           type="text"
//           placeholder="email"
//           id="email"
//           value={newUser.email}
//           onChange={handleInput}
//           className="flex items-center border-b border-blue-900 py-2 text-blue-900"
//         />
//         <br />
//         <label>Password</label>
//         <br />
//         <input
//           type="text"
//           placeholder="create password"
//           id="password"
//           value={newUser.password}
//           onChange={handleInput}
//           className="flex items-center border-b border-blue-900 py-2 text-blue-900"
//         />
//         <br />
//         <label>Confirm password</label>
//         <br />
//         <input
//           type="text"
//           placeholder="confirm password"
//           id="confirmPassword"
//           value={newUser.confirmPassword}
//           onChange={handleInput}
//           className="flex items-center border-b border-blue-900 py-2 text-blue-900"
//         />
//         <br />
//         <h3>{validationMessage}</h3>
//         <br />
//         <button className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-700 hover:border-blue-900 border-4 text-white py-1 px-2 rounded text-xl" disabled={!valid}>
//           SIGN UP
//         </button>
//       </form> */}
