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
import BackEnd from './screen/BackEnd/BackEnd';
import Courses from './screen/Courses/Courses'


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
          <Route path="/courses" element={<>

            <Courses user={user} setUser={setUser} home={true} />
          </>} />
          <Route path="/:id" element={
            <>
              <FetchCourses user={user} setUser={setUser} setLoginUser={setLoginUser} {...loginUser} review={review} setReview={setReview}></FetchCourses>
              {/* <Test user={user} setUser={setUser} home={true} /> */}
            </>} />
          <Route path="/Front-End" element={
            <>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8363381ee7aa839c0f6e11d9c69b2db13b59197a
              <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Front-End"} />
            </>} />

          <Route path="/Back-End" element={<>

            <BackEnd user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Back-End"}>
            </BackEnd>
          </>} />
          <Route path="/database" element={<>
            <h1>Database</h1>
            <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Database"}>
            </Test>
          </>} />
          <Route path="/devops" element={<>
            <h1>Dev-Ops</h1>
            <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Dev-Ops"}>
            </Test>
          </>} />
          <Route path="/mobile" element={<>
            <h1>Mobile</h1>
            <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Mobile"}>
            </Test>
          </>} />
          <Route
            path="/signup"
            element={<>
              <SignUp
                user={user} setUser={setUser} />
            </>} />
          <Route path="/login" element={<>
            <Login loginUser={loginUser} setLoginUser={setLoginUser} />
          </>} />
          <Route path="/addcourse" element={<>
            <AddCourse user={user} setUser={setUser} {...loginUser} />
<<<<<<< HEAD
=======
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
>>>>>>> 9cc34cdc2dcde892de969334c51fdee1a83c6d85
=======

>>>>>>> 8363381ee7aa839c0f6e11d9c69b2db13b59197a
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

export default App