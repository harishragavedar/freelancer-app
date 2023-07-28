import React,{useState} from 'react'
import './Registration.css'
import { Link } from "react-router-dom";
import axios from 'axios';
function Signup() {
    const [formValues,setFormValues]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
    const [username, setUserName]=useState(' ');
    const [name, setName]=useState(' ');
    const [Ph_no, setPh_no]=useState(' ');
    const [email, setEmail]=useState(' ');
    const [password, setPassword]=useState(' ');
    const [gender, setGender]=useState(' ');
    const [skype, setSkype]=useState(' ');
    

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        const data = {
            username:username,
            name:name,
            Ph_no:Ph_no,
            email:email ,
            password:password,
        }
        console.log(data);
        if(formErrors.check === true){
            setIsSubmit(true);
        }
        else{
            setIsSubmit(false);
        }
    }
    const handleSignUp = (e) => {
        e.preventDefault();
        const BASE_URL = "http://localhost:7000";
        axios.post(BASE_URL + '/users/register', { username,name,Ph_no, email, password,gender,skype })
          .then(response => {
            console.log('Registered:', response.data);
          })
          .catch(error => {
            console.error('Registration failed:', error.response.data);
          });
      };
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 
        errors.check= true;
    //     if(!values.username)
    //     errors.username="Please Fill the column";
    //     else if(values.username.length<5){
    //         errors.check= false;
    //         errors.username="Username must have minimum 5 characters";
    //     }
    //     else if(reg.test(values.username)){
    //         errors.username="Username must contain only alphabets";
    //     }
    //     if(!values.email){
    //     errors.check= false;
    //     errors.email="Please Fill the email";
    // }
    
    // if(!values.password){
    //     errors.check= false;
    //     errors.password="Please Fill the password";
    // }
    // else if(values.password.length<5){
    //     errors.check= false;
    //     errors.password="Password is Weak";
    // }
        return errors;
    }
const renderSignup = 
(
    <div className='form'>
        <form onSubmit={handleSubmit}> 
        <div className='input-container1'>
                    <label>Username</label>
                    <input type="text" id='username' placeholder='Create your Username'name='username' value={formValues.username}
                       onChange={(e) => setUserName(e.target.value)} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.username}</p>
        <div className='input-container1'>
                    <label>Name</label>
                    <input type="text" id='name' placeholder='Enter your Name' name='name'value={formValues.name}
                        onChange={(e) => setName(e.target.value)}required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.username}</p>
                <div className='input-container1'>
                    <label>Ph_no</label>
                    <input type="text" id='Ph_no' placeholder='Enter your Ph_no' name='Ph_no' value={formValues.Ph_no}
                        onChange={(e) => setPh_no(e.target.value)} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.username}</p>
                

                <div className='input-container1'>
                    <label>Email</label>
                    <input type="email" id='email'placeholder='Enter your Email' name='email' value={formValues.email}
                        onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.email}</p>

                <div className='input-container1'>
                    <label>Gender</label>
                    <input type="gender" id='gender'placeholder='Enter your gender' name='gender' value={formValues.gender}
                        onChange={(e) => setGender(e.target.value)} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.gender}</p>

                <div className='input-container1'>
                    <label>Skype-Id</label>
                    <input type="skypeId" id='skpyeId'placeholder='Enter your skypeId' name='skypeId' value={formValues.skypeId}
                        onChange={(e) => setSkype(e.target.value)} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.skypeId}</p>

                <div className='input-container1'>
                    <label>Password</label>
                    <input type="password" id='password' placeholder='Create a Password' name='password'value={formValues.password}
                        onChange={(e) => setPassword(e.target.value)}required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.password}</p>

                <div className='button-container'>
                  <input type='submit'/>
                </div>
                <div className="register">
            <Link to="/">Already have an Account..?</Link>
        </div>
        </form>
    </div>
  );
  return(
    <div className="login">
    <div className="login-form">   <center>
                <div className='title' onClick={handleSignUp}>REGISTER</div></center>  
        {isSubmit ? <div style={{color: "white"}}>User is successfully logged in</div> : renderSignup}
    </div>
  </div>
  );
}

export default Signup