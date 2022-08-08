import React, {useState} from 'react';
import axios from 'axios';
import {Link } from 'react-router-dom';
import './addAuc.css';

function AddAuctionAdmin() {

    const[isSubmit,setSubmit]=useState([]);
    const [name, setName] = useState([]);
    const [des, setDes] = useState([]);
    const [img, setImg] = useState([]);
    const [price, setPrice] = useState([]);
    const [start, setStart] = useState([]);
    const [end, setEnd] = useState([]);


    const nameHandel = (e)=>{setName(e.target.value)}
    const desHandel = (e)=>{setDes(e.target.value)}
    const imgHandel = (e)=>{setImg(e.target.value)}
    const priceHandel = (e)=>{setPrice(e.target.value)}
    const startHandel = (e)=>{setStart(e.target.value)}
    const endHandel = (e)=>{setEnd(e.target.value)}
    // const [state, setState] = useState([]);

    // const [inputs, setInputs] = useState({})
    // const handleChange =(e)=> {
    // const name  = e.target.name;
    // const value = e.target.value;

    // setInputs(values=>({...values,[name]: value}));
    // }
    const handleSubmit =(e)=>{
        e.preventDefault();
        // axios.post('http://localhost/redux-project9/API/adduser.php', inputs)
        axios.post('http://localhost/redux-project9/API/addauction.php?name='+name+'&des='+des+'&img='+img+'&price='+price+'&start='+start+'&end='+end)
        .then((data) => {
            console.log("success!");
            setSubmit(!isSubmit)
        })
        .catch((error) => {
            console.error(error);
        });
        // console.log(inputs);
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
        <li className="nav__list-item nav__list-item--active">
          <Link to="/auction" className="nav__item-link">
            Auction
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/useradmin" className="nav__item-link">
            Users
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="commentAdmin" className="nav__item-link">
            Comments
          </Link>
        </li>
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
        <div className='text-center message' style={{ display:isSubmit?"none":"block"}}>
              <p>The Auction has been added successfully</p>
        </div>
        <div className="containerr">
  <div className="title">
      <h4> Added Auctions </h4>
  </div>
<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit}>
      <span className="name">Auction Name <span className="required" >*</span></span>
      <input type="text" name="name" required onChange={nameHandel}/>

      <span className="des">Description <span className="required" >*</span></span>
      <input type="text" name="des" required onChange={desHandel}/>

      <span>Select image: <span className="required">*</span></span>
      <input type="file" id="img" name="img" accept="image/*" className='img' required onChange={imgHandel}/>
      {/* <input type="submit" /> */}

      <span>Price <span className="required">*</span></span>
      <input type="number" name="price" required onChange={priceHandel}/> 

      <span>Date start <span className="required">*</span></span>
      <input type="date" name="start"  required onChange={startHandel}/> 

      <span>End Date  <span className="required">*</span></span>
      <input type="date" name="end"  required onChange={endHandel}/> 

    <button type="submit">Confirm add </button>
  </form>
  </div>
 </div>
</div>
</div>
        </>
        
    );
    
}
export default AddAuctionAdmin;