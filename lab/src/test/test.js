import React from 'react';
import { useState,useEffect } from 'react';
import {getAllUsers,fetchAllCourses,getAllReviews} from "../services/apiconfig"


export default function Test(props) {
  console.log(props);
  const { user, setUser } = props;
  const [courses, setCourse] = useState([]);
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
   const GrabUsers = async () => {
     let res = await getAllUsers();
     props.setUser(res.data);
    //  let id = "61fadf73cfd40ba8f9ef8792";
   }
   const GrabCourse = async () => {
     let res =  await fetchAllCourses();
     setCourse(res.data);
   }
    GrabCourse();
    GrabUsers();
    const GrabReviews = async () => {
      let res =  await getAllReviews();
      setCourse(res.data);
    }
    GrabReviews();
  }, []);
  

  
 
  return <div>
    {/* {!user && <h1>Loading Users</h1>} */}
    {user && user.map((el,i) => {
      return <h1 key={i}>User:{el.userName}</h1>
    })}
    {/* {!courses && <h1>Loading Courses</h1>} */}
    {courses && courses.map((course, i) => {
      return <div key={i} className="w-full md:w-1/2 p-4">
        <h1>Front End: Course</h1>
        <h1>Title:{course.title}</h1>
        <h1>Rating:{course.rate}</h1>
        <h1>Review:{course.review}</h1>
        <h1>Author:{course.user===undefined? "Anonymous":course.user}</h1>
      </div>
    })}

    {reviews && reviews.map((review, i) => {
      return <div key={i}>
        <h1>Review</h1>
        <h1>Rating:{review.rate}</h1>
        <h1>Course:{review.course}</h1>
        <h1>Review:{review.review}</h1>
      </div>
    })}
  </div>;
}
