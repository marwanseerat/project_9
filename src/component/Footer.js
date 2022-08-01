import React from 'react'
import './footer.css'
// import emailjs from 'emailjs-com'
function Footer() {
  return (
    <div>
 <footer className="footer-distributed">
  <div className="footer-left">
    <h3>
      Wajih<span>Company</span>
    </h3>
    <p className="footer-links">
      <a href="../Home">Home</a>·<a href="#">Blog</a>·
      <a href="./About">About</a>.<a href="#">Contact</a>
    </p>
    <p className="footer-company-name">WajihTeam © 2021</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p>
        <span>Fifth Area, Aqaba</span> Jordan
      </p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>+962 771234567</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p>
        <a href="mailto:support@company.com">Wajih Companys@gmail.com</a>
      </p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>About the company</span>
      Wajih Company is a interview website for prepration for a technical interview questions
    </p>
    <div className="footer-icons">
      <a href="https://www.facebook.com/interviewbit">
      <i class="fa-brands fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com/interview_bit">
        <i className="fa fa-twitter" />
      </a>
      <a href="https://www.linkedin.com/in/marwa-nseerat-971057227/">
        <i className="fa fa-linkedin" />
      </a>
      <a href="https://github.com/marwanseerat/project_9">
        <i className="fa fa-github" />
      </a>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer