import React from 'react';
import { Link } from 'react-router-dom';
import frontImg from '../../images/frontend.png'
import phoneImg from '../../images/phone.png'
import dataImg from '../../images/yellow.png'
import devops from '../../images/devops.png'
import backend from '../../images/backend.png'


export default function Courses() {
  return <div>
    <div className="w-full bg-gradient-to-r from-blue-800 to-blue-900 pb-10">
      <h1 className="flex flex-col justify-center items-center pt-14 text-8xl text-extrabold text-extrabold text-slate-200">Browse Courses</h1>
      <section className=" mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 hover:text-slate-100 lg:px-0 gap-4">
          <Link to='/front' className="group w-full transition ease-in-out delay-150 hover:cursor-pointer   hover:-translate-y-1 hover:scale-105 duration-300 
          hover:bg-gradient-to-r from-teal-200 to-teal-500  bg-slate-100 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img className="object-center object-cover rounded-full h-36 w-36" src={frontImg} alt="photo" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-slate-800 font-bold mb-2">FRONT-END</h1>
              <p className="text-sm  text-sky-500 hover:text-extrabold group-hover:text-white group-hover:text-extrabold">Learn More</p>
            </div>
          </Link>
          <Link to='/back' className="group w-full transition ease-in-out delay-150 hover:cursor-pointer   hover:-translate-y-1 hover:scale-105 duration-300 
          hover:bg-gradient-to-r from-red-200 to-red-500  bg-slate-100 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img className="object-center object-cover rounded-full h-36 w-36" src={backend} alt="photo" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-slate-800 font-bold mb-2">BACK-END</h1>
              <p className="text-sm  text-sky-500 hover:text-extrabold group-hover:text-white group-hover:text-extrabold">Learn More</p>
            </div>
          </Link>
          <Link to='/database' class="group w-full transition ease-in-out delay-150 hover:cursor-pointer  hover:text-slate-100 hover:-translate-y-1 hover:scale-105 duration-300
           hover:bg-gradient-to-r from-yellow-200 to-yellow-400 bg-slate-100 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src={dataImg} alt="photo" />
            </div>
            <div class="text-center">
              <h1 class="text-2xl text-slate-800 font-bold mb-2">DATABASE</h1>
              <p className="text-sm  text-sky-500 hover:text-extrabold group-hover:text-white group-hover:text-extrabold">Learn More</p>
            </div>
          </Link>
          <Link to='/devops' class="group w-full transition ease-in-out delay-150 hover:cursor-pointer  hover:text-slate-100 hover:-translate-y-1 hover:scale-105 duration-300
           bg-slate-100 hover:bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              <img class="object-center object-cover rounded-full h-36 w-36" src={devops} alt="photo" />
            </div>
            <div class="text-center">
              <h1 class="text-2xl text-slate-800 font-bold mb-2">DEVOPS</h1>
              <p className="text-sm  text-sky-500 hover:text-extrabold group-hover:text-white group-hover:text-extrabold">Learn More</p>
            </div>
          </Link>
          <Link to='/mobile' className="group w-full transition ease-in-out delay-150 hover:cursor-pointer  hover:text-slate-100 hover:-translate-y-1 hover:scale-105 duration-300
           hover:bg-gradient-to-r from-blue-400 to-blue-600 bg-slate-100 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
              <img className="object-center object-cover rounded-full h-36 w-36" src={phoneImg} alt="photo" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-slate-800 font-bold mb-2">MOBILE</h1>
              <p className="text-sm  text-sky-500 hover:text-extrabold group-hover:text-white group-hover:text-extrabold">Learn More</p>
            </div>
          </Link>

        </div>
      </section>
    </div>
  </div >
}