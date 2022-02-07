import { Routes, Route } from 'react-router-dom';
import Test from "./test/test.js";
import SignUp from "./screen/SignUp/SignUp.jsx";
import Login from "./screen/Login/Login.jsx";
import Layout from './components/Layout/Layout';
import AddReview from "./components/AddReview/AddReview.jsx";
import { useState } from 'react';
import AddCourse from './components/AddCourse/AddCourse';
import HomePage from './screen/HomePage/HomePage.jsx';
import FetchCourses from './components/FetchCourses/FetchCourses.jsx';
import UpdateReview from './components/ReviewsUpdate/UpdateReview.jsx';
import Courses from './screen/Courses/Courses.jsx';
function App() {
  const [user, setUser] = useState();
  const [loginUser, setLoginUser] = useState();
  const [review, setReview] = useState();
  // console.log(user);
  // console.log(loginUser);
  // const [course, setCourse] = useState();
  // const [review, setReview] = useState();
  return (
    <div className="App">
      <Layout user={user} setUser={setUser} {...loginUser} setLoginUser={setLoginUser}>
        <Routes>
          <Route path="/" element={<>
            <HomePage user={user} setUser={setUser} />
            <Test user={user} setUser={setUser} home={true} />
          </>} />
          <Route path="/Courses" element={<>
            <Courses user={user} setUser={setUser} />

          </>} />
          <Route path="/Front-End" element={
            <>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Front-End"}/>
        </>} />
        <Route path="/Back-End" element={<>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Back-End"}>
          </Test>
        </>} />
        <Route path="/database" element={<>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Database"}>
          </Test>
        </>} />
        <Route path="/devops" element={<>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Dev-Ops"}>
          </Test>
        </>} />
        <Route path="/mobile" element={<>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Mobile"}>
          </Test>
        </>} />
        <Route
          path="/signup"
          element={<>
            <SignUp
              user={user} setUser={setUser} />
          </>} />
          <Route path="/courses/addreview/${id}" element={<>
            <AddReview user={user} setUser={setUser} review={review} setReview={setReview} />
          </>} />
          <Route path="update/review" element={
            <UpdateReview user={user} setUser={setUser} review={review} setReview={setReview} {...loginUser} />
          } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;