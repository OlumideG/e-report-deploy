import React, { useState } from 'react';
import logo from '../../../src/Logo.svg';
import { Link , useHistory } from 'react-router-dom';
import { toast } from "react-toastify";




function UserSignup({ setAuth }) {

  let history = useHistory();
  function landingPage() {
    history.push("/");
    };


  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname:""
  });

  const { email, password, firstname, lastname } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password, firstname, lastname };
      // console.log(body, "body of signup");
      const response = await fetch(
        "/auth/usersignup",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };



    return (
        <div style={{fontFamily:"Open Sans", fontStyle: "normal",fontWeight: "normal"}}>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
                <img src={logo} alt="Logo"  onClick={landingPage}/>
                <Link to="/userlogin" style={{ color:"white", fontSize:"25px" }}>Log in</Link>
            </nav>

            <div className="formContainerSignup">
      <form onSubmit={onSubmitForm}  className="formCardSignup">
        <div className="titleContainerSignup">
          <h1>Sign up for your Account</h1>
        </div>
        <div className="emailContainerSignup">
          <input type='email'
           name='email'
           value={email}
            placeholder='Enter email' 
             onChange={e => onChange(e)}
             />
        </div>
        <div className="firstNameContainer">
          <input type="text" 
          name="firstname"
          value={firstname}
           placeholder={"Enter First Name"} 
            onChange={e => onChange(e)}
            />
        </div>
        <div className="lastNameContainer">
          <input
            type="text"
            name="lastname"
            value={lastname}
            placeholder={"Enter Last Name"}
            onChange={e => onChange(e)}
          />
        </div>
        <div className="passwordContainerSignup">
          <input
            type="password"
            name="password"
            value={password}
            placeholder={"Enter password"}
            onChange={e => onChange(e)}
          />

        </div>
        {/* <button className="btn-1"> Create Account </button> */}
        <div className="dashContainer">
          <div className="firstDash"></div>
          <div className="secondDash"></div>
          <div className="thirdDash"></div>
          <div className="fourthDash"></div>
          <div className="fifthDash"></div>
        </div>
        <div className="passwordInfoContainer">
          <p className="info">Password must have at least 8 Characters</p>
        </div>
        <div className="termsContainer">
          <p>
            By signing up, your comfirm you've read and agreed <br />
    to our <Link to="/"><strong>Terms and Conditions</strong></Link> as well as <Link to="/"><strong>Privacy Policy</strong></Link>
          </p>
        </div>
        <div className="submitContainer">
          <button className="btn-1"> Create Account </button>
          <div className="breaklineContainer">
            <div className="breaklineSignup"></div>
          </div>
        </div>
        <div className="existingAccount">
          <p><span className="already">Already have an Account?</span> <Link to="/userlogin"><span className="alreadyLogin">Login</span></Link></p>
        </div>
      </form>

      <div className="footerContainerSignup">
        <div>
          <Link to="/">
            {" "}
            <h4>About</h4>{" "}
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Help</h4>{" "}
          </Link>
        </div>
        <div>
          <Link to="/">
            {" "}
            <h4>Developers</h4>{" "}
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Privacy Policy</h4>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Terms of Service</h4>
          </Link>
        </div>
      </div>
    </div>

        </div>
    );
}

export default UserSignup;
