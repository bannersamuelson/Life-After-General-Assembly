import { Routes, Route } from 'react-router-dom';
import Test from "./test/test.js";
import SignUp from "./screen/SignUp/SignUp.jsx"
import Login from "./screen/Login/Login.jsx"
import Layout from './components/Layout/Layout';
import { useState } from 'react';
import AddCourse from './components/AddCourse/AddCourse';
function App() {
  const [user, setUser] = useState();
  // const [course, setCourse] = useState();
  // const [review, setReview] = useState();
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser}><Test user={user} setUser={setUser}/></Layout>}/>
        <Route path="/signup" element={<Layout user={user} setUser={setUser}><SignUp user={user} setUser={setUser}/></Layout>} />
        <Route path="/login" element={<Layout user={user} setUser={setUser}><Login user={user} setUser={setUser} /></Layout>} />
        <Route path="/addcourse" element={<Layout user={user} setUser={setUser}><AddCourse user={user} setUser={setUser}/></Layout>} />
      </Routes>
    </div>
  );
}

export default App;
