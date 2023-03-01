import Loginpage from "../pages/Login";
import SignupPage from "../pages/Siginup";
import Profilepage from "../pages/profile";
import Loader from "./Loader";
import { useAuth } from "../hooks/usersession";

import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home.js";

function App() {
  const userInfo = useAuth();
  if (userInfo.loading) {
    return <Loader />;
  }
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
