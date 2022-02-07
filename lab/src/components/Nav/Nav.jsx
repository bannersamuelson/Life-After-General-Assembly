import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import img from '../../images/database.jpg'

const Nav = (props) => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    // alert("logging out");
    props.setLoginUser(null);
    console.log("removed");
    navigate('/');
  }

  
  

  const authenticatedOptions = (
    <>
      <NavLink to="/addcourse" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add Courses</NavLink>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"  onClick={(e) => { handleLogout(e) }} to="/">Logout</NavLink>
    </>
  )
  const unauthenticatedOptions = (
    <>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/signup">Sign Up</NavLink>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/Login">Log In</NavLink>
    </>
  )
  const alwaysOptions = (
    <>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/front">Front End</NavLink>
      <NavLink className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/back">Back End</NavLink>
    </>
  )



  return (
    <nav className="bg-gray-800  text-gray-50 border-gray-800 px-2 sm:px-4 py-2.5
    flex items-center h-16 border-b">

      <div className="mx-5 container flex flex-wrap justify-between items-center mx-auto">
        <NavLink to="/" className="flex active">
          <img className="mr-3 h-10" viewBox="0 0 52 72" alt="logo" src={img} />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">L.A.G.A</span>
        </NavLink>
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {props.user && props.firstName && <div className="link welcome">Welcome, {props.firstName}</div>}
            {alwaysOptions}
            {props.user && props.loginUser ? authenticatedOptions : unauthenticatedOptions}
          </ul>
        </div>
      </div>

    </nav>
  )

}
export default Nav