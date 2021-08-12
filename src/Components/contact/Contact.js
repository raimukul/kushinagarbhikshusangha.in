import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Contact.css"
import { FaPhoneSquareAlt } from "react-icons/fa";


function Contact() {
    return (
        <div>
            <header>
                <h1 className='pt-5 text-center'>Contact us</h1>
            </header>
            <div id="form">
                <div className="fish" id="fish"></div>
                <div className="fish" id="fish2"></div>
                <form id="waterform" >
                    <div className="formgroup" id="name-form">
                        <Container>
                            <p className='font-weight-bolder maint h3'>Kushinagar Bhikshu Sangha</p>
                            <p className='h5'>Myanmar Buddhist Temple, Buddhanagari, Kushinagar</p>
                            <p className='h5'>Post & District: Kushinagar-274403, Uttar Pradesh (India)</p>
                            <p className='h5'>Email:<a href="mailto: kushinagarbhikshusangh@gmail.com" className='text-decoration-none '>kushinagarbhikshusangh@gmail.com</a></p>
                            <Row>
                                <Col md={4}>
                                    <p className='h5'>Contact no.:</p>
                                </Col>
                                <Col md={8}>
                             <ul className=' list-unstyled'>
                              
                              <li>
                                  <a href="tel:+91-9794625059" className='text-decoration-none  h5'><FaPhoneSquareAlt /> +91-9794625059</a>
                              </li>
                              <li>
                                  <a href="tel:+91-9455044309" className='text-decoration-none h5'><FaPhoneSquareAlt /> +91-9455044309</a>
                              </li>
                              <li>
                                  <a href="tel:+91-9935874061" className='text-decoration-none h5'><FaPhoneSquareAlt /> +91-9935874061</a>
                              </li>
                          </ul></Col>
                            </Row>
                               
                        </Container>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
