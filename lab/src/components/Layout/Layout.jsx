import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


export default function Layout(props) {

  return (
    <>
      <Nav user={props.user} setLoginUser={props.setLoginUser} loginUser={props.loginUser} />
      {props.children}
    </>

  )
}
