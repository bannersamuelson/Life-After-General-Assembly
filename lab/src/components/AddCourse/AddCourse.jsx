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
    <div>
      <div className="px-14 bg-slate-100 grid justify-items-center py-14">
        <h1 className="text-2xl text-slate-800 font-bold mb-14">Create Course</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Course Title
              </label>
              <input
                type="text"
                placeholder="Tailwindcss"
                id="title"
                value={newCourse.title}
                onChange={handleInput}
                required
                className="flex items-center border p-2 py-2 text-slate-500 w-full"
              />
            </div>
            <div className="w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Course Description
              </label>
              <input
                type="text"
                placeholder="help assist with css styling"
                id="content"
                value={newCourse.content}
                onChange={handleInput}
                required
                className="flex items-center border p-2 py-2 text-slate-500 w-full"
              />
            </div>


            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Course Category
              </label>
              <select
                type="text"
                placeholder="types"
                id="types"
                value={newCourse.types}
                onChange={handleInput}
                className="flex items-center border p-2 py-2 text-slate-500 w-full"
                required
              >
                <option> </option>
                <option>Front-End</option>
                <option>Back-End</option>
                <option>Devops</option>
                <option>Mobile</option>
                <option>Database</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="focus:placeholder-transparent block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Link to Source
              </label>
              <input
                type="text"
                placeholder="tailwindcss.com"
                id="link"
                value={newCourse.link}
                onChange={handleInput}
                required
                className="flex items-center border p-2 py-2 text-slate-500 w-full"
              />
            </div>

            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Review
              </label>
              <input
                type="text"
                placeholder="Great to use once you get the hang of it. Able to style css in jsx file."
                id="review"
                value={newCourse.review}
                onChange={handleInput}
                required
                className="flex items-center border p-2 py-8 text-slate-500 w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full 3 px-3 mb-6">
              <label className="focus:placeholder-transparent block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Rating              </label>
              <input
                type="number"
                placeholder="rate"
                id="rate"
                value={newCourse.rate}
                onChange={handleInput}
                required
                className="flex items-center border p-2 py-2 text-slate-500 w-full"
              />
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
}
