import React from 'react';

export default function Layout(props) {
  return <div>
    <nav>
      <a href="/">Home</a>
      <a href="/signup">Signup</a>
      <a href="/login">Login</a>
      </nav>
    <div>{props.children}</div>
  </div>;
}
