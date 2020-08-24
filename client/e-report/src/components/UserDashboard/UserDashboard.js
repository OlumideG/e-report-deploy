import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { GrSupport } from "react-icons/gr";
import { MdSettings } from "react-icons/md";
import { IoMdLogOut } from 'react-icons/io';
import { RiProfileLine } from 'react-icons/ri';
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";
import logo from "../../../src/Logo.svg";
import decode from 'jwt-decode';
import ReportForm from "../ReportForm/ReportForm"
import LatestReports from '../LatestReports/LatestReports';
import UserReportCards from "../ReportCards/UserReportCards";
import '../../App.css';
import "./UserDashboard.css";


// User's first name and last name
// This maps the user"s name from the database
const User = ({ info, index }) =>
    <div>
        <div className="welcome-user">
            <h1 className="welcome-user-text capital-letter">Welcome {info.first_name} {info.last_name}</h1>
        </div>
    </div>



function UserDashboard({ setAuth }) {


    // const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredReports, setFilteredReports] = useState([]);
    const [reports, setReports] = useState([])
    const [showLatest, setShowLatest] = useState(false);
    const [showHistory, setShowHistory] = useState(true);
    const [pendingColor, setPendingColor] = useState(false);



    const [name, setName] = useState([
        { first_name: "" },
        { last_name: "" }
    ])

     const currDate = new Date().toLocaleDateString('en', { year: 'numeric', month: 'long', day: '2-digit' });
    //  const currTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
 
    function getWeekDay(date){
        //Create an array containing each day, starting with Sunday.
        let weekdays = 
           ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ] 
        
        //Use the getDay() method to get the day.
        let day = date.getDay();
        //Return the element that corresponds to that index.
        return weekdays[day];
    }
    
    let date = new Date();
    let weekDay = getWeekDay(date);


 
    

    useEffect(() => {
      


        const { user } = decode(localStorage.token);
        // console.log(localStorage.token, "Local Storage Token");
        // console.log(user, "The user")
        // setLoading(true);

        fetch(`http://localhost:3000/dashboard/home/${user}`)
            .then(res => res.json())
            .then(result => {
                setReports(result)
                // setLoading(false);
                // console.log(result)
            })
            .catch(err => {
                console.log(err.message);

            })



        fetch(`http://localhost:3000/userinfo/username/${user}`)
            .then(response => response.json())
            .then(username => {
                setName(username)

                // console.log(username)
            })
            .catch(err => {
                console.log(err.message);

            })
    }, []);

    useEffect(() => {

        // search through reports
        setFilteredReports(
            reports.filter(report =>
                report.address.toLowerCase().includes(search.toLowerCase())
                || report.category.toLowerCase().includes(search.toLowerCase())
                || report.details.toLowerCase().includes(search.toLowerCase())
                || report.localgovernment.toLowerCase().includes(search.toLowerCase())
                || report.date.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, reports]);



// Logging out of the application
    const logout = async e => {
        e.preventDefault();
        try {
            localStorage.removeItem("token");
            setAuth(false);
            toast.success("Logout successfully");

            window.location.reload();
        } catch (err) {
            console.error(err.message);
        }
    };

    const bellNotification =()=> {
        // e.preventDefault();
        try {
        //    console.log("notification!!!");
        } catch (err) {
            console.error(err.message);
        }
    };


    let history = useHistory();
    function landingPage() {
        history.push("/");
    };



    const addReport = report => {
        const newReports = [...reports, report];
        setReports(newReports)
    }


    const deleteReport = (index, info) => {
        const newReports = [...reports];
        newReports.splice(index, 1);
        setReports(newReports);

        const reportNumber = info.id
        // console.log(index)
        // console.log(reportNumber)
        fetch(`http://localhost:3000/dashboard/home/${reportNumber}`, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'DELETE',
            mode: 'cors',
        })
        toast.success(`Report Deleted`)

    }

    const forwardedReports =()=>{
        const { user } = decode(localStorage.token);
      
        fetch(`http://localhost:3000/dashboard/home/forwarded/${user}`)
        .then(res => res.json())
        .then(result => {
            setReports(result)
            setPendingColor(false)
            // setLoading(false);
            // console.log(result)
        })
        .catch(err => {
            console.log(err.message);

        })


    }

    const pendingReports =()=>{
        const { user } = decode(localStorage.token);
        
        fetch(`http://localhost:3000/dashboard/home/pending/${user}`)
        .then(res => res.json())
        .then(result => {
            setReports(result)
            setPendingColor(true)
            // setLoading(false);
            // console.log(result)
        })
        .catch(err => {
            console.log(err.message);

        })


    }

    const allReports =()=>{
        const { user } = decode(localStorage.token);
      
        fetch(`http://localhost:3000/dashboard/home/${user}`)
        .then(res => res.json())
        .then(result => {
            setReports(result)
            setPendingColor(false)
            // setLoading(false);
            // console.log(result)
        })
        .catch(err => {
            console.log(err.message);

        })


    }

    const latestReportsButton =() =>{
      setShowLatest(!showLatest)
      setShowHistory(!showHistory)
    }

    const historyReportsButton =() =>{
        setShowLatest(false)
        setShowHistory(true)
      }

   
  


   return (
        <div className="user-dashboard">
            <nav
                className="navbar navbar-light"
                style={{ backgroundColor: "#27496D" }}
                // style={{ backgroundColor: "#122233" }}
            >
                <img src={logo} alt="Logo" onClick={landingPage} />
                <div style={{ display: "flex" }}>
                    <button onClick={bellNotification}>
                    <i className="fa fa-bell fa-3x" style={{ marginLeft: "10px" }}></i>
                    </button>
                    
                    {/* <button onClick={(e) => logout(e)} className="btn btn-danger">
                        Logout
                </button> */}
                </div>
            </nav>
            {/* SideBar */}
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

                    <div className="dashboard-content">
                        {
                            name.map((info, index) => (
                                <User
                                    key={index}
                                    index={index}
                                    info={info}
                                />
                            ))}

                        <div className="part-1">
                            <div className="report-form">
                                <div className="welcome-user">
                                    {/* <h1 className="welcome-user-text">Welcome {User}</h1> */}
                                </div>
                                <div className="report-space">
                                    <ReportForm addReport={addReport} />
                                </div>
                            </div>

                            <div className="this">
                                <div className="search-date">
                                    <div className="date">
                                        {/* <h6 className="date-text">Thursday 21 May 2020</h6> */}
                                      <h6 className="date-text"> {weekDay}, {currDate}</h6>
                                      {/* <h6 className="date-text">Current Time: {currTime}</h6> */}
                                    </div>

                                    <div className={showLatest ? "hide": "search-form"}>
                                        <form className="form-inline my-2 my-lg-0">
                                            <input
                                                className="form-control mr-sm-2"
                                                type="search"
                                                placeholder="Search all reports"
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
                                            {/* <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="part-2">
                            <div className="history-container">
                                <button className="history-text" onClick={historyReportsButton}>History</button>
                            </div>

                            <div className="nearby-reports">
                                <button className="nearby-reports-text" onClick={latestReportsButton}>Latest nearby reports</button>
                            </div>
                        </div>

                        {/* <div className="part-3"> */}
                        <div className={!showHistory  ? "hide": "part-3"}>
                            <div className="all-report">
                                <button className="all-report-text" onClick={allReports}>All</button>
                            </div>

                            <div className="forwarded-cases">
                                <button className="forwarded-text" onClick={forwardedReports}>Forwarded</button>
                            </div>

                            <div className="pending">
                                <button className="pending-text" onClick={pendingReports}>Pending</button>

                            </div>
                        </div>
                        {/* <div className="todo-list"> */}
                        <div className={showLatest ? "hide": "todo-list"}>
                            {
                                reports === 0 ?
                                    <div> Nothing Here</div> 
                                    : filteredReports.map((info, index) => (
                                         <UserReportCards
                                           pendingColor={pendingColor}
                                            key={index}
                                            index={index}
                                            {...info}
                                            info={info}
                                            deleteReport={deleteReport}
                                        />
                                    ))}
                        </div>
                         {/* <div className="latestReports">
                         <LatestReports />
                         </div> */}
                     
                     <div className="latestReports">
                     { showLatest ? <LatestReports /> : null }
                     </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UserDashboard;



