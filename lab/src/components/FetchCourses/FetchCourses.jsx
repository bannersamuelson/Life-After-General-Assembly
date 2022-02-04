import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourse,createReview,getAllReviews } from '../../services/apiconfig';
export default function FetchCourses() {
  let id = useParams();
  const [details, setDetails] = useState();
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
    let res=await createReview(newReview,id);
    console.log(res);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  
  useEffect(() => {
    const Details = async () => {
      id = id.id.split(":")
      console.log(id[1]);
      let res = await getCourse(id[1]);
      setDetails(res.data);
      // console.log(res);
    }
    Details();
    const GrabReviews = async () => {
      let res =  await getAllReviews();
      setReviews(res.data);
    }
    GrabReviews();
  }, []);
  
  return <div>
    <h1>Id:{id.id.split(":")}</h1>
    {details && details.data.map((course, i) => {
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
    )}
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
