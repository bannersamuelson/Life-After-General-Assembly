import React from 'react';
import { useState, useEffect } from 'react';
import { getAllUsers, fetchAllCourses, getAllReviews, deleteCourse, } from "../../services/apiconfig"
import { useParams, useNavigate } from 'react-router-dom';
import UpdateCourse from '../../components/AddCourse/UpdateCourse';



export default function GetReviews(props) {

  const { user, setUser } = props;

  let slug = useParams();
  let nav = useNavigate();
  const [courses, setCourse] = useState([]);
  const [filtered, setFiltered] = useState();
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState();

  console.log(user)
  console.log(reviews)

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
    // eslint-disable-next-line
  }, [])



  useEffect(() => {
    if (courses) {
      setFiltered(courses.filter(course => course.types === props.types));
    }
    // eslint-disable-next-line
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

  const star = (`${'\u2B50'}`)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mx-5 drop-shadow-2xl m-2">
      {!courses && <h1>Loading Courses</h1>}
      {!props.home && !toggle && filtered && filtered.map((course, i) => {
        if (course.types) {

          return <div key={i} className="m-4 transition ease-in-out delay-150 hover:-translate-y-1 bg-slate-100 hover:scale-105 duration-300  hover:cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <div onClick={(e) => { HandleDetails(e, course._id) }}>
              <div className="relative overflow-hidden">
              </div>
              <div className="px-6 py-4">
                <h1 className="text-gray-900 text-4xl font-extrabold">{course.title}</h1>
                <p className="py-4 text-gray-700 text-base">
                  {course.review}
                </p>
                <p className="text-sm text-gray-700"> {star.repeat(`${course.rate[0]}`)}
                </p>
                <h1 className="text-gray-700 text-sm italic">- {course.user === undefined ? "Anonymous" : course.user}</h1>
              </div>
            </div>
            {(course.user === props?.loginUser?.userName) && course.user !== undefined && <button className="text-slate-900 p-4 hover:text-slate-400" onClick={(e) => { HandleUpdate(e, course._id, course) }}>Update</button>}
            {(course.user === props?.loginUser?.userName) && course.user !== undefined && <button className="text-slate-900 p-4 hover:text-slate-400" onClick={(e) => { HandleDelete(e, course._id) }}>Delete</button>}
          </div>
        } else {
          return null
        }
      })}
      {!props.home && toggle && <>
        <UpdateCourse {...props.loginUser} {...props} update={update} setUpdate={setUpdate} setToggle={setToggle} GrabCourse={GrabCourse}>
        </UpdateCourse>
        <button className="grid gid-cols-1 justify-items-center mx-auto md:bg-transparent md:hover:p-1 bg-slate-800 hover:bg-slate-800 hover:opacity-100 opacity-75 font-bold text-xl p-3 m-5 rounded" onClick={(e) => { e.preventDefault(); setToggle(false); }}>Go back</button>
      </>
      }
    </div >
  )
}