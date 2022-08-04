import './login.css';
import {useSelector,useDispatch } from 'react-redux';
import {username,email,password,confirmPass, signup,login} from "../actions";

function Register() {

    const dispatch=useDispatch();
    const error=useSelector(state=>state.register);
    const errorLog=useSelector(state=>state.login);
    const Fun=(e)=>{
        e.preventDefault();
        dispatch(signup());
    }


console.log(errorLog.error);
  return (
    <>
<div id="container_demo">
       <div id="wrapper">
             <div id="register"  onSubmit={(e)=>Fun(e)} className="animate form" style={{ marginTop:'25%'}}>
        <form action="" autoComplete="on" >
          <h1> Sign up </h1>
          <p>
            <label htmlFor="usernamesignup" className="uname" data-icon="u">
              Your Name
            </label>
            <input
              id="usernamesignup"
              name="username"
              required="required"
              type="text"
              // placeholder="myusername690"
              onChange={(e)=>dispatch(username(e.target.value))}
            />
            <span className='err'>{error.usernameError}</span>
          </p>
          <p>
            <label htmlFor="emailsignup" className="youmail" data-icon="e">
              {" "}
              Your Email
            </label>
            <input
              id="emailsignup"
              name="email"
              required="required"
              type="email"
              // placeholder="myclevername@mail.com"
              onChange={(e)=>dispatch(email(e.target.value))}
            />
            <span className='err'>{error.emailError}</span>
          </p>
          <p>
            <label htmlFor="passwordsignup" className="youpasswd" data-icon="p">
              Your Password{" "}
            </label>
            <input
              id="passwordsignup"
              name="password"
              required="required"
              type="password"
              // placeholder="eg. MuffinNinja"
              onChange={(e)=>dispatch(password(e.target.value))}
            />
            <span className='err'>{error.passError}</span>
          </p>
          <p>
            <label
              htmlFor="passwordsignup_confirm"
              className="youpasswd"
              data-icon="p"
            >
             Confirm your Password{" "}
            </label>
            <input
              id="passwordsignup_confirm"
              name="confirmPass"
              required="required"
              type="password"
              // placeholder="eg. MuffinNinja"
              onChange={(e)=>dispatch(confirmPass(e.target.value))}
            />
            <span className='err'>{error.confirmPassError}</span>
          </p>

          {/* <p className="signin button">
            {(error.usernameError || error.emailError || error.passError || error.confirmPassError)
            ?<input type="submit" defaultValue="Sign up" disabled/>
            :<input type="submit" defaultValue="Sign up"/>
            }
          </p> */}
          <a href='/login'>
          <button type='submit' className="reg" style={{marginLeft:'35vh'}}>Sign Up</button>
          </a>
          <p className="change_link">
          Already Have an Account
            <a href="/login" className="to_register">
              {" "}
               Login{" "}
            </a>
          </p>
        </form>
      </div>{" "}
      {/* End register */}
    </div>{" "}
    {/* End Wrapper */}
  </div>{" "}
  {/* End container_demo */}
</>
  )
}

export default Register
