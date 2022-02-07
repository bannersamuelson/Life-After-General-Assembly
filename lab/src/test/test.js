import React from 'react';
import { useState, useEffect } from 'react';
import { getAllUsers, fetchAllCourses, getAllReviews, deleteCourse, updateCourse, addCourse } from "../services/apiconfig"
import { useParams, useNavigate } from 'react-router-dom';
import img from '../images/code.png'
import UpdateCourse from '../components/AddCourse/UpdateCourse';

export default function Test(props) {
  const { user, setUser } = props;
  let slug = useParams();
  let nav = useNavigate();
  const [courses, setCourse] = useState([]);
  const [filtered, setFiltered] = useState();
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState();

  const GrabCourse = async () => {
    let res = await fetchAllCourses();
    console.log(res);
    setCourse(res?.data);
  }
  useEffect(() => {
    const GrabUsers = async () => {
      let res = await getAllUsers();
      setUser(res.data);
    }



    const GrabReviews = async () => {
      let res = await getAllReviews();
      setReviews(res.data);
    }
    GrabCourse();
    GrabUsers();
    GrabReviews();
    setToggle(false);
    console.log(user);
    console.log(courses);
    console.log(reviews);
  }, []);


  useEffect(() => {
    if (courses) {
      setFiltered(courses.filter(course => course.types === props.types));
    }
  }, [courses, slug]);

  const HandleDetails = (e, id) => {
    e.preventDefault();
    console.log(id);
    nav(`/:${id}`);
  }

  const HandleUpdate = async (e, id, updated) => {
    e.preventDefault();
    console.log(id, updated);
    setToggle(true);
    setUpdate(updated);
    // let res = await updateCourse(id,data);
    // console.log(res);
    // GrabCourse();
  }
  const HandleDelete = async (e, id) => {
    e.preventDefault();
    console.log(id);
    let res = await deleteCourse(id);
    console.log(res);
    GrabCourse();
  }
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mx-5 drop-shadow-2xl m-2">


    {!courses && <h1>Loading Courses</h1>}
    {!props.home && !toggle && filtered && filtered.map((course, i) => {
      if (course.types) {
        return <div key={i} className="m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  hover:cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <div onClick={(e) => { HandleDetails(e, course._id) }}>
            <div className="relative overflow-hidden">
              <img className="w-full h-auto" src={img} alt="Sunset in the mountains" />
            </div>
            <div className="px-6 py-4">
              <h1 className="text-gray-900 text-4xl font-extrabold">{course.title}</h1>
              <p className="text-gray-700 text-base">
                Description:{course.content}
              </p>
              <p className="italic text-gray-700 text-base"> Avg course rating - {course.rate}
              </p>
              <h1 className="text-gray-700 text-base">Author: {course.user === undefined ? "Anonymous" : course.user}</h1>
            </div>
            <h1>Rating:{course.rate}/10</h1>
            <h1>Review:{course.review}</h1>
            <h1>Type:{course.types}</h1>
            <h1 className="text-gray-500 font-nunito">Author:{course.user === undefined ? "Anonymous" : course.user}</h1>
          </div>
          <button onClick={(e) => { HandleUpdate(e, course._id, course) }}>Update</button>
          <button onClick={(e) => { HandleDelete(e, course._id) }}>Delete</button>
        </div>
      } else {
        return null
      }
    })}
    {!props.home && toggle && <>
      <UpdateCourse {...props.loginUser} {...props} update={update} setUpdate={setUpdate} setToggle={setToggle} GrabCourse={GrabCourse}>
      </UpdateCourse>
      <button onClick={(e) => { e.preventDefault(); setToggle(false); }}>Go back</button>
    </>
    }
  </div >
}