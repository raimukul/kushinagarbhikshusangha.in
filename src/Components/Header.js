import React from 'react'
import {Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Kushinagar Bhikshu Sangha</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link eventKey={2} href="/">Home</Nav.Link>
                            <Nav.Link eventKey={2} href="/about">About</Nav.Link>
                            <Nav.Link eventKey={2} href="/centres-and-activities">Centres & Activities</Nav.Link>
                            <Nav.Link eventKey={2} href="/">Publication</Nav.Link>
                            <Nav.Link eventKey={2} href="/">Gallery</Nav.Link>
                            <Nav.Link eventKey={2} href="/">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
          
            </Navbar>
        </div>
    )
}

export default Header
