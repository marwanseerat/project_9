import React from 'react'
import '../style.css'

function PopularCourses() {
  return (
    <div>
         <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Videos
        </h6>
        <h1 className="mb-5">Popular Video</h1>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
            <iframe width="400" height="300" src="https://www.youtube.com/embed/umQKkcBPL08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
            
            </div>
            <div className="text-center p-4 pb-0">
              
              <h5 className="mb-4">
                INTERVIEW QUESTION              
             </h5>
             <p>TELL ME ABOUT YOURSELF? Concentrate on telling them about your work-related skills as opposed to your home life</p>
            </div>
            <div className="d-flex border-top">
              
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-clock text-primary me-2" />
                Short Video
              </small>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
            <iframe width="400" height="300" src="https://www.youtube.com/embed/qtulf_yrzR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </div>
            <div className="text-center p-4 pb-0">

              <h5 className="mb-4">
              Interview Questions and Answers
              </h5> 
              <p>This video is perfect for who has an interview soon, and doesn’t have time.</p>
            </div>
            <div className="d-flex border-top">
              
              <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-clock text-primary me-2" />
                Short Video 
              </small>
              
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="course-item bg-light">
            <div className="position-relative overflow-hidden">
            <iframe width="400" height="300" src="https://www.youtube.com/embed/FHJRwUsVIkI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
            </div>
            <div className="text-center p-4 pb-0">
              
            <h5 className="mb-4">
              Behavioral Interview Question
              </h5> 
              <p> In this video, Richard McMunn will teach you how to answer the tough behavioral interview question .</p>
            </div>
            <div className="d-flex border-top">
            <small className="flex-fill text-center border-end py-2">
                <i className="fa fa-clock text-primary me-2" />
                Short Video 
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default PopularCourses