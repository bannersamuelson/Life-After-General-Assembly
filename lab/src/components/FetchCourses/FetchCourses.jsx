import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourse,createReview,getAllReviews, deleteReview } from '../../services/apiconfig';

export default function FetchCourses(props) {
  let id = useParams();
  let nav = useNavigate();
  const [details, setDetails] = useState();
  const [reviews, setReviews] = useState([]);
  const [toggle,setToggle ] = useState(false);
  const [newReview, setNewReview] = useState({
    author:`${props.firstName}`,
    course:"",
    review:"",
    rate:0,
  });
  console.log(newReview);
  const GrabReviews = async () => {
    let res =  await getAllReviews();
    setReviews(res.data);
    console.log(res.data);
  }
  const handleSubmit = async (e,id) => {
    e.preventDefault();
    newReview.course = id;
    let res=await createReview(newReview,id);
    // console.log(res);
    GrabReviews();
    setToggle((prevToggle)=>!prevToggle);
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
      let newId = id.id.split(":")
      let res = await getCourse(newId[1]);
      setDetails(res.data);
      // console.log(res.data);
    }
    Details();
    GrabReviews();
  }, []);
  const HandleUpdate = async(e,review) =>{
    e.preventDefault();
    // console.log(review, props._id);
    props.setReview(review);
    nav("/update/review");
  }
  const HandleDelete = async(e,id) =>{
    e.preventDefault();
    let res = await deleteReview(id);
    console.log(res);
    GrabReviews();
  }
  return <div>
    {details && details?.data.map((course, i) => {
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
      // console.log(review);
      return <div key={i} className="grid grid-cols-2 border-4 bg-slate-500 pb-10 mb-10" >
        <h1>Author:{review.author === undefined ? "Anonymous" : review.author}</h1>
        <h1>Rating:{review.rate}</h1>
        <h1>Course:{details?.data[0].title}</h1>
        <h1>Review:{review.review}</h1>
        <button className="w-1 flex justify-content-end items-center h-12 px-20 text-m  bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg text-gray-100 hover:from-amber-600 hover:to-orange-600 font-extrabold" onClick={(e) => { HandleUpdate(e,review)}}>Update</button>
        <button className="w-1 flex  justify-content-end items-center h-12 px-20 text-m  bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg text-gray-100 hover:from-amber-600 hover:to-orange-600 font-extrabold" onClick={(e) => { HandleDelete(e,review._id)}}>Delete</button>
      </div>
    })}
  </div>;
}
