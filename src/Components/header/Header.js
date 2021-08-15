import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import "./Header.css"
import Logo from './logo.png'

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='bg-header' variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block align-center bg-transparent"
                    />
                     &nbsp;Kushinagar Bhikshu Sangha
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link eventKey={2} activeClassName='active' href="/">Home</Nav.Link>
                        <Nav.Link eventKey={2} activeClassName='active' href="/about">About</Nav.Link>
                        <Nav.Link eventKey={2} activeClassName='active' href="/centres-and-activities">Centres & Activities</Nav.Link>
                        <Nav.Link eventKey={2} activeClassName='active' href="/publication">Publication</Nav.Link>
                        <Nav.Link eventKey={2} activeClassName='active' href="/gallery">Gallery</Nav.Link>
                        <Nav.Link eventKey={2} activeClassName='active' href="/contact">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}

export default Header
