import React, { useState } from 'react';
import logo from '../../../src/Logo.svg';
import { Link , useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

function UserLogin({ setAuth }) {

  let history = useHistory();
  function landingPage() {
    history.push("/");
    };


  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "/auth/userlogin",
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
        // localStorage.setItem("user", parseRes.payload["user"])
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div style={{ fontFamily: "Open Sans" }}>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}>
        <img src={logo} alt="Logo" onClick={landingPage} />
        <Link to="/usersignup" style={{ color: "white", fontSize: "25px" }}>Sign up</Link>
        {/* <Link to="/adminlogin" style={{ color: "white", fontSize: "25px" }}>Admin Login</Link> */}
      </nav>



      <div className="formContainer">
        <form onSubmit={onSubmitForm} className="formCard">

          <div className="titleContainer">
            <h1>Log in to E-report</h1>
          </div>

          <div className="emailContainer">
            <input type={'email'} name='email'  value={email} placeholder='Enter email' onChange={e => onChange(e)}/>
          </div>

          <div className="passwordContainer">
            <input
              type="password"
              name="password"
              placeholder={"Enter password"}
              onChange={e => onChange(e)}
            />

          </div>
          <div className="submitContainer">
            <button className="btn-1"> Log In </button>
            <div className="breaklineContainer">
              <div className="breakline"></div>
            </div>
          </div>
          <div className="formFooter">
            <div><Link to="/" className="cantLogin">Can't Log in?</Link></div>
            <div className="dot"> </div>
            <div><Link to="/usersignup" className="canSignup">Sign up</Link></div>
          </div>
        </form>
      </div>




      <div className="footerContainer">
        <div>
          <Link to="/"> <h4>About</h4> </Link>
        </div>
        <div>
          <Link to="/"><h4>Help</h4> </Link>
        </div>
        <div>
          <Link to="/"> <h4>Developers</h4> </Link>
        </div>
        <div>
          <Link to="/"><h4>Privacy Policy</h4></Link>
        </div>
        <div>
          <Link to="/"><h4>Terms of Service</h4></Link>
        </div>
        <div>
          <Link to="/adminlogin"><h4>Admin</h4></Link>
        </div>
      </div>

    </div>
  );
}

export default UserLogin;
