import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import img from '../../images/database.jpg'
import './Nav.css'

const Nav = (props) => {

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prevToggle => !prevToggle)
    setActive(!isActive);
  }
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
        to="/addcourse">Add Courses</NavLink>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/" onClick={(e) => { handleLogout(e) }}>Logout</NavLink>
    </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/signup">Sign Up</NavLink>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/Login">Log In</NavLink>
    </>
  )
  const alwaysOptions = (
    <>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        to="/courses">Courses</NavLink>
    </>
  )



  return (
    <div>
      <nav role="navigation" className="bg-gray-800  text-gray-50 border-gray-800 px-2 sm:px-4 py-2.5
    h-16 border-b">

        <div className="flex justify-between">
          <NavLink to="/" className="flex active">
            <img className="mr-3 h-10" viewBox="0 0 52 72" alt="logo" src={img} />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">L.A.G.A</span>
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
      <nav role="navigation" className="md:hidden bg-gray-800  text-gray-50 border-gray-800 px-2 sm:px-4 py-2.5
    h-16 border-b flex">
        <div id="menuToggle" className="navBar mx-5 container flex flex-wrap justify-between items-center">
          {/* <NavLink to="/" className="flex active">
            <img className="mr-3 h-10" viewBox="0 0 52 72" alt="logo" src={img} />
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">L.A.G.A</span>
          </NavLink> */}




          <input type="checkbox" />


          <span></span>
          <span></span>
          <span></span>


          <ul id="menu" className="flex-wrap text-2xl flex flex-col mt-4">
            {props.user && props.loginUser && <div className="link welcome">Welcome, {props.loginUser}</div>}
            {alwaysOptions}
            {props.user && props.loginUser ? authenticatedOptions : unauthenticatedOptions}
          </ul>
        </div>
      </nav>

      {/* md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium */}

      {/* <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
    //     <ul className="text-2xl flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
    //       {props.user && props.loginUser && <div className="link welcome">Welcome, {props.loginUser}</div>}
    //       {alwaysOptions}
    //       {props.user && props.loginUser ? authenticatedOptions : unauthenticatedOptions}
    //     </ul>
    //   </div>
    // </div> */}


    </div>
  )

}
export default Nav