import Home from "./Home";
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Intreviewer from "./component/Intreviewer/Intreveiwer";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import Quiz from "./component/quiz_page/Quiz";
import Questions from "./component/Questions/Questions";
import './style.css'
import Post from "./component/Post";
import './style.css'
import LoginAndReg from "./Login/LoginAndReg";
import Register from "./Login/Register";
import Welcome from "./Login/Welcome";
import Profile from "./component/Profile/Profile";







function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/Intreviewer" element={<Intreviewer/>}/>
        <Route path="/question/:cat/:diff/:comp" element={<Questions />}/>      
        <Route path="/login" element={<LoginAndReg />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/welcome" element={<Welcome />}/>
        <Route path="/Profile" element={ <Profile />}/>
       
        </Routes>
    </BrowserRouter>
     <Footer/>


   </>
  );
}

export default App;
