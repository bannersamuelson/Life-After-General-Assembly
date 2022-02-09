import { useNavigate } from "react-router-dom";
import { updateCourse } from "../../services/apiconfig";
import { useEffect } from "react";
export default function UpdateCourse(props) {
  console.log(props);



  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(props.update);
    let res = await updateCourse(props.update._id, props.update);
    console.log(res);
    props.setToggle(false);
    props.setUpdate(props.update);
    props.GrabCourse();
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
    if (props.firstName === undefined) {
      alert("login");
      props.setToggle(false);
      navigation(`/${props.types}`);
    }
    // eslint-disable-next-line
  }, []);


  return (
    <div className="grid-cols-1 px-14 bg-slate-100 grid justify-items-center py-14">
      <div >
        <h1 className="text-2xl text-slate-800 font-bold mb-14">Update Course</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6">
              <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">

                <br />
              </label>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Course Title
              </label>
              <input
                type="text"
                placeholder="course title"
                id="title"
                value={props.update.title}
                onChange={handleInput}
                className="flex items-center border p-2 py-2 text-slate-500 w-full"
                required
              />
            </div>

            <div className="w-full px-3 mb-6">

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                Course Description
              </label>
              <br />
              <input
                type="text"
                placeholder="course description"
                id="content"
                value={props.update.content}
                onChange={handleInput}
                className="flex items-center border p-2 py-2 text-slate-500 w-full"
                required
              />
            </div>

            <div className="w-full px-3">

              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Course Category
              </label>
              <select
                type="text"
                placeholder="course description"
                id="types"
                value={props.update.types}
                onChange={handleInput}
                className="flex items-center border p-2 py-2 text-slate-500 w-full"
                required
              >
                <option>Front-End</option>
                <option>Back-End</option>
                <option>Devops</option>
                <option>Mobile</option>
                <option>Database</option>
                <option>Portfolio</option>
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
                placeholder="link"
                id="link"
                value={props.update.link}
                onChange={handleInput}
                required
                className="mb-4 flex items-center border p-2 py-2 text-slate-500 w-full"
              />
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Review
              </label>
              <input
                type="text"
                placeholder="review"
                id="review"
                value={props.update.review}
                onChange={handleInput}
                required
                className="flex items-center border p-2 py-8 text-slate-500 w-full"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full 3 px-3 mb-6">
              <label className="focus:placeholder-transparent block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Rating
              </label>
              <input
                type="number"
                placeholder="rate"
                id="rate"
                value={props.update.rate}
                onChange={handleInput}
                required
                className="flex items-center border p-2 py-2 text-slate-500 w-full" />
              <br />
              <h1 className="text-slate-400">Author: {props.update.user}</h1>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline">
            Update Course
          </button>
        </form >
      </div >
    </div >
  );
}