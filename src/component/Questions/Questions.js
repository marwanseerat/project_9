import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
let A ;
function Questions() {
    const {question_id } = useParams(); 
    const [question, setquestion] = useState([]);
    const [show, setshow] = useState(false);

    useEffect(() => {
        const loadquestion = async () => {
            const response = await axios.get(`http://localhost/project_9/php_crud/view.php`).then((data) => {
                console.log(data.data);
                setquestion(data.data);
            });
        };
        loadquestion();
    }, []);


    const fun =(q)=>{
        var n = q.trim().split(',');
        console.log(typeof(n));
        return(n);
    }

    const clickHandel = (event) => {
        event.preventDefault();
        setshow(!show);
    }
    return (
        <div className='App'>           
         <button className="btn btn-primary  " onClick={clickHandel} style={{marginTop:'10%'}}>Show Correct Answer</button>

            {question.map((item, key) => {
                return (
                    <div key={key}>

                        <div style={{ width: '50%' }}>
                                        <Card className="text-center">
                                            <Card.Header> 
                                            <small>{item.question_category}</small>
                                            <br></br>
                                            Question Number {item.question_id}
                                            </Card.Header>
                                            <Card.Body>    
                                              {/* <small>{item.Created_by}</small> */}
                                                <Card.Title>{item.question}</Card.Title>
                                                <Card.Text className="commaSeparated">
                                                      <p style={{display:'none'}}>{ A = fun(item.question_answer)}</p> 
                                                   - {A[0]}<br></br>
                                                   - {A[1]}<br></br>
                                                   - {A[2]}<br></br>
                                                   - {A[3]}<br></br>
                                                </Card.Text>
                                            </Card.Body>
                                            {show &&
                                            <Card.Footer className="text-muted">cprrect answer is :
                                            <br></br> {item.correct_answer}</Card.Footer>
                                             }
                                        </Card>
                                        <br></br>
                                    </div>
                                </div>

                )

            })}
                       </div>
    )

}
export default Questions;