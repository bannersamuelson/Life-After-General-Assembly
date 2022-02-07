import { useNavigate } from "react-router-dom";
import { updateCourse } from "../../services/apiconfig"; 

export default function UpdateCourse(props) {
  console.log(props);
  const [newCourse, setNewCourse] = useState({
    user: "",
    title: "",
    image: "",
    content: "",
    link: "",
    types:"",
    review: "",
    rate: 0,
  });
  
  
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newCourse);
    let res=await updateCourse(newCourse);
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
  if (props.firstName==undefined) {
    alert("login");
    navigation("/");
  }
}, []);


return (
  <div className="w-full mr-auto ml-auto mt-auto mb-auto max-w-xs text-xl" style={{fontFamily:"Nunito"}}>
    <h2 className="text-center font-bold ">Update Course</h2>
    <form onSubmit={handleSubmit}
  className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"> 
    {/* <h3 >{validationMessage}</h3> */}
      <label>Not</label>
      <br />
      <input
        type="text"
        placeholder="your user name"
        id="user"
        value={newCourse.user}
        onChange={handleInput}
        className="flex items-center border-b border-teal-500 py-2 text-teal-700"
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
       className="flex items-center border-b border-teal-500 py-2 text-teal-700"
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
        className="flex items-center border-b border-teal-500 py-2 text-teal-700"
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
        className="flex items-center border-b border-teal-500 py-2 text-teal-700"
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
        className="flex items-center border-b border-teal-500 py-2 text-teal-700"
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
        value={newCourse.link}
        onChange={handleInput}
        className="flex items-center border-b border-teal-500 py-2 text-teal-700"
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
        className="flex items-center border-b border-teal-500 py-2 text-teal-700"
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
        className="flex items-center border-b border-teal-500 py-2 text-teal-700"
      />
      <br />
      <br />
      <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 border-4 text-white py-1 px-2 rounded text-xl">
      Add Course
      </button>
    </form>
  </div>
);
}