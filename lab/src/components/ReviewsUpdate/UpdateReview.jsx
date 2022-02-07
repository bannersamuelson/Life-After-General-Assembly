import React, { useEffect } from 'react';
import {updateReview} from "../../services/apiconfig";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function UpdateReview(props) {
  console.log(props);
  const navigation = useNavigate();
  const [newReview, setNewReview] = useState({
    author:`${props.firstName}`,
    course: `${props.review.course}`,
    review: `${props.review.review}`,
    rate: `${props.review.rate}`,
  });
  console.log(props,newReview);
  useEffect(() => {
    if (props.review.author !== props.firstName) {
      navigation("/");
    }
  }, []);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newReview.author);
    let res=await updateReview(newReview,props._id,props.review._id);
    console.log(res);
    navigation("/");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewReview((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  return <div>
    <form onSubmit={handleSubmit}
    className="mr-auto ml-auto w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
        <label >Review</label>
        <br />
        <input
          type="text"
         placeholder="write your review"
         id="review"
         value={newReview.review}
         onChange={handleInput}
         className="flex items-center border-b border-teal-500 py-2 text-teal-700"
        />
        <br />
        <label >Rate</label>
        <br />
        <input
          type="number"
          placeholder="image link"
          id="rate"
          value={newReview.rate}
          onChange={handleInput}
          className="flex items-center border-b border-teal-500 py-2 text-teal-700"
        />
        <br />
        <button className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded text-xl">
        Update review
        </button>
      </form>
  </div>;
}
