import React from 'react'
import '../style.css'

function Service() {
  return (
    <div>
         <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-3">
        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item text-center pt-3">
            <div className="p-2">
            <i class="fa-solid fa-3x fa-dumbbell text-primary mb-4"></i>
              {/* <i className="fa fa-3x fa-graduation-cap text-primary mb-4" /> */}
              <h5 className="mb-3">Practice answering interview questions</h5>
              <p>
               preparation is key. Use Wajih to Wormup regularly to stay prepared for interviews, so you don't have to start from scratch when you're invited for one.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item text-center pt-3">
            <div className="p-2">
            <i class="fa-solid fa-3x fa-magnifying-glass text-primary mb-4"></i>
          
              {/* <i className="fa fa-3x fa-globe text-primary mb-4" /> */}
              <h5 className="mb-3">Get insights about your answers</h5>
              <p>
              Take your time to answer each question. No grades, just insights about what you said. your just see question related to your standard .
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item text-center pt-3">
            <div className="p-2">
            <i class="fa-solid fa-3x fa-chart-line text-primary mb-4"></i>
              {/* <i className="fa fa-3x fa-home text-primary mb-4" /> */}
              <h5 className="mb-3">Keep improving</h5>
              <p>
              Use what you’ve learned and jump back in for another round. Keep building your confidence in a judgement-free zone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Service