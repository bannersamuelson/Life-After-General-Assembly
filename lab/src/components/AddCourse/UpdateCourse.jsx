import { useNavigate } from "react-router-dom";
import { updateCourse } from "../../services/apiconfig"; 
import { useState,useEffect } from "react";
export default function UpdateCourse(props) {
  console.log(props);
  // const [newCourse, setNewCourse] = useState({
  //   user: "",
  //   title: "",
  //   image: "",
  //   content: "",
  //   link: "",
  //   types:"",
  //   review: "",
  //   rate: 0,
  // });
  
  
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.update);
    let res=await updateCourse(props.update._id,props.update);
    console.log(res);
    props.setToggle(false);
    navigation(`/${props.types}`);
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    props.setUpdate((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  useEffect(() => {
  if (props.firstName==undefined) {
    alert("login");
    props.setToggle(false);
    navigation(`/${props.types}`);
  }
}, []);


return (
  <div className="w-full flex items-center text-base bg-gradient-to-r from-blue-800 to-blue-900 h-screen" style={{fontFamily:"Nunito"}}>
    <form onSubmit={handleSubmit}
  className="mr-auto ml-auto w-max max-w-lg bg-white shadow-md rounded text-sm px-3 pb-3 w-6/12"> 
      <h2 className="text-center font-bold ">Update Course</h2>
      <label>User</label>
      <br />
      <input
        type="text"
        placeholder="your user name"
        id="user"
        value={props.update.user}
        onChange={handleInput}
        className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
      />
      <br />
      <label>Upload Title</label>
      <br />
      <input
        type="text"
       placeholder="course title"
       id="title"
       value={props.update.title}
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
        value={props.update.image}
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
        value={props.update.content}
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
        value={props.update.types}
        onChange={handleInput}
        className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
      >
        <option>Front-End</option>
        <option>Back-End</option>
        <option>Dev-Ops</option>
        </select>
      <br />
      <label>Link to source</label>
      <br />
      <input
        type="text"
        placeholder="link"
        id="link"
        value={props.update.link}
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
        value={props.update.review}
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
        value={props.update.rate}
        onChange={handleInput}
        className="flex items-center border-b border-blue-900 py-2 text-blue-900 w-full"
      />
      <br />
      <br />
      <button className="flex-shrink-0 bg-blue-900 hover:bg-blue-900 border-blue-700 hover:border-blue-900 text-sm border-4 text-white py-1 px-2 rounded text-l">
      Update Course
      </button>
    </form>
  </div>
);
}