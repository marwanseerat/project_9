import React, {useState} from 'react';
import axios from 'axios';
import './addAuc.css';

function AddUserAdmin() {

    const[isSubmit,setSubmit]=useState([]);
    const [username, setusername] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [avatar, setavatar] = useState([]);


    const usernameHandel = (e)=>{setusername(e.target.value)}

    const emailHandel = (e)=>{setEmail(e.target.value)}

    const passwordHandel = (e)=>{setPassword(e.target.value)}
    const avatarHandel = (e)=>{setavatar(e.target.value)}

    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post('http://localhost/project_9/admin_dashboard/API/adduser.php?username='+username+ '&email='+email+'&password='+password+'&avatar='+avatar)
        .then((data) => {
            console.log("success!");
            setSubmit(!isSubmit)
        })
        .catch((error) => {
            console.error(error);
        });
    }   
    return(
        <>
        <div className='text-center message' style={{ display:isSubmit?"none":"block"}}>
              <p>The User has been added successfully</p>
        </div>
        <div className="containerr">
  <div className="title">
      <h2> Added Users </h2>
  </div>

<div className="d-flex">
  <form action="" method="" className='formm' onSubmit={handleSubmit}>
      <span className="name">User First Name <span className="required" >*</span></span>
      <input type="text" name="firstname" required onChange={usernameHandel}/>


      <span className="des">Email <span className="required" >*</span></span>
      <input type="email" name="email" required onChange={emailHandel}/>


      <span>Password <span className="required">*</span></span>
      <input type="password" name="password" required onChange={passwordHandel}/> 

      <span>avatar <span className="required">*</span></span>
      <input type="file" name="avatar"  required onChange={avatarHandel}/> 

    <button type="submit">Confirm add </button>
  </form>
  </div>
 </div>

        </>
        
    );
    
}
export default AddUserAdmin;