import React from 'react'
import './profile.css';

function Profile() {
     let user_info= sessionStorage.getItem("user_info");
     console.log(user_info);
    const info = user_info.split(' ');
    const username= info[1];
    return (

<>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="container">
    <div className="row">
      <div className="col-md-4 mb30">
        <div className="card">
          <div className="card-content pt20 pb20 profile-header">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar6.png"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h4 className="card-title text-center mb20">{username}</h4>
            <p>
              Hello, I am Adam Voges from London, I am a professional designer
              at design_mylife. I hope you enjoy the Assan Templates and how its
              updated every month
            </p>
            <div className="text-center clearfix">
              <a
                href="#"
                className="social-icon-sm si-border si-facebook si-border-round"
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                href="#"
                className="social-icon-sm si-border si-twitter si-border-round"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                href="#"
                className="social-icon-sm si-border si-g-plus si-border-round"
              >
                <i className="fa fa-google-plus" />
              </a>
              <a
                href="#"
                className="social-icon-sm si-border si-skype si-border-round"
              >
                <i className="fa fa-skype" />
              </a>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4 mb20">
                <h5>947</h5>
                <h6 className="text-small text-muted">Followers</h6>
              </div>
              <div className="col-md-4 mb20">
                <h5>583</h5>
                <h6 className="text-small text-muted">Tweets</h6>
              </div>
              <div className="col-md-4 mb20">
                <h5>48</h5>
                <h6 className="text-small text-muted">Posts</h6>
              </div>
            </div>
            <a href="#" className="btn btn-primary btn-rounded">
              Follow
            </a>
            <hr />
            <div className="skill-bar mb20 clearfix">
              <span>HTML5 / CSS3</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "85%" }}
                />
              </div>
            </div>
            {/*skill bar*/}
            <div className="skill-bar mb20 clearfix">
              <span>Javascript</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "89%" }}
                />
              </div>
            </div>
            {/*skill bar*/}
            <div className="skill-bar mb20 clearfix">
              <span>Bootstrap</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            {/*skill bar*/}
            <div className="skill-bar clearfix">
              <span>Coffee</span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                  role="progressbar"
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: "95%" }}
                />
              </div>
            </div>
            {/*skill bar*/}
          </div>
          {/*content*/}
        </div>
      </div>
      </div>
      </div>
</>
)
}

export default Profile
