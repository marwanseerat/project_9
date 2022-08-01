import React from 'react'
import "../style.css"


function About() {
  return (
    <div>
        <>
  
  {/* Header Start */}
  <div className="container-fluid bg-primary py-5 mb-5 page-header">
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
 
 
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="img/about1.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            About Us
          </h6>
          <h1 className="mb-4">Welcome to Wajih</h1>
          <p className="mb-4">
          Wajih Company is a interview website for prepration for a technical interview questions.
          </p>
          <p className="mb-4">
          Core business activities determine an organisation’s talent requirements. A candidate’s technical ability and understanding of the business will determine their ability to perform the job. You can assess the candidate’s basic knowledge of the subject, problem-solving skills, coding skills, and other requisites through an online test.</p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Front-end
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
               Back-end
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Database
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Full stack developer
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
               Designation
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
               UI and UX
              </p>
            </div>
          </div>
          <a className="btn btn-primary py-3 px-5 mt-2" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
         The Team
        </h6>
        <h1 className="mb-5"> Wajih Team</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/ibrahim.png" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-linkedin" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Ibrahim Tameme</h5>
              <small>Product Owner, Web Developer</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/marwa.png" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.facebook.com/gril.genration">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.linkedin.com/in/marwa-nseerat-971057227/">
                  <i className="fab fa-linkedin" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.instagram.com/marwa.nseerat98/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Marwa Nseerat</h5>
              <small>Scrum Master, Web Developer</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/samar1.jpg" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.facebook.com/samar.alkhamis.98">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.linkedin.com/in/samaralkhamis/">
                  <i className="fab fa-linkedin" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.instagram.com/samaralkhamiss/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Samar Al-khamis</h5>
              <small>Web Developer</small>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item bg-light">
            <div className="overflow-hidden">
              <img className="img-fluid" src="img/ghufran.png" alt="" />
            </div>
            <div
              className="position-relative d-flex justify-content-center"
              style={{ marginTop: "-23px" }}
            >
              <div className="bg-light d-flex justify-content-center pt-2 px-1">
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.facebook.com/ghufran.almomani">
                  <i className="fab fa-facebook-f" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.linkedin.com/in/ghufran-almomani-777b93232/">
                  <i className="fab fa-linkedin" />
                </a>
                <a className="btn btn-sm-square btn-primary mx-1" href="https://www.instagram.com/almomanighufran/">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <h5 className="mb-0">Ghufran Almomni</h5>
              <small>Web Developer</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
 
</>

    </div>
  )
}

export default About