import './App.css';
import Test from "./test/test.js";
import {SignUp} from "./SignUp/SignUp.js"
function App() {
  return (
    <div className="App">
      <Test></Test>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
