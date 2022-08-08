import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link , useParams} from 'react-router-dom';
import './addAuc.css';

function EditUserAdmin() {
    
        const[isSubmit,setSubmit]=useState([]);
        const [firstname, setFirstname] = useState();
        const [lastname, setLastname] = useState();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [	address, setAddress] = useState('');
        const [phone, setPhone] = useState('');
        
        const postId=sessionStorage.getItem('postId');
        // const [input, setInputs] = useState([]);
    
    
        const fnameHandel = (e)=>{setFirstname(e.target.value)}
        const lnameHandel = (e)=>{setLastname(e.target.value)}
        const emailHandel = (e)=>{setEmail(e.target.value)}
        const passwordHandel = (e)=>{setPassword(e.target.value)}
        const phoneHandel = (e)=>{setPhone(e.target.value)}
        const addressHandel = (e)=>{setAddress(e.target.value)}

        // const {postId}=useParams();
        useEffect(()=>{
            // getauction();
        }, [postId, firstname, 	lastname,email, password, phone, 	address ]);
        // }


        const handleSubmit =(e)=>{
            e.preventDefault();
            axios.post('http://localhost/redux-project9/API/edituser.php?id='+postId+'&firstname='+firstname+'&	lastname='+	lastname+'&email='+email+'&phone='+phone+'&	address='+address+'&password='+password)
            
            .then((data) => {
                console.log("success!");
                setSubmit(!isSubmit)
            })
            .catch((error) => {
                console.error(error);
            });
            // console.log(inputs);
        }
            // console.log(postId,firstname , 	lastname, email);
   
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
          <a href="#" className="nav__item-link">
            Auction
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Users
          </a>
        </li>
        <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Comments
          </a>
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
          <a  className="utility-bar__account">
            <span className="utility-bar__account-name">ِadmin@mail.com</span>
          </a>
        </div>
      </nav>
        <div className='text-center message' style={{ display:isSubmit?"none":"block"}}>
              <p style={{ fontSize:'22px'}}>The User info has been updated successfully</p>
        </div>
        <div className="containerr">
  <div className="title">
      <h5> Edit Auctions </h5>
  </div>
<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit} enctype="multipart/form-data">
      <span className="name">First Name <span className="required" >*</span></span>
      <input type="text" name="firstname" required onChange={fnameHandel}/>
      <span className="name">Last Name <span className="required" >*</span></span>
      <input type="text" name="	lastname" required onChange={lnameHandel}/>

      <span className="des">Email <span className="required" >*</span></span>
      <input type="email" name="email" required onChange={emailHandel}/>

      <span>Phone <span className="required">*</span></span>
      <input type="number" id="img" name="phone" className='img' required onChange={phoneHandel}/>
      {/* <input type="submit" /> */}

      <span>	Address <span className="required">*</span></span>
      <input type="text" name="address" required onChange={addressHandel}/> 

      <span>Password <span className="required">*</span></span>
      <input type="password" name="start"  required onChange={passwordHandel}/> 

      {/* <span>End Date  <span className="required">*</span></span>
      <input type="date" name="end"  required onChange={endHandel}/>  */}

    <button type="submit">Confirm edit </button>
  </form>
  </div>
 </div>
</div>
</div>
        </>
        
        );
    
    }
    export default EditUserAdmin;