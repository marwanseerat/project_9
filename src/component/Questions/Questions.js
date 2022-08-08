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
    const [login_show, setloginshow] = useState(false);


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
        // console.log( sessionStorage.getItem("user_info"));
        if( sessionStorage.getItem("user_info") && sessionStorage.getItem("user_info") != 0)
        {

        setshow(!show);
    } 
    else
    {
     setloginshow(!login_show);
    }
    }
    return (
        <div className='container' style={{marginTop : '10%'}} >
         
            
            
            
            {question.map((item, key) => {
                return (
                    <div key={key}>
                        
                        <div style={{ width: '75%' , marginLeft:'10%' }}>
                                        <Card className="text-left">
                                            <Card.Header style={{backgroundColor:'#06BBCC' , color:'white'}}> 
                                            <strong>{item.question_category}</strong>
                                            <br></br>
                                            Question Number {item.question_id}
                                            </Card.Header>
                                            <Card.Body>    
                                              {/* <small>{item.Created_by}</small> */}
                                                <Card.Title>{item.question}</Card.Title>
                                                <Card.Text className="commaSeparated" style={{TextAlign:'center'}}>
                                                      <p style={{display:'none'}}>{ A = fun(item.question_answer)}</p> 
                                                    <ol Type="A" >
                                                        <li>{A[0]}</li>
                                                        <li>{A[1]}</li>
                                                        <li>{A[2]}</li>
                                                        <li>{A[3]}</li>
                                                    </ol>
                                                </Card.Text>
                                            </Card.Body>
                                            {show &&
                                            <Card.Footer class="alert alert-info"><strong>Correct Answer is :
                                            {item.correct_answer}</strong></Card.Footer>
                                             }
                                        </Card>
                                        <br></br>
                                    </div>
                                </div>

                )

            })}

{login_show && 
            <div class="alert alert-info" id="msg">
                You have to login to view answers 
                <a href="/login
                "><button className="btn btn-primary" style={{  marginLeft:'3%' }}>login</button></a>
            </div>
            
            
            }
         
           <button className="btn btn-primary" style={{marginLeft:'41%' }} onClick={clickHandel} >Show Correct Answer</button>
                       </div>  
    )

}
export default Questions;