import Loginpage from "../pages/Login";
import SignupPage from "../pages/Siginup";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
