import React, { useState } from 'react';
import { useNavigate,Link} from "react-router-dom";
import "./Logina.css";

function Logins() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      advisorname: "advisor1",
      password: "pass1"
    },
    {
      advisorname: "advisor2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid advisorname",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.advisorname === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container1">
          <label>Freelancername </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container1">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="register">
            <Link to="/registers">Register</Link>
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <center>
        <div className="title">SIGN IN</div></center>
        {isSubmitted ? <div><center><div>Freelancer is successfully logged in</div><br/><Link to ="/">Move to Home Page</Link></center> </div>: renderForm}
      </div>
    </div>
  );
}

export default Logins;