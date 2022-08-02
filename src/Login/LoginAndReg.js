import './login.css';
import {useSelector,useDispatch } from 'react-redux';
import {username,email,password,confirmPass, signup, emailORUsername,login} from "../actions";

function LoginAndReg() {

    const dispatch=useDispatch();
    const error=useSelector(state=>state.register);
    const errorLog=useSelector(state=>state.login);
    const Fun=(e)=>{
        e.preventDefault();
        dispatch(login());
    }
console.log(errorLog.error);
  return (
    <>
  <div id="container_demo">
    <a  id="toregister" />
    <a  id="tologin" />
    <div id="wrapper">
      <div id="login" className="animate form">
        <form action="" method="" enctype="multipart/form-data" onSubmit={(e)=>Fun(e)} >

          <h1>Login</h1>
          <p>
            <label htmlFor="userName" className="uname" data-icon="u">
              Your Email
            </label>
            <input
              id="userName"
              name="emailORUsername"
              required="required"
              type="text"
              // placeholder="myusername or mymail@mail.com"
              onChange={(e)=>dispatch(emailORUsername(e.target.value))}
            />
          </p>
          <p>
            <label htmlFor="password" className="youpasswd" data-icon="p">
              {" "}
              Your password{" "}
            </label>
            <input
              id="password"
              name="passwordLogin"
              required="required"
              type="password"
              // placeholder="eg. MuffinNinja"
              onChange={(e)=>dispatch(password(e.target.value))}
            />
          </p>
          <span className='err'>{errorLog.error}</span>
          <p className="login button">
            <input type="submit" defaultValue="Login" />
          </p>
          <p className="change_link">
          Don't Have an Account?
            <a href="#toregister" className="to_register">
              Sing Up
            </a>
          </p>
        </form>
      </div>{" "}
      {/* End Login */}
      <div id="register" onSubmit={()=>dispatch(signup())} className="animate form">
        <form action="" autoComplete="on">
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

          <p className="signin button">
            {(error.usernameError || error.emailError || error.passError || error.confirmPassError)
            ?<input type="submit" defaultValue="Sign up" disabled/>
            :<input type="submit" defaultValue="Sign up"/>
            }
          </p>
          <p className="change_link">
          Already Have an Account
            <a href="#tologin" className="to_register">
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

export default LoginAndReg
