import React from 'react';
import { useState, useEffect } from 'react';
import { getAllUsers, fetchAllCourses, getAllReviews, createReview } from "../services/apiconfig"
import { useParams, useNavigate } from 'react-router-dom';
import img from '../images/database.jpg'

export default function Test(props) {
  const { user, setUser } = props;
  let slug = useParams();
  let nav = useNavigate();
  const [courses, setCourse] = useState([]);
  const [filtered, setFiltered] = useState();
  const [reviews, setReviews] = useState([]);
  // const [toggle, setToggle] = useState(false);
  const [newReview, setNewReview] = useState({
    course: "",
    review: "",
    rate: 0,
  });
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    newReview.course = id;
    await createReview(newReview, id);
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
      let res = await getAllReviews();
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
      setFiltered(courses.filter(course => course.types === props.types));
      console.log(filtered)
      console.log("yo")
    }
  }, [courses, slug]);

  const HandleDetails = (e, id) => {
    e.preventDefault();
    console.log(id);
    nav(`/:${id}`);
  }
  return <div className="items-center justify-center mx-5 drop-shadow-2xl m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

    {!courses && <h1>Loading Courses</h1>}
    {!props.home && filtered && filtered.map((course, i) => {
      if (course.types) {
        return <div key={i} onClick={(e) => { HandleDetails(e, course._id) }} className="items-center justify-center self-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  hover:cursor-pointer max-w-sm rounded-2xl overflow-hidden shadow-lg">


          <div className="relative overflow-hidden">
            <img className="w-full border-b-2 border-slate-200" src={img} alt="Sunset in the mountains" />
            <div className="absolute w-full py-2.5 bottom-5 inset-x-0 inset-y-60 text-slate-900 font-extrabold  text-5xl text-center">{course.title}</div>
          </div>


          <div className="px-6 py-4">
            <p className="text-gray-700 text-base">
              Description:{course.content}
            </p>
            <p className="italic text-gray-700 text-base"> Avg course rating - {course.rate}
            </p>
            <h1 className="text-gray-700 text-base">Author: {course.user === undefined ? "Anonymous" : course.user}</h1>
          </div>

          {/* <h1 onClick={(e) => { HandleDetails(e, course._id) }}>Title:{course.title}</h1> */}
          <h1>Rating:{course.rate}/10</h1>
          <h1>Review:{course.review}</h1>
          <h1>Type:{course.types}</h1>
          <h1 className="text-gray-500 font-nunito">Author:{course.user === undefined ? "Anonymous" : course.user}</h1>


          {/*           
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
            </button> */}

          {/* </form>} */}
        </div>
      }
    })}

    {/* {!props.home && filtered && filtered.map((course, i) => {
      return <div key={i} className="w-full  p-4">
        <h1>Front-End: Course</h1>
        <h1>Title:{course.title}</h1>
        <h1>Rating:{course.rate}/10</h1>
        <h1>Review:{course.review}</h1>

        <button onClick={(e) => { e.preventDefault(); setToggle((prevToggle) => !prevToggle); }}>Review</button>
        {reviews && reviews.map((review, i) => {
          return <div key={i}>
            <h1 style={{ color: "red" }}>Review</h1>
            <h1>Rating:{review.rate}</h1>
            {/* <h1>Course:{review.course}</h1> */}
    {/* <h1>Review:{review.review}</h1>
  </div> */}

    {/* })} */}

    {/* </div > */}
    {/* })} * /} */}
  </div >;
}
