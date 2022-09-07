import React from 'react'
import logo from '/Ashish Project/anish/src/Assets/logo.svg'
import './Navbar.css';
import { Link } from 'react-router-dom'

export default function Navbar(props){

    return(
        <><div className="main-div">
        <div className="nav-bar">
            <Link to={'/'}>
            <img id='img' src={logo} alt="error" />
            </Link>

            <ul className='nav-ul'>
                <li >
                   <Link className='list' to='/' > HOME</Link> 
                   </li>
                <li >
                   <Link className='list' to="/work">OUR WORK</Link> 
                   </li>
                <li >
                    <Link className='list' to="/about">ABOUT US</Link>
                </li>
                <li >
                    <Link className='list' to ="/contact">CONTACT US</Link>
                </li>
            </ul>
            </div>

        </div>
        </>
    );
}