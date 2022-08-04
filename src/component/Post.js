import React from 'react'
import './Post.css'
import axios from 'axios';
import Profile from './Profile/Profile';

// let user_info= sessionStorage.getItem("user_info");
// const info = user_info.split(' ');
// const email= info[0];
// const username= info[1];

class Post extends React.Component{
  
    state = {
    topic:'',
    posts: []
    }

   
    componentDidMount() {
        const url = 'http://localhost/project_9/php_crud/insertPost.php'
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ posts: data })
          console.log(this.state.posts)
         })
      }

      handleFormSubmit( event ) {
        event.preventDefault();
        console.log("handle request ");
        let formData = new FormData();
        formData.append('topic', this.state.topic)
        formData.append('time', this.state.time)
        axios({
            method: 'post',
            url: 'http://localhost/project_9/php_crud/insertPost.php',
            data: formData,   
        })
        .then(function (response) {
            //handle success
            console.log(response)
            // alert('New Post Successfully Added.');  
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }


    render(){
        return(
          <>
          <div className="container gedf-wrapper " style={{marginTop:'20vh'}}>
            <div className="row">
              <div className="col-md-3">
              <Profile/>
              </div>
             
              <div className="col-md-6 gedf-main" >
                {/*- \\\\\\\Post*/}
                <div className="card gedf-card">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs card-header-tabs"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="posts-tab"
                          data-toggle="tab"
                          href="#posts"
                          role="tab"
                          aria-controls="posts"
                          aria-selected="true"
                        >
                          Make a publication
                        </a>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="posts"
                        role="tabpanel"
                        aria-labelledby="posts-tab"
                      >
                        <div className="form-group">
                          <label className="sr-only" htmlFor="message">
                            post
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            rows={3}
                            placeholder="What are you thinking?"
                            defaultValue={""}
                            value={this.state.topic} 
                            onChange={e => this.setState({topic: e.target.value })}
                          />
                        </div>
                      </div>
                     
                    </div>
                    <br/>
                    <div className="btn-toolbar justify-content-between">
                      <div className="btn-group">
                        <button type="submit" className="btn btn-primary" onClick={e => this.handleFormSubmit(e)}>
                          share
                        </button>
                      </div>
                    
                    </div>
                  </div>
                </div>
                {/* Post /////*/}
               
                {/* Post /////*/}
                {/*- \\\\\\\Post*/}
                {this.state.posts.map((post,index) => (<div key={index}> 
                <div className="card gedf-card">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-2">
                          <img
                            className="rounded-circle"
                            width={45}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaFqZETyia_OGRMi21eSTZENOZRYGzGmHqrA&usqp=CAU"
                            alt=""
                          />
                        </div>
                        <div className="ml-2">
                          <div className="h5 m-0"></div>
                          <div className="h7 text-muted">.Wajih.com</div>
                        </div>
                      </div>
                      {/* {username} */}
                      <div>
                        <div className="dropdown">
                          <button
                            className="btn btn-link dropdown-toggle"
                            type="button"
                            id="gedf-drop1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-ellipsis-h" />
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="gedf-drop1"
                          >
                            <div className="h6 dropdown-header">Configuration</div>
                            <a className="dropdown-item" href="#">
                              Save
                            </a>
                            <a className="dropdown-item" href="#">
                              Hide
                            </a>
                            <a className="dropdown-item" href="#">
                              Report
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="text-muted h7 mb-2">
                      {" "}
                      <i className="fa fa-clock-o" /> {post.created_at.split(' ')[0]}
                    </div>
                
                    <p className="card-text">
                    { post.topic}
                    </p>
                  </div>
                
                </div>
                </div>))}
               
                {/* Post /////*/}
              </div>
            

              <div class="col-md-3">
                <div class="card gedf-card">
                
                    <div class="card-body">
                    <img  className="img-fluid  w-10 h-10 mb-3" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/1200px-Orange_logo.svg.png' style={{height:'10vh'  }}></img> <span style={{fontSize:'30px'  }}>Orange</span>
                        <h6 class="card-subtitle mb-2 text-muted">Interview</h6>
                        <p class="card-text">Orange Jordan is the leading operator of integrated communications services in the Kingdom, with a broad lineup of fixed, mobile, internet and data services
                            card's content.</p>
                       
                    </div>
                </div>
                <div class="card gedf-card">
                        <div class="card-body">
                         
                        <img  className="img-fluid  w-10 h-10 mb-3" src='https://avatars.githubusercontent.com/u/6154722?s=280&v=4' style={{height:'10vh'  }}></img> <span style={{fontSize:'30px'  }}>Microsoft</span>
                            <h6 class="card-subtitle mb-2 text-muted">Interview</h6>
                            <p class="card-text">Our mission is to enable people and businesses throughout the world to realize their full potential by creating technology that transforms the way people work, play, and communicate. 
                                card's content.</p>
                            
                        </div>
                    </div>

                    <div class="card gedf-card">
                        <div class="card-body">
                        <img  className="img-fluid  w-10 h-10 mb-3" src='https://policyviz.com/wp-content/uploads/2020/12/amazon-logo-square-285x300.jpg' style={{height:'10vh'  }}></img> <span style={{fontSize:'30px'  }}>Amazon</span>
                            <h6 class="card-subtitle mb-2 text-muted">Interview</h6>
                            <p class="card-text">mazon.com is a vast Internet-based enterprise that sells books, music, movies, housewares, electronics, toys, and many other goods, either directly or as the middleman between other retailers and Amazon.com’s millions of customers.
                                card's content.</p>
                          
                        </div>
                    </div>
                    </div>



            </div>
          </div>
        </>
        
         
        ) 
    }
}

export default Post;