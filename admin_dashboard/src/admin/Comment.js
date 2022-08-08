import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './auction.css';
import {Link } from 'react-router-dom';



function Comment(props) {
  const [comment, setComment] = useState([]);


  useEffect(()=>{
    getComment();
}, [comment]);

function getComment(){
  axios.get(`http://localhost/redux-project9/API/admincomment.php`)
    // console.log(aa)
    .then((res) => {
      //  console.log(res)
      const info = res.data;
      setComment(info);
    });

}

  
  const deleteComment=(postId)=>{
    axios.delete(`http://localhost/redux-project9/API/deleteComment.php?id=`+postId)
    .then(function(res){
      console.log(res.data);
      const info = res.data;
      getComment(info);
    })
  }

    return(
        <>
  <link
    href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet"  type="text/css" />
  <div className="app-container">
  <nav className="navv">
      <img src='/logo.png' width={'100px'} style={{marginInline:'30px'}} />
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/dashboard" className="nav__item-link">
           <h2 style={{color:'goldenrod'}}>Dashboard</h2> </Link>
        </li>
        <li className="nav__list-item ">
          <Link to="/auction" className="nav__item-link">
            Products
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/userA" className="nav__item-link">
            Users
          </Link>
        </li>
        <li className="nav__list-item nav__list-item--active">
          <a href="#" className="nav__item-link">
            Comments
          </a>
        </li>
        <li className="nav__list-item">
        <Link to="/loginA" className="nav__item-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
    <div className="app-view">
      <nav className="utility-bar">
        <div className="utility-bar__inner">
          <ul className="utility-bar__list">
            <li className="utility-bar__list-item">
              {/* Admin  */}
            </li>
          </ul>
          <a href="#" className="utility-bar__account">
            <span className="utility-bar__account-avatar" />
            <span className="utility-bar__account-name">ِadmin@mail.com</span>
          </a>
        </div>
      </nav>
      <main className="content">
        {/* <div className="d-flex"> */}
        <h1>Comments</h1>
        {/* <button className="bttn btn-add">Add </button>; */}
        {/* </div> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Comment</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {comment?.map((info) =>
            <>
            <tr className='td-data' key={info}>
              <th>{info.id}</th>
              <th>{info.text}</th>
              <th>{info.user_id}</th>

              <td>
                {/* <button className="btn">Edit</button> */}
                {/* <Link to={`/EditAuctionAdmin/${info.id}/edit`} className="btn" style={{borderRadius:'12px'}}>Edit</Link> */}
                <button className="btn btn-delete" onClick={()=>deleteComment(info.id)}>Delete</button>
                {/* <Link to="/AddAuctionAdmin" className="btn btn-delete" style={{borderRadius:'12px'}}>Delete</Link> */}
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


export default Comment;