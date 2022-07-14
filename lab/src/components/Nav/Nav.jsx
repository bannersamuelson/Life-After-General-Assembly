import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import img from '../../images/database.jpg'
import './Nav.css'

const Nav = (props) => {

  const [inputStyle, setInputStyle] = useState("");

  console.log(inputStyle)


  const navigate = useNavigate();
  const handleLogout = (e) => {

    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
    console.log("removed");
    navigate('/')

  }


  const authenticatedOptions = (
    <>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/addcourse" >Add Courses</NavLink>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/" onClick={(e) => { handleLogout(e); }}>Logout</NavLink>
    </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/signup" >Sign Up</NavLink>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/Login" >Log In</NavLink>
    </>
  )
  const alwaysOptions = (
    <>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/courses" >Courses</NavLink>
    </>
  )

  const changeStyle = (e) => {
    e.preventDefault();
    console.log("first");
    setInputStyle("false");
  }


  return (
    <div>
      <nav role="navigation" className="bg-gray-800 md:block sm:hidden text-gray-50 border-gray-800 px-2 sm:px-4  py-2.5
    h-16 border-b  xs: 640px  hidden">

        <div className="flex justify-between">
          <NavLink to="/" className="flex active">
            <img className="mr-3 h-10" viewBox="0 0 52 72" alt="logo" src={img} />
            <span className="self-center text-lg font-bold whitespace-nowrap dark:text-white">Life After General Assembly</span>
          </NavLink>
          <div className="hidden w-full md:flex md:justify-between items-center md:content-end md:w-auto md:order-1">
            <ul className="text-2xl flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
              {props.user && props.loginUser && <div className="link welcome">Welcome, {props.loginUser}</div>}
              {alwaysOptions}
              {props.user && props.loginUser ? authenticatedOptions : unauthenticatedOptions}
            </ul>
          </div>
        </div>
      </nav >



      {/* MOBILE NAV */}
      <nav role="navigation" className="overflow-hiden md:hidden bg-gray-800  text-gray-50 border-gray-800 px-2 sm:px-4 py-2.5
    h-16 border-b flex" onLoad={(e) => { changeStyle(e) }}>
        <NavLink to="/" className="flex active">
          <img className="mr-3 h-10" viewBox="0 0 52 72" alt="logo" src={img} />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">L.A.G.A</span>
        </NavLink>
        <div id="menuToggle" className="navBar mx-5 container flex items-center">

          <input type="checkbox" defaultChecked="false" className='container flex justify-end' />
          <div className='flex justify-end '>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <ul id="menu" className="flex align-c-end flex-wrap text-2xl flex-col mt-4" >
            {props.user && props.loginUser && <div className="flex pl-7 pb-5 border-b border-slate-700 text-sm link welcome">Welcome, {props.loginUser}</div>}
            {alwaysOptions}
            {props.user && props.loginUser ? authenticatedOptions : unauthenticatedOptions}
          </ul>
        </div>
      </nav >
    </div >
  )

}
export default Nav