import Loginpage from "../pages/Login";
import { Route,Routes} from "react-router-dom";
import Homepage from "../pages/Home.js";



function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
