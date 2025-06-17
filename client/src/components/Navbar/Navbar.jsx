import React, { useContext } from 'react'
import './Navbar.css'
import {Link} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';
export const Navbar = () => {
    const {  user} = useContext(AuthContext);
  
  return (
    <div className="navbar">
        <div className="navContainer">
           <Link to='/' style={{color:'inherit',textDecoration:"none"}}>
            <span className='logo'>MyBooking</span>
            </Link>
            {user?user.username: (<div className="navitems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>)}
        </div>
    </div>
  )
}
