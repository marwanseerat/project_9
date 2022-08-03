import './login.css';
import {useSelector,useDispatch } from 'react-redux';
import {password,emailORUsername,login} from "../actions";

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
      <div id="login" className="animate form" style={{ marginTop:'31%'}}>
        <form action="" method="" enctype="multipart/form-data" onSubmit={(e)=>Fun(e)}  >

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
            <a href="/Register" className="to_register">
              Sing Up
            </a>
          </p>
        </form>
      </div>{" "}
      {/* End Login */}
     
      {/* End register */}
    </div>{" "}
    {/* End Wrapper */}
  </div>{" "}
  {/* End container_demo */}
</>
  )
}

export default LoginAndReg
