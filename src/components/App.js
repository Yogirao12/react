import Loginpage from "../pages/Login";
import SignupPage from "../pages/Siginup";
import Profilepage from "../pages/profile";
import Loader from "./Loader";
import { useAuth } from "../hooks/usersession";
import { Outlet } from "react-router-dom";
import { Route, Routes,Navigate } from "react-router-dom";
import Homepage from "../pages/Home.js";

import { useNavigate } from "react-router-dom";

function PrivateRoute(){
  //const redirect=useNavigate();
  let userinfo =useAuth();
  if(userinfo.user===null){
    console.log("null");
       return <Navigate to="/login"/>
  }else{
    console.log("yogi")
    return <Outlet/>
  }
}
function App() {
  const userInfo = useAuth();
  if (userInfo.loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/" element={<PrivateRoute/>}> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profilepage />} />
        {/* </Route> */}
        
      </Routes>
    </div>
  );
}

export default App;
