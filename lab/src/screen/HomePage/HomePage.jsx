import React from 'react';
import { Link } from 'react-router-dom'

export default function HomePage(props) {
 
  return (
      <body className="bg-gradient-to-r from-blue-800 to-blue-900 text-gray-50">
      <div id="app">
       <div className="flex items-center h-16 px-6 border-b border-gray-700">
              <div className="flex items-center ml-auto">Banner</div>
         </div> 
        
        <div className="w-full border-b border-gray-700">
          <div className="flex flex-wrap items-center max-w-screen-xl px-10 py-20 mx-auto md:flex-nowrap">
            <div className="flex flex-col items-start justify-center flex-grow w-full pr-0 md:w-0 md:pr-10">
            <span className="w-full font-bold text-center text-gray-300 md:text-left">FULL STACK</span>
            <h1 className="w-full mt-4 text-5xl font-black text-center lg:text-6xl md:text-left">LIFE AFTER GA</h1>
            <p className="w-full mt-6 text-center text-gray-300 md:text-left">This website is dedicated to bettering the life of coders by providing course materials and realtime reviews for the everyday applications.</p>
          <div className="flex flex-col items-center justify-center w-full mt-8 md:flex-row md:justify-start"></div>
          <Link to="/front" className="flex items-center h-12 px-6 text-sm bg-blue-600 rounded-lg text-blue-50 hover:bg-blue-700">Go to courses!</Link>
              <Link to="/signup" className="mt-4 text-sm text-gray-400 underline md:mt-0 md:ml-4 hover:text-gray-200">join the club</Link>
          <img className="flex-grow w-full md:w-0" src="https://insights.dice.com/wp-content/uploads/2019/07/Software-Developer-Software-Engineer-Dice.png" alt="computerguy"/>
          
          
            </div>
          </div>
        </div>



        </div>
      </body>



  )
}

{/* <div className="grid grid-cols-4 gap-4 p-4">

    <Link to="/front" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> FRONTEND /></h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Click here to learn more about the cutting-edge technologies that are implemented in today's front-end user experiencce.</p>
   <br />
   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javaScript</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
</Link>
  
    <Link to="/back" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> BACKEND /></h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Click here to learn more about the cutting-edge technologies that are implemented in today's front-end user experiencce.</p>
   <br />
   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javaScript</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>

</Link>
    <Link to="/database" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> BACKEND /></h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Click here to learn more about the cutting-edge technologies that are implemented in today's front-end user experiencce.</p>
   <br />
   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javaScript</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
  </Link>
    <Link to="/devops" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> BACKEND /></h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Click here to learn more about the cutting-edge technologies that are implemented in today's front-end user experiencce.</p>
   <br />
   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javaScript</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
  </Link>
    <Link to="/mobile" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> BACKEND /></h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">Click here to learn more about the cutting-edge technologies that are implemented in today's front-end user experiencce.</p>
   <br />
   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#javaScript</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
    </Link>

</div> */}


