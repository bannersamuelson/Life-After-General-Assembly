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
import FrontEnd from './screen/FrontEnd/FrontEnd'
import Courses from './screen/Courses/Courses'
import Database from './screen/Database/Database'
import Mobile from './screen/Mobile/Mobile'
import Devops from './screen/Devops/Devops'
import Portfolio from './screen/Portfolio/Portfolio'


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
            <HomePage
              user={user}
              setUser={setUser} />
            <Test user={user} setUser={setUser} home={true} />
          </>} />
          <Route path="/courses" element={<>

            <Courses user={user} setUser={setUser} />
            <Test user={user} setUser={setUser} />
          </>} />
          <Route path="/:id" element={
            <>
              <FetchCourses
                user={user}
                setUser={setUser}
                setLoginUser={setLoginUser}
                {...loginUser}
                review={review}
                setReview={setReview}>
              </FetchCourses>
              {/* <Test user={user} setUser={setUser} home={true} /> */}
            </>} />
          <Route path="/Front-End" element={
            <>
              <FrontEnd
                user={user}
                setUser={setUser}
                loginUser={loginUser}
                setLoginUser={setLoginUser}
                types={"Front-End"} />
            </>} />

          <Route path="/Back-End" element={
            <>
              <BackEnd
                user={user}
                setUser={setUser}
                loginUser={loginUser}
                setLoginUser={setLoginUser}
                types={"Back-End"}>
              </BackEnd>
            </>} />
          <Route path="/portfolio" element={<>
            <Portfolio
              user={user}
              setUser={setUser}
              loginUser={loginUser}
              setLoginUser={setLoginUser}
              types={"Portfolio"}>
            </Portfolio>
          </>} />
          <Route path="/database" element={<>
            <Database
              user={user}
              setUser={setUser}
              loginUser={loginUser}
              setLoginUser={setLoginUser}
              types={"Database"}>
            </Database>
          </>} />

          <Route path="/devops" element={<>
            <Devops
              user={user}
              setUser={setUser}
              loginUser={loginUser}
              setLoginUser={setLoginUser}
              types={"Dev-Ops"}>
            </Devops>
          </>} />
          <Route path="/mobile" element={<>
            <Mobile
              user={user}
              setUser={setUser}
              loginUser={loginUser}
              setLoginUser={setLoginUser}
              types={"Mobile"}>
            </Mobile>
          </>} />
          <Route
            path="/signup"
            element={<>
              <SignUp
                user={user} setUser={setUser} />
            </>} />
          <Route path="/login" element={<>
            <Login
              loginUser={loginUser}
              setLoginUser={setLoginUser} />
          </>} />
          <Route path="/addcourse" element={<>
            <AddCourse u
              ser={user}
              setUser={setUser}
              {...loginUser} />
          </>} />
          <Route path="/courses/addreview/:id" element={<>
            <AddReview
              user={user}
              setUser={setUser}
              review={review}
              setReview={setReview} />
          </>} />
          <Route path="update/review" element={
            <UpdateReview
              user={user}
              setUser={setUser}
              review={review}
              setReview={setReview}
              {...loginUser} />
          } />
        </Routes>
      </Layout>
    </div>
  );
}

export default App