<<<<<<< HEAD
import './Layout.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = (props) => (
    <div className='layout'>
        <Nav user={props.user} />
        <div className="layout-children">
            {props.children}
        </div>
        <Footer />
    </div>
)

export default Layout
=======
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
>>>>>>> bfd74e5ef822c9f53ba1b3b4c3e9c2f7111c48f8
