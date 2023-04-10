import React from 'react'
import PropTypes from 'prop-types'
import instalogo from '../assets/images/instalogo.svg'
import { Link } from "react-router-dom";
import '../assets/js/main.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
export default function Navbar(props) {
    const [styleBody, setstyleBody] = React.useState({
        color:'red',
        backgroundColor:'black'
    });
    const togglemodes = ()=>{
        if(styleBody.color === 'red'){
            setstyleBody({
                color:'black',
                backgroundColor:'red'
            })
        }
        else{
            setstyleBody({
                color:'red',
                backgroundColor:'black'
            })
        }
    }
  return (
  
    <nav className="navbarmain" style={styleBody}>
        <div className="navbar-wr">
            <div className="navbar-inner-wr d-flex">
            <div className="instalogo-wr">
                <Link className="insta-logo" to ="/"><img src={instalogo}  alt=" insta logo"/></Link>
            </div>
            <div className="mobile-menu-wr d-flex">
            <div className="navigation-menu-sec d-flex" id="">
           
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">    
               <li className="nav-item">
               <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item">
                   <Link className="nav-link" to="/About">About</Link>
               </li>
               <li className='nav-item'>
                   <Link className="nav-link" to="/Service">{props.serviceval}</Link>
               </li>
               <li className='nav-item'>
                   <Link className="nav-link" to="/ContactUs">contact us</Link>
               </li>
           </ul>
           <FontAwesomeIcon icon={faBars} />
       </div>
       <button onClick={togglemodes} className='btn btn-primary '>Change Mode</button>
            </div>
           
            </div>
        </div>
    </nav>
    
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutVal: PropTypes.string
  }
