import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import './auction.css';
import {Link } from 'react-router-dom';



function Users() {
  const [user, setUser] = useState([]);

  const postId=sessionStorage.getItem('postId');

  useEffect(()=>{
    getauction();
}, [user]);

    function getauction(){
    axios.get(`http://localhost/project_9/admin_dashboard/API/adminuser.php`)
      // console.log(aa)
      .then((res) => {
        //  console.log(res)
        const info = res.data;
        setUser(info);
      });

  }


  const deleteuser=(postId)=>{
    axios.delete('http://localhost/project_9/admin_dashboard/API/deleteuser.php?id='+postId)
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
        <li className="nav__list-item">
          <Link to="/dashboard" className="nav__item-link">
           <h2 >Dashboard</h2> </Link>
        </li>
        <li className="nav__item-link">
          <Link to="/auction" className="nav__item-link">
          Question
          </Link>
        </li>
        <li className="nav__list-item nav__list-item--active">
          <a href="#" className="nav__item-link">
            Users
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
     
      <main className="content">
        {/* <div className="d-flex"> */}
        <div>

       
        <h1>Users</h1>

        {/* <button className="bttn btn-add">Add </button>; */}
        <Link to="/AddUserAdmin" className="bttn btn-add"><h2><span>Add</span></h2> </Link>
         </div>
        {/* </div> */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th>Start Date</th>
              <th>End Date</th> */}
            </tr>
          </thead>
          <tbody>
            
            {user?.map((info) =>
            <>
            <tr className='td-data' key={info}>
            
              <th>{info.id}</th>
              <th>{info.username}</th>
              <th>{info.email}</th>
              <th>{info.password}</th>
              {/* <th>{info.avatar}</th> */}
              {/* <th>{info.start_date}</th>
              <th>{info.end_data}</th> */}
              <td>
              {/* <button className="btn" onClick={(e)=>{e.preventDefault();sessionStorage.setItem('postId',info.id); window.location=`/EditUserAdmin/${info.id}/edit`}}>Edit</button> */}
        {/* <Link to={`/EditAuctionAdmin/${info.id}/edit`} className="btn" style={{borderRadius:'12px'}}>Edit</Link> */}
        <button className="btn btn-delete" onClick={()=>deleteuser(info.id)}>Delete</button>
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


export default Users;