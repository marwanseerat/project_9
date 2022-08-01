import Home from "./Home";
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"

import './style.css'
import LoginAndReg from "./Login/LoginAndReg";
import Welcome from "./Login/Welcome";
import Profile from "./component/profile";







function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
               <Route path="/reg" element={<LoginAndReg />}/>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
