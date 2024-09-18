import React from "react";
import {Navbar,Nav}from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navbar.css';

function Navigation(){
    return(
        <>
        <section className="nav-color">
           <Navbar.Brand className="nav-brand">
            <h2>Project</h2>
            </Navbar.Brand>
            <Nav className="nav-custom">
            <ul className="nav-menu">
            <li className="custom">
              <Link to="/" className="custom-menu">
                Home</Link>
            </li>
            <li className="custom">
              <Link to="/Selected" className="custom-menu">
                Information
              </Link>
            </li>
            </ul>
            </Nav>
        </section>
        </>
    )
}
export default Navigation;