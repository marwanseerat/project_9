import React from 'react';
import './dash.css';
import {Link } from 'react-router-dom';

function Dashboard() {


    return(
        <>
  <link
    href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet"  type="text/css" />
  <div className="app-container">
    <nav className="navv">
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item--active">
          <a className="nav__item-link w-100">
           <h2>Dashboard</h2> </a>
        </li>
        {/* <li className="nav__list-item ">
          <Link to="/auction" className="nav__item-link">
            Auction
          </Link>
        </li> */}
        <li className="nav__list-item ">
          <Link to="/auction" className="nav__item-link">
          Questions
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/userA" className="nav__item-link">
            Users
          </Link>
        </li>
        {/* <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Locations
          </a>
        </li> */}
     
        {/* <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Statuses
          </a>
        </li> */}
        <li className="nav__list-item">
          <Link to="/loginA" className="nav__item-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
    <div className="app-view">
     
      <main className="contentt">
        <h1> Information  </h1>
        {/* <div className="container text-center">
          <div className="row">
            <div className="col">
              Column
            </div>
            <div className="col">
              Column
            </div>
            <div className="col">
              Column
            </div>
          </div>
        </div> */}

<div className='boddy'>
<div class="cardd auc">
  <div class="contentt dd">Question</div>
</div>

<div class="cardd user ">
  <div class="contentt dd">Users</div>
</div>


</div>
       </main>
    </div>
  </div>

</>

        );
    }


export default Dashboard;