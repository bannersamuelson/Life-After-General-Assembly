import React from 'react';
import { Link } from 'react-router-dom'
import img from '../../images/database.jpg'

export default function HomePage(props) {

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-gray-50">
      <div id="app">
        <div className="w-full border-b border-gray-700">
          <div className="flex flex-wrap items-center max-w-screen-xl px-10 py-20 mx-auto md:flex-nowrap">
            <div className="flex flex-col items-start justify-center flex-grow w-full pr-0 md:w-0 md:pr-10">
              <span className="w-full font-bold text-center text-gray-300 md:text-left">FULL STACK</span>
              <h1 className="w-full mt-4 text-5xl font-black text-center lg:text-6xl md:text-left">L.A.G.A</h1>
              <h3 className="w-full mt-4 text-5xl font-black text-center lg:text-2xl md:text-left">Life After General Assembly</h3>
              <p className="w-full mt-6 text-center text-gray-300 md:text-left">This website is dedicated to providing course materials and review-based content for our daily users who are striving to become full-stack engineers or simply wanting to learn a new skill. L.A.G.A is a resource for furthering their education.</p>
              <div className="flex flex-col items-center justify-center w-full mt-8 md:flex-row md:justify-start">
                <Link to="/front" className="flex items-center h-12 px-6 text-sm  bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg text-gray-100 hover:from-amber-600 hover:to-orange-600 font-extrabold">Go to courses!</Link>
                <Link to="/signup" className="mt-4 text-sm text-gray-400 underline md:mt-0 md:ml-4 hover:text-gray-200">join the club!</Link>
              </div>
            </div>
            <div className="flex-grow w-full md:w-0">
              <img className="mt-10 md:mt-0" src={img} alt="databasestack" />
            </div>
          </div>



        </div>
      </div>



    </div>
  )
}

// https://insights.dice.com/wp-content/uploads/2019/07/Software-Developer-Software-Engineer-Dice.png