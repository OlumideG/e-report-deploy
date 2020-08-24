import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/Logo.svg";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-light" style={{ backgroundColor: "#27496D" }}> */}
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#27496D" }}
      >
        <img src={logo} alt="Logo" />
        <Link to="/userlogin" style={{ color: "white", fontSize: "25px" }}>
          Log in
        </Link>
        {/* <Link to="/adminlogin" style={{ color: "white", fontSize: "25px" }}>
          Admin Login
        </Link> */}
      </nav>
      
      
      <div className="land-page-container">
        <div className="land-page-showcase">
          <div className="new-div">
              <div className="landing-content">
                <div className="show-title">
                  <h1>Report an incident online</h1>
                </div>
                <div className="show-text">
                  <p>Tell us about something you've seen or heard</p>
                </div>

                <div className="show-button">
                    <button>Report now</button>
                </div>
              </div>
          </div>
        </div> 

        <div className="use-location-container">
            <div className="use-locaion">
                <h1>See what is happening near you</h1>            
            </div>

            <div className="use-location-input">
                <input type="text" placeholder="Enter address"/>
            </div>

            <div className="use-location-footer">
                <p>Use your location</p>
            </div>
        </div>
      </div>  

      <div className="footer-container">
            <div className="footer-heading">
                <div className="contact-us">
                    <h3>Contact Us</h3>
                </div>

                <div className="info-services">
                    <h3>Information and Services</h3>
                </div>

                <div className="partners">
                    <h3>Partners</h3>
                </div>
            </div>

            <div className="footer-content">
                <div className="first-part">
                    <div className="find-police">
                      <p>Find a police station</p>
                    </div>

                    <div className="about-met">
                        <p>About the Met</p>
                    </div>

                    <div className="news">
                      <p>News</p>
                    </div>

                  <div className="privacy">
                    <p>Privacy notice</p>
                  </div>

                <div className="cookies">
                  <p>Cookies</p>
                </div>

                <div className="tcon">
                  <p>Terms and conditions</p>
                </div>

                <div className="access">
                 <Link to="/adminlogin"style={{ color: "white" }} ><p>Admin</p> </Link>  
                </div>
                </div>    
                
          <div className="second-part">
            <div className="adv-info">
              <p>Advice and information</p>
            </div>

            <div className="crime">
              <p>Crime prevention</p>
            </div>

            <div className="stat">
              <p>Stats and data</p>
            </div>

            <div className="foi">
              <p>Accessing information (FOI)</p>
            </div>

            <div className="report-footer">
              <p>Report</p>
            </div>

          </div>   

          <div className="third-part">
              <div className="lagos">
                  <p>Lagos State government</p>            
              </div>

            <div className="npf">
              <p>Nigeria Police force</p>
            </div>

            <div className="frs">
              <p>Federal road safety corps</p>
            </div>

            <div className="rrs">
              <p>Rapid Response squad</p>
            </div>

            <div className="fire-ser">
              <p>Fire Service</p>
            </div>
          </div>
            </div>

            <div className="copyright">
              <p>Copyright 2020. All rights reserved.</p>
            </div>
      </div>

      </div>

   
    
  );
};
export default LandingPage;
