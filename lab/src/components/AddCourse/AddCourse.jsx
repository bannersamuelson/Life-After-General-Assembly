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
      placeholder="create user name"
      id="user"
      value={newCourse.user}
      onChange={handleInput}
    />
    <br />
    <label >Upload Title</label>
    <br />
    <input
      type="text"
      placeholder="title"
      id="title"
      value={newCourse.title}
      onChange={handleInput}
    />
    <br />
    <label >Image link</label>
    <br />
    <input
      type="text"
      placeholder="image"
      id="image"
      value={newCourse.image}
      onChange={handleInput}
    />
    <br />
    <label>Content</label>
    <br />
    <input
      type="text"
      placeholder="content"
      id="content"
      value={newCourse.content}
      onChange={handleInput}
    />
    <br />
    <label>link</label>
    <br />
    <input
      type="text"
      placeholder="link"
      id="link"
      value={newCourse.link}
      onChange={handleInput}
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
    />
    <br />
    <br />
    <button>
      Add Course
    </button>
  </form>
</div>
);
}
