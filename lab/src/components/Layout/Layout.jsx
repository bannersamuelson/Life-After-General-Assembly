import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';


export default function Layout(props) {
console.log(props);
  return (
    <>
      <Nav user={props.user} id={props._id} firstName={props.firstName} loginUser={props.userName} setLoginUser={props.setLoginUser}/>
      <div props={props}>{props.children}</div>
    </>

  )
}
