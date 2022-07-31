import { fireEvent } from '@testing-library/react';
import axios from 'axios';
import React , {useState , useEffect}from 'react';


// let result = []; 

export default function Quiz() {


    const [question_category, setCategory] = useState('');
    const [question_difficulty, setDifficulty] = useState('');
    const [company, setcompany] = useState('');
    const [result, setResult] = useState([]);

    console.log(result);


    const CategoryHandel = (e) => { setCategory(e.target.value) }
    const DifficultyHandel = (e) => { setDifficulty(e.target.value) }
    const companyHandel = (e) => { setcompany(e.target.value) }


    useEffect (() => {

        axios.get("http://localhost/project_9/php_crud/quiz.php?question_category="+ question_category+"&question_difficulty=" + question_difficulty+"&company="+company).then((res)=> {
        console.log(typeof res.data);
       
             setResult(res.data) ;
        
          

           console.log(result);

        })
    },[question_category,question_difficulty,company])




    return (

        <div>
             <div className="form-group">
                <label htmlFor="Category">Category &nbsp; </label>
                <select id="Category" className="col-4" onChange={CategoryHandel} >
                    <option value=''>Full stack</option>
                    <option value='Front-End'>Front-End</option>
                    <option value='Back-End'>Back-End</option>
                    <option value='Database'>Database</option>

                </select>
                {question_category}
            </div> <div className="form-group">
                <label htmlFor="Category">Difficulty &nbsp; </label>
                <select id="Category" className="col-4" onChange={DifficultyHandel} >
                    <option value=''>General</option>
                    <option value='Easy' >Easy</option>
                    <option value='Medium'>Medium</option>
                    <option value='Hard'>Hard</option>

                </select>
                {question_difficulty}

            </div> <div className="form-group">
                <label htmlFor="Category">Company &nbsp; </label>
                <select id="Category" className="col-4" onChange={companyHandel} >
                    <option value=''>General</option>
                    <option value='Orange'>Orange</option>
                    <option value='Microsoft'>Microsoft</option>
                    <option value='Amazon'>Amazon</option>

                </select>
                {company}

            </div>


            {result.map((data , key)=> {
             
            //   console.log(data.question_category);
            //   console.log(data.question_difficulty);
            //   console.log(data.company);

              return (

            

<div key={key}>
<div className="card" style={{ width: "18rem" }}>
  <img className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">      {data.question_category}</h5>
    <p className="card-text">
    {data.question_difficulty}
    {data.company}


    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
              </div>


              )

              
            })}
        </div>
    )


}
