import React from 'react';
import { useState,useEffect } from 'react';
import {getAllUsers,fetchAllCourses} from "../services/apiconfig"


export default function Test() {
  const [users, setUsers] = useState([]);
  const [courses, setCourse] = useState([]);
  
  useEffect(() => {
   const GrabUsers = async () => {
     let res = await getAllUsers();
     setUsers(res.data);
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
    {users && users.map((el,i) => {
      return <h1 key={i}>{el.userName}</h1>
    })}
    {courses && courses.map((course, i) => {
      return <div key={i}>
        <h1>Rating:{course.rate}</h1>
        <h1>Review:{course.review}</h1>
        <h1>Title:{course.title}</h1>
        <h1>Author:{course.user}</h1>
      </div>
    })}
  </div>;
}