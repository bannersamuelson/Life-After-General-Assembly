import React from 'react';
import { useState,useEffect } from 'react';
import {getAllUsers,fetchAllCourses} from "../services/apiconfig"


export default function Test(props) {
  console.log(props);
  const { user, setUser } = props;
  const [courses, setCourse] = useState([]);
  
  useEffect(() => {
   const GrabUsers = async () => {
     let res = await getAllUsers();
     props.setUser(res.data);
    //  let id = "61fadf73cfd40ba8f9ef8792";
   }
   GrabUsers();
   const GrabCourse = async () => {
     let res =  await fetchAllCourses();
     setCourse(res.data);
   }
   GrabCourse();
 }, []);
 
  return <div>
    {!user && <h1>Loading</h1>}
    {user && user.map((el,i) => {
      return <h1 key={i}>User:{el.userName}</h1>
    })}

    {courses && courses.map((course, i) => {
      return <div key={i}>
        <h1>Course</h1>
        <h1>Rating:{course.rate}</h1>
        <h1>Review:{course.review}</h1>
        <h1>Title:{course.title}</h1>
        <h1>Author:{course.user}</h1>
      </div>
    })}
  </div>;
}
