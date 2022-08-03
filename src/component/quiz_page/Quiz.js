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


  useEffect(() => {

    axios.get("http://localhost/project_9/php_crud/quiz.php?question_category=" + question_category + "&question_difficulty=" + question_difficulty + "&company=" + company).then((res) => {
      console.log(typeof res.data);
      setResult(res.data);
      console.log(result);

    })
  }, [question_category, question_difficulty, company])


  return (
    <>
      {/* Header Start */}
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
        {result.map((data, key) => {
          return (
            <div className="container mt-5 mb-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="card p-3 mb-2" style={{ backgroundColor: 'white', color: 'black' ,  borderRadius : '30px' }} ><strong>Company : &nbsp;{data.company}</strong>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                          {" "}
                          <i className="bx bxl-mailchimp" />{" "}
                        </div>
                        <div className="ms-2 c-details">
                          <h6 className="mb-0"></h6> <span></span>
                        </div>
                      </div>
                      <div className="badge">
                        {" "}
                        <span>Difficulty :  &nbsp;{data.question_difficulty}</span>{" "}
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="heading">
                      Difficulty :  &nbsp;{data.question_difficulty}
                        <br />
                        {data.question_category}
                      </h3>
                      <div className="mt-5">
                        <div className="progress" style={{backgroundColor : '#06BBCC'}}>
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
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
                            <button className='btn btn-primary' style={{ borderRadius: '5px' }}> View Question</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )
        })}
      </div>
    </>

  )

}