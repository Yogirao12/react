import Loginpage from "../pages/Login";
import SignupPage from "../pages/Siginup";
import Profilepage from "../pages/profile";

import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<Profilepage />} />
      </Routes>
    </div>
  );
}

export default App;
