import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCourse } from "../../services/apiconfig"; 

export default function AddCourse() {
  const [newCourse, setNewCourse] = useState({
    user: "",
    title: "",
    image: "",
    content: "",
    link: "",
    review: "",
    rate: 0,
  });
  
  
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newCourse);
    let res=await addCourse(newCourse);
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

  // useEffect(() => {
  //   console.log("validator");
  //   const res = signUp(newUser);
  //   console.log(res);
  //   checkIfValid();
  // }, [newUser.password, newUser.confirmPassword]);
  

  return (<div >
  <form onSubmit={handleSubmit}>
    <h2 >Add a Course</h2>
    {/* <h3 >{validationMessage}</h3> */}
    <label >User</label>
    <br />
    <input
      type="text"
      placeholder="your user name"
      id="user"
      value={newCourse.user}
      onChange={handleInput}
      className="flex items-center border-b border-teal-500 py-2"
    />
    <br />
    <label >Upload Title</label>
    <br />
    <input
      type="text"
      placeholder="course title"
      id="title"
      value={newCourse.title}
      onChange={handleInput}
      className="flex items-center border-b border-teal-500 py-2"
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
      className="flex items-center border-b border-teal-500 py-2"
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
      className="flex items-center border-b border-teal-500 py-2"
    />
    <br />
    <label>Link to source</label>
    <br />
    <input
      type="text"
      placeholder="link"
      id="link"
      value={newCourse.link}
      onChange={handleInput}
      className="flex items-center border-b border-teal-500 py-2"
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
      className="flex items-center border-b border-teal-500 py-2"
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
      className="flex items-center border-b border-teal-500 py-2"
    />
    <br />
    <br />
    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
      Add Course
    </button>
  </form>
</div>
);
}
