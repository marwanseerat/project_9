import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link , useParams} from 'react-router-dom';
import './addAuc.css';

function EditAuctionAdmin() {
    
        const[isSubmit,setSubmit]=useState([]);
        const [name, setName] = useState();
        const [des, setDes] = useState('');
        const [img, setImg] = useState('');
        const [price, setPrice] = useState('');
        const [start, setStart] = useState('');
        const [end, setEnd] = useState('');
        
        const postId=sessionStorage.getItem('postId');
        // const [input, setInputs] = useState([]);
    
    
        const nameHandel = (e)=>{setName(e.target.value)}
        const desHandel = (e)=>{setDes(e.target.value)}
        const imgHandel = (e)=>{setImg(e.target.value)}
        const priceHandel = (e)=>{setPrice(e.target.value)}
        const startHandel = (e)=>{setStart(e.target.value)}
        const endHandel = (e)=>{setEnd(e.target.value)}

        // const {postId}=useParams();
        useEffect(()=>{
            // getauction();
            // console.log(postId, name,img, des, price, start, end);
        }, [postId, name,img, des, price, start, end]);
        // }


        const handleSubmit =(e)=>{
            e.preventDefault();
            axios.post('http://localhost/redux-project9/API/editauction.php?id='+postId+'&name='+name+'&des='+des+'&img='+img+'&price='+price+'&start='+start+'&end='+end)
            
            .then((data) => {
                console.log("success!");
                setSubmit(!isSubmit)
            })
            .catch((error) => {
                console.error(error);
            });
            // console.log(inputs);
        }
            console.log(postId, name,img, des, price, start, end);
   
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
           <h2 >Dashboard</h2> </Link>
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
              <p style={{ fontSize:'22px'}}>The Auction has been updated successfully</p>
        </div>
        <div className="containerr">
  <div className="title">
      <h5> Edit Auctions </h5>
  </div>
<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit} enctype="multipart/form-data">
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

    <button type="submit">Confirm edit </button>
  </form>
  </div>
 </div>
</div>
</div>
        </>
        
        );
    
    }
    export default EditAuctionAdmin;