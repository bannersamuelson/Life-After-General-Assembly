import { Routes, Route } from 'react-router-dom';
import Test from "./test/test.js";
import SignUp from "./screen/SignUp/SignUp.jsx";
import Login from "./screen/Login/Login.jsx";
import Layout from './components/Layout/Layout';
import AddReview from "./components/AddReview/AddReview.jsx";
import { useState } from 'react';
import AddCourse from './components/AddCourse/AddCourse';
import HomePage from './screen/HomePage/HomePage.jsx';
function App() {
  const [user, setUser] = useState();
  const [loginUser, setLoginUser] = useState();
  // console.log(user);
  // console.log(loginUser);
  // const [course, setCourse] = useState();
  // const [review, setReview] = useState();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser}>
          <HomePage user={user} setUser={setUser}/>
          <Test user={user} setUser={setUser} home={true}/>
        </Layout>} />
        <Route path="/front" element={<Layout user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser}>
          <h1>FrontEnd</h1>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Front-End"}>
          </Test>
        </Layout>} />
        <Route path="/back" element={<Layout user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser}>
          <h1>BackEnd</h1>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Back-End"}>
          </Test>
        </Layout>} />
        <Route path="/database" element={<Layout user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser}>
          <h1>Database</h1>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Database"}>
          </Test>
        </Layout>} />
        <Route path="/devops" element={<Layout user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser}>
          <h1>Dev-Ops</h1>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Dev-Ops"}>
          </Test>
        </Layout>} />
        <Route path="/mobile" element={<Layout user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser}>
          <h1>Mobile</h1>
          <Test user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser} types={"Mobile"}>
          </Test>
        </Layout>} />
        <Route path="/signup" element={<Layout user={user} setUser={setUser}>
          <SignUp user={user} setUser={setUser} />
        </Layout>} />
        <Route path="/login" element={<Layout user={user} setUser={setUser}>
          <Login loginUser={loginUser} setLoginUser={setLoginUser} />
        </Layout>} />
        <Route path="/addcourse" element={<Layout user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser}>
          <AddCourse user={user} setUser={setUser} />
        </Layout>} />
        <Route path="/courses/addreview/${id}" element={<Layout user={user} setUser={setUser} loginUser={loginUser} setLoginUser={setLoginUser}>
          <AddReview user={user} setUser={setUser} />
        </Layout>} />
      </Routes>
    </div>
  );
}

export default App;
