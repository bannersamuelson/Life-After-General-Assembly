import './App.css';
import { Routes, Route } from 'react-router-dom';
import Test from "./test/test.js";
import SignUp from "./screen/SignUp/SignUp.jsx"
import Login from "./screen/Login/Login.jsx"
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
