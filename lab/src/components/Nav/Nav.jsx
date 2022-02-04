import { NavLink } from 'react-router-dom'
import "./Nav.css"

const handleLogout = (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
  window.location.reload(false);
  console.log("removed");
}

const authenticatedOptions = (
  <>
        <NavLink className="link" to="/addcourse">Add Courses</NavLink>
        <NavLink className="link" to="/" onClick={(e) => { handleLogout(e) }}>Logout</NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/signup">Sign Up</NavLink>
        <NavLink className="link" to="/Login">Log In</NavLink>
    </>
)
const alwaysOptions = (
  <>
    <NavLink className="link" to="/front">Front End</NavLink>
    <NavLink className="link" to="/back">Back End</NavLink>
    </>
)

const Nav = (props) => {
  console.log(props);
        return (
            <nav className='navbar'>
                <div className="nav">
                    <NavLink className="logo" to="/">L.A.G.A</NavLink>
                    <div className="links">
                {props.user && props.loginUser && <div className="link welcome">Welcome, {props.loginUser}</div>}
                        {alwaysOptions}
                        {props.user && props.loginUser ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}
export default Nav