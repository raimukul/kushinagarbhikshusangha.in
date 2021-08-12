import React from 'react'
import { Container } from 'react-bootstrap'
import "./Contact.css"

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
                            <p className='maint1 h4'>Myanmar Buddhist Temple, Buddhanagari, Kushinagar</p>
                            <h4><b>Post & District:</b> Kushinagar-274403, Uttar Pradesh (India)</h4>
                            <h4><b>Email:</b> <a href="mailto: kushinagarbhikshusangh@gmail.com" className='text-decoration-none h5'>kushinagarbhikshusangh@gmail.com</a></h4>
                            <h4>Contact no.:
                                <ul className='ml-5'>
                                    <li>
                                        <a href="tel:+91-9794625059" className='text-decoration-none h5'>+91-9794625059</a>
                                    </li>
                                    <li>
                                        <a href="tel:+91-9455044309" className='text-decoration-none h5'>+91-9455044309</a>
                                    </li>
                                    <li>
                                        <a href="tel:+91-9935874061" className='text-decoration-none h5'>+91-9935874061</a>
                                    </li>
                                </ul></h4>
                        </Container>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
