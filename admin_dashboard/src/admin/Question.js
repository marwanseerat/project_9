import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './auction.css';
import {Link } from 'react-router-dom';



function Question(props) {
  const [aution, setAution] = useState([]);

  const postId=sessionStorage.getItem('postId');


  useEffect(()=>{
    getauction();
}, [aution]);

    function getauction(){
    axios.get(`http://localhost/project_9/admin_dashboard/API/admin_question.php?is_accepted=1`)
      // console.log(aa)
      .then((res) => {
        //  console.log(res)
        const info = res.data;
        setAution(info);
      });

  }

  const deleteAuction=(postId)=>{
    // axios.delete(`http://localhost/redux-project9/API/deleteauction.php${postId}/delete`)
    axios.delete('http://localhost/project_9/admin_dashboard/API/delete_question.php?id='+postId)
    .then(function(res){
      console.log(res.data);
      const info = res.data;
        getauction(info);
    })
  }

    return(
        <>
  <link
    href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet"  type="text/css" />
  <div className="app-container">
  <nav className="navv">
      <ul className="nav__list">
        
        <li className="nav__list-item nav__list-item--active">
          <a href="#" className="nav__item-link">
          Question
          </a>
        </li>
        <li className="nav__list-item">
        <Link to="/userA" className="nav__item-link">
            Users
          </Link>
        </li>
        
      
      </ul>
    </nav>
    <div className="app-view">
     
      <main className="content">
        {/* <div className="d-flex"> */}
        <h1>Question</h1>
        {/* <button className="bttn btn-add">Add </button>; */}

        {/* </div> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Type</th>
              <th>Company</th>
              <th>Created By</th>
              <th>Question</th>
              <th>Answers</th>
              <th>Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            
            {aution?.map((info) =>
            <>
            <tr className='td-data' key={info}>
            
              <th>{info.question_id}</th>
              <th>{info.question_category}</th>
              <th>{info.question_difficulty	}</th>
              <th>{info.Type}</th>
              <th>{info.company}</th>
              <th>{info.Created_by}</th>
              <th>{info.question}</th>
              <th>{info.question_answer}</th>
              <th>{info.correct_answer}</th>
              <td>
        {/* <button className="btn" onClick={(e)=>{e.preventDefault();sessionStorage.setItem('postId',info.id); window.location=`/EditAuctionAdmin/${info.id}/edit`}}>Edit</button> */}
        {/* <Link to={`/EditAuctionAdmin/${info.id}/edit`} className="btn" style={{borderRadius:'12px'}}>Edit</Link> */}
        <button className="btn btn-delete" onClick={()=>deleteAuction(info.question_id)}>Delete</button>
        {/* <button className="btn btn-delete" onClick={(e)=>{e.preventDefault();sessionStorage.getItem('postId',info.id)}}>Delete</button> */}
        {/* <Link to="/AddAuctionAdmin" onClick={()=>deleteAuction(info.id)} className="btn btn-delete" style={{borderRadius:'12px'}}>Delete</Link> */}
              </td>
            </tr>
            </>
       )}
            
          </tbody>
        </table>
      </main>
    </div>
  </div>
</>


        );
    }


export default Question;