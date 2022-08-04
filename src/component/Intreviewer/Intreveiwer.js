import React, { useState } from 'react';
import axios from 'axios';


function Intreviewer() {
    const [isSubmit, setSubmit] = useState([]);
    const [Created_by, setCreated_by] = useState('Created_by');
    const [company, setcompany] = useState('');
    const [question_category, setCategory] = useState('');
    const [Type, setType] = useState('');
    const [question_difficulty, setDifficulty] = useState('');

    const Created_byHandel = (e) => { setCreated_by(e.target.value) }
    const CategoryHandel = (e) => { setCategory(e.target.value) }
    const TypeHandel = (e) => { setType(e.target.value) }
    const DifficultyHandel = (e) => { setDifficulty(e.target.value) }
    const companyHandel = (e) => { setcompany(e.target.value) }

    const [inputFields, setInputFields] = useState([
        { question: '', answer: '', correct_answer: '' }
    ])

    console.log(inputFields);

    const addFields = (event) => {
        event.preventDefault();
        let newfield = { question: '', answer: '', correct_answer: '' }
        setInputFields([...inputFields, newfield])

    }

    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        data[index][event.target.name] = { ...event.target.value };
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }


    const clickHandel = (event) => {

        inputFields.map((value, index) => {
            axios.post('http://localhost/project_9/php_crud/insert.php?&Created_by=' + Created_by + '&company=' + company + '&question_category=' + question_category + '&Type=' + Type + '&question_difficulty=' + question_difficulty + '&question=' + value.question + '&question_answer=' + value.answer + '&correct_answer=' + value.correct_answer)
                .then((data) => {
                    // event.preventDefault();

                })
                .catch((error) => {
                    console.error(error);
                });
        })
        event.preventDefault();
        setSubmit(!isSubmit)

    }
    return (

        <>

            {/* Header Start */}

            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">
                                Intreviewer Question
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
                                        Intreviewer Question
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">

                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Write Question
                        </h6>

                        {/* Header End */}
                        <form className="row g-5" style={{ marginTop: '1%', width: '50%', marginLeft: '300px' }}>



                            <div className="form-group col-md-6">
                                <label htmlFor="Category">Category </label>
                                <select id="Category" className="col-12" onChange={CategoryHandel} data-toggle="dropdown" required><i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <option>Full Stack</option>
                                    <option>Front-End</option>
                                    <option>Back-End</option>
                                    <option>Database</option>

                                </select>
                            </div>

                            <br></br>

                            <div className="form-group col-md-6">
                                <label>Type </label>
                                <select className="col-12" name="Type" onChange={TypeHandel} required>
                                    <option value="Multiple Choice">Multiple Choice</option>
                                    <option value="True / False">True / False</option>
                                </select>

                            </div>
                            <br></br>


                            <div className="form-group col-md-6">
                                <label htmlFor="Category">Difficulty &nbsp; </label>
                                <select id="Category" className="col-12" onChange={DifficultyHandel} required>
                                    <option value=''>General</option>
                                    <option value='Easy' >Easy</option>
                                    <option value='Medium'>Medium</option>
                                    <option value='Hard'>Hard</option>

                                </select>
                            </div>
                            <br></br>

                            <div className="form-group col-md-6">
                                <label htmlFor="Category">Company &nbsp; </label>
                                <select id="Category" className="col-12" name="company" onChange={companyHandel} required>
                                    <option value=''>General</option>
                                    <option value='Orange'>Orange</option>
                                    <option value='Microsoft'>Microsoft</option>
                                    <option value='Amazon'>Amazon</option>
                                </select>
                                {/* {company} */}
                            </div>

                            <br></br>

                            <div className="form-group">
                                <label>Created By :</label>
                                <input type="text" className="form-control" placeholder="Please Insert Your Name" onChange={Created_byHandel} required/>
                            </div>

                            <br></br>


                            {inputFields.map((input, index) => {
                                return (
                                    <div className="form-group">
                                        <div key={index}>
                                            <div><hr style={{ height: '2px', borderWidth: '0', color: 'black', backgroundColor: 'black' }}></hr></div>
                                            <label>Question / Statement</label>
                                            <input
                                                className="form-control"
                                                name='question'
                                                placeholder='question'
                                                onChange={event => handleFormChange(index, event)}
                                                required
                                            />
                                        </div>

                                        <label>Answer</label>
                                        <input
                                            className="form-control"
                                            name='answer'
                                            placeholder='answer'
                                            onChange={event => handleFormChange(index, event)}
                                            required
                                            />

                                        <label>Correct Answer</label>
                                        <input
                                            className="form-control"
                                            name='correct_answer'
                                            placeholder='answer'
                                            onChange={event => handleFormChange(index, event)}
                                            required
                                        />

                                        <div><hr style={{ height: '2px', borderWidth: '0', color: 'black', backgroundColor: 'black' }}></hr></div>
                                    </div>


                                )
                            })}
                            <button className='btn btn-primary col-md-4' style={{ borderRadius: '5px', marginLeft: '10%' }} onClick={addFields}>Add More</button>
                            <input type="submit" value="submit" style={{ borderRadius: '5px', marginLeft: '13%' }} className="btn btn-primary col-md-4" onClick={clickHandel} />

                            <span id="alert" className="alert alert-success" role="alert" style={{ display:isSubmit?"none":"block" , width:'100%' , height:'50px'}} >
                            <p class="alert-heading">Thank You , Your Questions Have Been Sent Successfuly</p>
                            </span>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Intreviewer;
