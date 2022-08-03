import React from 'react'
import './Post.css'
import axios from 'axios';
import Profile from './Profile/Profile';

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
                          <div className="h5 m-0">@LeeCross</div>
                          <div className="h7 text-muted">Miracles Lee Cross</div>
                        </div>
                      </div>
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
                      <i className="fa fa-clock-o" /> Hace 40 min
                    </div>
                
                    <p className="card-text">
                    { post.topic}
                    </p>
                  </div>
                  <div className="card-footer">
                    <a href="#" className="card-link">
                      <i className="fa fa-gittip" /> Like
                    </a>
                    <a href="#" className="card-link">
                      <i className="fa fa-comment" /> Comment
                    </a>
                    <a href="#" className="card-link">
                      <i className="fa fa-mail-forward" /> Share
                    </a>
                  </div>
                </div>
                </div>))}
               
                {/* Post /////*/}
              </div>
            

              <div class="col-md-3">
                <div class="card gedf-card">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
                <div class="card gedf-card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>

                    <div class="card gedf-card">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
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