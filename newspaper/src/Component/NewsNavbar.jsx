import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default class NewsNavbar extends Component {
    render() {
        return (
            <div className='fixed-top'>
                <Navbar expand="lg" className="bgColor p-3 align-items-center  ">
                    <Navbar.Brand href="#"><img src="newslogo.png" className='img-fluid newslogo ms-3' alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='mx-4' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto gap-3">
                            <Link to='/' className='text-capitalize text-light ms-3 ms-sm-3 ms-lg-0 text-decoration-none navlink'>home
                                <div className='line'></div>
                            </Link>
                            <Link to='/business' className='text-capitalize text-light ms-3 ms-sm-3 ms-lg-0 text-decoration-none navlink'>business
                                <div className='line'></div>
                            </Link>
                            <Link to='/entertainment' className='text-capitalize text-light ms-3 ms-sm-3 ms-lg-0 text-decoration-none navlink'>entertainment
                                <div className='line'></div>
                            </Link>
                            <Link to='/health' className='text-capitalize text-light ms-3 ms-sm-3 ms-lg-0 text-decoration-none navlink'>health
                                <div className='line'></div>
                            </Link>
                            <Link to='/science' className='text-capitalize text-light ms-3 ms-sm-3 ms-lg-0 text-decoration-none navlink'>science
                                <div className='line'></div>
                            </Link>
                            <Link to='/sports' className='text-capitalize text-light ms-3 ms-sm-3 ms-lg-0 text-decoration-none navlink'>sports
                                <div className='line'></div>
                            </Link>
                            <Link to='/technology' className='text-capitalize text-light ms-3 ms-sm-3 ms-lg-0 text-decoration-none navlink'>technology
                                <div className='line'></div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
