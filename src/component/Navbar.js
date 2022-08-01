import React from 'react'
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <div>
  <meta charSet="utf-8" />
  <title>WAJIH</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="" name="keywords" />
  <meta content="" name="description" />
 
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  
  {/* Icon Font Stylesheet */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  {/* Libraries Stylesheet */}
  <link href="lib/animate/animate.min.css" rel="stylesheet" />
  <link href="./lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Spinner Start */}

  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top p-0">
    <a
      href="#"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5">
      {/* <h2 className="m-0 text-primary">
        <i className="fa fa-book me-3" />
        eLEARNING
      </h2> */}
      <img className="m-0" src="img/logo1.png" style={{height:'4vw'}}/>
    </a>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0 collapse navbar-collapse justify-content-md-center">
        
        <Link to= '/' className="nav-item nav-link active">
      
          Home
    
        </Link>

        <Link to= '/about'className="nav-item nav-link">
    
          About
       
        </Link>
        
        <Link to= '/contact'className="nav-item nav-link">
          Contact
        </Link>
       
        <Link to= '/Intreviewer'className="nav-item nav-link">
        Intreviewer Question
        </Link>

        <Link to= '/quiz' className="nav-item nav-link">
          Interview 
        </Link>

       
      </div>


     <Link to= '/reg' className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"> 
     Join Now
        <i className="fa fa-arrow-right ms-3" />
        </Link>

     
    </div>
  </nav>
  {/* Navbar End */}
    </div>
  )
}

export default Navbar