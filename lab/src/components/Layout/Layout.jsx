import React from 'react';

export default function Layout(props) {
  return <div>
    <nav >
      <a href="/" style={{textDecoration:"none"}}> Home </a>
      <a href="/signup" style={{textDecoration:"none"}}> Signup </a>
      <a href="/login" style={{textDecoration:"none"}}> Login </a>
      <a href="/addcourse" style={{textDecoration:"none"}}> Add a Course</a>
      </nav>
    <div>{props.children}</div>
  </div>;
}
