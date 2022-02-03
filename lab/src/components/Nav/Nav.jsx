import './Nav.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
        <NavLink className="link" to="/addcourse">Add Course</NavLink>
        <NavLink className="link" to="/">Logout</NavLink>
        <NavLink className="link" to="/front">Front End</NavLink>
        <NavLink className="link" to="/back">Back End</NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/signup">Sign Up</NavLink>
        <NavLink className="link" to="/Login">Log In</NavLink>
        <NavLink className="link" to="/front">Front End</NavLink>
        <NavLink className="link" to="/back">Back End</NavLink>
        <NavLink className="link" to="/">HOME</NavLink>
    </>
)
// const alwaysOptions = (
//   <>
//     <NavLink className="link" to="/Login">Log In</NavLink>
    
//     </>
// )
const Nav = ({ user }) => {
        return (
            <nav>
                <div className="nav">
                    <NavLink className="logo" to="/">L.A.G.A</NavLink>
                    <div className="links">
                        {user && <div className="link welcome">Welcome, {user.username}</div>}
                        {unauthenticatedOptions}
                        {user ? authenticatedOptions : unauthenticatedOptions}
                    </div>
                </div>
            </nav>
        )
}
export default Nav
