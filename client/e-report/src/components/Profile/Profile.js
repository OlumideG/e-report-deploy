import React, { useState, useEffect } from 'react';
import logo from '../../../src/Logo.svg';
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHome } from "react-icons/fa";
import { GrSupport } from "react-icons/gr";
import { RiProfileLine } from 'react-icons/ri';
import { MdSettings } from "react-icons/md";
import { IoMdLogOut } from 'react-icons/io';
import decode from 'jwt-decode';
import '../../App.css';
import '../UserDashboard/UserDashboard.css';



const User = ({ info, index }) =>
    <div>
        <div className="welcome-user">
            <h1 className="welcome-user-text capital-letter">Name: {info.first_name} {info.last_name}</h1>
            <h1 className="welcome-user-text">Email: {info.user_email}</h1>
        </div>
    </div>

const Profile = ({ setAuth }) => {
    const [reports, setReports] = useState([])

    const [name, setName] = useState([
        { first_name: "" },
        { last_name: "" }
    ])

    useEffect(() => {


        const { user } = decode(localStorage.token);
        console.log(localStorage.token, "Local Storage Token");
        console.log(user, "The user")

        fetch(`http://localhost:3000/dashboard/home/${user}`)
            .then(res => res.json())
            .then(result => {
                setReports(result)
                console.log(result)
            })
            .catch(err => {
                console.log(err.message);

            })



        fetch(`http://localhost:3000/userinfo/username/${user}`)
            .then(response => response.json())
            .then(username => {
                setName(username)

                console.log(username)
            })
            .catch(err => {
                console.log(err.message);

            })
    }, []);


    let history = useHistory();
    function landingPage() {
        history.push("/");
    };

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


    return (
        <div className="supportdashboard">
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
                                    <span className="home-te">Home</span></button>
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
                                <Link to="/settings">
                                    <button className="setting-text">
                                        <GrSupport className="setting-icon" />
                                        <span className="setting-te">settings</span>
                                    </button>
                                </Link>
                            </div>

                            <div className="logout-container">
                                <button className="logout-text" onClick={e => logout(e)}>
                                    <IoMdLogOut className="logout-icon" />
                                    <span className="logout-te"> Log out</span>
                                </button>
                            </div>
                        </ul>
                    </div>

                    <div className="space">
                        {
                            name.map((info, index) => (
                                <User
                                    key={index}
                                    index={index}
                                    info={info}
                                />
                            ))}
                    </div>
                     <div>
                     <h1>Total Reports Number :{reports.length}</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;
