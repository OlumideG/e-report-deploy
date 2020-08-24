import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../src/Logo.svg';
// import Particles from 'react-particles-js';
// import  {particlesOptions} from "./particles";


const NoMatchPage = () => {
    return (
        <div>
            <section className="vh-100 bg-washed-blue baskerville">
     <header className="tc ph5 lh-copy">
      <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">404</h1>
      <h2 className="tc f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
     </header>
    <p className="fw1 i tc mt4 mt5-l f4 f3-l">Are you looking for one of these?</p>
  <ul className="list tc pl0 w-100 mt5">
    <li className="dib"><Link to="/" className="f5 f4-ns link black db pv2 ph3 hover-light-purple">Home</Link></li>
    <li className="dib"><Link to="/userlogin" className="f5 f4-ns link black db pv2 ph3 hover-light-purple" >Login</Link></li>
    {/* <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/careers">Careers</a></li> */}
    {/* <li className="dib"><a className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/contact">Contact</a></li> */}
    <li className="dib"><Link to="/usersignup" className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/signup">Sign Up</Link></li>
    <li className="dib"><Link to="/adminlogin" className="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/help">Admin Login</Link></li>
  </ul>
</section>

        </div>
    )



}
export default NoMatchPage;


