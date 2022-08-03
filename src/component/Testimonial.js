import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
    <div>
      <div className="text-center">
        <h4 className="section-title bg-white text-center text-primary px-3 mb-5">
          Testimonial
        </h4>
        {/* <h1 className="mb-5">Our Students Say!</h1> */}
        </div> 
    
        <div className="wrapper">
  <div className="box">
    <i className="fas fa-quote-left quote" />
    <p>
    I heard from Aya, my old colleague and college friend, that Wajih website provide a very good technical interview question. 
    </p>
    <div className="content">
      <div className="info">
        <div className="name"> Sara Kteifan</div>
        <div className="job">Designer |Web Developer</div>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
      </div>
      <div className="image">
        <img src="img/Sara_Kteifan.png" alt="" />
      </div>
    </div>
  </div>
  <div className="box">
    <i className="fas fa-quote-left quote" />
    <p>
    I heard from Sara, my old colleague and college friend, that Wajih website provide a very good technical interview question. 
    </p>
    <div className="content">
      <div className="info">
        <div className="name">Saja Al Ghalayini </div>
        <div className="job">Designer |Web Developer</div>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
          <i className="far fa-star" />
        </div>
      </div>
      <div className="image">
        <img src="img/saja.jpg" alt="" />
      </div>
    </div>
  </div>
  <div className="box">
    <i className="fas fa-quote-left  quote" />
    <p>
    I heard from Marwa, my old colleague and college friend, that Wajih website provide a very good technical interview question. 
    </p>
    <div className="content">
      <div className="info">
        <div className="name">Aya Alsawa</div>
        <div className="job">Designer |Web Developer</div>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="far fa-star" />
        </div>
      </div>
      <div className="image">
        <img src="img/Aya_s_image.png" alt="" />
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Testimonial