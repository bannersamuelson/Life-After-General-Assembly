import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourse, createReview, getAllReviews, deleteReview } from '../../services/apiconfig';

export default function FetchCourses(props) {
  let id = useParams();
  let nav = useNavigate();
  const [details, setDetails] = useState();
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [newReview, setNewReview] = useState({
    author: `${props.firstName}`,
    course: "",
    review: "",
    rate: 0,
  });
  console.log(newReview);
  const GrabReviews = async () => {
    let res = await getAllReviews();
    setReviews(res.data);
    console.log(res.data);
  }

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    newReview.course = id;
    let res = await createReview(newReview, id);
    // console.log(res);
    GrabReviews();
    setToggle((prevToggle) => !prevToggle);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleNumberInput = (e) => {
    const { id, value } = e.target;
    console.log(value);
    if (value > 5 || value < 0) {
      alert("rating can't be bigger than 5 or smaller than 0");
      return null;
    }
    setNewReview((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const star = (`${'\u2B50'}`)
  console.log(star)

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
  const HandleUpdate = async (e, review) => {
    e.preventDefault();
    // console.log(review, props._id);
    props.setReview(review);
    nav("/update/review");
  }
  const HandleDelete = async (e, id) => {
    e.preventDefault();
    let res = await deleteReview(id);
    console.log(res);
    GrabReviews();
  }

  let length = reviews.length
  console.log(length)



  return <div>
    {details && details?.data.map((course, i) => {

      return <div key={i} className="w-full bg-slate-100 p-4">

        <h1 className="text-slate-900 text-3xl font-bold font-nunito mt-4">{course.user === undefined ? "Anonymous" : course.user}</h1>
        <a className="text-slate-500 hover:text-slate-800" href={`${course.link}`}>{course.title}</a>
        <h1 className="my-4"> {star.repeat(`${course.rate[0]}`)}</h1>
        <div className="bg-white rounded-xl mb-10 ">
          <div className=" text-slate-800 grid grid-cols-1 justify-items-start">
            <h1 className="mb-10 text-3xl"> "{course.review}"</h1>
          </div>
        </div>

        {!toggle && <button className="bg-sky-400 rounded text-slate-100 mb-10 p-2 hover:bg-sky-600 hover:cursor-pointer"
          onClick={(e) => { e.preventDefault(); setToggle((prevToggle) => !prevToggle); }}>Leave Review</button>
        }
        <h1 className="text-slate-500">Total Reviews:{length}</h1>
        {toggle && <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => { handleSubmit(e, course._id) }}>

          <label className="text-slate-500">Review</label>
          <br />
          <input
            className=" placeholder:text-slate-300 grid focus:placeholder-transparent bg-slate-100 rounded border border-slate-200 leading-normal resize-none w-full h-14 px-3 font-medium text-slate-800 focus:outline-none focus:bg-white"
            type="text"
            id="review"
            value={newReview.review}
            onChange={handleInput}
            placeholder='Type your review'
            required />
          <br />
          <label className="text-slate-500">Rate</label>
          <br />
          <input
            type="number"
            placeholder="0 - 5"
            id="rate"
            value={newReview.rate}
            onChange={handleInput}
            required
            className="focus:border-slate-300 text-slate-800 pl-2 flex items-center border-b border-slate-300 py-2 rounded focus:border-collapse bg-slate-100"
          />
          <br />
          <button className="flex-shrink-0 bg-sky-400 hover:bg-sky-600 hover:border-tskyeal-700 text-sm text-white py-1 px-2 rounded">
            Submit
          </button> {toggle && <button onClick={(e) => { e.preventDefault(); setToggle((prevToggle) => !prevToggle); }}
            className="flex-shrink-0 text-sm text-slate-400 hover:text-slate-500 py-1 px-2 rounded">
            Close
          </button>}

        </form>}
      </div>
    }
    )}
    {reviews && reviews.map((review, i) => {
      console.log(review);


      return <div key={i} className="text-slate-800 p-10 border bg-slate-100" >
        <h1 className="text-xl font-bold">{review.author === undefined ? "Anonymous" : review.author}</h1>
        <h1>Course Rating:{star.repeat(`${review.rate}`)}</h1>
        <h1 className="italic my-4">Review: {review.review}</h1>
        <button className="w-1 flex justify-content-end items-center h-12 px-20 text-m  bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg text-gray-100 hover:from-amber-600 hover:to-orange-600 font-extrabold" onClick={(e) => { HandleUpdate(e, review) }}>Update</button>
        <button className="w-1 flex  justify-content-end items-center h-12 px-20 text-m  bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg text-gray-100 hover:from-amber-600 hover:to-orange-600 font-extrabold" onClick={(e) => { HandleDelete(e, review._id) }}>Delete</button>
      </div>
    })}
  </div>;
}
