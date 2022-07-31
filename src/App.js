import Home from "./Home";
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import About from "./component/About"
import Contact from "./component/Contact"
import Courses from "./component/Courses"
import Quiz from "./component/quiz_page/Quiz";
import Questions from "./component/Questions/Questions";



import './style.css'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Courses" element={<Courses />}/>
      </Routes>
    </BrowserRouter>
    <Quiz/>
    <Questions/>

    <Footer/>
    </div>
  );
}

export default App;
