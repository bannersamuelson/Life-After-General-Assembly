import React from 'react';
import Nav from '../Nav/Nav';


export default function Layout(props) {

  return (
    <>
      <Nav user={props.user} setLoginUser={props.setLoginUser} loginUser={props.loginUser} />
      {props.children}

    </>

  )
}
