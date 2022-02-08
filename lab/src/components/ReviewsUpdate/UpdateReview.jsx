import React, { useEffect } from 'react';
import { updateReview } from "../../services/apiconfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpdateReview(props) {
  const [toggle, setToggle] = useState(false);
  console.log(props);
  const navigation = useNavigate();
  const [newReview, setNewReview] = useState({
    author: `${props.firstName}`,
    course: `${props.review.course}`,
    review: `${props.review.review}`,
    rate: `${props.review.rate}`,
  });
  console.log(props, newReview);
  useEffect(() => {
    if (props.review.author !== props.firstName) {
      navigation("/");
    }
    // eslint-disable-next-line
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newReview.author);
    let res = await updateReview(newReview, props._id, props.review._id);
    console.log(res);
    setToggle((prevToggle) => !prevToggle);

    navigation("/");
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
    if (value > 5 || value < 1) {
      alert("rating must be between 1-5");
      return null;
    }
    setNewReview((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };



  return (
    <div className="mb-44 w-full mr-auto ml-auto mt-36 max-w-xs text-xl">
      <h2 className="m-5 text-center text-slate-600 font-bold ">Update Review</h2>
      <form onSubmit={handleSubmit}
        className="mr-auto ml-auto w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="text-slate-500">Review</label>
        <br />
        <input
          className=" placeholder:text-slate-300 grid focus:placeholder-transparent bg-slate-100 rounded border shadow border-slate-200 leading-normal resize-none w-full h-14 px-3 font-medium text-slate-800 focus:outline-none focus:bg-white"
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
          placeholder="1 - 5"
          id="rate"
          value={newReview.rate}
          onChange={handleNumberInput}
          required
          className="focus:border-slate-300 text-slate-800 pl-2 flex items-center border shadow border-slate-200 py-2 rounded focus:border-collapse bg-slate-100"
        />
        <br />
        <button className="flex-shrink-0 bg-sky-400 hover:bg-sky-600 hover:border-tskyeal-700 text-sm text-white py-1 px-2 rounded">
          Update
        </button> {toggle && <button onClick={(e) => { e.preventDefault(); setToggle((prevToggle) => !prevToggle); }}
          className="flex-shrink-0 text-sm text-slate-400 hover:text-slate-500 py-1 px-2 rounded">
          Close
        </button>}

      </form>
    </div>
  );
}