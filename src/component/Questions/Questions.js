import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useParams} from 'react-router-dom';

let A ;

function Questions() {
    const params = useParams();
    console.log(params.cat);
    const [question, setquestion] = useState([]);
    const [show, setshow] = useState(false);

    useEffect(() => {
        const loadquestion = async () => {
            const response = await axios.get("http://localhost/project_9/php_crud/view.php?question_category="+ params.cat+"&question_difficulty=" + params.diff+"&company="+params.comp).then((data) => {
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
        <div className='container' style={{marginTop : '10%'}} >
            {question.map((item, key) => {
                return (
                    <div key={key}>
                        
                        <div style={{ width: '75%' , marginLeft:'10%' }}>
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
                                                    <ul Type="none" style={{TextAlign:'justify'}}>
                                                        <li>{A[0]}</li>
                                                        <li>{A[1]}</li>
                                                        <li>{A[2]}</li>
                                                        <li>{A[3]}</li>
                                                    </ul>
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
             <button className="btn btn-primary" style={{marginLeft:'41%' }} onClick={clickHandel} >Show Correct Answer</button>
                       </div>
    )

}
export default Questions;