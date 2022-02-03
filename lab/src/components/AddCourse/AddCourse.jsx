import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../services/apiconfig"; 

export default function AddCourse() {
  const [newUser, setNewUser] = useState({
    user: "",
    title: "",
    image: "",
    content: "",
    link: "",
    review: "",
    rate: 0,
  });
  // const [validationMessage, setValidationMessage] = useState("");
  // const [valid, setValid] = useState(false);
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(newUser);
    console.log(newUser);
    navigation("/login");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setNewUser((prevState) => ({
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
      value={newUser.user}
      onChange={handleInput}
    />
    <br />
    <label >Upload Title</label>
    <br />
    <input
      type="text"
      placeholder="title"
      id="title"
      value={newUser.title}
      onChange={handleInput}
    />
    <br />
    <label >Image link</label>
    <br />
    <input
      type="text"
      placeholder="image"
      id="image"
      value={newUser.image}
      onChange={handleInput}
    />
    <br />
    <label>Content</label>
    <br />
    <input
      type="text"
      placeholder="content"
      id="content"
      value={newUser.content}
      onChange={handleInput}
    />
    <br />
    <label>link</label>
    <br />
    <input
      type="text"
      placeholder="link"
      id="link"
      value={newUser.link}
      onChange={handleInput}
    />
    <br />
    <label>Review</label>
    <br />
    <input
      type="text"
      placeholder="review"
      id="review"
      value={newUser.review}
      onChange={handleInput}
    />
    <br />
    <label>rate</label>
    <br />
    <input
      type="number"
      placeholder="rate"
      id="rate"
      value={newUser.rate}
      onChange={handleInput}
    />
    <br />
    <br />
    <button>
      SIGN UP
    </button>
  </form>
</div>
);
}
