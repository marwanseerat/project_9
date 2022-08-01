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


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/Intreviewer" element={<Intreviewer/>}/>
        <Route path="/question/:cat/:diff/:comp" element={<Questions />}/>      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
