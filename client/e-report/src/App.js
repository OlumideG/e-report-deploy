import React, { useState, useEffect } from 'react';
import './App.css';
import UserSignup from "./components/UserSignup/UserSignup";
import UserLogin from "./components/UserLogin/UserLogin";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import LandingPage from "./components/LandingPage/LandingPage";
import NoMatchPage from "./components/404Page/NoMatchPage";
import Support from "./components/Support/Support";
import Settings from "./components/SettingsPage/Settings";
import Profile from "./components/Profile/Profile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { Switch, Route, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function App() {


  const checkAuthenticated = async () => {
    try {
      const res = await fetch("/auth/verify", {
        method: "POST",
        headers: {
          jwt_token: localStorage.token,
          user_id: localStorage.user_id
        }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };


  const checkAdminAuthenticated = async () => {
    try {
      const res = await fetch("/auth/verify", {
        method: "POST",
        headers: {
          jwt_token: localStorage.token
        }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAdminAuth(true) : setIsAdminAuth(false);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    checkAuthenticated()
    checkAdminAuthenticated()


  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdminAuth, setIsAdminAuth] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  const setAdminAuth = boolean => {
    setIsAdminAuth(boolean);
  };



  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <ProtectedRoute path="/support" component={Support} />
        <ProtectedRoute path="/settings" component={Settings} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route
          exact
          path="/userlogin"
          render={props =>
            !isAuthenticated ? (
              <UserLogin {...props} setAuth={setAuth} />
            ) : (
                <Redirect to="/userdashboard" />
              )
          }
        />

        <Route
          exact
          path="/adminlogin"
          render={props =>
            !isAdminAuth ? (
              <AdminLogin {...props} setAdminAuth={setAdminAuth} />
            ) : (
                <Redirect to="/admindashboard" />
              )
          }
        />


        <Route
          exact
          path="/usersignup"
          render={props =>
            !isAuthenticated ? (
              <UserSignup {...props} setAuth={setAuth} />
            ) : (
                <Redirect to="/userdashboard" />
              )
          }
        />
        <Route
          exact
          path="/userdashboard"
          render={props =>
            isAuthenticated ? (
              <UserDashboard {...props} setAuth={setAuth} />
            ) : (
                <Redirect to="/userlogin" />
              )
          }
        />

        <Route
          exact
          path="/admindashboard"
          render={props =>
            isAdminAuth ? (
              <AdminDashboard {...props} setAdminAuth={setAdminAuth} />
            ) : (
                <Redirect to="/adminlogin" />
              )
          }
        />
        <Route component={NoMatchPage} />
     </Switch>
    </div>
  );
}

export default App;