import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCourse } from "../../services/apiconfig";

export default function AddCourse(props) {
  console.log(props, "stop");
  const [newCourse, setNewCourse] = useState({
    user: `${props.userName}`,
    title: "",
    image: "",
    content: "",
    link: "",
    types: "",
    review: "",
    rate: 0,
  });


  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newCourse);
    let res = await addCourse(newCourse);
    console.log(res);
    navigation("/");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewCourse((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (props.firstName === undefined) {
      console.log("first");
      alert("login");
      navigation("/");
    }
  }, []);


  return (
    <div className="mx-14 my-14">
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Large input</label>
          <input type="text" id="large-input" class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="mb-6">
          <label for="base-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
          <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div>
          <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Small input</label>
          <input type="text" id="small-input" class="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
      </form>



      <div className="relative flex items-center text-base bg-gradient-to-r from-blue-800 to-blue-900 h-screen w-full" style={{ fontFamily: "Nunito" }}>
        <form onSubmit={handleSubmit}
          className="mr-auto ml-auto w-max max-w-lg bg-white shadow-md rounded text-sm px-3 pb-3 w-6/12">
          {/* <h3 >{validationMessage}</h3> */}
          <h2 className="text-center font-bold ">Add a Course</h2>
          <label >User</label>
          <br />
          <h1>
            {newCourse.user}
          </h1>
          <br />
          <label >Upload Title</label>
          <br />
          <input
            type="text"
            placeholder="course title"
            id="title"
            value={newCourse.title}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label >Image link</label>
          <br />
          <input
            type="text"
            placeholder="image link"
            id="image"
            value={newCourse.image}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>Description</label>
          <br />
          <input
            type="text"
            placeholder="course description"
            id="content"
            value={newCourse.content}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>Type</label>
          <br />
          <select
            type="text"
            placeholder="course description"
            id="types"
            value={newCourse.types}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          >
            <option> </option>
            <option>Front-End</option>
            <option>Back-End</option>
            <option>Devops</option>
            <option>Mobile</option>
            <option>Database</option>
          </select>
          <br />
          <label>Link to source</label>
          <br />
          <input
            type="text"
            placeholder="link"
            id="link"
            value={newCourse.link}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>Review</label>
          <br />
          <input
            type="text"
            placeholder="review"
            id="review"
            value={newCourse.review}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <label>rate</label>
          <br />
          <input
            type="number"
            placeholder="rate"
            id="rate"
            value={newCourse.rate}
            onChange={handleInput}
            className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
          />
          <br />
          <br />
          <button className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded text-l">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}
