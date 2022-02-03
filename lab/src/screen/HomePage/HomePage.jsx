import React from 'react';

export default function HomePage(props) {
 
  return <div>
    <h1 style={{textAlign:"center",fontFamily:"Nunito"}}>Hello BootCamp Grad!</h1>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">{props.children}</div>
      </div>
}
