import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Quiz() {

  const [question_category, setCategory] = useState('');
  const [question_difficulty, setDifficulty] = useState('');
  const [company, setcompany] = useState('');
  const [result, setResult] = useState([]);

  console.log(result);

  const CategoryHandel = (e) => { setCategory(e.target.value) }
  const DifficultyHandel = (e) => { setDifficulty(e.target.value) }
  const companyHandel = (e) => { setcompany(e.target.value) }

  const Color = (id)=>{
    if(id ==='Easy'){
      return '#59CE8F';
    }else if(id === 'Medium'){
      return '#FEB139';
    }else{
      return '#EB1D36';
    }
  }

  useEffect(() => {
    axios.get("http://localhost/project_9/php_crud/quiz.php?question_category=" + question_category + "&question_difficulty=" + question_difficulty + "&company=" + company).then((res) => {
      console.log(typeof res.data);
      setResult(res.data);
      console.log(result);

    })
  }, [question_category, question_difficulty, company])


  return (
<>

      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Intreview Warmup
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
                    Intreview Warmup
                  </li>
                  
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
                        Intreview Warmup
                      </li>
                    </ol>
                  </nav>
                  </ol>
                  </nav>
                </div>
            </div>
          </div>
        </div>
        {/* Header End */}
        <div className='container' style={{ marginTop: '7%', width: '50%' }}>
          <h1>Please Select Your Standards:</h1>

          <div className="form-group">
            <label htmlFor="Category">Category &nbsp; </label>
            <select id="Category" className="form-control" onChange={CategoryHandel}>
              <option value=''>Full stack</option>
              <option value='Front-End'>Front-End</option>
              <option value='Back-End'>Back-End</option>
              <option value='Database'>Database</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Category">Difficulty &nbsp; </label>
            <select id="Category" className="form-control" onChange={DifficultyHandel} >
              <option value=''>General</option>
              <option value='Easy'>Easy</option>
              <option value='Medium'>Medium</option>
              <option value='Hard'>Hard</option>

            </select>

          </div> <div className="form-group">
            <label htmlFor="Category">Company &nbsp; </label>
            <select id="Category" className="form-control" onChange={companyHandel} >
              <option value=''>General</option>
              <option value='Orange'>Orange</option>
              <option value='Microsoft'>Microsoft</option>
              <option value='Amazon'>Amazon</option>
            </select>
            {/* {company} */}
          </div>
        </div>

        <div className="container mt-5 d-flex flex-wrap justify-content-around"> 
           <div className="row">

          {result.map((data, key) => {
            return (
                  <div className="col-md-4 mb-3" >
                    <div className="card p-3 mb-2" style={{color:'black', borderRadius: '15px' ,textAlign:'center' }}>

                      <h4><strong>Company : {data.company}</strong></h4>
                      <div className="text-center">

                        

                        <div className="badge">
                          {" "}
                          <h6><strong >Type :  &nbsp;{data.question_category}</strong></h6>
                        </div>
                        <br></br>
                        <div className="badge">
                          {" "}
                          <h6><strong >Difficulty :  &nbsp;<span style={{ color: Color(data.question_difficulty) }}>{data.question_difficulty}</span></strong></h6>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                          <div className="progress" style={{ backgroundColor: Color(data.question_difficulty),height: "8px" }}>
                            <div
                              id={data.question_difficulty}
                              className="progress-bar"
                              role="progressbar"
                            
                        
                            />
                          </div>
                          <div className="mt-3">
                            {" "}
                            <span className="text1">
                              <span className="text2"></span>
                            </span>{" "}
                            <Link to={{
                              pathname: "/question/" + data.question_category + '/' + data.question_difficulty + '/' + data.company,
                            }}>
                              <button className='btn btn-primary' style={{ borderRadius: '5px' , background: '#B2B1B9' , border :'white solid '}}> View Question</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
            )
          })} 
                         </div>

        </div>
      </>

      )

}