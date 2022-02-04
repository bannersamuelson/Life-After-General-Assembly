import React from 'react';
import { useState,useEffect } from 'react';
import {getAllUsers,fetchAllCourses,getAllReviews,createReview} from "../services/apiconfig"
import { useParams } from 'react-router-dom';

export default function Test(props) {
  const { user, setUser } = props;
  let slug = useParams();
  const [courses, setCourse] = useState([]);
  const [filtered, setFiltered] = useState();
  const [reviews, setReviews] = useState([]);
  const [toggle,setToggle ] = useState(false);
  const [newReview, setNewReview] = useState({
    course:"",
    review:"",
    rate:0,
  });
  const handleSubmit = async (e,id) => {
    e.preventDefault();
    newReview.course = id;
    await createReview(newReview,id);
    console.log(newReview);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  
  useEffect(() => {
   const GrabUsers = async () => {
     let res = await getAllUsers();
     setUser(res.data);
    //  let id = "61fadf73cfd40ba8f9ef8792";
   }
   const GrabCourse = async () => {
     let res = await fetchAllCourses();
     console.log(res);
     setCourse(res.data);
   }
    
    
    const GrabReviews = async () => {
      let res =  await getAllReviews();
      setReviews(res.data);
    }
    GrabCourse();
    GrabUsers();
    GrabReviews();
    console.log(user);
    console.log(courses);
    console.log(reviews);
  }, []);
  
  useEffect(() => {
    if (courses) {
      setFiltered(courses.filter(course => course.types == props.types));
    }
  }, [courses,slug]);
  
 
  return <div>
    {/* {!user && <h1>Loading Users</h1>} */}
    {/* {!props.home && user && user.map((el,i) => {
      return <h1 key={i}>User:{el.userName}</h1>
    })} */}
    {!courses && <h1>Loading Courses</h1>}
    {!props.home && courses && courses.map((course, i) => {
      if (!course.types) {
        return <div key={i} className="w-full  p-4">
          <h1>Front-End: Course</h1>
          <h1>Title:{course.title}</h1>
          <h1>Rating:{course.rate}/10</h1>
          <h1>Review:{course.review}</h1>
          <h1>Type:{course.types}</h1>
          <h1 className="text-gray-500 font-nunito">Author:{course.user === undefined ? "Anonymous" : course.user}</h1>
          <button onClick={(e) => { e.preventDefault(); setToggle((prevToggle) => !prevToggle); }}>Review</button>
          {toggle && <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => { handleSubmit(e, course._id) }}>
            <h2 className="flex items-center">New Review</h2>
            <label>Review</label>
            <br />
            <input
              type="text"
              placeholder="Review"
              id="review"
              value={newReview.review}
              onChange={handleInput}
              className="flex items-center border-b border-teal-500 py-2"
            />
            <br />
            <label>Rate</label>
            <br />
            <input
              type="number"
              placeholder="create Rating"
              id="rate"
              value={newReview.rate}
              onChange={handleInput}
              className="flex items-center border-b border-teal-500 py-2"
            />
            <br />
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
              SUBMIT
            </button>
          </form>}
        </div>
      }
    })}
    {!props.home && filtered && filtered.map((course, i) => {
        return <div key={i} className="w-full  p-4">
          <h1>Front-End: Course</h1>
          <h1>Title:{course.title}</h1>
          <h1>Rating:{course.rate}/10</h1>
          <h1>Review:{course.review}</h1>
          <h1>Type:{course.types}</h1>
          <h1 className="text-gray-500 font-nunito">Author:{course.user === undefined ? "Anonymous" : course.user}</h1>
          <button onClick={(e) => { e.preventDefault(); setToggle((prevToggle) => !prevToggle); }}>Review</button>
          {toggle && <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => { handleSubmit(e, course._id) }}>
            <h2 className="flex items-center">New Review</h2>
            <label>Review</label>
            <br />
            <input
              type="text"
              placeholder="Review"
              id="review"
              value={newReview.review}
              onChange={handleInput}
              className="flex items-center border-b border-teal-500 py-2"
            />
            <br />
            <label>Rate</label>
            <br />
            <input
              type="number"
              placeholder="create Rating"
              id="rate"
              value={newReview.rate}
              onChange={handleInput}
              className="flex items-center border-b border-teal-500 py-2"
            />
            <br />
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
              SUBMIT
            </button>
          </form>}
        </div>
      // } else if (course.types === "Front-End" && props.front == true) {
        
      // }
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
