import React from 'react';


export default function Layout(props) {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
    console.log("removed");
  }
  return <div>


<nav>
      <a href="/" style={{textDecoration:"none"}}> Home </a>
      <a href="/signup" style={{textDecoration:"none"}}> Signup </a>
      <a href="/login" style={{ textDecoration: "none" }}> Login </a>
      <a href="/login" style={{ textDecoration: "none" }} onClick={(e) => { handleLogout(e) }}> Logout </a>
      <a href="/addcourse" style={{textDecoration:"none"}}> Add a Course</a>
      </nav>
    <div>{props.children}</div>
  </div>;
}
