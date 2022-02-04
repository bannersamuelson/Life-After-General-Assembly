import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


export default function Layout(props) {

  return (
    <div className='layout'>
      <Nav user={props.user} setLoginUser={props.setLoginUser} loginUser={props.loginUser}/>
      <div className="layout-children">
          {props.children}
      </div>
      <Footer />
    </div>

  //   <div>
  //   <nav>
  //     <a href="/" style={{textDecoration:"none"}}> Home </a>
  //     <a href="/signup" style={{textDecoration:"none"}}> Signup </a>
  //     <a href="/login" style={{ textDecoration: "none" }}> Login </a>
  //     <a href="/login" style={{ textDecoration: "none" }} onClick={(e) => { handleLogout(e) }}> Logout </a>
  //     <a href="/addcourse" style={{textDecoration:"none"}}> Add a Course</a>
  //     </nav>
  //   <div>{props.children}</div>
  // </div> 
)
}
