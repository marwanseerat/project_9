import axios from "axios";


const usernameRegExp= RegExp(
    /^[A-Za-z0-9_-]*$/
)
const emailRegExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)
const passRegExp= RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
)



const registerReducer=(state={usernameError:'',emailError:'',passError:'',confirmPassError:'',username:''},action)=>{

    switch(action.type){
        
        case "username":
            if(action.username !=='' && usernameRegExp.test(action.username)){
                return {...state,username:action.username,usernameError: null}
            }else{
                return{...state,usernameError:'At least 4 characaters required'}
            }
        case "email":
            if(action.email !=='' && emailRegExp.test(action.email)){
                return {...state,email:action.email, emailError: null}
            }else{
                return{...state,emailError: 'Email is invalid'}
            }
        case "password":
            if(action.password !=='' && passRegExp.test(action.password)){
                return {...state,password:action.password, passError: null}
            }else{
                return{...state,passError: 'Minimum eight characters, at least one letter and one number'}
            }
        case "confirmPass":
            if(action.confirmPass === state.password && action.password !== ''){
                return {...state, confirmPassError: null};
            }else{
                return{...state,confirmPassError: 'The two passwords do not match'}
            }
             
            case "avatar":
            if(action.avatar !==''){
                return {...state,avatar:action.avatar, avatarError: null};
            }else{
                return{...state,avatarError: 'chose image'}
            }





        case "SIGNUP":
            if(state.usernameError == null && state.emailError == null && state.passError == null && state.confirmPassError == null && state.avatarError == null) {

                axios.post('http://localhost/project_9/backend/register.php?username='+state.username+'&email='+state.email+'&password='+state.password+'&avatar='+state.avatar)
                window.location.href = "/";
 
            }else{
                return console.log('error');
            }
            break;
        default:
            return state;
    }
    
    
    
}
export default registerReducer;