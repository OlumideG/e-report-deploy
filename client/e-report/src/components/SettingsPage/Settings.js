import React from 'react';
import logo from '../../../src/Logo.svg';
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { RiProfileLine } from 'react-icons/ri';
import { MdSettings } from "react-icons/md";
import { IoMdLogOut } from 'react-icons/io';
import '../../App.css';

const Settings = () => {



  function loginPage() {
    history.push("/");
    window.location.reload();
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      // setAuth(false);
      toast.success("Logout successfully");
      window.location.reload();
      loginPage();
    } catch (err) {
      console.error(err.message);
    }
  };

  let history = useHistory();
  function landingPage() {
    history.push("/");
  };

  return (
    <div className="settingdashboard">
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#27496D" }}
      >
        <img src={logo} alt="Logo" onClick={landingPage} />
        <div style={{ display: "flex" }}>
          {/* <i className="fa fa-user fa-3x" style={{ marginLeft: "10px" }}></i> */}

        </div>
      </nav>

      <div className="dashboard-container">
        <div className="dashboard-handler">
          <div className="sidebar">
            <ul className="sidebar-list">
              <div className="home-container">
                <Link to="/userdashboard"> <button className="home-text">
                  <FaHome className="home-icon" />
                  <span className="home-te">Home </span></button>
                </Link>
              </div>

              <div className="support-container">
                <Link to="/profile">
                  <button className="support-text">
                    <RiProfileLine className="support-icon" />
                    <span className="support-te"> Profile </span>
                  </button>
                </Link>
              </div>

              <div className="support-container">
                <Link to="/support">
                  <button className="support-text">
                    <MdSettings className="support-icon" />
                    <span className="support-te"> support</span>
                  </button>
                </Link>
              </div>

              <div className="setting-container">
                <button className="setting-text">
                  <GrSupport className="setting-icon" />
                  <span className="setting-te">settings</span>
                </button>
              </div>

              <div className="logout-container">
                <button className="logout-text" onClick={e => logout(e)}>
                  <IoMdLogOut className="logout-icon" />
                  <Link to="/"><span className="logout-te"> Log out</span></Link>
                </button>

              </div>
            </ul>
          </div>

          <div className="space">
            <div>
              <h1>The Settings is coming soon. Keep your fingers cross.</h1>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Settings